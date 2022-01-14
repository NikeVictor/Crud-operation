const mongoose = require ('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    designation: {
        type: String,
        required: [true, "must be designated"],
        // trim: true
    },
    email: {
        type: String,
        required: [true, "must provid an email"],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "input a phone number"],
        trim: true
    },
    age: {
        type: Number,
        required: [true, "age must be filled in"],
        trim: true
    },
})


module.exports = mongoose.model('employee', employeeSchema);