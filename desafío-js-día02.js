let nombre;
let edad;
let lenguajeProg;
let teGustaEstudiar;

nombre = prompt("¿Cuál es tu nombre?");
edad = prompt("¿Cúal es tu edad?");
lenguajeProg = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguajeProg}!`);

teGustaEstudiar = prompt(`¿Te gusta estudiar ${lenguajeProg}? Responde con el número 1 para SÍ o 2 para NO.`);
if (teGustaEstudiar === "1") {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?"); 
}