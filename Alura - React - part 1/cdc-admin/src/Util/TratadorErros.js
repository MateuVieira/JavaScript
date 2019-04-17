

export default class TratadorErros {

    publicaErros(erros) {
        erros.errors.forEach(erro => {
            console.log(erro);
            
        });
    }
}