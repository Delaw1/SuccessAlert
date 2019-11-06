import {alertConstant} from '../constant/alertConstant'

export const alertAction = (message, code=null) => {
    // const error = Object.assign({},{
    //     error: Object.keys(message.error_message).map(() => {
    //         return {
    //             [key]: message.error_message[key]
    //         }
    //     })
    // })
    let test = {
        name: null,
        type: null,
        err: null
    }
    let msg = {
        name: 1,
        type: 3,
        err: 5
    }
    let error = Object.keys(msg).map((key,i) => {
        return {
            key: msg[key]
        }
    })
    // const error = Object.keys(message.error_message).map((key, i) => {
    //     return {
    //         [key]: message.error_message[key]
    //     }
    // })
    // console.log(error)
    console.log(message.error_message)
    return {type: alertConstant.ERROR, message, status_code: code}
}