
async function getRandomPokemon() {
  // Generamos un número aleatorio entre 1 y 151
  const randomId = Math.floor(Math.random() * 151) + 1;

  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Accedemos a la imagen que queremos (official-artwork, más grande y limpia)
    const imageUrl = data.sprites.other['official-artwork'].front_default;

    const imgElement = document.querySelector('.random-image');
    imgElement.src = imageUrl;
    imgElement.alt = data.name;

  } catch (error) {
    console.error('Error al obtener el Pokémon:', error);
  }
}

// Ejecutar al cargar la página
getRandomPokemon();
