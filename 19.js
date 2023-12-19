function revealSabotage(store) {
  const countAdjacentSabotages = (i, j) => {
    const rows = store.length;
    const columns = store[0].length;

    const adjacentCells = [
      { row: i - 1, column: j },
      { row: i + 1, column: j },
      { row: i, column: j - 1 },
      { row: i, column: j + 1 },
      { row: i - 1, column: j - 1 },
      { row: i - 1, column: j + 1 },
      { row: i + 1, column: j - 1 },
      { row: i + 1, column: j + 1 }
    ];

    const adjacentSabotages = adjacentCells.reduce((acc, curr) => {
      const { row: adjacentRow, column: adjacentColumn } = curr

      if (adjacentRow >= 0 && adjacentRow < rows 
      && adjacentColumn >= 0 && adjacentColumn < columns 
      && store[adjacentRow][adjacentColumn] === '*') {
        acc++
      }

      return acc
    }, 0)

    return adjacentSabotages !== 0 ? adjacentSabotages.toString() : ' '
  }

  const revealed = store.map((e1, i) => e1.map((e2, j) => {
    return e2 === '*' ? '*' : countAdjacentSabotages(i, j)
  })) 

  return revealed
}
