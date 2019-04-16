
class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }


    obterNegociacaoDaSemana(){

        return new Promise((resolve, reject) => {
            this._http
                .get('http://localhost:3000/negociacoes/semana')
                .then(negociacoes => resolve(negociacoes
                    .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))))
                .catch(erro => reject(erro))
        });
    }

    obterNegociacaoDaSemanaAnterior(){

        return new Promise((resolve, reject) => {
            this._http
                .get('http://localhost:3000/negociacoes/anterior')
                .then(negociacoes => resolve(negociacoes
                    .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))))
                .catch(erro => reject(erro))
        });
    }

    obterNegociacaoDaSemanaRetrasada(){

        return new Promise((resolve, reject) => {
            this._http
                .get('http://localhost:3000/negociacoes/retrasada')
                .then(negociacoes => resolve(negociacoes
                    .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))))
                .catch(erro => reject(erro))
        });
    }

    cadastra(negociacao){
        
        return ConnectionFactory.getConnection()
        .then(connection => new NegociacaoDAO(connection))
        .then(dao => dao.adiciona(negociacao))
        .then(() => 'Negociação adicionada com sucesso.')
        .catch(() => {
            throw new Error('Não foi possível adicionar a negociação.')
        });
    }

    lista() {

        return ConnectionFactory.getConnection()
            .then(connection => new NegociacaoDAO(connection))
            .then(dao => dao.listaTodos())
            .catch(() => {
                throw new Error('Não foi possível listar as negociações.')
            });
    }

    apaga() {

        return ConnectionFactory.getConnection()
            .then(connection => new NegociacaoDAO(connection))
            .then(dao => dao.apagaTodos())
            .then(() => "Negociações aparagadas com sucesso")
            .catch(() => {
                throw new Error('Não foi possível lapagar negociações.')
            });
    }

    importa(listaAtual) {

        let service = new NegociacaoService();

        return Promise.all([service.obterNegociacaoDaSemana(),
                service.obterNegociacaoDaSemanaAnterior(),
                service.obterNegociacaoDaSemanaRetrasada()])
               .then(negociacoes =>
                     negociacoes
                     .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                     .filter(negociacao =>
                        !listaAtual.some(negociacaoExistente =>
                            JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente)))
                )
                .catch(erro => {
                    throw new Error('Não foi possível buscar negociações para importar.')
                });
                
    }
}