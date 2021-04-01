const Sequelize = require("sequelize");

module.exports.getUsers = (sequelize) => {
  const Users = sequelize.define("user", {
    name: { type: Sequelize.STRING },
    id: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },
    icon: { type: Sequelize.STRING },
    profile: {
      type: Sequelize.STRING,
    },
    password: { type: Sequelize.STRING, allowNull: false },
  });

  Users.sync();

  return { Users };
};
