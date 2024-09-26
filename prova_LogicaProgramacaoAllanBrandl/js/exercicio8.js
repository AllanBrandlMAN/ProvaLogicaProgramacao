//Crie um programa em JavaScript que pergunte ao usuário 3 números diferentes e armazene-os em um array. 
//Em seguida, exiba o array com os números digitados. 
//Após isso, inverta a ordem dos elementos do array para que a sequência de números fique na ordem contrária àquela que foi digitada. 
//Por exemplo, se os números inseridos forem 1, 2, 3, o programa deve exibir 3, 2, 1.






let a = parseInt(prompt("Digite o valor de a:"));
let b = parseInt(prompt("Digite o valor de b:"));
let c = parseInt(prompt("Digite o valor de c:"));



let valores = [a, b, c];
console.log(`Entrada dos valores: ${valores}`);
valores.reverse();
console.log(`Valores invertidos sao : ${valores}`);














    