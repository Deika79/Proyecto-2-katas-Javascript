function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log("El número mayor es:", numberOne);
  } else if (numberTwo > numberOne) {
    console.log("El número mayor es:", numberTwo);
  } else {
    console.log("Ambos números son iguales:", numberOne);
  }
}

// Ejemplos de prueba
greaterNumber(10, 5);   // Muestra: El número mayor es: 10
greaterNumber(3, 9);    // Muestra: El número mayor es: 9
greaterNumber(7, 7);    // Muestra: Ambos números son iguales: 7
