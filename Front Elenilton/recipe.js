document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector("#form_recipe");
    const Inome = document.querySelector("#nome");
    const Iingrediente = document.querySelector("#ingrediente");
    const ImodoDePreparo = document.querySelector("#modoDePreparo");
    const Iporcoes = document.querySelector("#porcoes");
    const Itipo = document.querySelector("#tipo");

    function cadastrarReceita() {
        const receitaData = {
            nome: Inome.value,
            modoDePreparo: ImodoDePreparo.value,
            porcoes: Iporcoes.value,
            tipo: Itipo.value,
            ingrediente: Iingrediente.value
        };

        return fetch("http://localhost:8080/recipe", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(receitaData)
        })
        .then(function(res) { console.log(res); });
    }

    function deletarRecipe(id) {
        return fetch(`http://localhost:8080/recipe/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao deletar receita por ID ${id}: ${response.statusText}`);
            }
            console.log(`Receita com ID ${id} deletada com sucesso`);
        })
        .catch(error => console.error(error));
    }

    function pesquisarTodasReceitas() {
        fetch("http://localhost:8080/recipe", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao pesquisar todas as receitas: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Exibindo as receitas no formato de lista no corpo da página
            const listaReceitas = document.getElementById('listaReceitas');
            listaReceitas.innerHTML = "<h2>Receitas:</h2><ul>";

            data.forEach(receita => {
                listaReceitas.innerHTML += `<li class="receita-item" data-id="${receita.id}">${receita.nome} - ${receita.tipo}</li>`;
            });

            listaReceitas.innerHTML += "</ul>";
        })
        .then(() => {
            // Adiciona os ouvintes de evento após carregar as receitas
            document.querySelectorAll('.receita-item').forEach(item => {
                item.addEventListener('click', () => {
                    exibirDetalhesReceita(item.getAttribute('data-id'));
                });
            });
        })
        .catch(error => console.error(error));
    }

    function exibirDetalhesReceita(id) {
        fetch(`http://localhost:8080/recipe/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao pesquisar receita por ID ${id}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(receita => {
            // Exibe os detalhes da receita, você pode implementar como desejar (por exemplo, em um modal)
            alert(`Detalhes da Receita:\nNome: ${receita.nome}\n Ingredientes: ${receita.ingrediente}\nModo de Preparo: ${receita.modoDePreparo}\nPorções: ${receita.porcoes}\nTipo: ${receita.tipo}`);
        })
        .catch(error => console.error(error));
    }


    function pesquisarReceitaPorId(id) {
        fetch(`http://localhost:8080/recipe/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao pesquisar receita por ID ${id}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(receita => {
            alert(`Detalhes da Receita:\nNome: ${receita.nome}\n Ingredientes: ${receita.ingrediente}\nModo de Preparo: ${receita.modoDePreparo}\nPorções: ${receita.porcoes}\nTipo: ${receita.tipo}`);
        })
        .catch(error => console.error(error));
    }


    function clean() {
        Inome.value = "";
        Iingrediente.value = "";
        ImodoDePreparo.value = "";
        Iporcoes.value = "";
        Itipo.value = "";
    }

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        cadastrarReceita()
            .then(function() {
                clean();
            })
            .catch(function(error) {
                console.error("Erro ao cadastrar receita:", error);
            });
    });

    document.getElementById('form_deletarPorId').addEventListener('submit', function(event) {
        event.preventDefault();
        const idDeletar = document.getElementById('idDeletar').value;
        deletarRecipe(idDeletar);
    });

    document.getElementById('btnPesquisarTodas').addEventListener('click', pesquisarTodasReceitas);

    document.getElementById('form_pesquisarPorId').addEventListener('submit', function(event) {
        event.preventDefault();
        const idPesquisa = document.getElementById('idPesquisa').value;
        pesquisarReceitaPorId(idPesquisa);
    });
});