function getIndexsForPalindrome(word) {
  // Check if the word is already palindrome
  if (word === word.split('').reverse().join('')) {
    return []
  } else {
    // It is not palindrome, check for potential swap
    const swaps = []
    for (let i = 0; i < word.length - 1; i++) {
      // Check for potential swaps
      for (let j = i + 1; j < word.length; j++) {
        const tempWordArr = word.split('')
        const charAux = tempWordArr[i]
        tempWordArr[i] = tempWordArr[j]
        tempWordArr[j] = charAux
        if (tempWordArr.join('') === tempWordArr.reverse().join('')) {
          swaps.push([i, j])
        }  
      }
    }
    return swaps.length > 0 ? swaps[0] : null
  }
}
