import axios from 'axios'
import {STORE_CREATE_DATA, STORE_LOGO, CHOOSED_FEATURE} from './types'
import { POST_UPLOAD_AVATAR } from '../api'

export const storeCreateData = data => {
    return {
        type: STORE_CREATE_DATA,
        payload: data
    }
}

export const storeLogo = img => {
    return {
        type: STORE_LOGO,
        payload: img
    }
}

export const chooseFeature = data => {
    console.log(data)
    return dispatchToReducer(CHOOSED_FEATURE, data)
}

export const dispatchToReducer = (type, payload) => {
    return {
        type,
        payload
    }
}