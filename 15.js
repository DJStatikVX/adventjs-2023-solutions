function autonomousDrive(store, movements) {
  const state = store

  for (const m of movements) {
    const prevRobotFloor = state.findIndex(f => f.includes('!'))
    const prevRobotPos = state[prevRobotFloor].split('')
      .findIndex(c => c === '!')
    let newRobotFloor = prevRobotFloor
    let newRobotPos = prevRobotPos

    const horizontalMovements = {
      'L': -1, 'R': +1, 'U': 0, 'D': 0
    }

    const verticalMovements = {
      'U': -1, 'D': +1, 'L': 0, 'R': 0
    }

    newRobotFloor = prevRobotFloor + verticalMovements[m]
    newRobotPos = prevRobotPos + horizontalMovements[m]
    
    if (state[newRobotFloor] 
    && state[newRobotFloor].at(newRobotPos) 
    && state[newRobotFloor].at(newRobotPos) != '*') {
        state[prevRobotFloor] = state[prevRobotFloor].split('')
        state[prevRobotFloor].splice(prevRobotPos, 1, '.')
        state[prevRobotFloor] = state[prevRobotFloor].join('')
        state[newRobotFloor] = state[newRobotFloor].split('')
        state[newRobotFloor].splice(newRobotPos, 1, '!')
        state[newRobotFloor] = state[newRobotFloor].join('')
      }
  }

  return state
}
