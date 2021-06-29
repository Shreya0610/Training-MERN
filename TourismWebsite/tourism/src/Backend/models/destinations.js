const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
 name : {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  days : {
    type: String,
    required: true,
  },
  cost : {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Destination" , destinationSchema ,"Destination");