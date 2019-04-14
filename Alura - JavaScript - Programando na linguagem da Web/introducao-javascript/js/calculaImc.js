
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido =  validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
        if(!pesoEhValido){
            console.log("Peso inválido");
            tdImc.textContent = "Peso inválido";
            paciente.classList.add("paciente-invalido");
        }

        if(!alturaEhValida){
            console.log("Alturainválido");
            tdImc.textContent = "Altura inválido";
            paciente.classList.add("paciente-invalido");
        }
        
    
        if( pesoEhValido && alturaEhValida){
            tdImc.textContent = calculaImc(peso, altura);
        }
   
}

function validaAltura(altura){
    if (altura <= 0 || altura > 3) {
        return false;
    }
    return true;
}

function validaPeso(peso) {
    if (peso <= 0 || peso > 300) { 
        return false;
    }
    return true;
}

function calculaImc(peso, altura){
    var imc = 0;

    imc  = peso/(altura*altura);

    return imc.toFixed(2);
}
