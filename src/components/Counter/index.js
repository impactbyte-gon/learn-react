import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <span>Counter: {this.state.counter}</span>
      </p>
    )
  }
}

export default Counter
