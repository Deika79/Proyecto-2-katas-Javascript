const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);
  if (index !== -1) {
    return { exists: true, posicion: index };
  } else {
    return { exists: false };
  }
}

// Prueba la función
console.log(nameFinder(names, 'Tony'));   // { exists: true, posicion: 2 }
console.log(nameFinder(names, 'Natasha')); // { exists: true, posicion: 3 }
console.log(nameFinder(names, 'Steve'));  // { exists: true, posicion: 1 }
console.log(nameFinder(names, 'Clark'));  // { exists: false }
