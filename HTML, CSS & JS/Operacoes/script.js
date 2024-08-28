function inputOutput(){
    nome = prompt("Nome: ")
    alert("O seu nome é " + nome)

    anoDeNascimentoString = prompt("Ano de nascimento")
    anoDeNascimento = parseInt(anoDeNascimentoString)

    hoje = new Date()
    idade = hoje.getFullYear() - anoDeNascimento
    alert(nome + " tem " + idade + " anos de idade")
}
inputOutput()

function trocaVariaveis() {
    let a = 5;
    let b = 10;

    let c = a;
    a = b;
    b = c;

    console.log(a); // 10
    console.log(b); // 5
}
trocaVariaveis()

function reverterString(str) {

}
reverterString("lorem ipsum")

function maiorNumero(arr) {
    let resultado = 0;
    for (var i = 0; i< arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                resultado = arr[j];
            }
            
        }
    }
    console.log(resultado);
}
maiorNumero([1, 5, 2, 9, 3])

function somaAteN(n) {
    let soma = 0;
    for (let index = 0; index < n; index++) {
        var numero = parseInt(prompt("Insira um numero"));
        soma = soma + numero;
    }
    console.log(soma);
}
somaAteN(5)