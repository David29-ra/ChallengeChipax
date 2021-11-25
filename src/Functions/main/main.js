import { resultCountLetter } from "../charCounter/charCount"
import { resultsLocation } from "../locations/locations"

export function main(episodes, locations, characters) {
  const myjson = []

  const counterResult = resultCountLetter(episodes, locations, characters)

  const char_counter = {
    exercise_name: "Char counter",
    time: localStorage.getItem("duration_char_counter"),
    in_time: false,
    results: counterResult
  }
  char_counter.in_time = char_counter.time < 3000

  const locationsResult = resultsLocation(episodes, characters)

  const episode_locations = {
    exercise_name: "Episode locations",
    time: localStorage.getItem("duration_locations"),
    in_time: false,
    results: locationsResult
  }
  episode_locations.in_time = episode_locations.time < 3000

  myjson.push(char_counter)
  myjson.push(episode_locations)

  return JSON.stringify(myjson, null, 2)
}