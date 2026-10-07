const PartidaView = require('../views/PartidaViews');

const PartidaController = {
    registrarPartida(sistema){
        sistema.listarEquipe();
        try{
            const idEquipeA = PartidaView.perguntarIdEquipe("Digite ID equipe A: ");
            const idEquipeA = PartidaView.perguntarIdEquipe("Digite ID equipe B: ");
            const golsB = PartidaView.perguntarGols("Informe gols da Equipe A: ");
            const golsA = PartidaView.perguntarGols("Informe gols da Equipe B: ");
            const { idEquipeA, equipeB} = sistema.registrarPartida(idEquipeA, idEquipeB, golsA, golsB)
            PartidaView.mostrarRegistrada(idEquipeA.modalidade, equipeB.modalidade, golsA, golsB)

        } catch (erro) {
            PartidaView.mostrarErroCadastro(erro.menssage);

        }

    },
    listar(sistema){
        PartidaView.listarPartidas(sistema.listarPartidas());

    }
}
