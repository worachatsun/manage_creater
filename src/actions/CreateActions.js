import axios from 'axios'
import {STORE_CREATE_DATA, STORE_LOGO, CHOOSED_FEATURE, STORE_ALL_APP} from './types'
import { POST_APP_INFO, POST_USER_APP, POST_DOWNLOAD_ANDROID, POST_CHANGR_APP_DATAIL, POST_DELETE_APP } from '../api'

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
    return dispatchToReducer(CHOOSED_FEATURE, data)
}

export const saveAppInfo = data => {
    const { uni_abb, uni_name, uni_th_abb, uni_th_name, color } = data.create_data
    const { logo, feature_choosed, createdBy } = data

    return dispatch => {
        return axios.post(POST_APP_INFO, {
            uni_abb, 
            uni_name, 
            uni_th_abb, 
            uni_th_name,
            color,
            logo, 
            createdBy,
            features: feature_choosed
        }, {
            headers: { "Authorization": localStorage.getItem('key') }
        }).then(response => {
            console.log(response)
            // localStorage.setItem('key', response.data.token)
            // dispatch(saveUserData(response.data.user))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getUserApp = id => {
    return dispatch => {
        return axios.post(POST_USER_APP, {createdBy: id}, {
            headers: { "Authorization": localStorage.getItem('key') }
        }).then(response => {
            dispatch(dispatchToReducer(STORE_ALL_APP, response.data.apps))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const updateAppData = (data, _id) => {
    const { logo, color, features, uni_abb, uni_name, uni_th_abb, uni_th_name } = data

    return dispatch => {
        return axios.post(POST_CHANGR_APP_DATAIL, {
            _id,
            logo, 
            color, 
            features, 
            uni_abb, 
            uni_name, 
            uni_th_abb, 
            uni_th_name
        }, {
            headers: { "Authorization": localStorage.getItem('key') }
        }).then(response => {
            dispatch(dispatchToReducer(STORE_ALL_APP, response.data.apps))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const downloadAndroid = _id => {
    return dispatch => {
        return axios.get(POST_DOWNLOAD_ANDROID, {
            headers: { "Authorization": localStorage.getItem('key') }
        }).then(response => {
            console.log(response)
            //dispatch(dispatchToReducer(STORE_ALL_APP, response.data.apps))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteApp = _id => {
    return dispatch => {
        return axios.post(POST_DELETE_APP, {_id}, {
            headers: { "Authorization": localStorage.getItem('key') }
        }).then(response => {
            console.log(response)
            //dispatch(dispatchToReducer(STORE_ALL_APP, response.data.apps))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const dispatchToReducer = (type, payload) => {
    return {
        type,
        payload
    }
}