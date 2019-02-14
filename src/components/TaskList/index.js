import React, { Component } from 'react'
import styled from 'styled-components'

import Task from '../Task'

const StyledTaskList = styled.div``

class TaskList extends Component {
  render() {
    return (
      <StyledTaskList>
        <ul>
          {this.props.data.map((item, index) => {
            return (
              <Task
                key={index}
                index={index}
                removeTask={this.props.removeTask}
              >
                {item.text}
              </Task>
            )
          })}
        </ul>
      </StyledTaskList>
    )
  }
}

export default TaskList
