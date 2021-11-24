// conseqArray function return an array of consecutive numbers from 1 to number
export function conseqArray(number) {
  return Array.from({length: number}, (_, i) => i + 1)
}