import React, { Component } from 'react'

import Counter from '../Counter'

import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
