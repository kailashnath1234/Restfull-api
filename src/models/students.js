const mongoose = require("mongoose");
const validator = require("validator")
const studentSchema = new mongoose.Schema({
    studentFirstName: {
        type: String

    },
    collegeName: {
        type: String

    },
    location: {
        type: String

    },
    quote: {
        type: String
    },
    author: {
        type: String
    },
    productName: {
        type: String
    },
    price: {
        type: String
    }

})


const User = mongoose.model('REGISTER', studentSchema);

module.exports = User;