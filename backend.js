const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

let users = {
    name: 'Vitaliy',
    lastName: 'Kolesnik'
}

app.use('/api/users', function(req, res, next) {
    res.json(users)
    next()
  })

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '\index.html'))
  })

app.listen(PORT, ()=>{
    console.log(`Express server is started on http://localhost:${PORT}`)
})

console.log(__dirname)