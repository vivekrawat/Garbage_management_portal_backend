module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
      sellerid: {
        type: Sequelize.INTEGER
      },
      companyid: {
        type: Sequelize.INTEGER
      },
      status: {
         type: Sequelize.STRING
      },
      itemimage: {
          type: Sequelize.TEXT
      },
      title: {
        type: Sequelize.STRING
      },
      itemtype: {
        type: Sequelize.STRING
      },
      expectedprice: {
        type: Sequelize.INTEGER
      },
      estimatedweight: {
        type: Sequelize.FLOAT
      },
      address: {
          type: Sequelize.STRING
      },
      zipcode: {
          type: Sequelize.INTEGER
      },
      companyname: {
          type: Sequelize.STRING
      }
    });
    return Item;
  };