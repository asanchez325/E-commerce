const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Category extends Model {}

Category.init(
    {
      // define an id column
      id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
      },
      // define a username column
      name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
       
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'category'
    }
  );

module.exports = Category;