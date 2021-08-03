const db = require("../models")
const Seller = db.seller
//const Op = db.Sequelize.Op

exports.signup = (req,res) => {
    const Data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        zipcode: req.body.zipcode
    }
    Seller.create(Data)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred"
        });
      });
}
exports.login = (req,res) => {
    const Email = req.body.email
    const Password = req.body.password
    Seller.findAll({
        where: {
            email: Email,
            password: Password
        }
    })
    .then(data => {
        var details = {
            "id": data[0].id,
            "name": data[0].name,
            "email": data[0].email,
            "address": data[0].address,
            "zipcode": data[0].zipcode
        }
        res.json(details)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred"
        });
      });
}