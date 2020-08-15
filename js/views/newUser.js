import {
    getInputsFromForm,
    createData,
    showNotification,
    ERROR_CODE
} from '../utils/constants.js'
import createNewUser from '../controllers/index.js'

export const newUserForm = async (event) => {
    event.preventDefault()
    let inputs = getInputsFromForm(event.target)
    let data = createData(inputs)
    let response = await createNewUser(data)

    if (response.code !== ERROR_CODE) {
        //create new HTML with backend data
    }
    showNotification(response.message, response.code)

}
