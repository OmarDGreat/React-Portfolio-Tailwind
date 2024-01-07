const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("error connecting to database");
});

connection.on("connected", () => {
    console.log("Mongodb connection successful");
  });

  module.exports = connection;