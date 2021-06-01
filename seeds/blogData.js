const { Blog } = require("../models");

const blogData = [
  {
    title: "Cool 1 Blog Post",
    description: "This is the 1 blog post",
    user_id: 1,
  },
  {
    title: "Cool 2 Blog Post",
    description: "This is the 2 blog post",
    user_id: 4,
  },
  {
    title: "Cool 3 Blog Post",
    description: "This is the 3 blog post",
    user_id: 3,
  },
  {
    title: "Cool 4 Blog Post",
    description: "This is the 4 blog post",
    user_id: 2,
  },
];

const seedData = () => Blog.bulkCreate(blogData);

module.exports = seedData;
