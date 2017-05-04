import React, { Component } from 'react'
import { ajax } from 'rxjs/Observable/dom/ajax'
import { connect } from 'react-redux'
import { NavBar } from './NavBar'
const BASE_URL = require('../config').baseUrl

class _ServiceDetails extends Component {
  constructor () {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount () {
    // TODO - Create action and dispatch to redux store
    // Payload should be params.id i.e 'streets'
    ajax.getJSON(`${BASE_URL}streets`)
        .map(response => response)
        .subscribe(_data => this.setState({ data: _data }))
  }

  render () {
    let display

    if (this.state.data.length === 0) {
      display = <div><h2>Loading be patient...</h2></div>
    }

    if (this.state.data[0] === 'Cannot connect to API') {
      display = <div><h2>Bad connection</h2></div>
    } else {
      display = (
        <ul className='list-group media-list media-list-stream'>
          {this.state.data
            .filter(street => {
              if (!this.props.searchWord) {
                return true
              } else {
                return street.streetName.toUpperCase().indexOf(this.props.searchWord.toUpperCase()) >= 0
              }
            })
            .map((street, i) => {
              return (
                <li
                  key={i}
                  className='media list-group-item p-a'>
                  <div className='media-body'>
                    <div className='media-heading'>
                      <h5>{street.streetName}</h5>
                    </div>
                    <p>Latitude: {street.startLat}, Longitude: {street.startLon}</p>
                  </div>
                </li>
              )
            })}
        </ul>
      )
    }
    return (
      <div>
        <NavBar />
        <div className='container p-t-md home'>
          <div className='row'>
            <div className='col-md-6'>
              {display}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const { string } = React.PropTypes

_ServiceDetails.propTypes = {
  searchWord: string
}

const mapStateToProps = state => ({
  searchWord: state.search.searchWord
})

const ServiceDetails = connect(mapStateToProps)(_ServiceDetails)

export default ServiceDetails
