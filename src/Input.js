import { render } from '@testing-library/react'
import React, { useState } from 'react'

function Input () {
  const [input, setInput] = useState('Visitor')
   

  const handleInput = e => {
    setInput(e.target.value)
  }

  const handleClear = () => {
    setInput('Visitor')
  }

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

