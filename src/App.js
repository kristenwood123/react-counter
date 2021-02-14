import React, { Component } from 'react'
import Counter from './Counter'
import './App.css'
// import Input from './Input'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 1
      fizzbuzz: ''
    }
    this.increment = this.increment.bind(this)
  }


  increment () {
    if(this.state.count % 5 == 0) {
      console.log(this.state.count, 'fizz')
    } else if (this.state.count % 3 == 0) { 
      console.log(this.state.count, 'buzz')
    }
      this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }  
    })
  }
  
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  
  render(){ 
//  const handleInput = e => {
//     setInput(e.target.value)
//   }

  // const handleClear = () => {
  //   setInput('Visitor')
  // }

  return (
    <div className="App">
      <Counter
      display={this.state.count}
      decrement={this.decrement}
      increment={this.increment} />
      {/* <Input 
        input={input}
        handleInput={handleInput}
        handleClear={handleClear}
      /> */}
    </div>
  );
  }
}


export default App;
