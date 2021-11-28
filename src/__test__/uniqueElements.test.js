import { uniqueElements } from "../Functions/locations/locations";

test('should return array with unique numbers', () => {
  const numbers = [1, 2, 2, 4, 5, 5, 5, 9, 10, 10, 10]
  const unique = [1, 2, 4, 5, 9, 10]
  expect(uniqueElements(numbers)).toEqual(unique)
})

test('should return array with unique letters', () => {
  const numbers = ["a", "a", "r", "z", "z", "k"]
  const unique = ["a", "r", "z", "k"]
  expect(uniqueElements(numbers)).toEqual(unique)
})

test('should return array with empty string', () => {
  const numbers = [ "", "", "", "", "", ""]
  const unique = [""]
  expect(uniqueElements(numbers)).toEqual(unique)
})