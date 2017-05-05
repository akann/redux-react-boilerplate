import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import App from '../components/App'

class AppContainer extends Component {
  static propTypes = {
  }

  render() {
    return (
        <App />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

export default connect(mapStateToProps)(AppContainer)
