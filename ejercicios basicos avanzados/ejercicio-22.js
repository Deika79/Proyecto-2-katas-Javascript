const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Índice para recorrer las frutas sin repetir
let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    // Reemplazar con fruta única
    foodSchedule[i].name = fruits[fruitIndex];
    foodSchedule[i].isVegan = true; // Ahora es vegano porque es fruta
    fruitIndex++;

    // Si nos quedamos sin frutas, podemos parar o reiniciar el índice (aquí paramos)
    if (fruitIndex >= fruits.length) {
      break;
    }
  }
}

console.log(foodSchedule);
