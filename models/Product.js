const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Product model
class Product extends Model {}

// create fields/columns for Product model
Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'category',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'product'
    }
  );

  module.exports = Product;