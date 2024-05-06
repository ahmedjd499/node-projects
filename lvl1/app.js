//imports

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/user");
const app = express();

app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("views/home.html", { root: __dirname });
});

app.get("/index.html", (req, res) => {
    res.send("<h1>user saved ✔</h1>");
  });

app.post("/test", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save().then(() => {
   console.log('user saved successfully');
   res.redirect("/index.html");
  })
  .catch((err) => {
    console.error(err);
  });

});
mongoose
  .connect(
    "mongodb+srv://umanlink61:iec2LHD1LbBHJpko@cluster0.3c4rryz.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
