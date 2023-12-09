function adjustLights(lights) {
    const numberOfChanges = lights?.reduce((accumulator, currentValue, currentIndex) => {
        if ((currentIndex % 2 === 0 && currentValue !== lights[0]) || (currentIndex % 2 !== 0 && currentValue === lights[0])) {
            accumulator++
        }
        return accumulator
    }, 0) ?? 0
    return Math.min(numberOfChanges, lights.length - numberOfChanges)
}