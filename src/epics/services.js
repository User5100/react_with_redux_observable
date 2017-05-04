import { ajax } from 'rxjs/Observable/dom/ajax'
import 'rxjs/add/operator/mergeMap'
import { FETCH_SERVICES_FULFILLED, FETCH_SERVICES } from '../actions'

const BASE_URL = require('../../config').baseUrl

// Action Creators
const fetchServicesFulfilled = payload => ({
  type: FETCH_SERVICES_FULFILLED,
  payload
})

export const fetchServices = () => ({
  type: FETCH_SERVICES
})

// Epics
export const getServicesEpic = action$ =>
  action$.ofType(FETCH_SERVICES)
         .mergeMap(action => ajax.getJSON(`${BASE_URL}services`)
         .map(response => fetchServicesFulfilled(response)))
