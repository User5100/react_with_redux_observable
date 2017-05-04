import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from './NavBar'
import store from './store'
import { fetchServices } from './epics/services'

class _Services extends Component {
  componentDidMount () {
    this.props.fetchServices()
  }
  render () {
    return (
      <div>
        <NavBar />
        <div className='container p-t-md home'>
          <div className='row'>
            <div className='col-md-6'>
              <ul className='list-group media-list media-list-stream'>
                {this.props.services.map((service, i) => (
                  <Link
                    key={i}
                    to={`/${service.name}`} 
                    className='nav-link' >
                    <li className='media list-group-item p-a panel-link' key={i} >

                      <div className='media-body'>
                        <div className='media-heading'>
                          <h5>{service.name}</h5>
                        </div>
                        <p />
                      </div>
                    </li>
                  </Link>))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const { func, arrayOf, object } = React.PropTypes

_Services.propTypes = {
  fetchServices: func,
  services: arrayOf(object)
}

const mapActionsToProps = dispatch => ({
  fetchServices () {
    store().dispatch(fetchServices())
  }
})

const mapStateToProps = state => ({
  services: state.services.services
})

export const Services = connect(mapStateToProps, mapActionsToProps)(_Services)
