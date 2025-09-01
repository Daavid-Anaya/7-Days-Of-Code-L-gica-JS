let numAdivinar = Math.floor(Math.random() * 10) + 1;
let num
let cont = 1;

while (cont <= 3) {
    num = parseInt(prompt("Adivina el numero entre 1 y 10, ¿Cuál es el número?"));
    if (num === numAdivinar) {
        alert("¡Correcto!");
        break;
    } else {
        alert(`Incorrecto, intenta de nuevo. Te quedan ${3 - cont} intentos.`);
        cont++;
    }
}

if (cont > 3) {
    alert(`El número era ${numAdivinar}.`);
}