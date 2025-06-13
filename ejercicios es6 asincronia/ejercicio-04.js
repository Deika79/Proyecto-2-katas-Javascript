// 4.1 Filtrar mayores de 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const over18 = ages1.filter(age => age > 18);
console.log('4.1 - Mayores de 18:', over18);


// 4.2 Filtrar pares
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages2.filter(age => age % 2 === 0);
console.log('\n4.2 - Edades pares:', evenAges);


// 4.3 Filtrar streamers que juegan a League of Legends
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const lolStreamers = streamers1.filter(s => s.gameMorePlayed === 'League of Legends');
console.log('\n4.3 - Streamers de League of Legends:', lolStreamers);


// 4.4 Filtrar streamers cuyo nombre incluye 'u'
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamersWithU = streamers2.filter(s => s.name.includes('u'));
console.log('\n4.4 - Streamers con "u" en el nombre:', streamersWithU);


// 4.5 Filtrar streamers con 'Legends' en gameMorePlayed y cambiar a mayúsculas si edad > 35
const streamers3 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const legendsStreamers = streamers3
  .filter(s => s.gameMorePlayed.includes('Legends'))
  .map(s => ({
    ...s,
    gameMorePlayed: s.age > 35 ? s.gameMorePlayed.toUpperCase() : s.gameMorePlayed
  }));

console.log('\n4.5 - Streamers con "Legends" y juego en mayúsculas si > 35:', legendsStreamers);
