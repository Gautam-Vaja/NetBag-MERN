import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL } from "../Constants/UserConstants"

const initialState = { user: {} }
export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTRATION_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

        case LOGIN_FAIL:
        case REGISTRATION_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return { ...state }


    }


}