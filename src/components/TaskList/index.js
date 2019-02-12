import React, { Component } from 'react'

import Task from '../Task'

class TaskList extends Component {
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
      <ul>
        {this.state.data.map((item, index) => {
          return <Task key={index}>{item.text}</Task>
        })}
      </ul>
    )
  }
}

export default TaskList
