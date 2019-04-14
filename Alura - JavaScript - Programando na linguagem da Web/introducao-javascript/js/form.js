var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        
        return;
    }

    adicionaPacienteTabela(paciente)
    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
});

function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function validaPaciente(paciente){

    var erros = [];

    if(!validaPeso(paciente.peso || validaPesoEmBranco(paciente.peso))){
        erros.push("Peso inválido!");
    }

    if(!validaAltura(paciente.altura) || !validaAlturaEmBranco(paciente.altura)){
        erros.push("Altura inválido!");
    }

    if(!validaGordura(paciente.gordura) || !validaGorduraEmBranco(paciente.gordura)){
        erros.push("Campo gordura inválido!");
    }

    if(!validaNome(paciente.nome)){
        erros.push("Nome inválido!");
    }
    

    return erros;

}

function validaGordura(gordura){
    if (gordura <= 0 || gordura > 60) {
        return false;
    }
    return true;
}

function validaNome(nome){
    if(nome.length == 0){
        return false;
    }
    return true;
}

function validaPesoEmBranco(peso){
    if(peso.length == 0){
        return false;
    }
    return true;
}

function validaAlturaEmBranco(altura){
    if(altura.length == 0){
        return false;
    }
    return true;
}

function validaGorduraEmBranco(gordura){
    if(gordura.length == 0){
        return false;
    }
    return true;
}

function exibeMensagensDeErro(erros){

    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}