import axios from 'axios'
import { GET_USER_DATA, USER_LOGOUT } from './types'
import { POST_SIGNIN, GET_USER_DATA_API } from '../api'

export const signIn = data => {
    const { username, password } = data
    return dispatch => {
        return axios.post(POST_SIGNIN, {
            username,
            password
        }).then(response => {
            localStorage.setItem('key', response.data.token)
            dispatch(saveUserData(response.data.user))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const saveUserData = user => {
    return {
        type: GET_USER_DATA,
        payload: user
    }
}

export const checkUser = () => {
    return dispatch => {
        return axios.post(GET_USER_DATA_API, null, {
            headers: { "Authorization": localStorage.getItem('key') }
        }).then(response => {
            dispatch(saveUserData(response.data.user))
        })
    }
}

export const signOut = () => dispatch => {
    localStorage.clear()
    return dispatch({
        type: USER_LOGOUT
    })
}
