let capacidade = 3000;

let marcas = new Array(capacidade);
let anos = new Array(capacidade);
let precos = new Array(capacidade);

for (let i = 0; i < capacidade; i++) {
    marcas[i] = prompt(`Digite a marca do celular ${i + 1}:`);
    anos[i] = Number(
        prompt(`Digite o ano de fabrico do celular ${i + 1}:`)
    );
    precos[i] = Number(
        prompt(`Digite o preço do celular ${i + 1}:`)
    );
}
console.log("===== TODOS OS CELULARES =====");

for (let i = 0; i < capacidade; i++) {
    console.log(
        `Celular: ${i + 1} | ` +
        `Marca: ${marcas[i]} | ` +
        `Ano: ${anos[i]} | ` +
        `Preço: ${precos[i]} MT`
    );
}

let somaPrecos = 0;

for (let i = 0; i < capacidade; i++) {
    somaPrecos += precos[i];
}
let precoMedio = somaPrecos / capacidade;
console.log("Preço médio:", precoMedio);

console.log("===== SAMSUNG DE 2014 =====");
for (let i = 0; i < capacidade; i++) {
    if (
        marcas[i].toLowerCase() === "samsung" &&
        anos[i] === 2014
    ) {
        console.log(
            `Marca: ${marcas[i]} | ` +
            `Ano: ${anos[i]} | ` +
            `Preço: ${precos[i]} MT`
        );
    }
}

console.log("===== CELULARES ABAIXO DO PREÇO MÉDIO =====");
for (let i = 0; i < capacidade; i++) {

    if (precos[i] < precoMedio) {

        console.log(
            `Marca: ${marcas[i]} | ` +
            `Ano: ${anos[i]} | ` +
            `Preço: ${precos[i]} MT`
        );
    }
}