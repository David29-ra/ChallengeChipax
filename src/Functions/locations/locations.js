export function resultsLocation(episodes, characters) {
  const initial = performance.now()
  const result = []

  episodes?.forEach(episode => {
    const obj = {name: episode.name, episode: episode.episode, locations: []}

    const locations = episode.characters.map(character => characters?.filter( char => char.id === parseInt(character.split("/")[5])))
                                        .map(char => char[0].origin.name)

    obj.locations = uniqueElements(locations)
  
    result.push(obj)
  })

  const final = performance.now()
  const time = final - initial

  localStorage.setItem("duration_locations", time)

  return result
}


function uniqueElements(array) {
  return [...new Set(array)]
}