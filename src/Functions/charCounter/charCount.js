// resultCount function return an array of objects, objects are the results of
// counter the letters using the toPush function

export function resultCountLetter(episodes, locations, characters) {
  const initial = performance.now()
  const result = []

  const objResultLocations = toPush(locations, "location", "name", "l")
  const objResultEpisodes = toPush(episodes, "episode", "name", "e")
  const objResultCharacters = toPush(characters, "character", "name", "c")

  result.push(objResultLocations)
  result.push(objResultEpisodes)
  result.push(objResultCharacters)

  const final = performance.now()
  const time = final - initial

  localStorage.setItem("duration_char_counter", time)

  return result
}

// toPush fuction return an object which the results of count the letters using
// the countLetter function
function toPush(dataArray, resource, prop, letter) {
  return {char: letter, count: countLetter(dataArray, prop, letter), resource: resource}
}

// countLetter function return the total number of times a letter appears
// in a prop of an object which is a element of an array
export function countLetter(dataArray, prop, letter) {
  const reg = new RegExp(`${letter}`, "g")

  return dataArray?.map(object => object[prop].toLowerCase().match(reg)?.length || 0)
              .reduce((a, b) => a + b, 0)
}

