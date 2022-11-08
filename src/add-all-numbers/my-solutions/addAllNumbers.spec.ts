import { Sum, Sum2 } from './addAllNumbers'

describe('add all numbers', () => {
  it('given a list of numbers, return the total', () => {
    let input = [1, 2]
    let result = Sum(input)
    expect(result).toEqual(3)
  }),
    it('test number 2 of larger numbers', () => {
      let input = [2, 3, [2, 3]]
      let result = Sum2(input)
      expect(result).toEqual(10)
    })
}) // check this test?
