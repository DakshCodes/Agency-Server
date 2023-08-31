const router = require("express").Router();

const Contact = require("../models/contactModel");


// adding the new todo
router.post("/add-contact", async (req, res) => {

    try {

        const contact = new Contact(req.body)
        await contact.save();

        res.send({
            success: true,
            message: `Thank you for Contacting us ${req.body.first_name}, We will get back to you within 24 hours`
        })
    } catch (error) {
        res.send({
            success: false,
            message: error,
        })
    }

})

module.exports = router