const express = require('express')
require('express-async-errors')

const routes = require('./routes')

const app = express()

// middleware para ler o corpo da requisição como JSON
app.use(express.json())
app.use(routes)
// middleware - error handler
app.use((error, request, response, next) => {
  console.log('Error handler called')
  console.log(error)
  response.sendStatus(500)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
