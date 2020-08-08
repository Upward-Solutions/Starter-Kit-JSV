/* Date */

const getShortDate = date => moment(new Date(date)).format('DD/MM/YYYY');
const FULL_CURRENT_DATE = moment(new Date()).format('dd:mm:yyyy LLL')


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