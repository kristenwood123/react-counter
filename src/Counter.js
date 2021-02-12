import React, { Component } from 'react'

 function Counter ({display, increment}) {
  
    return (
      <div className='counter'>
        <span>{display}</span>
        <button onClick={increment}>+</button>
      </div>
    )
    }

export default Counter