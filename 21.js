function findBalancedSegment(message) {
    let maxLength = 0
    let indices = [-1, -1]

    for (let i = 0; i < message.length; i++) {
        let counter = [0, 0]

        for (let j = i; j < message.length; j++) {
            counter[+(message[j] === 1)]++

            if (counter[0] === counter[1] && j - i + 1 > maxLength) {
                maxLength = j - i + 1
                indices = [i, j]
            }
        }
    }

    return indices.every(i => i !== -1) ? indices : []
}