function drawGift(size, symbol) {
  let giftLines = []
  // Back part
  for (let i = 0; i < size; i++) {
    let line = []
    line.push(...' '.repeat(size - 1 - i));
    line.push(...'#'.repeat(size));
    if (size > 1) {
      if (size > 2) {
        if (i > 0 && i < size - 1) {
          line.splice(size - i, size - 2, symbol.repeat(size - 2))
        }
      }
      if (i > 1 && i < size) {
      	line.push(...symbol.repeat(i - 1))
      }
      if (i > 0 && i < size) {
      	line.push('#')
      }
    }
    giftLines.push(line.join(''))
  }
  // Front part
  for (let i = 0; i < size - 1; i++) {
  	let line = []
  	line.push(...'#'.repeat(size));
    if (size > 1) {
      // line.push('#')
      if (size > 2) {
        if (i < size - 2) {
          line.splice(1, size - 2, symbol.repeat(size - 2))
        }
      }
      if (i < size - 2) {
      	line.push(...symbol.repeat(size - 3 - i))
      }
      if (i < size - 2) {
      	line.push('#')
      }
    }
    giftLines.push(line.join(''))
  }
  return giftLines.join('\n') + '\n'
}