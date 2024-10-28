const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('got a git request!')
  res.sendFile('./dummy.html' , {root:__dirname})
})


app.post('/items' , (req,res) => {
    res.send('putting responce');
})

app.put('/items/:id' , (req,res) => {
    res.send(' responce');
})

app.delete('/items/:id' , (req,res) => {
    res.send('Deleting responce');
})



app.listen(port, () => {
  console.log(`Sumit Shrama's app listening on port ${port}`)
})