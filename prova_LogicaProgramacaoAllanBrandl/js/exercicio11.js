/*

Crie um programa que exiba em uma tabela e destaque todos os números primos que estão entre 0 e 200.

*/

function saoMultiplos(a, b) {
    if (a % b === 0 || b % a === 0) {
        return "Sao Primos";
    } else {
        return "Nao sao Primos";
    }
}

// Leitura dos valores A e B
const a = parseInt(prompt("Digite o valor de A:"));
const b = parseInt(prompt("Digite o valor de B:"));

// Exibição do resultado
const resultado = saoMultiplos(a, b);
console.log(resultado);