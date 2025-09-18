let precos = [];


for (let i = 0; i < 5; i++) {
    let p = prompt("Digite o valor do produto: "); 
    precos.push(p);
}


let precomasicaro = Math.max(...precos); //Math.max
let indicemaiscaro = precos.indexOf(precomasicaro);

let precomenoscaro = Math.min(...precos);
let indicemenoscaro = precos.indexOf(precomenoscaro);

console.log("O preço mais caro pertence ao produto ", indicemaiscaro);
console.log("O preço mais barato pertence ao produto ", indicemenoscaro);