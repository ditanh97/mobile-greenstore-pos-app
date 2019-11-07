import {GET_PRODUCT, GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS} from '../constants'

const initialState = {
    productList: [],
    isLoading: false,
    error: null,
}


const prodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                isLoading: true,
                error: null,
                productList: []
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                productList: action.payload.data.result
            }
        case GET_PRODUCT_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                productList: []
            }
        default:
            return state
    }
    
}

export default prodReducer
