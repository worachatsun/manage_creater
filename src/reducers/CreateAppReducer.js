import { Map } from 'immutable'
import {STORE_CREATE_DATA, STORE_LOGO} from '../actions/types'

const INITIAL_STATE = Map({
    create_data: {
        uni_name: '',
        uni_abb: '',
        uni_th_name: '',
        uni_th_abb: '',
        color: ''
    },
    logo: ''
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_CREATE_DATA:
            return state.set('create_data', action.payload)
        case STORE_LOGO:
            return state.set('logo', action.payload)
        default:
            return state
    }
}