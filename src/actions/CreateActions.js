import axios from 'axios'
import {STORE_CREATE_DATA, STORE_LOGO} from './types'
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

// export const storeLogo = img => {
//     return dispatch => {
//         return axios.put(POST_UPLOAD_AVATAR, {
//             img
//         }).then(response => {
//             // localStorage.setItem('key', response.data.token)
//             // dispatch(saveUserData(response.data.user))
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }

export const dispatchToReducer = (type, payload) => {
    return {
        type,
        payload
    }
}