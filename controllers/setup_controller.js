const Todos = require('../models/to_do_model');
//const bodyParser = require('body-parser')

module.exports= function(app){

  app.get('/api/todos/setup',(req,res)=>{
    
    var initialTodos =[
      {
        username: 'Michal',
        password: 'rambo7',
        list: [{
          todo:'buy Milk',
          isDone: false,
          hasAttachment: false
        },{
          todo:'sell Milk',
          isDone: true,
          hasAttachment: false
        }]
      },
      {
        username: 'Malwina',
        passwork: 'grr',
        list:[{
          todo: 'Lenić Się',
          isDone: true,
          hasAttachment: false
        }]
      }
    ];

    Todos.create(initialTodos,(err,todos)=>{
      res.send(todos);
    })    
  });
} 