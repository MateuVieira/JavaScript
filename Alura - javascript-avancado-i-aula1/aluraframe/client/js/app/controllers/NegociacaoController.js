import { ListaNegociacoes } from '../models/ListaNegociacoes';
import { Mensagem } from '../models/Mensagem';
import { Negociacao } from '../models/Negociacao';
import { Bind } from '../helpers/Bind';
import { DateHelper } from '../helpers/DateHelper';
import { NegociacaoDAO } from '../DAO/NegociacaoDAO';
import { NegociacaoService } from '../services/NegociacaoService';
import { MensagemView } from '../views/MensagemView';
import { NegociacoesView } from '../views/NegociacoesView';

export class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ordemAtual = '';

        this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

        this._mensagem = new Bind(new Mensagem(), new MensagemView($('.mensagemView')), 'texto');

        this._service = new NegociacaoService();

        this._init();
    }

    _init() {

        this._service.lista().then(negociacoes => negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))).catch(erro => this._mensagem.texto = erro);

        setInterval(() => {
            this.importaNegociacoes();
        }, 3000);
    }

    get data() {
        return DateHelper.textoParaDate(this._inputData.value);
    }

    get quantidade() {
        return this._inputQuantidade.value;
    }

    get valor() {
        return this._inputValor.value;
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = this._criaNegociacao();

        this._service.cadastra(negociacao).then(mensagem => {
            this._listaNegociacoes.adiciona(negociacao);
            this._mensagem.texto = mensagem;
            this._limpaFormulario();
        }).catch(erro => this._mensagem.texto = erro);
    }

    apaga() {

        this._service.apaga().then(mensagem => {
            this._listaNegociacoes.esvazia();
            this._mensagem.texto = mensagem;
        }).catch(erro => this._mensagem.texto = erro);
    }

    ordena(coluna) {
        if (this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    }

    importaNegociacoes() {

        this._service.importa(this._listaNegociacoes.negociacoes).then(negociacoes => negociacoes.forEach(negociacao => {
            this._listaNegociacoes.adiciona(negociacao);
            this._mensagem.texto = 'Negocições do períodp importadas';
        })).catch(erro => this.mensagem.texto = erro);
    }

    _criaNegociacao() {

        return new Negociacao(this.data, parseInt(this.quantidade), parseFloat(this.valor));
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}
//# sourceMappingURL=NegociacaoController.js.map