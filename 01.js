function findFirstRepeated(gifts) {
  // Calculamos índices de ocurrencia de cada identificador
  const occurrenceIndices = {};
  gifts.forEach((g, index) => {
    if (occurrenceIndices[g]) {
      occurrenceIndices[g] = [...occurrenceIndices[g], index];
    } else {
      occurrenceIndices[g] = [index];
    }
  });
  // Devolvemos el resultado
  let result = -1;
  let minSecondOccurrenceIndex = Infinity;
  for (const [key, value] of Object.entries(occurrenceIndices)) {
    if (value.length > 1 && value[1] < minSecondOccurrenceIndex) {
      minSecondOccurrenceIndex = value[1];
      result = Number(key);
    }
  }

  return result;
}