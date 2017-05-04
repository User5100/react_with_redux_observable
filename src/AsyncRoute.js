import React, { Component } from 'react'

export class AsyncRoute extends Component {
  constructor () {
    super()

    this.state = {
      loaded: false
    }
  }

  componentDidMount () {
    this.props.loadingPromise.then(module => {
      this.component = module.default
      this.setState({ loaded: true })
    })
  }

  render () {
    if (this.state.loaded) {
      return <this.component {...this.props} />
    } else {
      return <h1>...loading!</h1>
    }
  }
}

const { object } = React.PropTypes

AsyncRoute.propTypes = {
  loadingPromise: object
}
