const express = require('express')
require('express-async-errors')

const cors = require('./app/middlewares/cors')
const errorHandler = require('./app/middlewares/errorHandler')
const routes = require('./routes')

const app = express()

// middleware para ler o corpo da requisição como JSON
app.use(express.json())

// middleware para habilitar o CORS
app.use(cors)

app.use(routes)
// middleware - error handler
app.use(errorHandler)

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001')
})
