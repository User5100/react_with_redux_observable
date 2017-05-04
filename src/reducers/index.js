import { combineReducers } from 'redux'
import { messages } from './messages'
import { tfl } from './tfl'
import { services } from './services'
import { search } from './search'

export const rootReducer = combineReducers({ services, messages, tfl, search })
