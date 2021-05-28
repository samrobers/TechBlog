const express = require("express");
const app = express();
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 9000;

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to the server
//created connection to db linked from the config and once it has been synced than start the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`);
  });
});
