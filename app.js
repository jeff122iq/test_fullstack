//====================== VARIABLES =========================

const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const app = express();
const PORT = config.get("PORT" || 5000);
const Task = require("./tasks");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//====================== VARIABLES =========================

//======================= FUNCTIONS ========================

app.listen(PORT, () => console.log(`Сервер работает на ${PORT}`));
mongoose.connect(config.get("MONGO_URL"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/task", urlencodedParser, function (req, res) {
  res.sendFile(__dirname + "/client/index.html");
});

app.post("/task", urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  let task = new Task({ task: req.body.task, email: req.body.email });

  task.save({}, function (err, doc) {
    if (err) return console.log(err);
    console.log(doc);
    res.send(`${req.body.task} - ${req.body.email}`);
  });

  console.log("Добавилось: ", req.body);
});

app.get("/", function (req, res) {
  res.send("Главная страница");
});

//======================= FUNCTIONS ========================
