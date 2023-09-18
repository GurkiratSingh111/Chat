const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// Allowing the cookies to be sent from cross origin requests
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api", userRoutes);
app.get("/", (req, res) => {
  res.send("backend");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
    app.listen(process.env.PORT, () => {
      console.log("server is started");
    });
  })
  .catch((err) => {
    console.log(" couldn't connect to the db");
  });

/*
app.listen(process.env.PORT,()=>{
    console.log('server is started !');
})*/
