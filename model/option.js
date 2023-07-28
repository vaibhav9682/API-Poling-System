const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
    option_text: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
});



const Option = mongoose.model('Option', optionSchema);
module.exports = Option;