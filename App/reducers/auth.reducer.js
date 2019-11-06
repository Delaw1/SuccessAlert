import { authenticationConstant } from '../constant/serviceConstant' 

const initialState = {}

export default AuthCall = (state = initialState, action) => {
    switch (action.type) {
        case authenticationConstant.AUTH_CALL_PENDING:
            return {
                status: authenticationConstant.AUTH_CALL_PENDING
            };
        case authenticationConstant.AUTH_CALL_SUCCESS:
            return {
                status: authenticationConstant.AUTH_CALL_SUCCESS
            };
        case authenticationConstant.AUTH_CALL_FAILURE:
            return {
                status: authenticationConstant.AUTH_CALL_FAILURE
            };
        default:
            return {
                ...state
            }
    }
}