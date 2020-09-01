const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Business model
class Business extends Model { }

// create fields/columns for Business model
Business.init(
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
    business_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    category_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    //to show who added the business? might not need this
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id'
    //   }
    // },
    // safety_measures: {
    //   type: DataTypes.BOOLEAN,
    //   // references: {
    //   //   model: 'safety',
    //   //   key: 'id'
    //   // }
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'business'
  }
);

module.exports = Business;