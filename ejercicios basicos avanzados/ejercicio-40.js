function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // Si no se encuentra
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Ejemplos de uso
console.log(findArrayIndex(mainCharacters, "Rey"));        // 4
console.log(findArrayIndex(mainCharacters, "Han Solo"));   // 2
console.log(findArrayIndex(mainCharacters, "Yoda"));       // -1 (no está)

console.log(removeItem([...mainCharacters], "Rey"));       // Array sin "Rey"
console.log(removeItem([...mainCharacters], "Han Solo"));  // Array sin "Han Solo"
console.log(removeItem([...mainCharacters], "Yoda"));      // Array sin cambios (no existe "Yoda")
