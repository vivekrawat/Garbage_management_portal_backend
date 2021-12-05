module.exports = (sequelize, Sequelize) => {
    const Seller = sequelize.define("seller", {
      name: {
          type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      address: {
          type: Sequelize.STRING
      },
      zipcode: {
          type: Sequelize.INTEGER
      }
    });
  
    return Seller;
  };