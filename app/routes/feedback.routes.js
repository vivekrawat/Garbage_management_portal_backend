module.exports = app => {
    const feedback = require("../controllers/feedback.controllers")
    var router = require("express").Router();
    router.post("/",feedback.submitFeedback)
    app.use('/api/feedback',router)
}