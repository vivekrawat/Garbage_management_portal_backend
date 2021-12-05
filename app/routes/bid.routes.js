const authJwt = require("../middleware/authJwt")
const controller = require("../controllers/bid.controllers");
module.exports = app => {
  /*
    const bid = require("../controllers/bid.controllers")
    var router = require("express").Router();
    router.post("/addbid",bid.addbid)
    router.get("/:itemid",bid.getByItem)
    app.use('/api/bid',router)
    */
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.get('/api/bid/:itemid', authJwt.verifyToken ,controller.getByItem)
    app.post('/api/bid/addbid', authJwt.verifyToken ,controller.addbid)
}