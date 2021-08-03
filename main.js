const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const db = require("./app/models");

db.sequelize.sync();
require("./app/routes/seller.routes")(app)
require("./app/routes/company.routes")(app)
require("./app/routes/item.routes")(app)
require("./app/routes/bid.routes")(app)
require("./app/routes/feedback.routes")(app)
app.listen(port, ()=>{
    console.log('this is reading at localhost')
})