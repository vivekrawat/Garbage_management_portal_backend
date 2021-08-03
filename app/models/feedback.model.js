module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("feedback", {
      userid: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      }
    });
    return Feedback;
  };