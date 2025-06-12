// 1.1 Bucle for de 0 a 9 mostrando el valor de i
for (let i = 0; i < 10; i++) {
  console.log("1.1 - Valor de i:", i);
}

// 1.2 Bucle for de 0 a 9 mostrando solo los pares
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("1.2 - i es par:", i);
  }
}

// 1.3 Bucle para contar ovejas
for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log(`1.3 - Intentando dormir 🐑 (${i})`);
  } else {
    console.log("1.3 - ¡Dormido!");
  }
}
