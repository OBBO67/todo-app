const mongoose = require("mongoose");
mongoose.set("debug", true);
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set("useFindAndModify", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/todo-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
  })
  .catch((err) => {
    console.log(err);
  });

// allow promises
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
