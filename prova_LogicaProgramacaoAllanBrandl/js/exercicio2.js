//Crie um programa que solicite ao usuário 3 notas (valores numéricos) e calcule a média aritmética dessas notas. 
//Se a média for maior ou igual a 7, exiba a mensagem "Aprovado"; caso contrário, exiba "Reprovado".

let nota1 = parseInt(prompt('Digite a primeira nota: '));
let nota2 = parseInt(prompt('Digite a segunda nota: '));
let nota3 = parseInt(prompt('Digite a terceira nota: '));



let resultado = (nota1 + nota2 + nota3 );
console.log(`A nota total do aluno e ${resultado}`);

let media = resultado / 3;
console.log(`A media do aluno e ${media.toFixed(2)}`);


if (media >= 7)
    console.log("Aluno Aprovado !");

else
    console.log("Aluno Reprovado !");
