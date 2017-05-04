import { GET_MESSAGES,
         LOAD_MESSAGES } from '../actions'

const initialState = {
  messages: ['A', 'B', 'C']
}

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return state

    case LOAD_MESSAGES:
      return state

    default:
      return state
  }
}
