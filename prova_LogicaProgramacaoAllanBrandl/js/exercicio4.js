//Leia um número inteiro que representa um código de DDD para discagem interurbana. 
//Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:
//Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
//DDD nao cadastrado.

const ddd = parseInt(prompt("Digite o código de DDD:"));

const dddCidades = {
    11: "São Paulo",
    21: "Rio de Janeiro",
    31: "Belo Horizonte",
    32: "Juiz de Fora",
    41: "Curitiba",
    61: "Brasília",
    71: "Salvador",
    81: "Recife",
    91: "Belém"
    // Adicione outros DDDs e cidades conforme necessário
};

if (dddCidades[ddd]) {
    console.log(`O DDD ${ddd} pertence à cidade de ${dddCidades[ddd]}.`);
} else {
    console.log("DDD não encontrado.");
}