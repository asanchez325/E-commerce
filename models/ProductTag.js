const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Product model
class ProductTag extends Model {}

// create fields/columns for Product model
ProductTag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'product',
          key: 'id'
        }
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
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

  module.exports = ProductTag;