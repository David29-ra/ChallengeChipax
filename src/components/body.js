import { resultCountLetter } from "../Functions/charCounter/charCount"
import { resultsLocation } from "../Functions/locations/locations"
import { setData } from '../Functions/storage/setData';

export function Results() {
  const results = []

  setData("episode", 51) // Save 51 episodes on localStorage

  setData("location", 126) // Save 126 locations on localStorage
  
  setData("character", 826) // Save 826 characters on localStorage

  const resultCounter = resultCountLetter()

  const char_counter = {
    exercise_name: "Char counter",
    time: localStorage.getItem("duration_char_counter"),
    in_time: false,
    results: resultCounter
  }
  char_counter.in_time = char_counter.time < 3000

  results.push(char_counter)

  const resultLocation = resultsLocation()

  const episode_locations = {
    exercise_name: "Episode locations",
    time: localStorage.getItem("duration_locations"),
    in_time: false,
    results: resultLocation
  }
  episode_locations.in_time = episode_locations.time < 3000
  results.push(episode_locations)

  const myjson = JSON.stringify(results, null, 2)

  return (
    <>
      <div className="results">
        <pre>{myjson}</pre>
      </div>
    </>
  )
}