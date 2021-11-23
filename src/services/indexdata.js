import { Fetch, url } from "./apifetch"

// getData is a function to get data from the api
// it does fetch from: https://rickandmortyapi.com/api/location/[1, 2, 3, 4, ...,126]
export async function getData(endpoint, countArray) { 
  const data = await Fetch(url + endpoint + `/${countArray}`, {
    headers: { "Content-Type": "application/json" }
  })
  return data
}