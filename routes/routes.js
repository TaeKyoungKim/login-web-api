var express = require('express')
var router = express.Router()
var User = require('../models/user')
var Content = require('../models/listModel')

router.get('/',function(req,res){
    // console.log(req)
    res.json({"Kim":"Hello World"})
})

router.get('/data' ,function(req,res){
    console.log(req)
    res.json({"address":"서울시 마포구 백범로 18"})
})  


router.get('/signup',function(req, res){
    res.render('signup')
})

router.post('/signup' ,function(req, res){
    
    var contact = new User()
    contact.username = req.body.username
    contact.password = req.body.password

    contact.save(function(err) {
        if(err){
            res.json({
                status:'error',
                message:err
            })
        } else {
            res.json({
                message:"New contact Created",
                data:contact
            })
        }
    })
    
    
})


router.post('/content' ,function(req, res){
    
    var contact = new Content()
    contact.title = req.body.title
    contact.desc = req.body.desc
    contact.author = req.body.author

    contact.save(function(err) {
        if(err){
            res.json({
                status:'error',
                message:err
            })
        } else {
            res.json({
                message:"New contact Created",
                data:contact
            })
        }
    })
    
    
})
module.exports = router;