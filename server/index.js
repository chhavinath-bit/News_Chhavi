const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const app = express();
connectToDB();
app.use(cors());
app.use(express.json());
const port = 5000;

app.use("/api/news", require("./Routes/news"));
app.use("/api/profile", require("./Routes/profile"));
app.use("/api/auth", require("./Routes/authetication"));

app.listen(port, () => {
  console.log(`app server is listening on ${port}`);
});
