import { Fetch, url } from "./apifetch"

// getData is a function to get data from the api
// it does fetch from: https://rickandmortyapi.com/api/location/[1, 2, 3, 4, ...,126]
export async function getData(endpoint, amount) {
  const qyt = Array.from({length: amount}, (_, i) => i + 1)
  const data = await Fetch(url + endpoint + `/${qyt}`, {
    headers: { "Content-Type": "application/json" }
  })
  localStorage.setItem(endpoint + "s", JSON.stringify(data))
  return data
}