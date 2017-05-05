import React, { Component } from 'react'
import PropTypes from 'prop-types'

import HelloWorld from './HelloWorld'

class App extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <HelloWorld name="Akan"/>
      </div>
    )
  }
}

export default App
