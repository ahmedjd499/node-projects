//imports

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("views/home.html", { root: __dirname });
});


mongoose
  .connect("mongodb+srv://umanlink61:iec2LHD1LbBHJpko@cluster0.3c4rryz.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`);
      });
cls      
  })
  .catch((err) => {console.error(err);});
