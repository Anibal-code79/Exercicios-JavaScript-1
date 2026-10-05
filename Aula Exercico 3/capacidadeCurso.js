
let capacidade = window.prompt("Digite a capacidade do array:");
let notas = new Array(capacidade);

for (let i = 0; i < notas.length; i++) {
    notas[i] = Number(prompt(`Digite a nota ${i + 1}:`));
}

console.log("NOTAS:");
for (let i = 0; i < notas.length; i++) {
    console.log(`Índice ${i}: ${notas[i]}`);
}
let somaPares = 0;
let qtdPares = 0;
let i = 0;
while (i < notas.length) {
    if (i % 2 === 0) {
        somaPares += notas[i];
        qtdPares++;
    }
    i++;
}
let mediaPares = somaPares / qtdPares;
console.log("Média dos índices pares:", mediaPares);

let somaImpares = 0;
let qtdImpares = 0;

i = 0;

while (i < notas.length) {
    if (i % 2 !== 0) {
        somaImpares += notas[i];
        qtdImpares++;
    }
    i++;
}
let mediaImpares = somaImpares / qtdImpares;

console.log("Média dos índices ímpares:", mediaImpares);

let mediaDasMedias = (mediaPares + mediaImpares) / 2;
console.log("Média das médias:", mediaDasMedias);