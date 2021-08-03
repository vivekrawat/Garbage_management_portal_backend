const db = require("../models");
const itemRoutes = require("../routes/item.routes");
const Item = db.item
// const Op = db.Sequelize.Op

exports.additem = (req,res) => {
    const Data = {
        sellerid: req.body.sellerid,
        companyid: req.body.companyid,
        status: req.body.status,
        itemimage: req.body.itemimage,
        title: req.body.title,
        itemtype: req.body.itemtype,
        expectedprice: req.body.expectedprice,
        estimatedweight: req.body.estimatedweight,
        address: req.body.address,
        zipcode: req.body.zipcode
    }
    Item.create(Data)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
}
exports.getAllItems = (req,res)=> {
    Item.findAll({
        where: {
            status: 'notSold'
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
exports.getById = (req,res)=> {
    const id = req.params.sellerid;
    Item.findAll({
        where: {
            status: 'notSold',
            sellerid: id
        }
    })
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
}
exports.movingToSold = (req,res) => {
  const id = req.params.id
  const cid = req.params.cid
  const name = req.params.name
  Item.findOne({
    where: {id:id}
  })
  .then(record => {
  
    if (!record) {
      throw new Error('No record found')
    }
    let values = {
      status : 'sold',
      companyid: cid,
      companyname: name
    }
    record.update(values).then( updatedRecord => {
      console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
    })
  
  })
  .catch((error) => {
    throw new Error(error)
  })
}
exports.getSold = (req,res)=> {
  const id = req.params.sellerid;
  Item.findAll({
      where: {
          status: 'sold',
          sellerid: id
      },
      order: [['updatedAt', 'DESC']]
  })
  .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
}
exports.getSellerHistory = (req,res)=> {
  const id = req.params.sellerid;
  Item.findAll({
      where: {
          status: 'history',
          sellerid: id
      }
  })
  .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
}
exports.getPurchaserHistory = (req,res)=> {
  const id = req.params.purchaserid;
  Item.findAll({
      where: {
          status: 'history',
          companyid: id
      }
  })
  .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
}
exports.movingToHistory = (req,res) => {
  const id = req.params.id
  Item.findOne({
    where: {id:id}
  })
  .then(record => {
  
    if (!record) {
      throw new Error('No record found')
    }
    let values = {
      status : 'history'
    }
    record.update(values).then( updatedRecord => {
      console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
    })
  
  })
  .catch((error) => {
    throw new Error(error)
  })
}
exports.getPurchases = (req,res) => {
  const id =req.params.companyid
  Item.findAll({
    where: {
        status: 'sold',
        companyid: id
    }
  })
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Tutorial with id=" + id
    });
  });
}
