# API-de-Receitas
É uma API com banco de dados h2, com intuito de se salvar receitas no geral, dando a possibilidade de busca-las e exclui-las a vontade

API de Receitas
Esta API permite gerenciar receitas e usuários. Abaixo estão os endpoints disponíveis e como usá-los.

Receitas
1. Listar Todas as Receitas
Endpoint: GET /recipe

Retorna todas as receitas disponíveis.

Exemplo de resposta:


[
  {
    "id": 1,
    "nome": "Lasanha",
    "ingrediente": "Massa, Molho de Tomate, Queijo, Carne Moída",
    "modoDePreparo": "Cozinhe a massa, faça o molho, monte as camadas e leve ao forno.",
    "porcoes": 6,
    "tipo": "Massa"
  },
  {
    "id": 2,
    "nome": "Salada Caesar",
    "ingrediente": "Alface, Croutons, Queijo Parmesão, Molho Caesar",
    "modoDePreparo": "Misture todos os ingredientes e regue com o molho Caesar.",
    "porcoes": 4,
    "tipo": "Salada"
  }
]
2. Buscar Receita por ID
Endpoint: GET /recipe/{id}

Retorna os detalhes de uma receita específica.

Exemplo de resposta:


{
  "id": 1,
  "nome": "Lasanha",
  "ingrediente": "Massa, Molho de Tomate, Queijo, Carne Moída",
  "modoDePreparo": "Cozinhe a massa, faça o molho, monte as camadas e leve ao forno.",
  "porcoes": 6,
  "tipo": "Massa"
}
3. Salvar Nova Receita
Endpoint: POST /recipe

Adiciona uma nova receita.

Exemplo de requisição:


{
  "nome": "Pizza Margherita",
  "ingrediente": "Massa de Pizza, Molho de Tomate, Muçarela, Manjericão",
  "modoDePreparo": "Abra a massa, adicione o molho e os ingredientes, asse no forno.",
  "porcoes": 8,
  "tipo": "Pizza"
}
Exemplo de resposta:


{
  "id": 3,
  "nome": "Pizza Margherita",
  "ingrediente": "Massa de Pizza, Molho de Tomate, Muçarela, Manjericão",
  "modoDePreparo": "Abra a massa, adicione o molho e os ingredientes, asse no forno.",
  "porcoes": 8,
  "tipo": "Pizza"
}
4. Atualizar Receita por ID
Endpoint: PUT /recipe/{id}

Atualiza uma receita existente.

Exemplo de requisição:

{
  "nome": "Lasanha Bolonhesa",
  "ingrediente": "Massa, Molho Bolonhesa, Queijo",
  "modoDePreparo": "Cozinhe a massa, faça o molho bolonhesa, monte as camadas e leve ao forno.",
  "porcoes": 8,
  "tipo": "Massa"
}
Exemplo de resposta:


{
  "id": 1,
  "nome": "Lasanha Bolonhesa",
  "ingrediente": "Massa, Molho Bolonhesa, Queijo",
  "modoDePreparo": "Cozinhe a massa, faça o molho bolonhesa, monte as camadas e leve ao forno.",
  "porcoes": 8,
  "tipo": "Massa"
}
5. Excluir Receita por ID
Endpoint: DELETE /recipe/{id}

Exclui uma receita existente.

Exemplo de resposta (status 204 No Content).

Usuários
1. Listar Todos os Usuários
Endpoint: GET /user

Retorna todos os usuários cadastrados.

Exemplo de resposta:


[
  {
    "id": 1,
    "nome": "Maria Silva"
  },
  {
    "id": 2,
    "nome": "João Oliveira"
  }
]
2. Buscar Usuário por ID
Endpoint: GET /user/{id}

Retorna os detalhes de um usuário específico.

Exemplo de resposta:


{
  "id": 1,
  "nome": "Maria Silva"
}
3. Salvar Novo Usuário
Endpoint: POST /user

Adiciona um novo usuário.

Exemplo de requisição:


{
  "nome": "Carlos Souza"
}
Exemplo de resposta:


