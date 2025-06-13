// 2.1 Inserta un div vacío
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

// 2.2 Inserta un div con una p dentro
const divWithP = document.createElement('div');
const paragraph = document.createElement('p');
paragraph.textContent = 'Hola, soy un párrafo dentro de un div';
divWithP.appendChild(paragraph);
document.body.appendChild(divWithP);

// 2.3 Inserta un div con 6 p usando un loop
const divWithSixP = document.createElement('div');
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo número ${i}`;
  divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

// 2.4 Inserta una p con el texto 'Soy dinámico!'
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 2.5 Inserta texto en el h2 con clase .fn-insert-here
const h2Insert = document.querySelector('h2.fn-insert-here');
h2Insert.textContent = 'Wubba Lubba dub dub';

// 2.6 Crea una lista UL > LI con los elementos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos con la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(el => el.remove());

// 2.8 Inserta una p entre los dos primeros div
const allDivs = document.querySelectorAll('div');
const midParagraph = document.createElement('p');
midParagraph.textContent = 'Voy en medio!';
document.body.insertBefore(midParagraph, allDivs[1]);

// 2.9 Inserta una p con el texto 'Voy dentro!' en los div.fn-insert-here
const insertDivs = document.querySelectorAll('div.fn-insert-here');
insertDivs.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});
