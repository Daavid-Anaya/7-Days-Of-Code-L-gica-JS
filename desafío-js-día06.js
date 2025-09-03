// Categorías predefinidas
const categorias = [
  { nombre: "Frutas", items: [] },
  { nombre: "Lácteos", items: [] },
  { nombre: "Congelados", items: [] },
  { nombre: "Dulces", items: [] },
  { nombre: "Otros", items: [] }
];

alert("Bienvenido a tu lista de compras 🛍️");

while (true) {
    const opcion = prompt("Menu\n1. Agregar a la lista.\n2. Eliminar de la lista.\n3. Salir\nEliga la opción:").toLowerCase();

    if (opcion === "3") {
        break;
    } else if (opcion === "1") {
        const alimento = prompt("¿Qué alimento deseas agregar?: ").trim();

        const categoria = prompt("¿En qué categoría encaja este alimento?\nOpciones: Frutas, Lácteos, Congelados, Dulces, Otros" +
            "\nEscribe la categoría: ").trim();

        if (categorias.find(c => c.nombre === categoria)) {
            categorias.find(c => c.nombre === categoria).items.push(alimento);
        } else {
            categorias.find(c => c.nombre === "Otros").items.push(alimento);
        }
    } else if (opcion === "2") {
        mostrarLista();
        const alimento = prompt("¿Qué alimento deseas eliminar?: ").trim();
        const categoria = prompt("¿En qué categoría se encuentra este alimento?\nOpciones: Frutas, Lácteos, Congelados, Dulces, Otros" +
            "\nEscribe la categoría: ").trim();

        const categoriaEncontrada = categorias.find(c => c.nombre === categoria);
        if (categoriaEncontrada) {
            const index = categoriaEncontrada.items.indexOf(alimento);
            if (index !== -1) {
                categoriaEncontrada.items.splice(index, 1);
                alert("Alimento eliminado de la lista.");
            } else {
                alert("El alimento no se encontró en la categoría especificada.");
            }
        } else {
            alert("Categoría no válida.");
        }
    } else {
        alert("Respuesta no válida.");
    }
}

mostrarLista();

// Mostrar la lista final agrupada por categorías
function mostrarLista() {
console.log("\nLista de compras:");
    for (const categoria of categorias) {
        console.log(`\n${categoria.nombre}:`);
        if (categoria.items.length > 0) {
            categoria.items.forEach(item => console.log(`- ${item}`));
        }
    }
}