import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL, LOAD_USER_SUCCESS, LOAD_USER_REQUEST, LOAD_USER_FAIL, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL, UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_RESET
} from "../Constants/UserConstants"

const initialState = { user: {} }
export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTRATION_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case LOGIN_SUCCESS:
        case REGISTRATION_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
                userimg: action.payload.avatar.url,
                role: action.payload.role
            }

        case LOGIN_FAIL:
        case REGISTRATION_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case LOAD_USER_FAIL:
            return {
                error: action.payload,
            }
        case LOGOUT_USER_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false
            }
        case LOGOUT_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                error: "yeko"
            }
        default:
            return { ...state }
    }
}


export const UpdateUserReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                UpdatedUser: action.payload
            }

        case UPDATE_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case UPDATE_PROFILE_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                error: null
            }
        default:
            return { ...state }
    }
}