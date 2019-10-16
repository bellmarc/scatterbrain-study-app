const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const topicSchema = new Schema({
    topic: {
        type: String,
        required: true,
    },
    priority: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    currentWeight: {
        type: String,
        required: true,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    notes: {
        type: String,
    }
})


module.exports = mongoose.model("Topic", topicSchema)