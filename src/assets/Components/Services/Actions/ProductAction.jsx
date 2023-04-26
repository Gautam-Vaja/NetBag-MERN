import axios from "axios";
import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../../Services/Constants/ProductConstants";

const host = "http://localhost:8000/api/v1"

export const GetProduct = (keyword = "", price = [0, 150000], Category, Rattings) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST })
        let link = `http://localhost:8000/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&rattings[gte]=${Rattings}`
        if (Category) {
            link = `http://localhost:8000/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${Category}&rattings[gte]=${Rattings}`
        }
        const { data } = await axios.get(link)
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data
        })
    }
}





export const GetProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`http://localhost:8000/api/v1/products/${id}`)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const ClearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}