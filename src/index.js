require("dotenv").config();

const app = require("./app.js");

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});