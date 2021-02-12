import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <div className='counter'>
        <span>{this.props.display}</span>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}
