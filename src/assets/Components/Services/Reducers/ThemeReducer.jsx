import { THEME_CHANGE } from "../Constants/ThemeConstant"


export const ThemeReducer = (state = { theme: "light" }, action) => {
    switch (action.type) {


        case THEME_CHANGE:
            return {
                loading: false,
                theme: action.payload
            }

        default:
            return { ...state }

    }
}
