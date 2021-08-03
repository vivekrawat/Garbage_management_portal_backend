module.exports = app => {
    const seller = require("../controllers/seller.controllers")
    var router = require("express").Router();
    router.post("/signup",seller.signup)
    router.post("/login",seller.login)
    app.use('/api/seller',router)
}