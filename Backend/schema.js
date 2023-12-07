const mongoose= require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type:String,
    },
    audio: {
        type:String,
    },
    video: {
        type: String,
    },
    image: {
        type: String, 
    },
})
module.exports = mongoose.model('task', taskSchema)















