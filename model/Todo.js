const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
   description: {
       type:String
      //  required: true
   }
   // date :{
   //  type:Date,
   //  // required:true
   // }
})

module.exports = mongoose.model("ToDo",ToDoSchema)