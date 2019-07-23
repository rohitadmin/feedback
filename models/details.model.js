//var bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


var DetailSchema = new mongoose.Schema({
    
    feedBackDetail : {
        type: String
    },
    phonenumber: {
        type: Number
    },
    comment: {
        type: String
    }
  });

mongoose.model('Details', DetailSchema);


