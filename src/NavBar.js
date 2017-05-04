import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

export class NavBar extends Component {
  render () {
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top app-navbar nav' >
        <div className='container' >
          <div className='navbar-header' />
          <div className='navbar-collapse collapse'>
            <ul className='navbar navbar-nav hidden-xs nav-menu'>
              <li className='item' ><Link className='nav-link' to='/' >Home</Link></li>
              <li className='item'><Link className='nav-link' to='/about' >About</Link></li>
              <li className='item'><Link className='nav-link' to='/contact' >Contact</Link></li>
            </ul>
            <Search />
          </div>
        </div>
      </nav>
    )
  }
}
