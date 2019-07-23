const  {Schema, model} = require('mongoose')

const noteSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    content : {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    date: Date

},{
    timestamps: true,
})

module.exports = model('Note', noteSchema);