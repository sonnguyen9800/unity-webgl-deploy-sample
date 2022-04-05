//index.js
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('../simple-webgl-build'))
app.get('/', (req, res) => {
  res.sendFile('../simple-webgl-build/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
