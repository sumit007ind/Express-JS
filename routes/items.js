const express = require('express')
const router = express.Router()



// define the home page route
router.get('/', (req, res) => {
     res.send('got a git request!')
    // res.sendFile('../dummy.html' , {root:__dirname})
  })
  
  
  router.post('/items' , (req,res) => {
      // res.send('putting responce');
      res.json({x:1,y:2,z:3})
  })
  
  router.put('/items/:id' , (req,res) => {
      res.send(' responce');
  })
  
  router.delete('/items/:id' , (req,res) => {
      res.send('Deleting responce');
  })
  

module.exports = router