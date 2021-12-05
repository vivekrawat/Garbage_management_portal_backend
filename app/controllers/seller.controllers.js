const db = require("../models")
const Seller = db.seller
//const Op = db.Sequelize.Op
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req,res) => {
    const Data = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
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
    Seller.findOne({
        where: {
            email: Email
        }
    })
    .then(data => {
        if (!data) {
            return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
            Password,
            data.password
        )
        if (!passwordIsValid) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
        }
        var token = jwt.sign({ id: data.id }, config.secret, {
            expiresIn: 86400 // 24 hours
          });

        var details = {
            "id": data.id,
            "name": data.name,
            "email": data.email,
            "address": data.address,
            "zipcode": data.zipcode,
            "accessToken": token
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