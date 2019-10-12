import React from 'react'

const generateArray=(n)=>
(
Array.from({length: n}, (v, k) => k+1)
)

const MyApp = () => (
  <div>
  <h1>Minimal React mrugalam</h1>
  <p>Bundle size: 59 bytes, Load time of the bundle: 114 ms, Last commit SHA1: d422c3021f335fa2154cd4d798cdbb4aaea8ab88</p>
  <ul>
    <p>An array of integers from 1 to n=10</p>
      {generateArray(10).map(element => <li>{element}</li>)}

    </ul>

  </div>)

export default MyApp