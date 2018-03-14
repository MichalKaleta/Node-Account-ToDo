const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.listen(3000);
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine','ejs')

app.use('/', express.static(__dirname+'/public'))

app.get('/',(req,res)=>{

  res.render('index');
})

app.post('/posted',urlencodedParser,(req,res)=>{
  
  res.send(`<p>${req.body.data}</p>`)
})
