import { combineEpics } from 'redux-observable'
import { getServicesEpic } from './services'

export const rootEpic = combineEpics(getServicesEpic)
