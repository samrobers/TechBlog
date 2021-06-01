// import models
const User = require("./User");
const Blog = require("./blog");
const Comment = require("./comment");

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});
// Categories have many Products
User.hasMany(Blog, {
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
User.hasMany(Comment, {
  onDelete: "CASCADE",
});
// Tags belongToMany Products (through ProductTag)
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Comment,
  Blog,
};
