const Question = require('../model/question')
const Option = require('../model/option')


// delete the option
module.exports.optionDelete = async (req, res) => {

    const optionId = req.params.id;

    try {
        await Option.findByIdAndDelete(optionId);
        res.status(200).json({ message: 'Option deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete the option.' });
    }

}



// vote to the options
module.exports.optionVote = async (req, res) => {

    const optionId = req.params.id;

  try {
    await Option.findByIdAndUpdate(optionId, { $inc: { votes: 1 } });
    res.status(200).json({ message: 'Vote added successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add the vote.' });
  }

}