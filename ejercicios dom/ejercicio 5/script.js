const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Seleccionamos la lista <ul>
const albumList = document.getElementById('albumList');

// Recorremos el array y creamos un <li> por cada álbum
for (const album of albums) {
  const li = document.createElement('li');
  li.textContent = album;
  albumList.appendChild(li);
}
