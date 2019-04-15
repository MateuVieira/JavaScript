
class MensagemView {

    constructor(elemteno) {

        this._elemtento = elemteno;
    }

    _template(model) {

        return `<p class="alert alert-info">${model.texto}</p>`;
    }

    upadate(model) {
        this._elemtento.innerHTML = this._template(model);
    }

}
