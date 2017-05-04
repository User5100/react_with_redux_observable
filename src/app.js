import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import store from './store'
import { AsyncRoute } from './AsyncRoute'

if (global) {
  global.System = { import () {} }
}

class App extends Component {
  render () {
    return (<Provider store={store()} >
      <div>
        <Switch>
          <Route
            exact path='/'
            component={() =>
              <AsyncRoute
                loadingPromise={System.import('./Home')} />} />
          <Route
            path='/about'
            component={() =>
              <AsyncRoute
                loadingPromise={System.import('./About')} />} />
          <Route
            path='/contact'
            component={() =>
              <AsyncRoute
                loadingPromise={System.import('./Contact')} />} />
          <Route
            path='/streets'
            component={(props) =>
              <AsyncRoute
                props={props}
                loadingPromise={System.import('./ServiceDetails')} />} />
          <Route
            path='/carparks'
            component={(props) =>
              <AsyncRoute
                props={props}
                loadingPromise={System.import('./CarParks')} />} />
        </Switch>
      </div>
    </Provider>)
  }
}

export default App
