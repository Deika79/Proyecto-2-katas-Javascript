// 1.1 Evento click en el botón
const btn = document.getElementById('btnToClick');
btn.addEventListener('click', (event) => {
  console.log('Click event:', event);
});

// 1.2 Evento focus en el segundo input
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', () => {
  console.log('Valor del input en focus:', focusInput.value);
});

// 1.3 Evento input en el tercer input
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', () => {
  console.log('Valor actual del input:', valueInput.value);
});
