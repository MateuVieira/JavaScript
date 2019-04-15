
class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(new ListaNegociacoes(),
                                         new NegociacoesView($('#negociacoesView')),
                                         'adiciona', 'esvazia');

        this._mensagem = new Bind(new Mensagem(),
                                    new MensagemView($('.mensagemView')),
                                    'texto');
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
        this._limpaFormulario();
    }

    apaga(){

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Lista de negociacoes apagadas';
    }

    importaNegociacoes(){

        let service = new NegociacaoService();
        service.obterNegociacaoDaSemana((err, negociacoes) => {

            if(err){
                this._mensagem.texto = err;
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociacôes importando com sucesso';
        });
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