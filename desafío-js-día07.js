while (true) {
    const opcion = parseInt(menu());

    if (opcion === 5) {
        break;
    }
    const { num1, num2 } = ingresarNumeros();
    
    let resultado;

    switch (opcion) {
        case 1:
            resultado = suma(num1, num2);
            resultadoSalida(resultado);
            break;
        case 2:
            resultado = resta(num1, num2);
            resultadoSalida(resultado);
            break;
        case 3:
            resultado = multiplicacion(num1, num2);
            resultadoSalida(resultado);
            break;
        case 4:
            if (num2 !== 0) {
                resultado = division(num1, num2);
                resultadoSalida(resultado);
            } else {
                alert("Error: División por cero no permitida.");
            }
            break;
        default:
            alert("Opción no válida");
    }

   
}

function menu() {
    const opcion = prompt("Menu\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir\nEliga el número de opción:").toLowerCase();
    return opcion;
}

function ingresarNumeros() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    return { num1, num2 };
}

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function resultadoSalida(resultado) {
    alert("El resultado es: " + resultado);
}