import {authenticationConstant} from '../constant/serviceConstant'
import {api} from '../api'
import {routes} from '../service/routes'

const authConstant = {
    success: authenticationConstant.AUTH_CALL_SUCCESS,
    pending: authenticationConstant.AUTH_CALL_PENDING,
    failure: authenticationConstant.AUTH_CALL_FAILURE,
}

const register = (data) => {
 return api(routes.REGISTER, data, 'post', authConstant)
}

const login = (data) => {
    return api(routes.LOGIN, data, 'post', authConstant)
}

export const authAction = {
    register,
    login
}