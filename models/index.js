//collecting from the user model and exporting user data
const User = require("./User");
const Category = require('./Category');
const Business = require('./Business');
const Post = require("./Post");
// const Vote = require('./Vote');
// const Comment = require('./Comment');

// create associations
//user can have many models associated to it
User.hasMany(Post, {
  foreignKey: "user_id",
});

//Post only belongs to user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

//BUSINESS
//user can have many models associated to it
// User.hasMany(Business, {
//   foreignKey: "user_id",
// });

//business can have many posts associated to it
Business.hasMany(Post, {
  foreignKey: "business_id",
});

//Post only belongs to user
Post.belongsTo(Business, {
  foreignKey: "business_id",
});

Category.hasMany(Business, {
  foreignKey: "category_id"
})

Business.belongsTo(Category, {
  foreignKey: "category_id"
})


//exporting object with user model as a property
module.exports = { User, Post, Business, Category };
