import React, { Component } from 'react'
import './App.css'

 function Counter ({display, decrement, increment}) {
  
    return (
      <div className='counter'>
      <button onClick={decrement}>-</button>
        <h1>{display}</h1>
        <button onClick={increment}>+</button>
       </div>
    )
    }

export default Counter