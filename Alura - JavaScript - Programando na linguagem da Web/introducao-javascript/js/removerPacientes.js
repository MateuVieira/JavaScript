
var tabelaPacientes = document.querySelector("#tabela-pacientes");

tabelaPacientes.addEventListener("dblclick", function(event){

        // fadeOut remove
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function(){
             // Instant remove
            event.target.parentNode.remove();
        }, 500);
       
});