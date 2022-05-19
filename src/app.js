const express = require('express')

const app = express()
const PORT = "3001"

app.use(express.json()) 
app.use(express.urlencoded({ extended: false })) 

const recipesRouter = require('./routes/recipes')
app.use('/recipes', recipesRouter)   

app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`)
})

module.exports = app;