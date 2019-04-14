

var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        var resposta = this.responseText;

        var pacientes = JSON.parse(resposta);

        pacientes.forEach(paciente => {
            adicionaPacienteTabela(paciente);
        });
    });

    xhr.send();

});