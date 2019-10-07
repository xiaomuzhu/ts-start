import { sum } from '../foo'

test('basic', () => {
  expect(sum(1)(2)).toBe(3)
})
