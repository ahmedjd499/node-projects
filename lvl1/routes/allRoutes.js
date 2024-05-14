const express = require('express');

const User = require("../models/user");

const moment = require("moment");

const router=express.Router()

router.get("/", (req, res) => {
    User.find()
      .then((result) => {
        // console.log(result);
        res.render("index", {
          title: "Home page",
          users: result,
          moment: moment,
        });
      })
      .catch((err) => {
        res.redirect("/somethingwhentwrong");
        console.log(err);
      });
  });
  
  router.get("/somethingwhentwrong", (req, res) => {
    res.render("404");
  });
  
  router.get("/user/add.html", (req, res) => {
    res.render("user/add");
  });
  router.get("/user/edit/:id", (req, res) => {
    console.log(req.params.id);
    User.findById(req.params.id)
      .then((result) => {
        console.log(result);
        res.render("user/edit", { user: result });
      })
      .catch((err) => {
        res.redirect("/somethingwhentwrong");
        console.log(err);
      });
  });
  
  router.get("/user/:id", (req, res) => {
    console.log(req.params.id);
    User.findById(req.params.id)
      .then((result) => {
        console.log(result);
        res.render("user/view", { user: result, moment: moment });
      })
      .catch((err) => {
        res.redirect("/somethingwhentwrong");
        console.log(err);
      });
  });
  
  router.get("/user/search.html", (req, res) => {
    res.render("user/search");
  });
  
  router.post("/user/add", (req, res) => {
    User.create(req.body)
      .then(() => {
        console.log("user saved successfully");
  
        res.redirect("/user/add.html");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  router.post("/user/search", (req, res) => {
    User.find({
     $or:[{firstname : req.body.firstname.trim()},{lastname : req.body.firstname.trim()}]
    })
      .then((result) => {
        console.log(result);
        res.render("index", { title: "Search result" ,users : result,moment:moment});
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  router.delete("/user/delete/:id", (req, res) => {
    console.log(req.params.id);
    User.findByIdAndDelete(req.params.id)
      .then((result) => {
        console.log(result);
        res.redirect("/");
      })
      .catch((err) => {
        res.redirect("/somethingwhentwrong");
        console.log(err);
      });
  });
  
  router.put("/user/editOne/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        //console.log(result);
        res.redirect(`/user/edit/${req.params.id}`);
      })
      .catch((err) => {
        res.redirect("/somethingwhentwrong");
        console.log(err);
      });
  });

module.exports=router