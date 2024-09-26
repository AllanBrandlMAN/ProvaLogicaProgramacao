const tarefas = ["Estudar JavaScript", "Fazer exercícios", "Ler um livro"];
let listarTarefas = [];
let adicionarTarefa = [];
let removerTarefa = [];

for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);

}
listarTarefas  = tarefas.join(",");
console.log(listarTarefas);

adicionarTarefa = tarefas.push("prova");
console.log(adicionarTarefa);


removerTarefa = tarefas.splice(0);
console.log(removerTarefa);

