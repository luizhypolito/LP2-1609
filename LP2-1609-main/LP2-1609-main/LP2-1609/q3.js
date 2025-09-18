let rna = [];

for (let i = 0; i < 10; i++) {

    let base = prompt("Digite a base " + (i + 1) + " (A, U, C, G):");

    if (base === "A") {
        rna += "U ";
    }

    else if (base === "U") {
        rna += "A ";
    }

    else if (base === "C") {
        rna += "G ";
    }

    else if (base === "G") {
        rna += "C ";
    }

    console.log("Fita complementar: " + rna);

}