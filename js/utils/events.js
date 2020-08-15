import { IS_INDEX, getById } from './constants.js'
import newUserForm from '../views/index.js'

export const createEvents = () => {
    if (IS_INDEX) {
        getById('test-form').addEventListener('submit', newUserForm)
    } else {
        // global envents
    }

}
