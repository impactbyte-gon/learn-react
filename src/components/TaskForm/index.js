import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  padding: 10px;
`

const InputText = styled.input`
  height: 10px;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  width: 200px;
`

const SubmitButton = styled.input`
  color: white;
  background: #72a869;
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
`

class TaskForm extends Component {
  constructor() {
    super()

    this.state = {
      inputText: ''
    }
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  clearInputText = () => {
    this.setState({
      inputText: ''
    })
  }

  render() {
    return (
      <Form
        onSubmit={event => {
          event.preventDefault()
          this.props.addTask(this.state.inputText)
          this.clearInputText()
        }}
      >
        <InputText
          type="text"
          placeholder="What to do?"
          value={this.state.inputText}
          onChange={this.handleChange}
          required
        />
        <SubmitButton type="submit" value="Add" />
      </Form>
    )
  }
}

export default TaskForm
