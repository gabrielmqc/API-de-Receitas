const formulario = document.querySelector("form");
const Inome = document.querySelector("#nome");

function cadastrarUser(){

    fetch("http://localhost:8080/user",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:"POST",
        body: JSON.stringify({nome : Inome.value})
    })
    .then(function(res) {console.log(res)})
    .catch(function (res) {console.log(res)})
}

function clean(){
    Inome.value ="";
}
formulario.addEventListener('submit', function (event){
    event.preventDefault();

    
    cadastrarUser();
    clean();
    window.location.href = "./recipe.html";
});
