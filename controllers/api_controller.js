const Todos = require('../models/to_do_model');
const bodyParser= require('body-parser');

module.exports=function(app){

  app.use(bodyParser.json());
  var UrlParse= bodyParser.urlencoded({extended: true})

  app.get('/api/todos/:user',(req,res)=>{

    Todos.find({username: req.params.user},
      (err,todos)=>{
         if (err) throw err;
         res.send(todos)     
    })
  })

  app.post('/api/todos',UrlParse,(req,res)=>{

    Todos.find({ username: req.body.login, 
                 password: req.body.password
               }, (err,todos)=>{
        
                  if(err){ 
                    throw err;
                    res.send(console.log("dd"));
                    consle.log("dd");
                  }
                  else if(todos.toString()==''){
                     res.send('<h1>Zły login lub hasło</h1>');
                   } else {
                      res.send( todos )
                     };
            
               })
  })
}