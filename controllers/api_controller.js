const Todos = require('../models/to_do_model');
const bodyParser= require('body-parser');


module.exports=function(app){

  app.use(bodyParser.json());
  app.get('/todos',(req,res)=>{

    res.send()

  })
}