const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.get('/hello', (req, res)=>{
    res.send('Hello world')
})

app.listen(PORT, ()=>{
    console.log(`Express server is started on http://localhost:${PORT}`)
})
