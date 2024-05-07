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
  User.find().then((result)=>{
   // console.log(result);
    res.render("index", { title: "Home page" ,users : result});

  }).catch((err)=>{
    res.redirect("/somethingwhentwrong");
    console.log(err);});
});

app.get("/somethingwhentwrong", (req, res) => {
 
    res.render("404");
}
  )

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});
app.get("/user/edit.html", (req, res) => {
  res.render("user/edit");
});
app.get("/user/:id", (req, res) => {
 console.log(req.params.id); 
  User.findById(req.params.id).then((result)=>{
console.log(result);
    res.render("user/view",{user : result});
  }).catch((err)=>{
    res.redirect("/somethingwhentwrong");
    console.log(err);})
});

app.get("/user/search.html", (req, res) => {
  res.render("user/search");
});



app.post("/user/add", (req, res) => {
  const user =new User(req.body)
  user.save().then(()=>{
    console.log('user saved successfully');
    console.log(user);
res.redirect('/user/add.html')  }).catch((err)=>{console.log(err);})
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
