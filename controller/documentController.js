const User = require('../models/user')
const Document = require('../models/document')


// api to get all codes of a user on dashboard
const getAllUserCodes = async (req, res) => {
    try {

        // getting user id from req as it has been stored in middleware
        const userId = req.user._id

        const document = await Document.find({user_id: userId}).sort({ createdAt: -1 })
        // console.log(document)
        res.status(200).json(document)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


// api to save a new code to the database
const saveNewCode = async (req, res) => {

    // getting data from client
    const data = req.body

    try {

        const userId = req.user._id

        // creating a new document
        const newDocument = new Document({
            value: data.codeValue,
            user_id: userId
        })

        // saving new document
        await newDocument.save()

        // document saved
        res.status(201).json(newDocument)
        
    } catch (error) {
        // document not saved
        res.status(400).json({message: error.message})
    }
}


// api to get saved code
const getSavedCode = async (req, res) => {

    // getting document based on id
    const id = req.params.id

    try {
        // searching database based on document id
        const document = await Document.findById(id)
        // document found
        // send document to client
        res.status(201).json(document)

    } catch (error) {
        // document not found
        res.status(400).json({message: error.message})
    }
}


// delete document from database
const deleteSavedDocument = async (req, res) => {
    try {
        // deleting document based on id
        await Document.deleteOne({_id: req.params.id})
        // document deleted successfully
        res.status(200).json({message: 'User Deleted Successfully'})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}


module.exports = { getAllUserCodes, saveNewCode, getSavedCode, deleteSavedDocument }