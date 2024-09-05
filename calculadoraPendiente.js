console.log("Running calculadoraPendiente.js")
function calcularPendiente(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}
function runPendiente() {
    var x1 = parseFloat(document.getElementById('x1').value);
    var y1 = parseFloat(document.getElementById('y1').value);
    var x2 = parseFloat(document.getElementById('x2').value);
    var y2 = parseFloat(document.getElementById('y2').value);
    let texto = document.getElementById('texto');
    texto.innerText = `la pendiente es = ${(calcularPendiente(x1, y1, x2, y2))}\n
    La ecuación de la recta es: ${ecuacionRecta(x1, y1, x2, y2)}`;
}
function ecuacionRecta(x1, y1, x2, y2) {
    var m = calcularPendiente(x1, y1, x2, y2);
    var b = y1 - m * x1;
    if (b > 0) {
        return "y = " + m + "x + " + b;
    }else if (b == 0) {
        return "y = " + m + "x";    
    } else {
        return "y = " + m + "x" + b;
    }
}
botonCalcular.addEventListener('click', function () {
    console.log('click listened');
    runPendiente();
});
botonCalcular.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log('Enter listened');
        runPendiente();
    }
});
botonClear.addEventListener('click', function () {
    console.log('click listened');
    document.getElementById('x1').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('texto').innerText = 'Ingrese las coordenadas de dos puntos pertenecientes a la recta';
})