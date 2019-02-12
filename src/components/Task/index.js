import React, { Component } from 'react'

import './index.css'

class Task extends Component {
  render() {
    return <li className="task">{this.props.children}</li>
  }
}

export default Task
