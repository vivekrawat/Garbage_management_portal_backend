const authJwt = require("../middleware/authJwt")
const item = require("../controllers/item.controllers")
module.exports = app => {
    /*
    var router = require("express").Router();
    router.post("/additem",item.additem)
    router.get("/",item.getAllItems)

    router.get("/:sellerid",item.getById)
    router.put("/sell/:id/:cid/:name",item.movingToSold)
    router.put("/moveToHistory/:id",item.movingToHistory)
    router.get("/sold/:sellerid",item.getSold)
    router.get("/SellerHistory/:sellerid",item.getSellerHistory)
    router.get("/PurchaserHistory/:purchaserid",item.getPurchaserHistory)
    router.get("/purchases/:companyid",item.getPurchases)
    app.use('/api/item',router)
    */
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.post("/api/item/additem", authJwt.verifyToken, item.additem)
    app.get("/api/item/", authJwt.verifyToken, item.getAllItems)
    app.get("/api/item/:sellerid", authJwt.verifyToken, item.getById)
    app.put("/api/item/sell/:id/:cid/:name", authJwt.verifyToken,item.movingToSold)
    app.put("/api/item/moveToHistory/:id", authJwt.verifyToken,item.movingToHistory)
    app.get("/api/item/sold/:sellerid", authJwt.verifyToken,item.getSold)
    app.get("/api/item/SellerHistory/:sellerid", authJwt.verifyToken,item.getSellerHistory)
    app.get("/api/item/PurchaserHistory/:purchaserid", authJwt.verifyToken,item.getPurchaserHistory)
    app.get("/api/item/purchases/:companyid", authJwt.verifyToken,item.getPurchases)
}
