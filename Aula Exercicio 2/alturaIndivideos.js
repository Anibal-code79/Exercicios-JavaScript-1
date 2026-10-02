let alturas = new Array(3);

for (let i = 0; i < alturas.length; i++) {
    alturas[i] = Number(prompt(`Digite a altura do indivíduo ${i + 1}:`));
}

console.log("ALTURAS:");
for (let i = 0; i < alturas.length; i++) {
    console.log(`Índice ${i}: ${alturas[i]} m`);
}

let somaPares = 0;
let quantidadePares = 0;

let i = 0;
while (i < alturas.length) {
    if (i % 2 === 0) {
        somaPares += alturas[i];
        quantidadePares++;
    }
    i++;
}

let mediaPares = somaPares / quantidadePares;
console.log("Média das alturas nos índices pares:", mediaPares);

let somaImpares = 0;
let quantidadeImpares = 0;
i = 0;
while (i < alturas.length) {
    if (i % 2 !== 0) {
        somaImpares += alturas[i];
        quantidadeImpares++;
    }
    i++;
}
let mediaImpares = somaImpares / quantidadeImpares;

console.log("Média das alturas nos índices ímpares:", mediaImpares);

let maior = alturas[0];
let menor = alturas[0];

i = 1;

while (i < alturas.length) {
    if (alturas[i] > maior) {
        maior = alturas[i];
    }
    if (alturas[i] < menor) {
        menor = alturas[i];
    }
    i++;
}
console.log("Indivíduo mais alto:", maior, "m");
console.log("Indivíduo mais baixo:", menor, "m");