import { THEME_CHANGE } from "../Constants/ThemeConstant"

export const Theme = (themecolor) => async (dispatch) => {
    dispatch({
        type: THEME_CHANGE,
        payload: themecolor
    })

}