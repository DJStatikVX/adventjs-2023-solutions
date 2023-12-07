function findNaughtyStep(original, modified) {
  let naughtyStep = '';

  if (original.length !== modified.length) {
  	const arr = original.length > modified.length ? original : modified
    for (let i = 0; i < arr.length; i++) {
      	if (original[i] !== modified[i]) {
       	naughtyStep = original.length > modified.length ? original[i] : modified[i];          
        break;
        }
    }
  }

  return naughtyStep;
}