const Task = require("../models/taskModels");
const url = "http://localhost:5173";

exports.createTask = (req, res, next) => {
const { title, description, status } = req.body;
    
  const task = new Task({
      title, description, status, createdAt: Date.now(), updatedAt: Date.now()
  });
  task
    .save()
    .then((result) => {
      res.redirect(`${url}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllTasks = (req, res) => {
  Task.find()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.deleteTask = (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => console.log(err));
};

exports.updateTask = (req, res) => {
  const { title, description, status, updatedAt } = req.body;
  
  Task.findByIdAndUpdate(req.params.id, {
      title, description, status, updatedAt
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => console.log(err));
};