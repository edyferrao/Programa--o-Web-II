function contarVogais(texto) {
    
    const vogais = "aeiouAEIOU";
    var cont = 0;

    for (var i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            cont++;
        }
    }

    return cont;
}

function resultado() {
    const texto = document.getElementById('texto').value;
    document.getElementById('res').innerHTML = contarVogais(texto);
}
