import React, { Component } from 'react'

import TaskForm from '../TaskForm'
import TaskList from '../TaskList'

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <TaskForm />
        <TaskList />
      </React.Fragment>
    )
  }
}

export default Content
