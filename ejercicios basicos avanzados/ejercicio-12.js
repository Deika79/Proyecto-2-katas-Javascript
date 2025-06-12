const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  const uniqueItems = [];
  for (let i = 0; i < list.length; i++) {
    if (!uniqueItems.includes(list[i])) {
      uniqueItems.push(list[i]);
    }
  }
  return uniqueItems;
}

// Prueba la función
const result = removeDuplicates(duplicates);
console.log("Array sin duplicados:", result);
