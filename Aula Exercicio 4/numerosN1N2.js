let n1 = Number(prompt("Digite N1:"));
let n2 = Number(prompt("Digite N2:"));


if (n1 >= n2) {
    console.log("Erro: N1 deve ser menor que N2.");
} else {
    let capacidade = n2 - n1 + 1;

    let numeros = new Array(capacidade);

    // Preencher o array
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = n1 + i;
    }

    // b) Visualizar
    console.log("ARRAY:");

    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

    // c) Calcular a média
    let soma = 0;
    let i = 0;

    while (i < numeros.length) {
        soma += numeros[i];
        i++;
    }

    let media = soma / numeros.length;

    console.log("Média:", media);
}