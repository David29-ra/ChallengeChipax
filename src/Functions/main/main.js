import { timeFormat } from "../../helpers/timeformat"
import { resultCountLetter } from "../charCounter/charCount"
import { resultsLocation } from "../locations/locations"


// Main function return string json qith results of two exercises
export function main(episodes, locations, characters) {
  const myjson = []

  const counterResult = resultCountLetter(episodes, locations, characters)

  const char_counter = {
    exercise_name: "Char counter",
    time: "",
    in_time: false,
    results: counterResult
  }
  char_counter.in_time = parseFloat(localStorage.getItem("duration_char_counter")) < 3000
  char_counter.time = timeFormat(parseFloat(localStorage.getItem("duration_char_counter")))

  const locationsResult = resultsLocation(episodes, characters)

  const episode_locations = {
    exercise_name: "Episode locations",
    time: "",
    in_time: false,
    results: locationsResult
  }
  episode_locations.in_time = parseFloat(localStorage.getItem("duration_locations")) < 3000
  episode_locations.time = timeFormat(parseFloat(localStorage.getItem("duration_locations")))

  myjson.push(char_counter)
  myjson.push(episode_locations)

  return JSON.stringify(myjson, null, 2)
}
