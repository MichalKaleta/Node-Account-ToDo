const Todos = require('../models/to_do_model');
const bodyParser = require('body-parser');
const url = require('url')

module.exports = function (app) {

  app.use(bodyParser.json());
  var UrlParse = bodyParser.urlencoded({ extended: true })

  
  app.post('/api/todos', UrlParse, (req, res) => {

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

  app.post('/api/todos/:uname',UrlParse,
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
            //res.redirect('/api/todos/:uname')
          //res.send( console.log(todos))
        }
      }
    )}
  )
 /*  app.get('/api/todos/:uname',(req,res)=>{
    res.render('list',{items: todos})
  }) */
}