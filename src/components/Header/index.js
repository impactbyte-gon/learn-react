import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  text-align: center;
  color: white;
  font-size: 20px;
  padding: 10px 0;
  background-image: url('/assets/background-header.jpg');
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>MyTasks</h1>
      </StyledHeader>
    )
  }
}

export default Header
