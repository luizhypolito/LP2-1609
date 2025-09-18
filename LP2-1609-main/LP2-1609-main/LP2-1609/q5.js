let filmes = [];

for (let i = 0; i < 6; i++) {
  let nome = prompt("Nome do filme " + (i + 1) + ":");
  let nota = prompt("Nota do filme " + nome + ":");
  filmes.push({ nome: nome, nota: nota });
}

let continuar = true;

while (continuar) {
  let op = prompt(
    "MENU:\n" +
    "a) Imprimir dados de 1 filme\n" +
    "b) Avaliar um filme\n" +
    "c) Alterar dados de um filme\n" +
    "d) Finalizar e mostrar todos\n"
  );

  if (op === "a") {
    let ind = prompt("Digite o índice do filme (0 a 5):");
    console.log(filmes[ind]);
  }

  else if (op === "b") {
    let ind = prompt("Digite o índice do filme:");
    let nova = prompt("Digite a nova nota:");
    filmes[ind].nota = (filmes[ind].nota * 1 + nova * 1) / 2;
    console.log("Nota atualizada!");
  }

  else if (op === "c") {
    let ind = prompt("Digite o índice do filme:");
    let novoNome = prompt("Novo nome:");
    let novaNota = prompt("Nova nota:");
    filmes[ind] = { nome: novoNome, nota: novaNota };
    console.log("Dados alterados!");
  }

  else if (op === "d") {
    console.log("=== Filmes cadastrados ===");
    for (let i = 0; i < filmes.length; i++) {
      console.log("Índice " + i + ": ", filmes[i]);
    }
    continuar = false;
  }
}
