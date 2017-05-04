import React from 'react'
import { connect } from 'react-redux'
import { FETCH_TFL_DATA, FETCH_MODES } from './actions'
import store from './store'
import { Services } from './Services'

const _Home = () => (<Services />)

const mapActionsToProps = (dispatch) => ({
  fetchTflData () {
    store().dispatch({ type: FETCH_TFL_DATA })
  },
  fetchModes () {
    store().dispatch({ type: FETCH_MODES })
  }
})

const mapStateToProps = (state) => ({
  messages: state.messages,
  tflData: state.tfl.tflData
})

const Home = connect(mapStateToProps, mapActionsToProps)(_Home)

export default Home
