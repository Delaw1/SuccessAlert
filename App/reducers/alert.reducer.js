import { alertConstant } from '../constant/alertConstant'

// const initialState = {
//         name: null,
//         username: null,
//         email: null,
//         phone_no: null,
//         password: null,
//         password_confirmation: null
// }
export default alert = (state = {}, action) => {
    switch (action.type) {
        case alertConstant.ERROR:
            return {
                status: alertConstant.ERROR,
                ...action.message.error_message,
                status_code: action.status_code
            }
        case alertConstant.UPDATE:
            return {
                ...initialState,
                [action.data]: action.msg
            }
        case alertConstant.CLEAR:
            return {
                ...initialState,
                [action.data]: null
            }
        default:
            return {
                ...state
            }
    }
}