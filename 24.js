function getStaircasePaths(steps, maxJump) {
  const paths = []
  
  const isAlreadyExistingPath = path => 
  paths.some(p => JSON.stringify(p) === JSON.stringify(path))

  const getStaircasePathsRec = path => {
    const sum = path.reduce((acc, curr) => acc + curr, 0)

		if (isAlreadyExistingPath(path) || sum > steps) {
    	return
    } else if (!isAlreadyExistingPath(path) && sum === steps) {
      paths.push(path)
      return
    }

    for (let i = 1; i <= steps - sum && i <= maxJump; i++) {
    	getStaircasePathsRec([...path, i])
    }
  }

  getStaircasePathsRec([])
  return paths
}
