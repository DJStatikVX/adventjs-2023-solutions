function cyberReindeer(road, time) {
  const states = [];
  let currentState = road;
  const barriersPositions = [];
  [...road].forEach((c, index) => {
    if (c === '|' || c === '*') {
      barriersPositions.push(index);
    }
  });
  for (let i = 0; i < time; i++) {
    states.push(currentState);
    const sledPosition = currentState.indexOf('S');
    if (i >= 4 && barriersPositions.length > 0) {
      currentState = currentState.replaceAll('|', '*');
    }
    if (sledPosition < currentState.length && currentState[sledPosition + 1] !== '|') {
      currentState = currentState.split('');
      currentState[sledPosition + 1] = 'S';
      currentState[sledPosition] = '.';
      currentState = currentState.join('');
    }
    currentState = currentState.split('');
    for (const pos of barriersPositions) {
    	if (currentState[pos] !== 'S') {
      	currentState[pos] = i >= 4 ? '*' : '|';
      }
    }
    currentState = currentState.join('');
  }
  return states;
}