/* Date */

const SHORT_DATE = date => {
    moment(date).isValid() ? date = moment(date).format('MM/DD/YYYY') : date = 'Invalid date'
    return date
}

const SHORT_CURRENT_DATE = () => {
    return moment(new Date()).format('MM/DD/YYYY')
}

const FULL_DATE = date => {
    moment(date).isValid() ? date = moment(date).format('MM/DD/YYYY LT') : date = 'Invalid date'
    return date
}

const FULL_CURRENT_DATE = () => {
    return moment(new Date()).format('MM/DD/YYYY LT')
}


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

export default {
    SHORT_DATE,
    SHORT_CURRENT_DATE,
    FULL_DATE,
    FULL_CURRENT_DATE,
    DOLAR,
    PESOS
}