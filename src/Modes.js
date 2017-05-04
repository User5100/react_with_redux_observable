import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from './NavBar'

class _Modes extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className='container p-t-md home'>
          <div className='row'>
            <div className='col-md-6'>
              <ul className='list-group media-list media-list-stream'>
                {this.props.modes
        					    .filter(mode => mode.modeName.toUpperCase().indexOf(this.props.searchWord.toUpperCase()) >= 0)
        					    .map((mode, i) => (
          <Link
            to={`/services/${mode.modeName}`}
            className='nav-link' >
            <li className='media list-group-item p-a panel-link' key={i} >

              <div className='media-body'>
                <div className='media-heading'>
                  <h5>{mode.modeName}</h5>
                </div>
                <p />
              </div>

            </li>
          </Link>
        					    ))
        				}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  modes: state.modes.modes,
  searchWord: state.modes.searchWord
})

export const Modes = connect(mapStateToProps)(_Modes)
