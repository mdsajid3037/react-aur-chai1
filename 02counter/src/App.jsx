import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(3)
 
  // let count = Math.fround(Math.random()+1);

  const addValue =() =>{
    // counter = counter+1;
    // console.log("added value ", Math.random()  ,counter)
    if(counter<20)
    // setCounter(counter+1)
   
    setCounter(prevCounter => prevCounter+1)
    // setCounter(prevCounter => prevCounter+1)
  }

   const removeValue = () =>{
    if(counter>0)
      setCounter(counter-1)
   }
  return (
    <>
    
      <h1> cahi aur | React</h1>
      <h2> Counter value: {counter}</h2>
      <button  className='text-white rounded-xl'
      onClick={addValue}>Add Value  {counter} </button>
      <br/>
      <button 
      onClick={removeValue}>Remove Value  {counter} </button>
      <p>Footer:  {counter} </p>
    
     
    </>
  )
}

export default App
