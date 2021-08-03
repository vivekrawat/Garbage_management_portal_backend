module.exports = app => {
    const company = require("../controllers/company.controllers")
    var router = require("express").Router();
    router.post("/signup",company.signup)
    router.post("/login",company.login)
    app.use('/api/company',router)
}