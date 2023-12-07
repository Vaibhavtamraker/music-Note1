const express=require('express');
const router=express.Router();
const taskController=require('../backend/controller')
router.post("/createTask",taskController.createTask)
module.exports=router;










