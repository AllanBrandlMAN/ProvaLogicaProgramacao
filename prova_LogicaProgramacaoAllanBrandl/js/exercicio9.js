//Faça um programa JavaScript que receba 3 números informados pelo usuário e 
//em seguida apresente uma mensagem de alerta informando qual é o maior número dentre os números informados.

let a = parseInt(prompt("Digite o valor de a:"));
let b = parseInt(prompt("Digite o valor de b:"));
let c = parseInt(prompt("Digite o valor de c:"));

const numeros = [a,b,c];

const maiorValor = Math.max(...numeros);

alert(`O maior valor é: ${maiorValor}`);
