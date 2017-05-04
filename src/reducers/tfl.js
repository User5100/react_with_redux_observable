import { FETCH_TFL_DATA, FETCH_TFL_DATA_FULFILLED } from '../actions'

const initialState = {
  tflData: ['TFL Initial State']
}

export const tfl = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TFL_DATA_FULFILLED:
      return { tflData: action.payload }

    case FETCH_TFL_DATA: return state

    default: return state
  }
}
