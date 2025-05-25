

export function calculateFrequencies(data) {
    const sorted = [...data].sort((a, b) => a - b);
    const frequencyMap = {};
  
    sorted.forEach((val) => {
      frequencyMap[val] = (frequencyMap[val] || 0) + 1;
    });
  
    const uniqueValues = Object.keys(frequencyMap).map(Number);
    const total = data.length;
    let cumulativeFreq = 0;
  
    const table = uniqueValues.map((value) => {
      const freq = frequencyMap[value];
      cumulativeFreq += freq;
      return {
        value,
        frequency: freq,
        relativeFrequency: +(freq / total).toFixed(3),
        cumulativeFrequency: cumulativeFreq,
        cumulativeRelativeFrequency: +(cumulativeFreq / total).toFixed(3),
      };
    });
  
    return table;
  }
  

export function calculateDescriptiveStats(data) {
    if (data.length === 0) return null;
  
    const sorted = [...data].sort((a, b) => a - b);
    const n = data.length;
  
    // Mean
    const mean = data.reduce((a, b) => a + b, 0) / n;
  
    // Median
    const median =
      n % 2 === 0
        ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2
        : sorted[Math.floor(n / 2)];
  
    // Mode
    const freqMap = {};
    data.forEach((num) => {
      freqMap[num] = (freqMap[num] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(freqMap));
    const mode = Object.keys(freqMap)
      .filter((key) => freqMap[key] === maxFreq)
      .map(Number);
  
    // Variance
    const variance = data.reduce((acc, val) => acc + (val - mean) ** 2, 0) / n;
  
    // Standard deviation
    const stdDev = Math.sqrt(variance);
  
    return {
      mean: +mean.toFixed(3),
      median: +median.toFixed(3),
      mode,
      variance: +variance.toFixed(3),
      stdDev: +stdDev.toFixed(3),
    };
  }
  