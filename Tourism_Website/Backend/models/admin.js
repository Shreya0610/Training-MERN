const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  firstname : {
    type: String,
    required: true,
  },
  lastname : {
    type: String,
    required: true,
  },
  email : {
    type: String,
    required: true,
  },
  password : {
    type: String,
    required: true,
    minLength: 8
  },
  DateofBirth : {
      type: Date,
      required: true,
  },
  MobileNumber : {
      type: String,
      required: true,
      length: 10
  }
});

module.exports = mongoose.model("Admin" , adminSchema ,"Admin");