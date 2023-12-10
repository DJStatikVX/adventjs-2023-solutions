function createChristmasTree(ornaments, height) {
    let tree = ''
    let ornamentIndex = 0

    for (let i = 0; i < height; i++) {
        // Whitespaces
        tree += ' '.repeat(height - i - 1)
        // Ornaments
        for (let j = 0; j <= i; j++) {
            tree += ornaments[ornamentIndex % ornaments.length]
            if (j < i) {
                tree += ' '
            }
            ornamentIndex++
        }
        // Line break
        tree += '\n'
    }

    // Baseline
    tree += ' '.repeat(height - 1) + '|' + '\n'

    return tree
}