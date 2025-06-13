// 1.1 Muestra el botón con la clase .showme
const showmeButton = document.querySelector('.showme');
console.log("1.1 Botón .showme:", showmeButton);

// 1.2 Muestra el h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado');
console.log("1.2 H1 #pillado:", h1Pillado);

// 1.3 Muestra todos los <p>
const allParagraphs = document.querySelectorAll('p');
console.log("1.3 Todos los <p>:");
allParagraphs.forEach((p, i) => console.log(`   ${i + 1}:`, p));

// 1.4 Muestra todos los elementos con la clase .pokemon
const allPokemon = document.querySelectorAll('.pokemon');
console.log("1.4 Todos los elementos .pokemon:");
allPokemon.forEach((pkm, i) => console.log(`   ${i + 1}:`, pkm));

// 1.5 Muestra todos los elementos con data-function="testMe"
const dataTestElements = document.querySelectorAll('[data-function="testMe"]');
console.log('1.5 Todos los elementos con data-function="testMe":');
dataTestElements.forEach((el, i) => console.log(`   ${i + 1}:`, el));

// 1.6 Muestra el 3º personaje con data-function="testMe"
const thirdCharacter = dataTestElements[2];
console.log("1.6 Tercer personaje con data-function='testMe':", thirdCharacter);
