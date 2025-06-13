// 3.1 Obtener array de nombres
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const names1 = users1.map(user => user.name);
console.log('3.1 - Nombres:', names1);


// 3.2 Cambiar nombre a "Anacleto" si empieza por "A"
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const names2 = users2.map(user => 
  user.name.startsWith('A') ? 'Anacleto' : user.name
);
console.log('\n3.2 - Nombres modificados:', names2);


// 3.3 Añadir " (Visitado)" si isVisited es true
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];

const visitedCities = cities.map(city => 
  city.isVisited ? `${city.name} (Visitado)` : city.name
);
console.log('\n3.3 - Ciudades visitadas:', visitedCities);
