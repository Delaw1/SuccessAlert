import axios from 'axios'
import {alertAction} from './actions/alertAction'

export const api = (route, data, type, actionType, Token = null) => {
    return (dispatch) => {
        if (type.toLowerCase() == 'get') {
            let service = axios.get(route)
            dispatch(pending())
            service.then(resp => {
                dispatch(success(resp.data))
            }).catch(err => {
                dispatch(failure(err))
            })
        }
        else {
            const config = {
                headers: { "Content-Type": "application/json" },
            }
            let service = axios.post(route, data, config)
            dispatch(pending())
            service.then(resp => {
                console.warn(resp.response)
                dispatch(success(resp.data))
            }).catch(err => {
                dispatch(failure(err.response.data))
                dispatch(alertAction(err.response.data))
            })
        }
    }
    function pending() {
        return {type: actionType.pending}
    }
    function success(resp) {
        return {type: actionType.success, resp}
    }
    function failure(err) {
        return {type: actionType.failure, err}
    }
}