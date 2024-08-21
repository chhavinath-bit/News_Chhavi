const mongoose = require("mongoose");

const url =
  "mongodb+srv://noonekumar242:Prakash3251@newsappdatabase.isbif.mongodb.net/?retryWrites=true&w=majority&appName=NewsAppDatabase";
const connectToDB = async (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is connected to mongoDB Atlas");
    await mongoose.connect(url);
  }
};
module.exports = connectToDB;
