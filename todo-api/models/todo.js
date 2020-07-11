const mongoose = require("mongoose");
const User = require("./user");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Todo name cannot be blank",
    maxlength: 33,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  // only one user per todo
  user: {
    // the unique id of the user (like a primary key in sql)
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // the user model we created
  },
});

todoSchema.pre("remove", async function (next) {
  try {
    // find user and remove the todo from their todos list
    let user = await User.findById(this.user);
    user.todos.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
