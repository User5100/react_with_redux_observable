import React, { Component } from 'react'
import { ajax } from 'rxjs/Observable/dom/ajax'
import { connect } from 'react-redux'
import { NavBar } from './NavBar'
const BASE_URL = require('../config').baseUrl

class _CarParks extends Component {
  constructor () {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount () {
    // TODO - Create action and dispatch to redux store
    // Payload should be params.id i.e 'streets'
    ajax.getJSON(`${BASE_URL}carparks`)
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
            .filter(carPark => {
              if (this.props.searchWord === '') {
                return true
              } else {
                return carPark.name.toUpperCase().indexOf(this.props.searchWord.toUpperCase()) >= 0
              }
            })
            .map((carPark, i) => {
              return (
                <li
                  key={i}
                  className='media list-group-item p-a'>
                  <div className='media-body'>
                    <div className='media-heading'>
                      <h5>{carPark.name}</h5>
                    </div>
                    {carPark.bays.map((bay, i) => {
                      return (
                        <p key={i}>{bay.bayType} Count: {bay.bayCount} Free: {bay.free} Occupied: {bay.occupied}</p>
                      )
                    })}
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

_CarParks.propTypes = {
  searchWord: string
}

const mapStateToProps = state => ({
  searchWord: state.search.searchWord
})

const CarParks = connect(mapStateToProps)(_CarParks)

export default CarParks
