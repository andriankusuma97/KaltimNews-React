if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  }

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
var cors = require('cors')
const morgan = require("morgan")
// 

// server Client
app.use(cors())
app.use(morgan("dev"))

//body parse
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Router
app.get('/', (req, res) => {
  res.send('Hello World!<<<<<< ini tugas phase 3')
})
app.use(routes)


//listen
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

module.exports = app