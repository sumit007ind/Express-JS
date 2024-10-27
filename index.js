const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Sumit sharma!')
})

app.get('/', (req,res) => {
    res.send('getting responce!!');
})
 
app.put('items' , (req,res) => {
    res.send('putting responce');
})

app.listen(port, () => {
  console.log(`Sumit Shrama's app listening on port ${port}`)
})