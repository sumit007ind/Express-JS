const express = require('express')
const app = express()
const port = 3000

const item = require('./routes/item');
app.use('./api ' , item);



app.listen(port, () => {
  console.log(`Sumit Shrama's app listening on port ${port}`)
})