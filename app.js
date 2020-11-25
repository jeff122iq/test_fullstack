const express = require("express");

const config = require("config");

const mongoose = require("mongoose");

const app = express();

const PORT = config.get("PORT" || 5000);

app.listen(PORT, () => console.log(`Сервер работает на ${PORT}`));

const Schema = mongoose.Schema;

const taskSchema = new Schema({ task: String, email: String });

mongoose.connect(config.get("MONGO_URL"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Task = mongoose.model("Task", taskSchema);

const task = new Task({ task: "Task_1", email: "task_1@gmail.com" });

task.save({}, function (err, doc) {
  mongoose.disconnect();

  if (err) return console.log(err);

  console.log(doc);
});
