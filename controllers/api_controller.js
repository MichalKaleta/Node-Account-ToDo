const Todos = require('../models/to_do_model');
const bodyParser = require('body-parser');
const url = require('url')

module.exports = function (app) {

  app.use(bodyParser.json());
  var urlParse = bodyParser.urlencoded({ extended: true })
 
  app.post('/api/todos', urlParse,
  (req, res) => {
    Todos.find({
      username: req.body.login, 
      password: req.body.password
    },
    (err, todos) => {
      if (err) {
        throw err;
      } else if (todos.toString() == '') {
        res.send('<h1>Zły login lub hasło</h1>');
      } else {
        res.render('list',{items: todos[0]})
      }
      }) 
  })

  app.post('/api/todos/:uname',urlParse,
  (req, res) => {
    Todos.findOneAndUpdate(
      {username: req.params.uname },
      {$push: { list: {todo : req.body.additem} } },
      {safe: true, upsert: true},
      (err, todos) => {
        if (err) {
          throw err;
        } else if (todos.toString() == '') {
          res.send('<h1>Zły login lub hasło</h1>');
        } else {
          res.render('list',{items: todos})
        }
      }
    )}
  )
  app.post('/api/register', urlParse, (req,res)=>{
     if(req.body.login < 5 || req.body.password <5){
       res.send('both Username and Password have to be at least 5 characters long')
     }else{
       Todos.find({username: req.body.login},(err,data)=>{
         if(err) throw err;
         else if(data.toString() !== ''){
          res.send('username already taken')
         }else{
           Todos.create({
             //$push:{
              username: req.body.login,
              password: req.body.password,
              list:[{
                todo: 'add some to dos',
                isDone: false,
                hasAttachment: false
              }]  
              //}
           },(err, data)=>{
             if(err) throw err;
             res.send(data)
           })
         }
       })    
     }
  })

}