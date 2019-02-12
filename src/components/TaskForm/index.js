import React, { Component } from 'react'

class TaskForm extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="task-input"
          placeholder="What to do?"
          required
        />
        <input type="button" value="Add" />
      </form>
    )
  }
}

export default TaskForm
