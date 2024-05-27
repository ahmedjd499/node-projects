const express = require('express');

const UserController = require("../controllers/userController");

const router=express.Router()

  router.get("/user/add.html", UserController.aaa);
  router.get("/user/edit/:id", UserController.bbb);
  
  router.get("/user/:id",UserController.ccc);
  
  router.get("/user/search.html", UserController.ddd);
  
  router.post("/user/add", UserController.eee);
  
  router.post("/user/search", UserController.fff);
  
  router.delete("/user/delete/:id", UserController.ggg);
  
  router.put("/user/editOne/:id", UserController.hhh);

module.exports=router