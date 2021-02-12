import React, {Component} from 'react'
import Counter from './Counter'

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      count: 100
      }
      this.increment = this.increment.bind(this)
    }

    increment (e) {
      console.log('increment')
      this.setState({
        count:this.state.count + 1
      })
    }


  render() {
  return (
    <div className="App">
      <Counter 
        display={this.state.count} 
        increment={this.increment}/>
      
    </div>
  );
}
}

export default App;
