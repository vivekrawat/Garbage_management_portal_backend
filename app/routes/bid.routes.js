module.exports = app => {
    const bid = require("../controllers/bid.controllers")
    var router = require("express").Router();
    router.post("/addbid",bid.addbid)
    router.get("/:itemid",bid.getByItem)
    app.use('/api/bid',router)
}