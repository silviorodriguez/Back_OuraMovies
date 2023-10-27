const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por Favor teclea un nombre']
    },

    email: {
        type: String,
        required: [true, 'Por Favor teclea un Email'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Por Favor teclea tu Password']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)

