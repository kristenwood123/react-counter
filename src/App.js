import React, { useState } from 'react'
import Counter from './Counter'
import './App.css'

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
    </div>
  );
}


export default App;
