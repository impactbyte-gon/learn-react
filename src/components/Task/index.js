import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTask = styled.li`
  margin-bottom: 10px;
`

class Task extends Component {
  render() {
    return <StyledTask>{this.props.children}</StyledTask>
  }
}

export default Task
