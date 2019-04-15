
class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    get data(){
        return new DateHelper().textoParaDate(this._inputData.value);
    }

    get quantidade(){
        return this._inputQuantidade.value;
    }

    get valor(){
        return this._inputValor.value;
    }

    adiciona(event){
        event.preventDefault();

        let negociacao = new Negociacao(
            this.data,
            this.quantidade,
            this.valor,
        );

        let diaMesAno =  new DateHelper().dateParaTexto(negociacao.data);
        console.log(diaMesAno);
        
    }
    
}