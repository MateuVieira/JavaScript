
class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ordemAtual = '';

        this._listaNegociacoes = new Bind(new ListaNegociacoes(),
                                         new NegociacoesView($('#negociacoesView')),
                                         'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

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

    ordena(coluna) {
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);    
        }
        this._ordemAtual = coluna;
    }

    importaNegociacoes(){

        let service = new NegociacaoService();

        Promise.all([service.obterNegociacaoDaSemana(),
                service.obterNegociacaoDaSemanaAnterior(),
                service.obterNegociacaoDaSemanaRetrasada()])
                .then(negociacoes => {
                    negociacoes
                    .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                    .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociacoes da semana obtida com sucesso';
                })
                .catch(erro => this._mensagem.texto = erro);
                
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