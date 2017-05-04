import { FETCH_SERVICES_FULFILLED,
         FETCH_SERVICES } from '../actions'

const initialState = {
  services: [{ name: 'carparks' }, { name: 'streets' }]
}

export const services = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return state

    case FETCH_SERVICES_FULFILLED:
      return Object.assign({}, state, { services: action.payload })

    default:
      return state
  }
}
