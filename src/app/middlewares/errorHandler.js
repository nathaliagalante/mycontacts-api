module.exports = (error, request, response, next) => {
  console.log('Error handler called')
  console.log(error)
  response.sendStatus(500)
}