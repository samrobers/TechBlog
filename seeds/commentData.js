const { Comment } = require("../models");

const commentData = [
  {
    comment: "123",
    user_id: 3,
  },
  {
    comment: "321",
    user_id: 4,
  },
  {
    comment: "456",
    user_id: 1,
  },
  {
    comment: "765",
    user_id: 2,
  },
  {
    comment: "987",
    user_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
