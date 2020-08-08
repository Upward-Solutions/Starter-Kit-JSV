/* Custom */

const FULL_COMPANY_NAME = 'Upward web and digital solutions';
const SHORT_COMPANY_NAME = 'Upward';


/* Location */

const IS_MOBILE = screen.width < 800
const CURRENT_URL = document.location.pathname
const IS_INDEX = url.includes('index')


/* DOM Functions */

const getById = id => document.getElementById(id)
const getByClass = nameClass => document.getElementsByClassName(nameClass)
const getByTag = tag => document.getElementsByTagName(tag)

const hiddenElement = element => (element.hidden = true)
const showElement = element => (element.hidden = false)

const getInnerText = element => element.innerText
const getInnerHTML = element => element.innerHTML
const setInnerText = (element, content) => (element.innerText = content)
const setInnerHTML = (element, content) => (element.innerHTML = content)


/* Form */

const getInputsFromForm = form => {
    let childrens = Array.from(form.children)
    let inputs = childrens.filter(children => children.tagName === 'INPUT'
        || children.tagName === 'TEXTAREA');

    return inputs
}

const createData = inputs => {
    let data = {}
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            data[input.name] = input.checked
        } else {
            data[input.name] = input.value
        }
    })

    return data
}

/**
 * @param {Object} data Objeto data compuesto de inputs de cualquier forms
 * @description Esta función valida que los input hayan registrado un valor 
 * equivalente al tipo que representan. Ej. (email == email)
 */

const isValid = data => {
    let valid = true
    for (const key in data) {
        let type = key.split('-')[1]
        let value = data[key]
        switch (type) {
            case 'text':
                valid = REG_EX_TEXT.test(value)
                break;
            case 'number':
                valid = REG_EX_NUMBER.test(value)
                break;
            case 'textarea':
                valid = REG_EX_TEXTAREA.test(value)
                break;
            case 'email':
                valid = REG_EX_EMAIL.test(value)
                break;
            case 'checkbox':
                valid = value
                break;
            default:
                break;
        }
    }
    return valid
}


/* Math */

const randomInt = (min, max) => parseInt(Math.random() * max) + min


/* Styles */

const SUCCESS_COLOR = '#97EB72'
const ERROR_COLOR = '#b41f1f'


/* Messages */

const SUCCESS_MESSAGE = 'Transacción realizada con éxito'
const GENERAL_ERROR = 'Ocurrió un error inesperado'
const FORM_ERROR = 'Alguno de los campos no cumple con los requisitos esperados'

const showNotification = (message, code) => {
    alert(`${code}: ${message}`)
}


/* Codes */

const ERROR_CODE = 'ERROR'
const SUCCES_CODE = 'SUCCES'
const WARNING_CODE = 'WARNING'


/* Regular Expressions */

const REG_EX_TEXT = /^[A-Za-z0-9]*$/
const REG_EX_NUMBER = /^[0-9]*$/
const REG_EX_TEXTAREA = /^[A-Za-z0-9]*$/
const REG_EX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/* API */

const API_URL = 'http://localhost:8282/api/v1'