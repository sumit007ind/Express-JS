const express = require('express')
const router = express.Router()



// define the home page route
app.get('/', (req, res) => {
    // res.send('got a git request!')
    res.sendFile('./dummy.html' , {root:__dirname})
  })
  
  
  app.post('/items' , (req,res) => {
      // res.send('putting responce');
      res.json({x:1,y:2,z:3})
  })
  
  app.put('/items/:id' , (req,res) => {
      res.send(' responce');
  })
  
  app.delete('/items/:id' , (req,res) => {
      res.send('Deleting responce');
  })
  

module.exports = router