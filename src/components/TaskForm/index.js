import React, { Component } from 'react'

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
      <form
        onSubmit={event => {
          event.preventDefault()
          this.props.addTask(event, this.state.inputText)
          this.clearInputText()
        }}
      >
        <input
          type="text"
          placeholder="What to do?"
          value={this.state.inputText}
          onChange={this.handleChange}
          required
        />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default TaskForm
