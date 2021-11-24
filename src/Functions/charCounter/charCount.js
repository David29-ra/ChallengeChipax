export function resultCountLetter() {
  const initial = performance.now()
  const result = []

  const locationsArray = JSON.parse(localStorage.getItem("locations"))
  const episodesArray = JSON.parse(localStorage.getItem("episodes"))
  const charactersArray = JSON.parse(localStorage.getItem("characters"))


  const objResultLocations = toPush(locationsArray, "location", "name", "l")
  const objResultEpisodes = toPush(episodesArray, "episode", "name", "e")
  const objResultCharacters = toPush(charactersArray, "character", "name", "c")

  result.push(objResultLocations)
  result.push(objResultEpisodes)
  result.push(objResultCharacters)

  let final = performance.now()
  let dif = final - initial
  localStorage.setItem("duration_char_counter", JSON.stringify(dif))

  return result
}

// countLetter function return the total number of times a letter appears
// in a prop of an object which is a element of an array
function countLetter(dataArray, prop, letter) {
  const reg = new RegExp(`${letter}`, "g")

  return dataArray?.map(object => object[prop].toLowerCase().match(reg)?.length || 0)
              .reduce((a, b) => a + b)
}

function toPush(dataArray, resource, prop, letter) {
  return {char: letter, count: countLetter(dataArray, prop, letter), resource: resource}
}