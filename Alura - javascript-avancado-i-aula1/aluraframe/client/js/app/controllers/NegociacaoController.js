
class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(
            model => this._negociacoesView.update(model));

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('.mensagemView'));
        
    }

    get data(){
        return DateHelper.textoParaDate(this._inputData.value);
    }

    get quantidade(){
        return this._inputQuantidade.value;
    }

    get valor(){
        return this._inputValor.value;
    }

    adiciona(event){
        event.preventDefault();
 
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();
    }

    apaga(){
        
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Lista de negociacoes apagadas';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao(){

        return new Negociacao(
                this.data,
                this.quantidade,
                this.valor,
        );
    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}