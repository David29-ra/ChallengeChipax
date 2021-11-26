import { countLetter } from "../Functions/charCounter/charCount";

test("countLetter a in name prop", () => {
  const arrData = [
    {
      "name": "Toxic Rick",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Rick's Toxic Side",
      "gender": "Male"
    }
  ]
  const prop = "name"
  const letter = "a"

  const result = countLetter(arrData, prop, letter)

  expect(result).toBe(0)
})

test("countLetter a in status prop", () => {
  const arrData = [
    {
      "name": "Toxic Rick",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Rick's Toxic Side",
      "gender": "Male"
    }
  ]
  const prop = "status"
  const letter = "a"

  const result = countLetter(arrData, prop, letter)

  expect(result).toBe(1)
})

test("countLetter o in name prop", () => {
  const arrData = [
    {
      "name": "Toxic Rick",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Rick's Toxic Side",
      "gender": "Male"
    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
    }
  ]
  const prop = "name"
  const letter = "o"

  const result = countLetter(arrData, prop, letter)

  expect(result).toBe(2)
})

test("countLetter d in status prop", () => {
  const arrData = [
    {
      "name": "Toxic Rick",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Rick's Toxic Side",
      "gender": "Male"
    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
    }
  ]
  const prop = "status"
  const letter = "d"

  const result = countLetter(arrData, prop, letter)

  expect(result).toBe(2)
})

test("countLetter r in name prop", () => {
  const arrData = [
    {
      "name": "Toxic Rick",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Rick's Toxic Side",
      "gender": "Male"
    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
    },
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male"
    }
  ]
  const prop = "name"
  const letter = "r"

  const result = countLetter(arrData, prop, letter)

  expect(result).toBe(3)
})

test("countLetter l in status prop", () => {
  const arrData = [
    {
      "name": "Toxic Rick",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Rick's Toxic Side",
      "gender": "Male"
    },
    {
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
    },
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male"
    }
  ]
  const prop = "status"
  const letter = "l"

  const result = countLetter(arrData, prop, letter)

  expect(result).toBe(2)
})