import { Map } from 'immutable'
import {STORE_CREATE_DATA, STORE_LOGO, CHOOSED_FEATURE} from '../actions/types'

const INITIAL_STATE = Map({
    create_data: {
        uni_name: '',
        uni_abb: '',
        uni_th_name: '',
        uni_th_abb: '',
        color: ''
    },
    logo: '',
    feature_choosed: {
        news: true,
        event: true,
        donate: true,
        career: true
    }
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_CREATE_DATA:
            return state.set('create_data', action.payload)
        case STORE_LOGO:
            return state.set('logo', action.payload)
        case CHOOSED_FEATURE:
            return state.set('feature_choosed', action.payload)
        default:
            return state
    }
}