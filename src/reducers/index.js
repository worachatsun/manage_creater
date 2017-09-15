import { combineReducers } from 'redux'
import CreateAppReducer from './CreateAppReducer'

export default combineReducers({
    create: CreateAppReducer,
})