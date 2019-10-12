import React from 'react'

const generateArray=(n)=>
(
Array.from({length: n}, (v, k) => k+1)
)

const generateRandomArray=(n)=>
(
Array.from({length: n}, (v, k) => Math.floor(Math.random() * 25) + 1)
)

const myArray=[2, 56, 23, 88, 17, 4];

const MyApp = () => (
  <div>
  <h1>Minimal React mrugalam</h1>
  <p>Bundle size: 59 bytes, Load time of the bundle: 114 ms, Last commit SHA1: d422c3021f335fa2154cd4d798cdbb4aaea8ab88</p>
  <ul>
    <p>An array of integers from 1 to n=10</p>
      {generateArray(10).map(element => <li>{element}</li>)}
      <p>An array of n=10 random integers from 1 to 25</p>
      {generateRandomArray(10).map(element => <li>{element}</li>)}
      <p>All array elements that are larger than 15</p>
      {myArray.map(element=>element>15?<li>{element}</li>:false)}

    </ul>

  </div>)

export default MyApp