const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const hostname = 'kolesnik-vitalik.github.io/store-api'

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

app.listen(PORT, hostname, ()=>{
    console.log(`Express server is started on http://${hostname}/${PORT}`)
})
