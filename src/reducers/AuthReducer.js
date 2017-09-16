import { Map } from 'immutable'
import { GET_USER_DATA, USER_LOGOUT, STORE_AVATAR } from '../actions/types'

const INITIAL_STATE = Map({
    user: {},
    avatar: '',
    isLoggedIn: false
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            return state.set('user', action.payload).set('isLoggedIn', true)
        case USER_LOGOUT:
            return state = INITIAL_STATE
        case STORE_AVATAR:
            return state.set('avatar', action.payload)
        default:
            return state
    }
}