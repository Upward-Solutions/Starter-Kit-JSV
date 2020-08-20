import controllers from '../controllers/index.js'
import { SUCCES_CODE, showNotification } from '../utils/constants.js'

const getExampleSwapi = () => {
    controllers.exampleSwapi()
}

export const setSwapiView = (data) => {
    showNotification(data.message, data.code)
    if (data.code === SUCCES_CODE) {
        console.log(data);
    }
}

export default getExampleSwapi;