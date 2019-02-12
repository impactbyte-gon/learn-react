import React, { Component } from 'react'

import Task from '../Task'

class TaskList extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map((item, index) => {
          return <Task key={index}>{item.text}</Task>
        })}
      </ul>
    )
  }
}

export default TaskList
