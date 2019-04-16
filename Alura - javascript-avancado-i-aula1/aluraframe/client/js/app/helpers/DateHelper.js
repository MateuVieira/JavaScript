
class DateHelper {

    constructor() {

        throw new Error('DateHelper não pode ser instanciada');
    }

    static textoParaDate(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indece) => item - indece % 2));
    }

    static dateParaTexto(date) {

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}
//# sourceMappingURL=DateHelper.js.map