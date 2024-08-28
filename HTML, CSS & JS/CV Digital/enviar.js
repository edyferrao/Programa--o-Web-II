document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    var resultText = "Muito Obrigado por visitar!<br>Nome: " + nome + "<br>Email: " + email;

    // Insere o resultado dentro da div com id "result"
    document.getElementById("form").innerHTML = resultText;
});