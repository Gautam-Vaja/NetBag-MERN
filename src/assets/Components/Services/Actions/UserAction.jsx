import axios from "axios";
import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_SUCCESS, REGISTRATION_FAIL, REGISTRATION_REQUEST, REGISTRATION_SUCCESS } from "../Constants/UserConstants";

const host = `http://localhost:8000/api/v1/user`

export const signin = (email, password) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_REQUEST })
        const config = { headers: { "Content-type": "application/json" }, withCredentials: true }
        const { data } = await axios.post(`${host}/signin`, { email, password }, config)
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.responce.data.message
        })
    }

}
export const registration = (userData) => async (dispatch) => {

    try {
        dispatch({ type: REGISTRATION_REQUEST })

        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
        const { data } = await axios.post(`${host}/register`, { userData }, config)
        dispatch({ type: REGISTRATION_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({
            type: REGISTRATION_FAIL,
            payload: error.responce.data.message
        })
    }

}
export const loadUser = () => async (dispatch) => {

    try {
        dispatch({ type: LOAD_USER_REQUEST })
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
        const { data, status } = await axios.get(`${host}/me`, config)

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.responce
        })
    }

}
export const logout = () => async (dispatch) => {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
        const { data } = await axios.get(`${host}/logout`, config)
        dispatch({ type: LOGOUT_USER_SUCCESS })
    } catch (error) {
        dispatch({
            type: LOGOUT_USER_FAIL,
            payload: error.responce.data.message
        })
    }

}

export const ClearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}