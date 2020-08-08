const newUserForm = (event) => {
    event.preventDefault()
    let inputs = getInputsFromForm(event.target)
    let data = createData(inputs)
    let response = createNewUser(data)
    if (response.code !== ERROR_CODE) {
        //create new HTML with backend data
    } 
    showNotification(response.message)
}