const mongoose = require('mongoose')

const url = `mongodb+srv://vcbikash123:Bikas9697@cluster0.luzuk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)

const nodeSchema = new mongoose.Schema({
        content: String,
        date: Date,
        important: Boolean,
    })
    
const Note = mongoose.model('Note', nodeSchema)

const note = new Note({
    content : "This was html",
    date : new Date(),
    important : true,
})

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})