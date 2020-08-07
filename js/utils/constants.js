/* Company */

const FULL_COMPANY_NAME = 'Upward web and digital solutions'
const SHORT_COMPANY_NAME = 'Upward'


/* Date */

const getShortDate = date => moment(new Date(date)).format('DD/MM/YYYY');
const FULL_CURRENT_DATE = moment(new Date()).format('dd:mm:yyyy LLL')


/* Location */

const isMobile = screen.width < 800;


/* DOM Functions */

const getById = id => document.getElementById(id);
const getByClass = nameClass => document.getElementsByClassName(nameClass);
const getByTag = tag => document.getElementsByTagName(tag)
const hiddenElement = element => (element.hidden = true);
const showElement = element => (element.hidden = false);
const getInnerText = element => element.innerText;
const getInnerHTML = element => element.innerHTML;
const setInnerText = (element, content) => (element.innerText = content);
const setInnerHTML = (element, content) => (element.innerHTML = content);


/* Parse */

const DOLAR = value =>
    currency(value, {
        symbol: "USD ",
        decimal: ",",
        separator: ".",
    });

const PESOS = value =>
    currency(value, {
        symbol: "ARS ",
        decimal: ",",
        separator: ".",
    });
    
const randomInt = (min, max) => parseInt(Math.random() * max) + min;


/* Styles */

const SUCCESS_COLOR = '#97EB72'
const ERROR_COLOR = '#b41f1f'
