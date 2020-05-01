const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const coffes = sequelize.define(
  "coffes",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bean: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);
module.exports = coffes;
// "use strict";
// module.exports = (sequelize, DataTypes) => {
//   const coffe = sequelize.define(
//     "coffes",
//     {
//       name: DataTypes.STRING,
//       bean: DataTypes.STRING,
//       price: DataTypes.STRING,
//     },
//     {}
//   );
//   coffe.associate = function (models) {
//     // associations can be defined here
//   };
//   return coffe;
// };
