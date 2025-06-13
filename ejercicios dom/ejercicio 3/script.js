// 1.1 Crear lista de países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);

// 1.2 Eliminar el elemento con clase .fn-remove-me
const removeElement = document.querySelector('.fn-remove-me');
if (removeElement) {
  removeElement.remove();
}

// 1.3 Crear lista de coches en el div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printDiv = document.querySelector('[data-function="printHere"]');

const ulCars = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
printDiv.appendChild(ulCars);

// 1.4 Crear serie de divs con h4 y img
const countryObjects = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const container = document.createElement('div');
container.id = 'image-container';

countryObjects.forEach((item, index) => {
  const card = document.createElement('div');
  card.classList.add('country-card');

  const h4 = document.createElement('h4');
  h4.textContent = item.title;

  const img = document.createElement('img');
  img.src = item.imgUrl;

  // 1.6 Botón para eliminar este div
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar este';
  deleteBtn.addEventListener('click', () => {
    card.remove();
  });

  card.appendChild(h4);
  card.appendChild(img);
  card.appendChild(deleteBtn);
  container.appendChild(card);
});

document.body.appendChild(container);

// 1.5 Botón para eliminar el último div
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar último';
deleteLastBtn.addEventListener('click', () => {
  const allCards = document.querySelectorAll('.country-card');
  if (allCards.length > 0) {
    allCards[allCards.length - 1].remove();
  }
});
document.body.appendChild(deleteLastBtn);
