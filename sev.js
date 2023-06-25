const express = require('express')
const cors = require('cors')
const PORT = 5000
const app = express()

app.use(cors())

let users = {
    name: 'Vitaliy',
    lastName: 'Kolesnik'
}

app.use('/api/users', function(req, res, next) {
    res.json(users)
  })

  app.listen(PORT, ()=>{
    console.log(`PORT: ${PORT}`)
  })