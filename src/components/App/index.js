import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../Header'
import Content from '../Content'

const Container = styled.div`
  width: 300px;
  height: 80vh;
  margin: 0 auto;
  border: 2px solid black;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
      </Container>
    )
  }
}

export default App
