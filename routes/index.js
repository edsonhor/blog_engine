var subs = require ('../models/subscriber');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req,res,next){
  var sub = new  subs("subscriberid", "firstname", "lastname", "emailaddress","signupdate","emailverified" );
  sub.addnewsubscriber(req,res,next);
   //Here, we will render the thank you for subscribing 
});

module.exports = router;
