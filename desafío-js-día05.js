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
    const deseaAgregar = prompt("¿Deseas agregar un alimento a tu lista de compras? (sí/no): ").toLowerCase();

    if (deseaAgregar === "no") {
        break;
    } else if (deseaAgregar === "sí") {
        const alimento = prompt("¿Qué alimento deseas agregar?: ").trim();

        const categoria = prompt("¿En qué categoría encaja este alimento?\nOpciones: Frutas, Lácteos, Congelados, Dulces, Otros" +
            "\nEscribe la categoría: ").trim();

        if (categorias.find(c => c.nombre === categoria)) {
            categorias.find(c => c.nombre === categoria).items.push(alimento);
        } else {
            categorias.find(c => c.nombre === "Otros").items.push(alimento);
        }
    } else {
        alert("Respuesta no válida. Por favor responde con 'sí' o 'no'.");
    }
}

// Mostrar la lista final agrupada por categorías
console.log("\nLista de compras:");
for (const categoria of categorias) {
    console.log(`\n${categoria.nombre}:`);
    if (categoria.items.length > 0) {
        categoria.items.forEach(item => console.log(`- ${item}`));
    }
}