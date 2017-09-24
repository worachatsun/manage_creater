import axios from 'axios'
import { GET_USER_DATA, USER_LOGOUT, STORE_AVATAR } from './types'
import { POST_SIGNIN, GET_USER_DATA_API, POST_REGISTER, POST_CHANGR_PASSWORD, PUT_UPDATE_USER } from '../api'

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

export const signUp = data => {
    const {username, password, email, firstname, lastname, location, university, tel, avatar} = data
    return dispatch => {
        return axios.post(POST_REGISTER, {
            username, 
            password, 
            email, 
            firstname, 
            lastname, 
            location, 
            university, 
            tel, 
            avatar
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

export const changePassword = (data, _id) => {
    const { newPassword, oldPassword } = data
    return dispatch => {
        return axios.post(POST_CHANGR_PASSWORD, {
            _id, 
            oldPassword, 
            newPassword
        }, {
            headers: { "Authorization": localStorage.getItem('key') }
        }).then(response => {
            dispatch(signOut())
        })
    }
}

export const storeAvatar = img => {
    return {
        type: STORE_AVATAR,
        payload: img
    }
}

export const signOut = () => dispatch => {
    localStorage.clear()
    return dispatch({
        type: USER_LOGOUT
    })
}


export const updateUserData = (data, _id) => {
    const { tel, avatar, email, firstname, lastname, location, university} = data
    return dispatch => {
        return axios.put(PUT_UPDATE_USER, {
            _id,
            tel, 
            avatar, 
            email, 
            firstname, 
            lastname, 
            location, 
            university
        }, {
            headers: { "Authorization": localStorage.getItem('key') }
        }).then(response => {
            dispatch(saveUserData(response.data.user))
        })
    }
}
