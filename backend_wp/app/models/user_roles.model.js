module.exports = (sequelize, Sequelize) => {
  const user_roles = sequelize.define("user_roles", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  },
  { timestamps: false });

  return user_roles;
};
