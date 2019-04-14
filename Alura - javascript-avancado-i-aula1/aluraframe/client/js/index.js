
var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor"),
];

var tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener("submit", function(event){

    event.preventDefault();
    var tr = document.createElement('tr');

    campos.forEach(campo => {
        createTdAndAppend(campo.value, tr);
    });

    var valueVolume = campos[1].value * campos[2].value;
    createTdAndAppend(valueVolume, tr);
    
    tbody.appendChild(tr);
});

function createTdAndAppend(value, tr) {
    var td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
}
