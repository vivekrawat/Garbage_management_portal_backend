module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
      companyname: {
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
    return Company;
  };