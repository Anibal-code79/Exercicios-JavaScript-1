let idades = new Array(50);

for (let i = 0; i < idades.length; i++) {
    idades[i] = window.prompt(`Digite a idade do estudante ${i + 1}:`);
}

let i = 0;
do {
    console.log(`Estudante ${i + 1}: ${idades[i]}`);
    i++;
} while (i < idades.length);

let soma = 0;
i = 0;

while (i < idades.length) {
    soma += idades[i];
    i++;
}

let media = soma / idades.length;

console.log("Soma das idades:", soma);
console.log("Média das idades:", media);