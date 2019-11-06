import {apiCallConstant} from '../constant/apiCallConstant'

const initialState = {
    data: []
}

export const categoriesReducer = (state = {}, action) => {
    switch(action.type) {
        case apiCallConstant.API_CALL_PENDING:
            return {
                status: apiCallConstant.API_CALL_PENDING
            }
        case apiCallConstant.API_CALL_SUCCESS:
            return {
                status: apiCallConstant.API_CALL_SUCCESS,
                data: action.resp
            }
        case apiCallConstant.API_CALL_FAILURE:
            return {
                status: apiCallConstant.API_CALL_FAILURE
            }
        default:
            return {
                ...state
            }
    }
}

export const usersReducer = (state = {}, action) => {
    switch(action.type) {
        case apiCallConstant.USERS_CALL_PENDING: 
            return {
                status: apiCallConstant.USERS_CALL_PENDING
            }
        case apiCallConstant.USERS_CALL_SUCCESS:
            return {
                status: apiCallConstant.USERS_CALL_SUCCESS,
                data: action.resp
            }
        case apiCallConstant.USERS_CALL_FAILURE:
            return {
                status: apiCallConstant.USERS_CALL_FAILURE
            }
        default:
            return {
                ...state
            }
    }
}