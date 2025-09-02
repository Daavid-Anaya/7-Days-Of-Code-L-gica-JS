# 7 Days Of Code Lógica JS
7 Days Of Code en ONE es una iniciativa de Alura Latam para ejercitar las habilidades con desafíos diarios y prácticos para perfeccionar la lógica de programación. 

Durante 7 días recibirás desafíos con: 

- El contexto del desafío del día.
- Una tarea práctica de lógica de programación.
- Materiales adicionales para reforzar el aprendizaje.

## Lógica JS 1/7: Operaciones Booleanas

La parte más confusa para quienes están comenzando a aprender lógica con JavaScript es la operación de **igualdad entre valores**. Dependiendo de cómo escribas tu código, JavaScript hará una conversión de tipo a un tipo booleano de manera implícita (automática), y esto afectará a variables que eran Strings, Numbers, Object, etc.

Por lo tanto, **tu tarea es reescribir el código a continuación para que imprima la información de manera correcta**, que tenga sentido y sin errores:

let numeroUn = 1

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = 10

let stringDiez = '10'

if (COMPARAR numeroUn y stringUn) {

  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
  
} else {

  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
  
}

if (COMPARAR numeroTreinta y stringTreinta) {

  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
  
} else {

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
  
}

if (COMPARAR numeroDiez y stringDiez) {

  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
  
} else {

  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}

## Lógica JS 2/7: Variables

Las variables son los bloques básicos de construcción de cualquier sistema y son esenciales para procesar cualquier tipo de información, ya sea de una persona que ha iniciado sesión en el sistema o incluso para mostrar detalles de productos en un catálogo de comercio electrónico.

Por eso, **desarrollaras un programa simulando una de esas aplicaciones**. Debe pedir al usuario **responder 3 preguntas**:

- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?

A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas. Al final, **el sistema mostrará el mensaje**:
 
"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

Observa que cada información entre [ ] es una de las respuestas dadas por la persona.

### Ejercicio Opcional

Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:

¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.

Y luego, dependiendo de la respuesta, debería **mostrar uno de los siguientes mensajes**:


1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.

2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?

## Lógica JS 3/7: Estructuras de control de flujo

Los bucles (como for y while) son capaces de transformar una tarea repetitiva en pocas líneas de código, sin importar cuántas veces necesites repetir esa tarea.

Tu desafío es crear los destinos posibles de un juego, en el que el usuario pueda elegir:

1. Si quiere **seguir hacia el área de **Front-End** o **seguir hacia el área de Back-End**.
2. Si está en el área de **Front-End**, si quiere **aprender React** o **aprender Vue**. Si está en el área de **Back-End**, podrá **aprender C#** o **aprender Java**.
3. Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre **seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack**. Debes mostrar en pantalla un mensaje específico para cada elección.
4. Finalmente, **pregunta en qué tecnologías le gustaría a la persona especializarse o conocer**. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
 
Lo importante es que la persona que esté jugando siempre pueda elegir **qué decisión tomar para aprender** y desarrollarse en el área de programación.

Además, también es esencial que, al final del juego, pueda **ingresar tantas tecnologías como desee en la lista de aprendizaje**.

## Lógica JS 4/7: Más loops y randomización

Debes crear un pequeño programa que **comience con un valor específico predefinido entre 1 y 10** para el número que vas a adivinar (por ejemplo, el 7).

A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te **felicitará**. Si te equivocas, te dará **2 intentos más**. 

Al final, si no aciertas en ninguno de los intentos, **imprimirá cuál era el número inicial**.

Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

## Lógica JS 5/7: Arrays y colecciones

Debes crear un programa en Javascript que pregunte **si deseas agregar un alimento a tu lista de compras**, y debes poder responder con "sí" o "no".

A continuación, preguntará **qué alimento deseas agregar**, y escribirás su nombre, como por ejemplo "zanahoria".

Después, deberá preguntar **en qué categoría se encaja ese alimento**, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.

Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

Si añades a tu lista:

banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca. 

El programa debería imprimir, por ejemplo:

Lista de compras:

- Frutas: banana, tomate, manzana, uva, aguacate
- Lácteos: leche vegetal, leche de vaca, leche en polvo
- Congelados: 
- Dulces: chicle y gominola