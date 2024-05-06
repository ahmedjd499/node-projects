//imports

const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set("view engine", "ejs");
const port = 3000;
//// auto refresh
const path =require('path')
const livereload =require('livereload')
const liveReloadServer=livereload.createServer()
liveReloadServer.watch(path.join(__dirname,'public'))

const connectLiveReload = require('connect-livereload')
app.use(connectLiveReload())

liveReloadServer.server.once("connection",()=>{
    setTimeout(()=>{
        liveReloadServer.refresh('/')
    },100)
})









app.get("/", (req, res) => {
  User.find()
    .then((result) => {
      res.render("home", { title: "Home page", users: result });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/index.html", (req, res) => {
  res.send("<h1>user saved ✔</h1><br><a href='/'>◀ return </a>");
});

app.post("/add/user", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      console.log("user saved successfully");
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
