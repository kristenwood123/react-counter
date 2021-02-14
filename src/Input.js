import { render } from '@testing-library/react'
import React from 'react'

function Input ({input, handleClear, handleInput}) {
  
  return (
    <div>
      <div>Hello, {input}</div>
      <input type="text"
        onChange={handleInput}
      />
      <button
      onClick={handleClear}>Clear</button>
      
    </div>
  )
}

export default Input

