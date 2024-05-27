


const User = require("../models/user");

const moment = require("moment");


const aaa=(req, res) => {
    res.render("user/add");
  }


  const bbb=   (req, res) => {
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
  }



  const ccc =(req, res) => {
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
  }

  const ddd=(req, res) => {
    res.render("user/search");
  }
  const eee=(req, res) => {
    User.create(req.body)
      .then(() => {
        console.log("user saved successfully");
  
        res.redirect("/user/add.html");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const fff=(req, res) => {
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
  }
  const ggg=(req, res) => {
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
  }
  const hhh=(req, res) => {
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
  }

  const iii=(req, res) => {
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
  }

  const jjj = (req, res) => {
    res.render("404");
  }
  module.exports = {aaa ,bbb,ccc,ddd,eee,fff,ggg,hhh,iii,jjj}