export const sumBy = (arr, key) => arr.reduce((sum, item) => sum + Number.parseFloat(item[key]), 0)
