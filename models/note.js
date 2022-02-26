const mongoose = require('mongoose')


const newSchema =new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 5
    },
    date: {
        type: Date,
        required: true,
    },
    important: Boolean,
})

newSchema.set('toJSON',{transform: (document, returnedObject) => {
 
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;

} })


module.exports = mongoose.model('Note', newSchema);

