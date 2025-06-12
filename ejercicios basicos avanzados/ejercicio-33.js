const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return `Lo siento, no tengo la capital de ${country}.`;
  }
}

// Ejemplos de uso:
console.log(getCapital('Spain'));   // Madrid
console.log(getCapital('Norway'));  // Lo siento, no tengo la capital de Norway.
