import React, {useState} from 'react'
import Counter from './Counter'

function App () {
  const [count, setCount] = useState(1)  
      // this.increment = this.increment.bind(this)
    
    const increment = () => {
      setCount(count + 1)
    }

  return (
    <div className="App">
      <Counter 
        display={count} 
        increment={() => {increment()}}/>      
    </div>
  );
}


export default App;
