function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) {
    return false
  } else {
    for (let i = 0; i < copy.length; i++) {
      // Check uppercase degradation match
      if (original.at(i).match(/[A-Z]/)) {
        if (copy.at(i) !== original.at(i).toLowerCase() 
          && !copy.at(i).match(/#|\+|:|\.| /)) {
          return false
        }
      }
      // Check lowercase degradation match
      else if (original.at(i).match(/[a-z]|#/)) {
        if (copy.at(i) !== original.at(i) 
          && !copy.at(i).match(/#|\+|:|\.| /)) {
          return false
        }
      }
      // Other characters
      else {
      	if (copy.at(i) !== original.at(i)) {
        	return false
        }
      }
    }
    return true
  }
}
