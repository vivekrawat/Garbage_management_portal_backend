module.exports = app => {
    const item = require("../controllers/item.controllers")
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
}