
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
}