let estudantes = [];
codigoEmEdicao= null;

const form = document.getElementById("formEstudante");

const codigoInput = document.getElementById("codigo");
const nomeInput = document.getElementById("nome");
const teste1Input = document.getElementById("teste1");
const teste2Input = document.getElementById("teste2");
const teste3Input = document.getElementById("teste3");

const mediaElement = document.getElementById("media");

const tabelaEstudantes = document.getElementById("tabelaEstudantes");
const totalEstudantes = document.getElementById("totalEstudantes");

function calcularMedia() {
    const teste1 = Number(teste1Input.value);
    const teste2 = Number(teste2Input.value);
    const teste3 = Number(teste3Input.value);
    const media = (teste1 + teste2 + teste3) / 3;
    mediaElement.textContent = media.toFixed(2);
    return media;
}

teste1Input.addEventListener("input", calcularMedia);
teste2Input.addEventListener("input", calcularMedia);
teste3Input.addEventListener("input", calcularMedia);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const codigo = codigoInput.value.trim();
    const nome = nomeInput.value.trim();
    const teste1 = Number(teste1Input.value);
    const teste2 = Number(teste2Input.value);
    const teste3 = Number(teste3Input.value);
    const media = calcularMedia();

    if (
        codigo === "" ||
        nome === "" ||
        teste1Input.value === "" ||
        teste2Input.value === "" ||
        teste3Input.value === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }
    const estudante = {
        codigo: codigo,
        nome: nome,
        teste1: teste1,
        teste2: teste2,
        teste3: teste3,
        media: media
    };
    estudantes.push(estudante);
    mostrarEstudantes();
    form.reset();
    mediaElement.textContent = "0.00";
});

function mostrarEstudantes() {
    tabelaEstudantes.innerHTML = "";

    estudantes.forEach(function(estudante) {
        const linha = document.createElement("tr");
        let estado;
        if (estudante.media >= 10) {
            estado = "Aprovado";
        } else {
            estado = "Reprovado";
        }
        linha.innerHTML = `

            <td>${estudante.codigo}</td>

            <td>${estudante.nome}</td>

            <td>${estudante.teste1}</td>

            <td>${estudante.teste2}</td>

            <td>${estudante.teste3}</td>

            <td>${estudante.media.toFixed(2)}</td>
            <td>${estado}</td>
            <td>
                <button onclick="selecionarEstudante('${estudante.codigo}')">
                    Editar
                </button>
            </td>

        `;
        tabelaEstudantes.appendChild(linha);
    });

    totalEstudantes.textContent =
        `Total: ${estudantes.length}`;
}

function selecionarEstudante(codigo) {
    const estudante = estudantes.find(function(estudante) {
        return estudante.codigo === codigo;
    });
    if (!estudante) {
        alert("Estudante não encontrado!");
        return;
    }
    codigoEmEdicao = estudante.codigo;

    codigoInput.value = estudante.codigo;
    nomeInput.value = estudante.nome;

    teste1Input.value = estudante.teste1;
    teste2Input.value = estudante.teste2;
    teste3Input.value = estudante.teste3;

    mediaElement.textContent =
        estudante.media.toFixed(2);

    codigoInput.disabled = true;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const btnRemover = document.getElementById("btnRemover");
btnRemover.addEventListener("click", function() {
    if (estudantes.length === 0) {
        alert("Não existem estudantes para remover.");
        return;
    }
    const estudanteRemovido = estudantes.pop();
    mostrarEstudantes();
    alert(
        `Estudante ${estudanteRemovido.nome} foi removido com sucesso!`
    );
});

const btnActualizar = document.getElementById("btnActualizar");
btnActualizar.addEventListener("click", function() {

    const indice = estudantes.findIndex(function(estudante) {
        return estudante.codigo === codigoEmEdicao;
    });
    if (indice === -1) {
        alert("Estudante não encontrado!");
        return;
    }
    const nome = nomeInput.value.trim();

    const teste1 = Number(teste1Input.value);
    const teste2 = Number(teste2Input.value);
    const teste3 = Number(teste3Input.value);
    if (
        nome === "" ||
        teste1Input.value === "" ||
        teste2Input.value === "" ||
        teste3Input.value === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }
    const media = (teste1 + teste2 + teste3) / 3;

    estudantes[indice] = {
        codigo: codigoEmEdicao,
        nome: nome,
        teste1: teste1,
        teste2: teste2,
        teste3: teste3,
        media: media
    };
    mostrarEstudantes();
    form.reset();
    mediaElement.textContent = "0.00";
    codigoInput.disabled = false;
    codigoEmEdicao = null;
    alert("Estudante actualizado com sucesso!");
});
