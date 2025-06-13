// 2.1 Copia de array usando spread operator
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log('2.1 - Copia del array:', pointsListCopy);


// 2.2 Copia de objeto usando spread operator
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy };
console.log('\n2.2 - Copia del objeto:', toyCopy);


// 2.3 Unir arrays con spread operator
const pointsLis2 = [54, 87, 99, 65, 32];
const combinedPoints = [...pointsList, ...pointsLis2];
console.log('\n2.3 - Array combinado:', combinedPoints);


// 2.4 Fusionar objetos con spread operator
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const mergedToy = { ...toy, ...toyUpdate };
console.log('\n2.4 - Objeto fusionado:', mergedToy);


// 2.5 Crear copia de array eliminando el índice 2 (sin modificar el original)
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsWithoutThird = [...colors.slice(0, 2), ...colors.slice(3)];
console.log('\n2.5 - Array sin el elemento en índice 2:', colorsWithoutThird);
console.log('Original:', colors);  // Comprobación de que no se modifica
