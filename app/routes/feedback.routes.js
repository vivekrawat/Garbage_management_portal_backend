const authJwt = require("../middleware/authJwt")
const feedback = require("../controllers/feedback.controllers")
module.exports = app => {
    /*
    var router = require("express").Router();
    router.post("/",feedback.submitFeedback)
    app.use('/api/feedback',router)
    */
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.post("/api/feedback", authJwt.verifyToken, feedback.submitFeedback)
}