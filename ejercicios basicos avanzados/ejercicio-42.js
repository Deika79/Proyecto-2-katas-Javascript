const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

/**
 * Intercambia dos elementos de un array según sus índices.
 * @param {Array} array - El array donde se harán los cambios.
 * @param {number} index1 - Primer índice a intercambiar.
 * @param {number} index2 - Segundo índice a intercambiar.
 * @returns {Array} El array modificado con los elementos intercambiados.
 */
function swap(array, index1, index2) {
  // Validar que los índices sean números enteros dentro del rango del array
  if (
    !Array.isArray(array) ||
    typeof index1 !== 'number' ||
    typeof index2 !== 'number' ||
    !Number.isInteger(index1) ||
    !Number.isInteger(index2) ||
    index1 < 0 ||
    index2 < 0 ||
    index1 >= array.length ||
    index2 >= array.length
  ) {
    throw new Error('Índices inválidos o array no válido');
  }

  // Intercambiar valores usando una variable temporal
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}

// Ejemplos de uso:

console.log('Array original:', fantasticFour);

const result1 = swap(fantasticFour, 0, 2);
console.log('Después de swap(0, 2):', result1);

const result2 = swap(fantasticFour, 1, 3);
console.log('Después de swap(1, 3):', result2);

// Prueba con índices iguales (no cambia el array)
const result3 = swap(fantasticFour, 2, 2);
console.log('Después de swap(2, 2):', result3);

// Ejemplo de manejo de error 
/*
try {
  swap(fantasticFour, 1, 10); // índice fuera de rango
} catch (error) {
  console.error(error.message);
}
*/
