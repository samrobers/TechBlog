const seedBlog = require("./blogData");
const seedComment = require("./commentData");
const seedUser = require("./userData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

   await seedUser();
   console.log("\n----- USERS SEEDED -----\n");

 
  await seedBlog();
  console.log("\n----- BLOG SEEDED -----\n");

  await seedComment();
  console.log("\n----- COMMENT SEEDED -----\n");

  process.exit(0);
};

seedAll();
