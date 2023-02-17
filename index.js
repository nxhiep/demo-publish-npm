const moment = require("moment");
const { test } = require("./func");

const formatDate = (date) => {
    test();
    return moment(date).format("dd/MM/yyyy");
}

const isValidateEmail = (email) => {
    return !!email && !!String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


module.exports = {
    formatDate,
    isValidateEmail
}