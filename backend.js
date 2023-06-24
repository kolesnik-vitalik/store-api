const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '\index.html'));
  });


app.listen(PORT, ()=>{
    console.log(`Express server is started on http://localhost:${PORT}`)
})

console.log(__dirname)