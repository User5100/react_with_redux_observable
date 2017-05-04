import '../assets/css/styles.css'
import '../assets/css/application.css'
import '../assets/css/docs.css'
import '../assets/css/toolkit.css'
// import bootstap from 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'
import App from './app'

// BrowerRouter interacts with window.location avoid running it
// in the node environment
render(<Router><App /></Router>, document.getElementById('app'))
