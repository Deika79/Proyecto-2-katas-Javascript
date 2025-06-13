// 1.1 Object destructuring del objeto 'game' (sin tocar el array)
const game = { title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020 };
const { title, gender, year } = game;
console.log('1.1');
console.log('Título:', title);
console.log('Géneros:', gender);
console.log('Año:', year);


// 1.2 Array destructuring para obtener frutas
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log('\n1.2');
console.log('Fruta 1:', fruit1);
console.log('Fruta 2:', fruit2);
console.log('Fruta 3:', fruit3);


// 1.3 Destructuring de objeto retornado por función
const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' };
};

const { name, race } = animalFunction();
console.log('\n1.3');
console.log('Nombre del animal:', name);
console.log('Raza:', race);


// 1.4 Destructuring de objeto y array anidados
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };

const { name: carName, itv } = car;
const [year1, year2, year3] = itv;

console.log('\n1.4');
console.log('Nombre del coche:', carName);
console.log('ITV años:', year1, year2, year3);
