// This function is used to list all the locations of the characters who appear in each episode.
export function resultsLocation(episodes, characters) {
  const initial = performance.now()
  const result = []

  // this part is used to get the locations of the characters who appear in each episode.
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

// This function is used to get the unique elements of an array
export function uniqueElements(array) {
  return [...new Set(array)]
}