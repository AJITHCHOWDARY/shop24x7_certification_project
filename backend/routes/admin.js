//Sakhan

var express = require('express');
var router = express.Router();
var User = require('../models/userModel')

var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/users', (req,res,next)=>{
    User.find((err,data)=>{
        if (err) throw  err;
        res.send(data);        
    })
})

router.get('/users/:id', (req,res)=>{
  User.findById(req.params.id, (err,user)=>{
    if (err) throw err;
    return res.send(user);
  })
})


router.post('/users/register', (req,res)=>{

  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password : req.body.password,
    phone: req.body.phone,
    admin: req.body.admin
  });

  console.log(user);

  User.register(user,req.body.password, function(err, user){
    if (err){
      console.log(err);
      var result = {
        "status" : "failure",
        "message" : "unable to create user."
      }
      return res.send(result);
    }
    passport.authenticate("local")(req,res,function(){
      var result = {
        "status" : "success",
        "message" : "user created successfully."
      }
      return res.send(result);
    })
  })

})


router.put('/users/:id', (req, res)=>{
  var user = new User(req.body);
  console.log(user);
  User.findByIdAndUpdate(req.params.id, user, (err,result)=>{
    if (err) throw err;
    return res.send(result);
  })
})

router.delete('/users/delete/:id', (req, res)=>{
  User.findByIdAndRemove(req.params.id, (err, result)=>{
    if(err) throw err;
    return res.send(result);
  })
})


module.exports = router;
