console.log("Running calculadoraHipotenusa.js")
function calcularHipotenusa(a,b){
    let resultado = Math.sqrt(a**2+b**2)
    return resultado
}
botonCalcular.addEventListener("click", function(){
    console.log("click listened")
    calcularHipotenusa();
});
botonClear.addEventListener("click", function(){
    console.log("click listened")
    document.getElementById("ladoA").value = "";
    document.getElementById("ladoB").value = "";
    document.getElementById("texto").innerText = "Ingrese los valores de los catetos y presione el botón para calcular la hipotenusa.";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Enter listened");
        runCalculadora();
    }
});

function calcularHipotenusa(a, b) {
    let resultado = Math.sqrt(a ** 2 + b ** 2);
    return resultado;
}

function runCalculadora() {

    let ladoA = document.getElementById("ladoA").value;
    let ladoB = document.getElementById("ladoB").value;
    let texto = document.getElementById("texto");
    texto.innerText = `La hipotenusa es de: ${calcularHipotenusa(ladoA, ladoB).toFixed(3)}`;
}


