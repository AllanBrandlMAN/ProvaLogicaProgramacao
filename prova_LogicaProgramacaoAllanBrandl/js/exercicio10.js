/*
Elabore um programa em Javascript que leia a velocidade permitida em uma estrada e a velocidade de um condutor. 
Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. 
Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. 
E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave”.  
Considerar os valores/tempos da tabela a seguir:

*/

function verificarMulta(velocidadePermitida, velocidadeCondutor) {
    if (velocidadeCondutor <= velocidadePermitida) {
        console.log("Sem Multa");
    } else if (velocidadeCondutor <= velocidadePermitida * 1.2) {
        console.log("Multa Leve");
    } else {
        console.log("Multa Grave");
    }
}


let velocidadePermitida = 80; // Velocidade permitida na estrada
let velocidadeCondutor = 95;  // Velocidade do condutor

verificarMulta(velocidadePermitida, velocidadeCondutor);
