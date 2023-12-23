function organizeChristmasDinner(dishes) {
  const countOccurrences = (item, array) => {
    return array.filter(e => e === item).length
  }

  const occurrences = {}
  dishes.flat().forEach((e, _, arr) => {
    occurrences[e] = countOccurrences(e, arr)
  })
  
  const candidates = []
  for (const [key, value] of Object.entries(occurrences)) {
  	if (value >= 2) {
    	candidates.push(key)
    }
  }
  candidates.sort()
  
  const findDishes = ingredient => {
  	const resultDishes = []
  	for (const dish of dishes) {
    	if (dish.includes(ingredient)) {
      	resultDishes.push(dish[0])
      }
    }
    resultDishes.sort()
    return resultDishes
  }
  
  const result = candidates.map(e => [e, ...findDishes(e)])
  return result
}
