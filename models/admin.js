const { default: mongoose } = require("mongoose");

const adminSchema =new mongoose.Schema({
    name: String,
    email: String,
    passwordHash: String,
    reset_OTP: String,
    tickets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket'
        }
    ]
})
const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin;