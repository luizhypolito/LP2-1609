let materias = [];

for (let i = 0; i < 8; i++) {
  let nome = prompt("Nome da matéria " + (i + 1) + ":");
  let nota = prompt("Nota da matéria " + nome + ":");
  let freq = prompt("Frequência da matéria " + nome + " (%):");
  materias.push({ nome: nome, nota: nota, freq: freq });
}

let somaFreq = 0;
let acimaMedia = 0;

for (let i = 0; i < materias.length; i++) {
  somaFreq += materias[i].freq * 1; // converte automático para número
  if (materias[i].nota * 1 >= 60) {
    acimaMedia++;
  }
}

let mediaFreq = somaFreq / materias.length;

console.log("Média de frequência: " + mediaFreq);
console.log("Quantidade de notas acima da média (>= 60): " + acimaMedia);