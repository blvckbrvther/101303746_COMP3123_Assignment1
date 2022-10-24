const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    first_name: {
      type: String,
      unique: false,
      required: true,
      maxLength: 100
      
    },
    last_name: {
      type: String,
      unique: false,
      required: true,
      maxLength: 50
      
    },
    
    email: {
      type: String,
      unique: true,
      required: true,
      maxLength: 50
      
    },

    gender: {
      type: String,
      required: true,
      maxLength: 50,
      enum: ['Male', 'Female', 'Others']
      
    },

    salary:{
      type: Number,
      required: true
    }

  });
  module.exports = mongoose.model("Employee", employeeSchema)