{
  "id": 3,
  "nome": "Carlos Souza"
}
4. Excluir Usuário por ID
Endpoint: DELETE /user/{id}

Exclui um usuário existente.

Exemplo de resposta (status 204 No Content).






FRONT END :

Formulário de Cadastro de Receita:

Campos:
Nome da Receita (nome): Campo de texto obrigatório para inserir o nome da receita.
Ingrediente (ingrediente): Campo de texto obrigatório para inserir o ingrediente da receita.
Modo de Preparo (modoDePreparo): Campo de texto obrigatório para inserir o modo de preparo da receita.
Porções (porcoes): Campo de texto obrigatório para inserir o número de porções da receita.
Tipo (tipo): Menu suspenso (select) obrigatório para selecionar o tipo da receita (Doce, Salgado, Bebida).
Botão de Registro:
Tipo: submit
Ação: Não especificada (action="")
Operações CRUD:

Pesquisar Todas as Receitas:

Botão:
ID: btnPesquisarTodas
Ação: Pesquisar Todas as Receitas
Lista de Receitas:
ID: listaReceitas
Local para exibir a lista de receitas
Pesquisar Receita por ID:

Formulário:
ID: form_pesquisarPorId
Campos:
ID da Receita (idPesquisa): Campo de texto obrigatório para inserir o ID da receita a ser pesquisada.
Botão:
Tipo: submit
Ação: Pesquisar por ID
Deletar Receita por ID:

Formulário:
ID: form_deletarPorId
Campos:
ID da Receita a Deletar (idDeletar): Campo de texto obrigatório para inserir o ID da receita a ser deletada.
Botão:
Tipo: submit
Ação: Não especificada (action="")


Cadastro de Receita:

Evento: Quando o formulário com ID form_recipe é enviado (submit), a função cadastrarReceita é acionada.
Campos Envolvidos:
nome, modoDePreparo, porcoes, tipo, ingrediente
Descrição:
Obtém os valores dos campos do formulário.
Realiza uma requisição POST para http://localhost:8080/recipe com os dados da receita em formato JSON.
Exibe o resultado no console.
Deletar Receita por ID:

Evento: Quando o formulário com ID form_deletarPorId é enviado (submit), a função deletarRecipe é acionada.
Campo Envolvido:
idDeletar
Descrição:
Obtém o valor do campo ID a ser deletado.
Realiza uma requisição DELETE para http://localhost:8080/recipe/{id}.
Exibe uma mensagem no console.
Pesquisar Todas as Receitas:

Evento: Quando o botão com ID btnPesquisarTodas é clicado, a função pesquisarTodasReceitas é acionada.
Descrição:
Realiza uma requisição GET para http://localhost:8080/recipe para obter todas as receitas.
Exibe a lista de receitas no formato de lista no corpo da página.
Exibir Detalhes da Receita por ID:

Evento: Quando um item da lista de receitas é clicado, a função exibirDetalhesReceita é acionada.
Campo Envolvido:
data-id do item clicado.
Descrição:
Obtém o ID da receita a ser pesquisada.
Realiza uma requisição GET para http://localhost:8080/recipe/{id} para obter os detalhes da receita.
Exibe os detalhes da receita em um alert.
Pesquisar Receita por ID:

Evento: Quando o formulário com ID form_pesquisarPorId é enviado (submit), a função pesquisarReceitaPorId é acionada.
Campo Envolvido:
idPesquisa
Descrição:
Obtém o valor do campo ID a ser pesquisado.
Realiza uma requisição GET para http://localhost:8080/recipe/{id} para obter os detalhes da receita.
Exibe os detalhes da receita em um alert.
Limpar Campos:

Função: clean
Descrição:
Limpa os valores dos campos do formulário após o cadastro de uma receita.
Observações:

O código utiliza a função fetch para realizar requisições HTTP.
Algumas funções estão associadas a eventos como clicar em botões ou enviar formulários.
Os resultados das requisições e mensagens são exibidos no console.
O código presume a existência de elementos HTML com IDs correspondentes.

