const { request, response } = require("express");
//====================== VARIABLES =========================

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
  task: String,
  email: String,
});
const Task = mongoose.model("Task", taskSchema);
// const task = new Task({
//   task: `${response.task}`,
//   email: `${response.email}`,
// });

//====================== VARIABLES =========================

//======================= FUNCTIONS ========================

module.exports = Task;

//======================= FUNCTIONS ========================
