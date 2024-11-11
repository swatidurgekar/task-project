const express = require("express");
const router = express.Router();
const taskController = require("../controller/tasks");

router.post("/create", taskController.createTask);
router.get("/tasks", taskController.getAllTasks);
router.get("/delete/:id", taskController.deleteTask);
router.put("/edit/:id", taskController.updateTask);
module.exports = router;