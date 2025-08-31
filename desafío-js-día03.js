let tecnologia;
let eleccion;
let masTecnologias;
const area = prompt("Si quieres seguir hacia el área de Front-end, presiona 1. Si quieres ir al área de Back-end, presiona 2.");

if (area === "1") {
    alert("Has elegido el área de Front-end.");
    tecnologia = prompt("Si quieres aprender React, presiona 1. Si quieres aprender Vue, presiona 2.");
    if (tecnologia === "1") {
        alert("Has elegido aprender React.");
        eleccion = prompt("Quieres seguir especializándote en React, presione 1, si quieres desarrollarte como Fullstack, presione 2.");
        if (eleccion === "1") {
            alert("Has elegido especializarte en React.");
        } else if (eleccion === "2") {
            alert("Has elegido desarrollarte como Fullstack.");
        } else {
            alert("Opción no válida.");
        }
    } else if (tecnologia === "2") {
        alert("Has elegido aprender Vue.");
        eleccion = prompt("Quieres seguir especializándote en Vue, presione 1, si quieres desarrollarte como Fullstack, presione 2.");
        if (eleccion === "1") {
            alert("Has elegido especializarte en Vue.");
        } else if (eleccion === "2") {
            alert("Has elegido desarrollarte como Fullstack.");
        } else {
            alert("Opción no válida.");
        }
    } else {
        alert("Opción no válida.");
    }
} else if (area === "2") {
    alert("Has elegido el área de Back-end.");
    tecnologia = prompt("Si quieres aprender C#, presiona 1. Si quieres aprender Java, presiona 2.");
    if (tecnologia === "1") {
        alert("Has elegido aprender C#.");
        eleccion = prompt("Quieres seguir especializándote en C#, presione 1, si quieres desarrollarte como Fullstack, presione 2.");
        if (eleccion === "1") {
            alert("Has elegido especializarte en C#.");
        } else if (eleccion === "2") {
            alert("Has elegido desarrollarte como Fullstack.");
        } else {
            alert("Opción no válida.");
        }
    } else if (tecnologia === "2") {
        alert("Has elegido aprender Java.");
        eleccion = prompt("Quieres seguir especializándote en Java, presione 1, si quieres desarrollarte como Fullstack, presione 2.");
        if (eleccion === "1") {
            alert("Has elegido especializarte en Java.");
        } else if (eleccion === "2") {
            alert("Has elegido desarrollarte como Fullstack.");
        } else {
            alert("Opción no válida.");
        }
    } else {
        alert("Opción no válida.");
    }
} else {
    alert("Opción no válida.");
}

while (true) {
    const continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (ok/no)");
    if (continuar === "no") {
        alert("Gracias por participar.");
        break;
    } else if (continuar === "ok") {
        masTecnologias = prompt("¿Qué tecnologías te gustaría especializarse o conocer?");
        alert("Has elegido aprender " + masTecnologias + ".");
    } else {
        alert("Opción no válida.");
    }
}