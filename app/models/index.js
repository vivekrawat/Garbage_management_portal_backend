const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.seller = require("./seller.model.js")(sequelize, Sequelize);
db.company = require("./company.model.js")(sequelize, Sequelize);
db.item = require("./item.model.js")(sequelize, Sequelize);
db.bid = require("./bid.model.js")(sequelize, Sequelize);
db.feedback = require("./feedback.model.js")(sequelize,Sequelize)
module.exports = db;
