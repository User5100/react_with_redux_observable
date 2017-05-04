import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SET_SEARCH_WORD } from './actions'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/Observable/fromEvent'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

class _Search extends Component {
  componentDidMount () {
    Observable.fromEvent(document.querySelector('.form-control'), 'keyup')
              .map(keyEvent => keyEvent.target.value)
              .debounceTime(400)
              .distinctUntilChanged()
              .subscribe(word => {
                this.props.dispatch({ type: SET_SEARCH_WORD, payload: word })
              })
  }

  componentWillAmount () {
    // TODO - Unsubscribe from RxJS stream
  }

  render () {
    return (
      <form className='navbar-form navbar-right app-search' >
        <div className='form-group' >
          <input
            className='form-control input'
            placeholder='Search' />
        </div>
      </form>
    )
  }
}

const { func } = React.PropTypes

_Search.propTypes = {
  dispatch: func
}

export const Search = connect(() => ({}))(_Search)
