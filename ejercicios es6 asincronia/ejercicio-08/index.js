const select = document.getElementById("character-list");
const image = document.querySelector(".character-image");

// 1. Obtener los datos desde la API
fetch("https://thronesapi.com/api/v2/Characters")
  .then((res) => res.json())
  .then((characters) => {
    // 2. Rellenar el select con los nombres
    characters.forEach((character) => {
      const option = document.createElement("option");
      option.value = character.imageUrl; // Usamos la URL de la imagen como valor
      option.textContent = character.fullName;
      select.appendChild(option);
    });

    // 3. Evento al cambiar de personaje
    select.addEventListener("change", () => {
      const selectedImage = select.value;
      if (selectedImage) {
        image.src = selectedImage;
        image.alt = "Imagen de " + select.options[select.selectedIndex].text;
      } else {
        image.src = "";
        image.alt = "Sin personaje";
      }
    });
  })
  .catch((error) => console.error("Error al cargar los personajes:", error));
