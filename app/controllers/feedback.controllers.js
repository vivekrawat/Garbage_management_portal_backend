const db = require("../models")
const Feedback = db.feedback
// const Op = db.Sequelize.Op

exports.submitFeedback = (req,res) => {
    const Data = {
        userid: req.body.id,
        type: req.body.type,
        name: req.body.name,
        rating: req.body.rating,
        description: req.body.description
    }
    Feedback.create(Data)
    .then(data => {
        // res.send(data)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
}
