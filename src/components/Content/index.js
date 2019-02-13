import React, { Component } from 'react'
import styled from 'styled-components'

import TaskForm from '../TaskForm'
import TaskList from '../TaskList'

const StyledContent = styled.div`
  background: #4a4a4a;
  color: white;
  flex: 1;
`

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

  addTask = inputText => {
    const newData = this.state.data.concat({
      text: inputText
    })

    this.setState({
      data: newData
    })
  }

  render() {
    return (
      <StyledContent>
        <TaskForm addTask={this.addTask} />
        <TaskList data={this.state.data} />
      </StyledContent>
    )
  }
}

export default Content
