const db = require("../models")
const Bid = db.bid
// const Op = db.Sequelize.Op

exports.addbid = (req,res) => {
    const Data = {
        companyid: req.body.companyid,
        companyname: req.body.companyname,
        itemid: req.body.itemid,
        bidprice: req.body.bidprice
    }
    Bid.create(Data)
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
exports.getByItem = (req,res) => {
    const id = req.params.itemid
    Bid.findAll(
        {
            where: {
            itemid : id
        }
    })
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
}