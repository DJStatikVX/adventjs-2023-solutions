function drawClock(time) {
  const clockHeight = 7

  const clock = Array(clockHeight).fill()

  const digits = {
    0: [
      ['***'],
      ['* *'],
      ['* *'],
      ['* *'],
      ['* *'],
      ['* *'],
      ['***'],
    ],
    1: [
      ['  *'],
      ['  *'],
      ['  *'],
      ['  *'],
      ['  *'],
      ['  *'],
      ['  *'],
    ],
    2: [
      ['***'],
      ['  *'],
      ['  *'],
      ['***'],
      ['*  '],
      ['*  '],
      ['***'],
    ],
    3: [
      ['***'],
      ['  *'],
      ['  *'],
      ['***'],
      ['  *'],
      ['  *'],
      ['***'],
    ],
    4: [
      ['* *'],
      ['* *'],
      ['* *'],
      ['***'],
      ['  *'],
      ['  *'],
      ['  *'],
    ],
    5: [
      ['***'],
      ['*  '],
      ['*  '],
      ['***'],
      ['  *'],
      ['  *'],
      ['***'],
    ],
    6: [
      ['***'],
      ['*  '],
      ['*  '],
      ['***'],
      ['* *'],
      ['* *'],
      ['***'],
    ],
    7: [
      ['***'],
      ['  *'],
      ['  *'],
      ['  *'],
      ['  *'],
      ['  *'],
      ['  *'],
    ],
    8: [
      ['***'],
      ['* *'],
      ['* *'],
      ['***'],
      ['* *'],
      ['* *'],
      ['***'],
    ],
    9: [
      ['***'],
      ['* *'],
      ['* *'],
      ['***'],
      ['  *'],
      ['  *'],
      ['***'],
    ],
    ':': [
    	['   '],
    	['   '],
    	[' * '],
    	['   '],
    	[' * '],
    	['   '],
    	['   '],
    ]
  }

  const buildClockRow = rowIndex => {
    let str = ''
    for (let charIndex = 0; charIndex < time.length; charIndex++) {
      str += digits[time[charIndex]][rowIndex]
      if (charIndex === 0 || charIndex === 3) {
        str += ' '
      }
    }
    return str
  }

  for (let i = 0; i < clock.length; i++) {
    clock[i] = [...buildClockRow(i)]
  }

  return clock
}
