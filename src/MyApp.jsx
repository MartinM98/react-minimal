import React from 'react'


const generateArray=(n)=>
(
Array.from({length: n}, (v, k) => k+1)
)

const generateRandomArray=(n)=>
(
Array.from({length: 5}, (v, k) => Math.floor(Math.random() * 25) + 1)
)

const myArray=[2, 56, 23, 88, 17, 4];
const myArray2=[2, 5, 8, 10];


const generateSquareArray=()=>
(
Array.from(myArray2, element => Math.floor(Math.sqrt(element)))
)


var data=[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]

function allStudents(){
  document.getElementById('dataID').innerHTML = ""
 data.forEach(element=>element.students.forEach(element2=>document.getElementById('dataID').innerHTML += "<li>"+element2.name+"</li>") )
}

function studentsSorted(){
  document.getElementById('dataID2').innerHTML = ""
  var names=[]
 data.forEach(element=>element.students.forEach(element2=>names.push(element2.name) ))

names.sort()
names.forEach(element=>document.getElementById('dataID2').innerHTML += "<li>"+element+"</li>")

}

function olderStudents(){
  document.getElementById('dataID3').innerHTML = ""
  var teachers=[]
  data.forEach(element=>element.active?element.students.forEach(element2=>element2.age>20?teachers.push(element2.name):teachers.sort() ):teachers.sort());
    teachers.forEach(element=>document.getElementById('dataID3').innerHTML += "<li>"+element+"</li>")
  }


var buttonStyle = {
  margin: '10px 10px 10px 0'
};


const MyApp = () => (
  <div>
  <h1>Minimal React mrugalam</h1>
  <p>Bundle size: 59 bytes, Load time of the bundle: 45 ms, Last commit SHA1: 3a13c4fae846b156ce9e5efac71c241b1eb5f84c</p>
    <ul>
    <p>Second</p>
      {generateArray(5).map(element => <li>{element}</li>)}
      <p>Third</p>
      {generateRandomArray(5).map(element => <li>{element}</li>)}
      <p>Fourth</p>
      {myArray.map(element=>element>15?<li>{element}</li>:false)}
      <p>Fifth</p>
      {generateSquareArray().map(element => <li>{element}</li>)}
    </ul>
    <button
        style={buttonStyle}
        onClick={allStudents}>All students</button>
          <ul id="dataID"></ul>
          <button
        style={buttonStyle}
        onClick={studentsSorted}>Students sorted</button>
        <ul id="dataID2"></ul>
        <button
        style={buttonStyle}
        onClick={olderStudents}>Older students</button>
        <ul id="dataID3"></ul>
  </div>
)

export default MyApp

