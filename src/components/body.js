import { resultCountLetter } from "../Functions/charCounter/charCount"
import { setData } from "../Functions/storage/setData"

export function Results() {
  const results = []

  setData("location", 126) // Save 126 locations on localStorage
  setData("episode", 51) // Save 51 episodes on localStorage
  setData("character", 826) // Save 826 characters on localStorage
  
  const resultCounter = resultCountLetter()

  const char_counter = {
    exercise_name: "Char counter",
    time: "2020-05-10",
    in_time: true,
    results: resultCounter
  }
  results.push(char_counter)


  const myjson = JSON.stringify(results, null, 2)

  return (
    <div className="results">
      <pre>{myjson}</pre>
    </div>
  )
}