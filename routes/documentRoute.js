const express = require('express')
const router = express.Router()

const documentController = require('../controller/documentController')
const requireAuth = require('../middleware/requireAuth')

// require auth for all document routes

router.get('/codes', requireAuth, documentController.getAllUserCodes) // dashboard
router.post('/new', requireAuth , documentController.saveNewCode) // creating new document
router.get('/:id', documentController.getSavedCode) // getting specific document
router.delete('/:id', requireAuth, documentController.deleteSavedDocument) // deleting a specific document

module.exports = router
