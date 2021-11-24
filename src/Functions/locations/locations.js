export function resultsLocation() {
  let initial = performance.now()
  const result = []

  const episodesArray = JSON.parse(localStorage.getItem("episodes"))
  const charactersArray = JSON.parse(localStorage.getItem("characters"))

  episodesArray?.forEach(episode => {
    const obj = {name: episode.name, episode: episode.episode, locations: []}

    const locations = episode.characters.map(character => charactersArray?.filter( char => char.id === parseInt(character.split("/")[5])))
                                        .map(char => char[0].origin.name)

    obj.locations = uniqueElements(locations)
  
    result.push(obj)
  })

  let final = performance.now()
  let dif = final - initial

  localStorage.setItem("duration_locations", JSON.stringify(dif))

  return result
}


function uniqueElements(array) {
  return [...new Set(array)]
}