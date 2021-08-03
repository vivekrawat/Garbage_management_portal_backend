const db = require("../models")
const Company = db.company
// const Op = db.Sequelize.Op

exports.signup = (req,res) => {
    const Data = {
        companyname: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        zipcode: req.body.zipcode
    }
    Company.create(Data)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
}
exports.login = (req,res) => {
    const Email = req.body.email
    const Password = req.body.password
    Company.findAll({
        where: {
            email: Email,
            password: Password
        }
    })
    .then(data => {
        var details = {
            "id": data[0].id,
            "name": data[0].companyname,
            "email": data[0].email,
            "address": data[0].address,
            "zipcode": data[0].zipcode
        }
        // details = JSON.stringify(details)
        res.json(details)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred"
        });
      });
}