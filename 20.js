function distributeGifts(weights) {
    const calculateAverageAtCell = (i, j) => {
        const adjacents = [
            { row: i - 1, column: j },
            { row: i + 1, column: j },
            { row: i, column: j - 1 },
            { row: i, column: j + 1 }
        ]

        const adjacentsSum = adjacents.reduce((acc, curr) => {
            const { row: adjacentRow, column: adjacentColumn } = curr

            if (adjacentRow >= 0 && adjacentRow < weights.length
                && adjacentColumn >= 0 && adjacentColumn < weights[i].length
                && weights[adjacentRow][adjacentColumn] !== null) {
                acc[0] += weights[adjacentRow][adjacentColumn]
                acc[1]++
            }

            return acc
        }, [0, 0])

        return Math.round((adjacentsSum[0] + (weights[i][j] ?? 0))
            / (adjacentsSum[1] + +(weights[i][j] !== null)))
    }

    return weights.map((e, i) => e.map((_, j) => calculateAverageAtCell(i, j)))
}