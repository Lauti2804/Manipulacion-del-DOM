const input1 = document.querySelector("#numero1"); 
const form = document.querySelector("#form"); 
const input2 = document.querySelector("#numero2"); 
const btn = document.querySelector("#btncalcular"); 
const suma = document.querySelector("#sumaid");

//addEventListener

form.addEventListener("submit", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();
    let sumas= (Number(input1.value) + Number(input2.value))

    suma.innerText = `El resultado de la suma es ${sumas}`;
}



