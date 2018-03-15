const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose')    ;    /* --dbpath e:/DEV/NODE/MONGO_DATA */
const setupController = require('./controllers/setup_controller')

const dbuser = 'test_user';
const dbpassword ='test_pass';
const connectionString = `mongodb://${dbuser}:${dbpassword}@ds113849.mlab.com:13849/todo-db`;
const app = express();
const port = process.env.PORT || 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(port);
app.set('view engine','ejs')
app.use('/assets', express.static(__dirname+'/public'))

app.get('/',(req,res)=>{

  res.render('index');
})

app.post('/posted',urlencodedParser,(req,res)=>{
  
  res.send(`<p>${req.body.data}</p>`)
})

mongoose.connect(connectionString)
setupController(app);