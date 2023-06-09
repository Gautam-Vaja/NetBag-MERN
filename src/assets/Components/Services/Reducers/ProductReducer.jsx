import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, CLEAR_ERRORS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS } from "../Constants/ProductConstants"
const initialState = { products: [] }
export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {

        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                product: []
            }

        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload.product,
                productCount: action.payload.productCount,
                resultPerPage: action.payload.resultPerPage,
                fillteredProductsCount: action.payload.fillteredProductCount

            }

        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
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

const initialState2 = { product: {} }
export const ProductDetailsReducer = (state = initialState2, action) => {
    switch (action.type) {

        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload.product
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state

    }
}