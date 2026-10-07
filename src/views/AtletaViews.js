const prompt = require('prompt-sync')();

const AtletaViews = {

    perguntarIdTurma() {
        return parseInt(prompt("ID da turma do atleta: "));
    },

    perguntarNome() {
        return prompt("Nome do Atleta: ");
    },

    perguntarId(rotulo = "ID do atleta: ") {
        return parseInt(prompt(rotulo));
    },

    mostrarAtletaVinculado(nomeAtleta, nomeTurma) {
        console.log(`Atleta "${nomeAtleta}" vinculado à turma "${nomeTurma}"!`);
    },

    mostrarErroCadastro(mensagem) {
        console.log(`Não foi possível cadastrar o atleta: ${mensagem}`);
    },

    listar(lista) {

        console.log("\n=== LISTA DE ATLETAS ===");

        if (lista.length === 0) {
            console.log("Nenhum atleta no sistema.");
            return;
        }

        lista.forEach(({ atleta, turma }) => {
            atleta.exibir(turma.nome);
        });
    }
};

module.exports = AtletaViews;