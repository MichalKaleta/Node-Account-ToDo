const Todos = require('../models/to_do_model');
//const bodyParser = require('body-parser')

module.exports= function(app){

  app.get('/api/todos/setup',(req,res)=>{
    
    var initialTodos =[
      {
        username: 'Michal',
        todo:'buy Milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'Malwina',
        todo: 'Lenić Się',
        isDone: true,
        hasAttachment: false
      }
    ];
  /*   Todos.create(initialTodos,(err,data)=>{
          res.send(data);
        }) */
    Todos.create(initialTodos,(err,todos)=>{
      res.send(todos);
    })    
  });
} 