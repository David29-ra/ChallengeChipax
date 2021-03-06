import React, { useEffect, useState } from 'react';
import { main } from '../Functions/main/main';
import { getData } from '../services/indexdata';

export function Results() {  
  // const initial = performance.now()

  // use state to store the data
  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem("characters")) || []);
  const [locations, setLocations] = useState(JSON.parse(localStorage.getItem("locations")) || []);
  const [episodes, setEpisodes] = useState(JSON.parse(localStorage.getItem("episodes")) || []);

  // use effect to fetch the data
  useEffect(() => {
    const savedata = async () => {
      const chardata = await getData("character", 826)
      setCharacters(chardata)
      const locdata = await getData("location", 126)
      setLocations(locdata)
      const epidata = await getData("episode", 51)
      setEpisodes(epidata) 
    }
    savedata()
  }, [])

  // const final = performance.now()
  // const diff = final - initial

  return (
    <>
      <div className="results">
        <pre>{main(episodes, locations, characters)}</pre>
      </div>
    </>
  )
}