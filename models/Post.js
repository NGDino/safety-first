const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model { }

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //establish relationship between post and user by referencing user model. user id defined as foreign key
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    //establish relationship between post and business
    business_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'business',
        key: 'id'
      }
    },
    
    mask_required: {
      type: DataTypes.BOOLEAN,
    },
    staff_mask: {
      type: DataTypes.BOOLEAN,
    },
    staff_gloves: {
      type: DataTypes.BOOLEAN,
    },
    contactless_payment: {
      type: DataTypes.BOOLEAN,
    },
    handsanitizer_provided: {
      type: DataTypes.BOOLEAN,
    },
    social_distancing: {
      type: DataTypes.BOOLEAN,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;