function maxGifts(houses) {
  let prevMaxGifts = 0;
  let currentMaxGifts = 0;

  for (const house of houses) {
    const nextMax = Math.max(currentMaxGifts, prevMaxGifts + house);
    prevMaxGifts = currentMaxGifts;
    currentMaxGifts = nextMax;
  }

  return currentMaxGifts;
}
