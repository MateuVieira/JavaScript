

var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = this.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }    
    });

    xhr.send();

});