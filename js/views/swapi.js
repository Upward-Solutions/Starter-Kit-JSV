import controllers from '../controllers/index.js'
import { SUCCES_CODE, showNotification } from '../utils/constants.js'

const getExampleSwapi = async () => {
    let response = await controllers.exampleSwapi()
    showNotification(response.message, response.code)
}

export const setSwapiView = (data) => {
    if (data.code === SUCCES_CODE) {
        console.log(data);
    }
}

export default getExampleSwapi;