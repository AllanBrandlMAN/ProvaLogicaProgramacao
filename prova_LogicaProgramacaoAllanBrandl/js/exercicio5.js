
/*
[Questão extra] Crie um programa em JavaScript que solicite ao usuário 10 títulos de notícias de sua cidade e armazene-os em um array. 
Após inserir todos os títulos, exiba-os na tela na ordem inversa (do mais recente para o mais antigo)


*/



function solicitarTitulos() {
    let titulos = [];
    for (let i = 0; i < 10; i++) {
        let titulo = prompt(`Digite o título da notícia ${i + 1}:`);
        titulos.push(titulo);
    }
    return titulos;
}


function exibirTitulosInversos(titulos) {
    console.log("Títulos das notícias na ordem inversa:");
    for (let i = titulos.length - 1; i >= 0; i--) {
        console.log(titulos[i]);
    }
}


let titulosNoticias = solicitarTitulos();
exibirTitulosInversos(titulosNoticias);
