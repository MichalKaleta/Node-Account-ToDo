const Todos = require('../models/to_do_model');
const bodyParser= require('body-parser');

module.exports=function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}))

  app.get('/api/todos/:user',(req,res)=>{
    Todos.find({username: req.params.user},
      (err,todos)=>{
        
        if (err) throw err;
        
        res.send(todos) 
       
    })

  })
}