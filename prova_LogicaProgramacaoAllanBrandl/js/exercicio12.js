//Elaborar um programa que adicione números a um vetor. 
//O programa deve impedir a inclusão de números repetidos. 
//Exibir a lista de números a cada inclusão.

let numeros = [];

function adicionarNumero(numero) {
    if (!numeros.includes(numero)) {
        numeros.push(numero);
        console.log(`Número ${numero} adicionado com sucesso!`);
    } else {
        console.log(`Número ${numero} já está na lista!`);
    }
    console.log('Lista de números:', numeros);
}
//let numero = parseInt(prompt("Informe o numero"));




adicionarNumero(5);
adicionarNumero(10);
adicionarNumero(5); // Tentativa de adicionar um número repetido
adicionarNumero(20);
