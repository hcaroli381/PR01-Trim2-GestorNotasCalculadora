const params = new URLSearchParams(window.location.search);
const mes = Number(params.get("mes"));
const btnAddNota = document.querySelector("#btnAddNota");
const nota = document.querySelector("#nota");
const descripcion = document.querySelector("#descripcion");
const listaNotas = document.querySelector("#listaNotas");
const tituloMes = document.querySelector("#tituloMes");
const form = document.querySelector("#frmNota");

lstNotas = [];

console.log(params)
console.log(mes)


form.addEventListener("submit",onFormSubmit);
function onFormSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const titulo = data.get("titulo");
    const descripcion = data.get("descripcion");

    
    const jsonNota = {"titulo":titulo, "descripcion":descripcion, "mes":mes};

    //extraigo la lista de notas de localstorage
    const lsNotaStr = localStorage.getItem("calendarioNota");
    let lsNotaJson  = [];
    
    if (lsNotaStr != null){
        lsNotaJson = JSON.parse(lsNotaStr);
    }

    lsNotaJson.push(jsonNota);
    localStorage.setItem("calendarioNota",JSON.stringify(lsNotaJson));
    
    
    console.log(titulo);
    console.log(descripcion);
    console.log(localStorage.getItem("calendarioNota"));
}

function getMonth(intMes){
    lsMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    return lsMeses[intMes];
};

tituloMes.innerHTML = getMonth(mes);


