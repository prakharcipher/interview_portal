const mongoose = require('mongoose');
const { Schema } = mongoose; //const Schema = mongoose.Schema (ES6 shorthand)

const userSchema = new Schema({
  googleID: String,
  googleName: String
});

mongoose.model('users', userSchema);
