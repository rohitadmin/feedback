var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const session = require('express-session');
const Details = mongoose.model('Details');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Feedback Form' });
});

router.post('/',function(req,res){
  insertfeedbackform(req, res);
 // console.log('hi');
});

function insertfeedbackform(req, res){
var details = new Details();
details.feedBackDetail= req.body.feedBackDetail;
details.phonenumber = req.body.phonenumber;
details.comment = req.body.comment;
details.save((err, doc)=>{
  if(!err)
  res.redirect('/');
  else
  {
    console.log('error during sending feedback :' + err);
  }
});

}





module.exports = router;
