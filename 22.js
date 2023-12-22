function compile(code) {
  let backup

  const functions = {
    '+': (count, index) => [count + 1, index],
    '*': (count, index) => [count * 2, index],
    '-': (count, index) => [count - 1, index],
    '%': (count, index) => {
      backup = index
      return [count, index]
    },
    '<': (count, index) => {
      const newIndex = backup ?? index
      backup = undefined
      return [count, newIndex]
    },
    '¿': (count, index) => {
      const newIndex = count > 0 ? index : code.indexOf('?', index)
      return [count, newIndex]
    },
    '?': (count, index) => [count, index]
  }

  let count = 0
  for (let i = 0; i < code.length; i++) {
    [count, i] = functions[code[i]](count, i);
  }

  return count
}
