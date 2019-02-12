import React, { Component } from 'react'

import Task from './Task'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          text: 'Running a marathon'
        },
        {
          text: 'Eating a lunch'
        },
        {
          text: 'Drinking a water'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>MyTasks</h1>
        <ul>
          {this.state.data.map((item, index) => {
            return <Task key={index}>{item.text}</Task>
          })}
        </ul>
      </div>
    )
  }
}

export default App
