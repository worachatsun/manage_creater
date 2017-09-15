import { combineReducers } from 'redux'
import CreateAppReducer from './CreateAppReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
    create: CreateAppReducer,
    auth: AuthReducer,
})