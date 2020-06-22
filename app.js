var express = require('express')
var path  = require('path')
var app = express();
var bodyParser = require('body-parser')
require('ejs')
var mongoose = require(`mongoose`)
mongoose.Promise = global.Promise
require('./output')
var dotenv = require('dotenv')
dotenv.config()
var password = process.env.PASSWORD
const MONGO_URL = `mongodb+srv://root:${password}@cluster0-zlhhs.mongodb.net/mydb?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL,{ useNewUrlParser: true,useUnifiedTopology: true  })
app.set('views',path.resolve(__dirname+'/views') )
app.set('view engine' ,'ejs')

// console.log(path.resolve(`${__dirname}/views`) )
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',function(req,res){
    // console.log(req)
    res.json({"Kim":"Hello World"})
})

app.get('/data',function(req,res){
    console.log(req)
    res.json({"address":"서울시 마포구 백범로 18"})
})

var port = process.env.PORT || 3000
//listen(port , url , backlog , callback)
app.listen(port, function(){
    
    console.log(`Server is runing at http://localhost:${port}`)
})
