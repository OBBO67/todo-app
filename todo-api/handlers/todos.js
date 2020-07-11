const db = require("../models");

exports.createTodo = async function (req, res, next) {
  try {
    let todo = await db.Todo.create({
      name: req.body.todo.name,
      user: req.params.id,
    });

    let foundUser = await db.User.findById(req.params.id);
    foundUser.todos.push(todo.id);
    await foundUser.save();
    let foundTodo = await db.Todo.findById(todo.id).populate("user", {
      username: true,
    });
    return res.status(200).json(foundTodo);
  } catch (err) {
    return next(err);
  }
};

exports.getTodos = async function (req, res, next) {};

exports.getTodo = async function (req, res, next) {};

exports.updateTodo = async function (req, res, next) {};

exports.deleteTodo = async function (req, res, next) {};

// exports.getTodos = function (req, res) {
//   db.Todo.find()
//     .then((todos) => {
//       res.json(todos);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };

// exports.createTodo = function (req, res) {
//   db.Todo.create(req.body)
//     .then((newTodo) => {
//       res.status(201).json(newTodo);
//     })
//     .catch((err) => res.send(err));
// };

// exports.getTodo = function (req, res) {
//   db.Todo.findById(req.params.todoId)
//     .then((todo) => {
//       res.json(todo);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };

// exports.updateTodo = function (req, res) {
//   db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
//     .then((todo) => {
//       res.json(todo);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };

// exports.deleteTodo = function (req, res) {
//   db.Todo.findByIdAndDelete(req.params.todoId)
//     .then(() => {
//       res.status(204).json();
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// };

// module.exports = exports;
