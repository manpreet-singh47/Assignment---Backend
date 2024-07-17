const express = require("express");
const app = express();
const cors = require("cors");
const user = require("./Routes/userAuthRoutes");
const pet = require("./Routes/petRoutes");
const mongoose = require("mongoose");

app.listen(3000, () => {
  console.log("Server Started");
  mongoose
    .connect(
      "mongodb+srv://manpreetsinghh0295:TgZSUaic3WGjpkxm@nomisma-assignment-clus.felgs4i.mongodb.net/"
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.use("/api", user);
app.use("/api", pet);
