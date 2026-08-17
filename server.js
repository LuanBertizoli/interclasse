const readline = require('readline-sync');

let TURMAS = [];

// Classe Turma
class Turma {
    constructor(nomeTurma, idadeTurma) {
        this.nomeTurma = nomeTurma;
        this.idadeTurma = idadeTurma;
    }

    registrar() {
        console.log("Turma registrada:", this.nomeTurma);
        console.log("Idade:", this.idadeTurma);
    }
}

// Adicionar turma
function adicionarTurma() {
    let nome = readline.question("Digite o nome da turma: ");
    let idade = readline.questionInt("Digite a idade da turma: ");

    let novaTurma = new Turma(nome, idade);

    TURMAS.push(novaTurma);

    console.log("Turma adicionada com sucesso!");
}

// Listar turmas
function listarTurmas() {
    if (TURMAS.length === 0) {
        console.log("Nenhuma turma cadastrada.");
    } else {
        console.log("\n--- TURMAS CADASTRADAS ---");

        for (let i = 0; i < TURMAS.length; i++) {
            console.log(
                `[${i}] ${TURMAS[i].nomeTurma} - Idade: ${TURMAS[i].idadeTurma}`
            );
        }
    }
}

// Buscar turma
function filtrarTurmas() {
    let busca = readline.question("Digite o nome para buscar: ");

    let resultado = TURMAS.filter(function(turma) {
        return turma.nomeTurma
            .toLowerCase()
            .includes(busca.toLowerCase());
    });

    if (resultado.length === 0) {
        console.log("Nenhuma turma encontrada.");
    } else {
        console.log("\n--- RESULTADO DA BUSCA ---");

        resultado.forEach(function(turma) {
            console.log(
                turma.nomeTurma + " - Idade: " + turma.idadeTurma
            );
        });
    }
}

// Remover turma
function removerTurma() {
    listarTurmas();

    if (TURMAS.length > 0) {
        let indice = readline.questionInt(
            "Digite o indice da turma que deseja remover: "
        );

        if (indice >= 0 && indice < TURMAS.length) {
            TURMAS.splice(indice, 1);
            console.log("Turma removida com sucesso!");
        } else {
            console.log("Indice invalido!");
        }
    }
}

// Menu principal
while (true) {
    console.log("\n===== ARENA-CONNECT =====");
    console.log("1 - Adicionar turma");
    console.log("2 - Listar turmas");
    console.log("3 - Buscar turma");
    console.log("4 - Remover turma");
    console.log("5 - Sair");

    let opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {
        adicionarTurma();

    } else if (opcao === 2) {
        listarTurmas();

    } else if (opcao === 3) {
        filtrarTurmas();

    } else if (opcao === 4) {
        removerTurma();

    } else if (opcao === 5) {
        console.log("Sistema encerrado.");
        break;

    } else {
        console.log("Opcao invalida!");
    }
}