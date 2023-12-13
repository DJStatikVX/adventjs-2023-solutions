function calculateTime(deliveries) {
  // Calculate total deliveries hours, minutes and seconds
  let totalSeconds = deliveries.reduce((acc, curr) => {
    const hours = Number(curr.split(':')[0])
    const minutes = Number(curr.split(':')[1])
    const seconds = Number(curr.split(':')[2])
    return acc + hours * 60 * 60 + minutes * 60 + seconds
  }, 0)

  // Compare all delivery time with 07:00:00
  const diffSeconds = totalSeconds - 7 * 60 * 60

  // Transform to date format
  const date = new Date()
  date.setHours(0, 0, 0)
  date.setSeconds(Math.abs(diffSeconds))
  const strDiffHours = date.getHours().toString().padStart(2, '0')
  const strDiffMinutes = date.getMinutes().toString().padStart(2, '0')
  const strDiffSeconds = date.getSeconds().toString().padStart(2, '0')
  const strTotalDiff = [
    strDiffHours,
    strDiffMinutes,
    strDiffSeconds
  ].join(':')

  // Output
  return `${diffSeconds < 0 ? '-' : ''}${strTotalDiff}`
}
