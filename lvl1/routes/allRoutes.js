const express = require('express');


const UserController = require("../controllers/userController");

const router=express.Router()

router.get("/", UserController.iii);
  
  router.get("/somethingwhentwrong",UserController.jjj);
  
 
module.exports=router