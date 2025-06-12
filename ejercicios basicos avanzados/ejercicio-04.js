const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Saca a "Tendo" por consola atacando su posición
console.log("4.1 - Tendo:", aldeanos[3]);

// 4.2 - Coloca en el último lugar de este array a "Cervasio"
aldeanos.push("Cervasio");
console.log("4.2 - Array con Cervasio al final:", aldeanos);

// 4.3 - Cambia el primer elemento de este array por "Bambina"
aldeanos[0] = "Bambina";
console.log("4.3 - Array con Bambina al principio:", aldeanos);

// 4.4 - Dale la vuelta a este array
aldeanos.reverse();
console.log("4.4 - Array invertido:", aldeanos);

// 4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array
let indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) {
    aldeanos.splice(indiceNarciso, 1, "Canela");
}
console.log("4.5 - Array con Narciso cambiado por Canela:", aldeanos);

// 4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explícitamente
console.log("4.6 - Último aldeano:", aldeanos[aldeanos.length - 1]);
