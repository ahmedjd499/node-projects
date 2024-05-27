//imports

const express = require("express");
const mongoose = require("mongoose");

var methodOverride = require("method-override");
const app = express();

const ALLroutes =require('./routes/allRoutes')
const userRoutes =require('./routes/userRoutes')


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
const port = process.env.PORT ||  3001;
//// auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLiveReload = require("connect-livereload");
const userRouter = require("./routes/userRoutes");
app.use(connectLiveReload());
app.use(methodOverride("_method"));

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(ALLroutes)
app.use(userRoutes)

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
