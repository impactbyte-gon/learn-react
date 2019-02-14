import React, { Component } from 'react'
import styled from 'styled-components'

const StyledTask = styled.li`
  margin-bottom: 10px;
`

const DeleteButton = styled.button`
  margin-left: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 8px;
`

class Task extends Component {
  render() {
    return (
      <StyledTask>
        {this.props.children}

        <DeleteButton
          onClick={() => {
            this.props.removeTask(this.props.index)
          }}
        >
          DELETE
        </DeleteButton>
      </StyledTask>
    )
  }
}

export default Task
