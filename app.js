var express = require('express')
var path  = require('path')
var app = express();
var bodyParser = require('body-parser')
require('ejs')
var mongoose = require(`mongoose`)
mongoose.Promise = global.Promise
require('./output')
var dotenv = require('dotenv')
var apiRouter = require('./routes/routes')
dotenv.config()
var password = process.env.PASSWORD
const MONGO_URL = `mongodb+srv://root:${password}@cluster0-zlhhs.mongodb.net/mydb?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL,{ useNewUrlParser: true,useUnifiedTopology: true  })
app.set('views',path.resolve(__dirname+'/views') )
app.set('view engine' ,'ejs')

// console.log(path.resolve(`${__dirname}/views`) )
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//정적파일 등록
// app.use(express.static(__dirname+'/public'))

app.use('/', apiRouter)

var port = process.env.PORT || 3000
//listen(port , url , backlog , callback)
app.listen(port, function(){
    
    console.log(`Server is runing at http://localhost:${port}`)
})
