import React, { Component } from 'react'
import { ajax } from 'rxjs/Observable/dom/ajax'
import { NavBar } from './NavBar'
const BASE_URL = require('../config').baseUrl

class DisruptedStreets extends Component {
  constructor () {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount () {
		// TODO - Create action and dispatch to redux store
		// Payload should be params.id i.e 'streets'
    ajax.getJSON(`${BASE_URL}${this.props.props.match.params.id}`)
	      .map(response => response)
	      .subscribe(_data => this.setState({ data: _data }))
  }

  render () {
    return (
      <div>
        <NavBar />
        <div className='container p-t-md'>
          <div className='row'>
            <div className='col-md-6'>
              <ul className='list-group media-list media-list-stream'>
                {this.state.data.map(street => {
                  return (
                    <li className='media list-group-item p-a'>
                      <div className='media-body'>
                        <div className='media-heading'>
                          <h5>{street.streetName}</h5>
                        </div>
                        <p>{street.comments}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DisruptedStreets
