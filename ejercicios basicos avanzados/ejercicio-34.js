function averageMovieDuration(movies) {
  let totalDuration = 0;
  
  for (const movie of movies) {
    totalDuration += movie.duration;
  }
  
  return totalDuration / movies.length;
}

// Ejemplo de uso con el array dado
const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

console.log(averageMovieDuration(movies)); // Imprime el promedio
