// url is a constant with the url to fetch
export const url = "https://rickandmortyapi.com/api/"

// Fetch is a function to manage the fetch request
export async function Fetch(...args) {
  const response = await fetch(...args)

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors);
  }

  if (response.status !== 204) return await response.json();

  return true;
}