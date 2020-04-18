const db = require("../models");

exports.getTodos = function (req, res) {
  db.Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.createTodo = function (req, res) {
  db.Todo.create(req.body)
    .then((newTodo) => {
      res.status(201).json(newTodo);
    })
    .catch((err) => res.send(err));
};

exports.getTodo = function (req, res) {
  db.Todo.findById(req.params.todoId)
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateTodo = function (req, res) {
  db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteTodo = function (req, res) {
  db.Todo.findByIdAndDelete(req.params.todoId)
    .then(() => {
      res.status(204).json();
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = exports;
