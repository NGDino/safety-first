const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Business model
class Category extends Model { }

// create fields/columns for Business model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //to show who added the category? might not need this
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id'
    //   }
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
);

module.exports = Category;