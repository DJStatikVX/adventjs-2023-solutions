function travelDistance(map) {
  const splitMap = map.split('\n')
  let distance = 0

  const findSymbolPosition = sym => {
    const row = splitMap.findIndex(r => r.includes(sym))
    const col = splitMap[row].indexOf(sym)
    return [row, col]
  }

  const doMovement = (dx, dy) => {
    santaPos[0] += dx
    santaPos[1] += dy
    distance += Math.abs(dx) + Math.abs(dy)
  }

  let santaPos = findSymbolPosition('S')
  const childrenNumbers = map.split('')
    .filter(c => c.match(/^\d$/))
    .map(n => +n)
  childrenNumbers.sort()
	const childrenPositions = childrenNumbers.map(n => findSymbolPosition(n))

	for (const child of childrenPositions) {
  	doMovement(child[0] - santaPos[0], child[1] - santaPos[1])
  }

  return distance
}
