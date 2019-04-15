
class DateHelper{

    textoParaDate(texto){
       return new Date(...texto.split('-').map((item,indece) => item - (indece % 2)));
    }

    dateParaTexto(date){
        return date.getDate() 
                + '/' + (date.getMonth() + 1)
                + '/' + date.getFullYear();

    }
}