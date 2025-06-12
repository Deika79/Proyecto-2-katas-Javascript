const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  if (numberList.length === 0) return 0; // Evitar división por cero

  let suma = 0;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  
  return suma / numberList.length;
}

// Prueba la función
const resultado = average(numbers);
console.log("El promedio es:", resultado);
