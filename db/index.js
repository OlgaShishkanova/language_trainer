const mongoose = require("mongoose");
const config = require("../server/config");

mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connection with database succeeded.");
})
.catch(err => console.log(err));

exports.db = mongoose.connection;
