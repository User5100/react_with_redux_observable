import { ajax } from 'rxjs/Observable/dom/ajax'
import { FETCH_TFL_DATA,
	       FETCH_TFL_DATA_FULFILLED } from '../actions'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

const BASE_URL = require('../../config').baseUrl

const fetchData = data => ({ type: FETCH_TFL_DATA,
  payload: data })

// Action Creators
const fetchDataFulfilled = payload => ({
  type: FETCH_TFL_DATA_FULFILLED,
  payload
})

// Epics
export const tflEpic = action$ =>
	action$.ofType(FETCH_TFL_DATA)
	       .mergeMap(action =>
	         ajax.getJSON(BASE_URL)
	           .map(response => fetchDataFulfilled(response))
	       )

/* TODO - fetchCarParkFulfilled
export const tflCarParksEpic = action$ =>
	action$.ofType(FETCH_TFL_STREET_DATA)
	       .mergeMap(action =>
	         ajax.getJSON(`${BASE_URL}carparks`)
	           .map(response => fetchDataFulfilled(response))
	       );
*/
