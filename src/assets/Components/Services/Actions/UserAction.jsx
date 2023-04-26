import axios from "axios";
import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTRATION_FAIL, REGISTRATION_REQUEST, REGISTRATION_SUCCESS } from "../Constants/UserConstants";
const host = `http://localhost:8000/api/v1/user`

export const signin = (email, password) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_REQUEST })
        const config = { headers: { "Content-type": "application/json" } }
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
        const config = { headers: { "Content-type": "multipart/form-data " } }
        const { data } = await axios.post(`${host}/register`, { userData }, config)
        dispatch({ type: REGISTRATION_SUCCESS, payload: data.user })

    } catch (error) {
        dispatch({
            type: REGISTRATION_FAIL,
            payload: error.responce.data.message
        })
    }

}

export const ClearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}