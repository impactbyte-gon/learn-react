import React, { Component } from 'react'

import TaskForm from '../TaskForm'
import TaskList from '../TaskList'

class Content extends Component {
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

  addTask = (event, inputText) => {
    event.preventDefault()

    const newData = this.state.data.concat({
      text: inputText
    })

    this.setState({
      data: newData
    })
  }

  render() {
    return (
      <React.Fragment>
        <TaskForm addTask={this.addTask} />
        <TaskList data={this.state.data} />
      </React.Fragment>
    )
  }
}

export default Content
