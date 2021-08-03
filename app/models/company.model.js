module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
      companyname: {
          type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
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