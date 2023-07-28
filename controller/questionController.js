const Question = require('../model/question')
const Option = require('../model/option')

// createing question
module.exports.questionCreate = async (req, res) => {

    const { question } = req.body;
    if (!question) {
        return res.status(400).json({ error: 'Question text is required.' });
    }

    try {
        const createdQuestion = await Question.create({ question });
        res.status(201).json({ id: createdQuestion._id, question });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create the question.' });
    }

}


// delete the question
module.exports.questionDelete = async (req, res) => {

    const questionId = req.params.id;

    try {
        await Option.deleteMany({ questionId });
        await Question.findByIdAndDelete(questionId);
        res.status(200).json({ message: 'Question deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete the question.' });
    }


}


// view the question with its options and votes
module.exports.questionView = async (req, res) => {

    const questionId = req.params.id;

    try {
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ error: 'Question not found.' });
        }

        const options = await Option.find({ questionId });
        const optionArr = []

        for (opt of options) {
            let obj = {
                id: opt._id,
                text: opt.option_text,
                votes: opt.votes,
                link_to_vote: `http://localhost:3000/options/${opt._id}/add_vote`
            }

            optionArr.push(obj)
        }

        const response = {
            id: questionId,
            title: question.question,
            options: optionArr
        };
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch the question and options.' });
    }

}



// creating the options
module.exports.optionCreate = async (req, res) => {

    const questionId = req.params.id;
    const { option_text } = req.body;
    if (!option_text) {
        return res.status(400).json({ error: 'Option text is required.' });
    }

    try {
        const option = await Option.create({ questionId, option_text });
        res.status(201).json({ id: option._id, question_id: questionId, option_text, votes: 0 });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create the option.' });
    }

}