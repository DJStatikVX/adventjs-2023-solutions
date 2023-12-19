function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const optimizedIntervals = []
  for (const interval of intervals) {
    if (optimizedIntervals.length === 0 
    || interval[0] > optimizedIntervals[optimizedIntervals.length - 1][1]) {
      optimizedIntervals.push(interval);
    } else {
      optimizedIntervals[optimizedIntervals.length - 1][1] = 
      Math.max(
        optimizedIntervals[optimizedIntervals.length - 1][1],
        interval[1]
      );
    }
  }

  return optimizedIntervals
}
