const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

// Arrays para cada categoría
const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (let movie of movies) {
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie);
  } else if (movie.durationInMinutes >= 200) {
    largeMovies.push(movie);
  }
}

console.log("Películas pequeñas (< 100 min):", smallMovies);
console.log("Películas medianas (100-199 min):", mediumMovies);
console.log("Películas grandes (>= 200 min):", largeMovies);
