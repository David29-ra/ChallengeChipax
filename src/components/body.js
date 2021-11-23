// import { useEffect, useState } from 'react';

export function Results() {
  const results = []



  const myjson = JSON.stringify(results, null, 2)

  return (
    <div className="results">
      <pre>{myjson}</pre>
    </div>
  )
}