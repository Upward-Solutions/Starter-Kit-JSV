/* New User */

const createNewUser = data => {
    let request
    let response

    if (isValid(data) && isValidNewUser(data)) {
        request = _Request(data, 'newUser', 'POST')
        response = fetchData(request)
    } else {
        response = _Response(FORM_ERROR, undefined, ERROR_CODE)
    }

    return response
}


const isValidNewUser = data => {
    //custom vallidate
    return data['newUser-textarea-message'].length < 240
}
