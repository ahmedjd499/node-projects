//imports

const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
const port = 3000;
//// auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLiveReload = require("connect-livereload");
app.use(connectLiveReload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.get("/", (req, res) => {
  res.render("index", { title: "Home page" });
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});
app.get("/user/edit.html", (req, res) => {
  res.render("user/edit");
});
app.get("/user/view.html", (req, res) => {
  res.render("user/view");
});

app.get("/user/search.html", (req, res) => {
  res.render("user/search");
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
