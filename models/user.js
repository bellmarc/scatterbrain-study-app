const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    interests: {
        type: String,
        required: false
    },
})


module.exports = mongoose.model("User", userSchema)