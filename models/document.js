const mongoose = require('mongoose')

const documentSchema = mongoose.Schema({
    value: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        immutable: true, // cannot be changed
        default: () => Date.now() // saves date everytime document is added
    },
    user_id: {
        type: String, 
        required: true
    }
})

const document = mongoose.model('document', documentSchema)

module.exports = document