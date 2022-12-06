const nomePassegero = document.getElementById("nomePassegero")
const input = document.getElementById("input")
const generatore = document.getElementById("generatore")
const numeroKm = document.getElementById("numeroKm")
const eta = document.getElementById("eta")
let button = document.getElementById("button")

const max = 18;
const min = 65;
const scontoMinorenne = 20;
const scontoOver = 40;
const absolutePercentual = 100;
const euro = "€"



button.addEventListener("click" , function (){
    const text = input.value.trim();
    nomePassegero.innerText = text;
    input.value = "";
})
button.addEventListener("click" , function (){
    const textDue = (numeroKm.value.trim() * 0.21 );
    generatore.innerText = textDue.toFixed(2) ;
    generatore.value = "";
    let scontoTextDue = textDue * 20 / 100;
    let scontoDefinitivoTextDue = textDue - scontoTextDue;
    let scontoBigTextDue = textDue * 40 / 100;
    let scontoBigDefinitivoTextDue = textDue - scontoBigTextDue;

    if (eta.value < max ) {
    generatore.innerText = scontoDefinitivoTextDue.toFixed(2) ;
    }
    else if (eta.value  >= min ) {
    generatore.innerText = scontoBigDefinitivoTextDue.toFixed(2) ;
    }
})






