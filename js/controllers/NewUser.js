import { _Request, _Response } from '../utils/factory.js'
import { isValid, FORM_ERROR, ERROR_CODE } from '../utils/constants.js'
import { fetchData } from '../models/index.js'

export const createNewUser = async data => {
    let request
    let response

    if (isValid(data) && isValidNewUser(data)) {
        request = _Request(data, 'newUser', 'POST')
        response = await fetchData(request)
    } else {
        response = _Response(FORM_ERROR, {}, ERROR_CODE)
    }

    return response
}


const isValidNewUser = data => {
    //custom vallidate
    return data['newUser-textarea-message'].length < 240
}
