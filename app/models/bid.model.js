module.exports = (sequelize, Sequelize) => {
    const Bid = sequelize.define("bid", {
      companyid: {
        type: Sequelize.INTEGER
      },
      companyname: {
          type: Sequelize.STRING
      },
      itemid: {
          type: Sequelize.INTEGER
      },
      bidprice: {
        type: Sequelize.INTEGER
      }
    });
    return Bid
  };