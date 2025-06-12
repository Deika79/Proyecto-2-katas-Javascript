const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  if (stringList.length === 0) return null; // Si el array está vacío, devuelve null

  let longestWord = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }

  return longestWord;
}

// Prueba la función
const longest = findLongestWord(avengers);
console.log("La palabra más larga es:", longest);
