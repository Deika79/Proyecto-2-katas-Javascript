const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const foundMutants = [];

  for (const mutant of mutants) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }

  if (foundMutants.length > 0) {
    return `Mutante(s) con el poder "${power}" encontrado(s): ${foundMutants.join(', ')}`;
  } else {
    return `No se encontró ningún mutante con el poder "${power}".`;
  }
}

// Ejemplo de uso:
console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'invisibility'));
