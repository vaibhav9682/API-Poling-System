const express = require('express')
const router = express.Router()
const questionController = require('../controller/questionController')


router.post('/create', questionController.questionCreate)
router.delete('/:id/delete', questionController.questionDelete)
router.post('/:id/options/create', questionController.optionCreate)
router.get('/:id', questionController.questionView)


module.exports = router;

