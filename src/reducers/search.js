import { SET_SEARCH_WORD } from '../actions'

const initialState = {
  searchWord: ''
}

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_WORD:
      return Object.assign({}, state, { searchWord: action.payload })

    default:
      return state
  }
}
