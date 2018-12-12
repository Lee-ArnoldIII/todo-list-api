var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var todoList = [
  {
    id: 1,
    todo: 'Implement a REST API'
  }
]

var todoObj = {
  '1': { todo: 'Implement a REST API' },
  '2': { todo: 'Wash the dog' },
  '3': { todo: 'Shave the cat' }
}

// GET /api/todos
app.get('/api/todos', function (req, res, next) {
  console.log('Someone is asking for the list')
  res.send(todoList)
})

// GET /api/todos/:id
app.get('/api/todos/:id', function (req, res, nextFn) {
  const todoItm = todoObj[req.params.id]
  if (todoItm) {
    res.json(todoItm)
  } else {
    res.status(404).send('This list is missing bro...wha wha whannnn!!!')
  }
})

// POST /api/todos
app.post('api/todos', function (req, res, next) {
  console.log('Someone is posting to the list')
})

// PUT /api/todos/:id
app.put('/api/todos/:id', function (req, res, next) {
  console.log()
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', function (req, res, next) {
  console.log()
})

app.listen(3000, function () {
  console.log('Todo List API is now listening on port 3000...')
})
