require("dotenv").config();
const mongoose = require("mongoose");

function connect() {
  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: process.env.NODE_ENV !== "prod"
  };

  let connectionString = "mongodb+srv://ganeshmahind30:FvCqYgVaLLl5fx7c@cluster0.52jfy.mongodb.net/";
  if (process.env.NODE_ENV === "prod") {
    connectionString = process.env.MONGO_URI_PROD;
  }

  mongoose.connect(connectionString, mongooseOptions);
  mongoose.Promise = global.Promise;
  mongoose.connection.on("open", () => console.log(`MongoDB Connected`));
  mongoose.connection.on("error", console.error.bind(console, "MongoDB Error"));
}

module.exports = connect;
