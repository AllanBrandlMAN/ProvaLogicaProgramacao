//Elabore um programa que solicite ao usuário um número inteiro positivo e exiba uma contagem regressiva de 10 até esse número (em decrementos de 1).
// Caso o valor digitado seja menor que 10, exiba uma mensagem de erro.

let numero = parseInt(prompt("Informe o numero:  "));
if(numero < 10)
    alert("Esse valor e invalido");

while (numero >= 1) {
    console.log(numero);
    numero--;
}
