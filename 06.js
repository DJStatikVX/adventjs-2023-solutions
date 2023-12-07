function maxDistance(movements) {
  let distance = 0;
  let wildcards = 0;
  [...movements].forEach(m => {
    if (m === '>') {
      distance++;
    } else if (m === '<') {
      distance--;
    } else {
      wildcards++;
    }
  });
  return Math.abs(distance) + wildcards;
}