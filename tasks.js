//====================== VARIABLES =========================
const mongoose = require("mongoose");
const app = require("./app");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
  task: String,
});
const Task = mongoose.model("Task", taskSchema);
//====================== VARIABLES =========================

//======================= FUNCTIONS ========================
//======================= FUNCTIONS ========================

//======================= EXPORTS ========================
module.exports = Task;
//======================= EXPORTS ========================
