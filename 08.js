function organizeGifts(gifts) {
    const BOX_SIZE = 10
    const PALLET_SIZE = 5 * BOX_SIZE

    let organizedGifts = ''
    let remainingGifts = gifts

    while (remainingGifts.length > 0) {
        const nextGiftTypeIndex = remainingGifts.search(/[A-Za-z]/g)
        const nextGiftTypeSymbol = remainingGifts[nextGiftTypeIndex]
        const nextGiftTypeAmount = remainingGifts.substring(0, nextGiftTypeIndex)

        const numberOfGiftPallets = Math.floor(nextGiftTypeAmount / PALLET_SIZE)
        const numberOfGiftBoxes = Math.floor((nextGiftTypeAmount - numberOfGiftPallets * PALLET_SIZE) / BOX_SIZE)
        const numberOfSpareGifts = nextGiftTypeAmount - numberOfGiftBoxes * BOX_SIZE - numberOfGiftPallets * PALLET_SIZE

        if (numberOfGiftPallets > 0) {
            organizedGifts += `[${nextGiftTypeSymbol}]`.repeat(numberOfGiftPallets)
        }
        if (numberOfGiftBoxes > 0) {
            organizedGifts += `{${nextGiftTypeSymbol}}`.repeat(numberOfGiftBoxes)
        }
        if (numberOfSpareGifts > 0) {
            organizedGifts += `(${nextGiftTypeSymbol.repeat(numberOfSpareGifts)})`
        }

        remainingGifts = remainingGifts.substring(nextGiftTypeIndex + 1)
    }

    return organizedGifts
}