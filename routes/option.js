const express = require('express')
const router = express.Router()
const optionController = require('../controller/optionController')

router.delete('/:id/delete', optionController.optionDelete)
router.post('/:id/add_vote', optionController.optionVote)


module.exports = router;