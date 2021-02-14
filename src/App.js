import React, { useState } from 'react'
import Counter from './Counter'
import './App.css'
import Input from './Input'

function App () {
 const [count, setCount] = useState(0)

 const increment = () => {
   setCount(count + 1)
 }

const decrement = () => {
   setCount(count - 1)
 }

  return (
    <div className="App">
      <Counter
      display={count}
      decrement={decrement}
      increment={increment} />

      <Input />
     

    </div>
  );
}


export default App;
