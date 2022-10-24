const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    username: {
        type: String,
        unique: true,
        required: true,
        maxLength: 100
        
      },
      email: {
        type: String,
        unique: true,
        required: true,
        maxLength: 50
      },
      password: {
        type: String,
        unique: false,
        required: true,
        maxLength: 50
      }
  });
  module.exports = mongoose.model("User", userSchema)