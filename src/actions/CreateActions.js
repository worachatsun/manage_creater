import {STORE_CREATE_DATA, STORE_LOGO} from './types'

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