
class ListaNegociacoes{

    constructor(acao){
        this._negociacoes = []
        this._acao = acao;
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        this._acao(this);
    }

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        this._acao(this);
    }
}