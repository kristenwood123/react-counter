import { render } from '@testing-library/react'
import React, { useState } from 'react'

function Input () {
  const [input, setInput] = useState('')

  const handleInput = e => {
    setInput(e.target.value)
  }

  return (
    <div>
      <div>{input}</div>
      <input type="text"
        onChange={handleInput}

      />
      <button>Clear</button>
    </div>
  )
}

export default Input








//  constructor(props) {
//    super(props)
//    this.state = { value: ''};

// this.handleInput = this.handleInput.bind(this);
//  }

//     handleInput = e => {
//       this.setState({
//         value: e.target.value
//       })
//  }

//   render() {
//   return (
//     <div>
//     <div>{this.state.value}</div>
//       <input 
//       type="text"
//       onChange={this.handleInput}
//       />
//       <button>Clear</button>
//     </div>
    
//     )
//   }