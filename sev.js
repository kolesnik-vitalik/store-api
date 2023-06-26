const express = require('express')
const cors = require('cors')
const PORT = 5000
const app = express()
const morgan = require('morgan')
const db = require('./db')

app.use(cors())
app.use(morgan("common"))
app.use(express.json())
let users = {
  name: 'Vitaliy',
  lastName: 'Kolesnik'
}

app.use('/api/users', function(req, res, next) {
    res.json(users)
  })

  // app.post('/api/user', async (req,res)=>{
  //   const {name} = req.body
  //   const newPerson = await db.query('INSERT INTO persons (name) values ($1) RETURNING *', [name])
  //   res.json(newPerson.rows[0])
  
  // })

  app.get('/api/shoes', async(req,res)=>{
    const allField = await db.query('SELECT * FROM shoe')
    res.json(allField.rows[0])
  })

  app.get('/api/shoes/:id', async(req,res)=>{
    const id = req.params.id
    const getShoesById = await db.query('SELECT * FROM shoe WHERE id = $1', [id])
    res.json(getShoesById.rows[0])
  })

app.listen(PORT, ()=>{
    console.log(`PORT: ${PORT}`)
  })