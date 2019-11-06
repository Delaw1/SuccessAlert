import {apiCallConstant} from '../constant/apiCallConstant'
import {api} from '../api'
import {routes} from '../service/routes'

const categoriesConstant = {
    pending: apiCallConstant.API_CALL_PENDING,
    success: apiCallConstant.API_CALL_SUCCESS,
    failure: apiCallConstant.API_CALL_FAILURE,
}

const usersConstant = {
    pending: apiCallConstant.USERS_CALL_PENDING,
    success: apiCallConstant.USERS_CALL_SUCCESS,
    failure: apiCallConstant.USERS_CALL_FAILURE,
}

const getCategories = () => {
    return api(routes.CATEGORIES, null,'get', categoriesConstant)
}

const getUsers = () => {
    return api(routes.USERS, null, 'get', usersConstant)
}

export const apiAction = {
    getCategories,
    getUsers
}