import React, { Component } from 'react'

class Task extends Component {
  render() {
    return <li>{this.props.children}</li>
  }
}

export default Task
