const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pinterestClone")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String, // Assuming a URL or file path for the profile picture
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;