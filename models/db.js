const mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/feedback', { useNewUrlParser: true }, (err)=>{ 
if(!err) {console.log('Mongo db connected')}
else{console.log('error in db connection:' +err)}
});


require('./details.model');

//module.exports ={mongoose};