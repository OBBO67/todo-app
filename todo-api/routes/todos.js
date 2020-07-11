const express = require("express");
const router = express.Router({ mergeParams: true });
const db = require("../models");
const { createTodo } = require("../handlers/todos");

// prefix - /api/users/:id/todos
router.route("/").post(createTodo);

// router
//   .route("/:todoId")
//   .get(handlers.getTodo)
//   .put(handlers.updateTodo)
//   .delete(handlers.deleteTodo);

module.exports = router;
