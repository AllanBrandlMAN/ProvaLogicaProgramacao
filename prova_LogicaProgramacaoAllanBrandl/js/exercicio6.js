
/*
Crie um programa em JavaScript que pergunte ao usuário 3 números diferentes e armazene-os em um array. 
Em seguida, exiba o array com os números digitados. 
Após isso, inverta a ordem dos elementos do array para que a sequência de números fique na ordem contrária àquela que foi digitada. 
Por exemplo, se os números inseridos forem 1, 2, 3, o programa deve exibir 3, 2, 1.


*/

function obterNumeros() {
    let numeros = [];
    for (let i = 0; i < 3; i++) {
        let numero = prompt(`Digite o número ${i + 1}:`);
        numeros.push(Number(numero));
    }
    return numeros;
}

// Função para inverter a ordem dos elementos do array
function inverterArray(array) {
    return array.reverse();
}

// Função principal
function main() {
    let numeros = obterNumeros();
    console.log("Números digitados:", numeros);

    let numerosInvertidos = inverterArray(numeros);
    console.log("Números invertidos:", numerosInvertidos);
}

// Chama a função principal
main();
