export function Sum(arrayAny: number[]): number {
  let result = 0
  for (let i = 0; i < arrayAny.length; i++) {
    result += arrayAny[i]
  }
  return result
}

Sum([1, 2])

export function Sum2(arrayAny: number[][]) {
  let result = 0
  for (let i = 0; i < arrayAny.length; i++) {
    for (let j = 0; j < arrayAny.length; j++) result += arrayAny[i][j]
  }
  return result
}

Sum([2, 3, [2, 3]])

// check this about reference
