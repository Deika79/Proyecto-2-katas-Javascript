const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  if (list.length === 0) return 0;

  let suma = 0;
  
  for (let i = 0; i < list.length; i++) {
    const elemento = list[i];
    if (typeof elemento === "number") {
      suma += elemento;
    } else if (typeof elemento === "string") {
      suma += elemento.length;
    }
  }
  
  return suma / list.length;
}

// Prueba la función
const resultado = averageWord(mixedElements);
console.log("El promedio calculado es:", resultado);
