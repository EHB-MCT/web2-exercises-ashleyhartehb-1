const express = require('express')
const app = express()
const port = 3000

//return html
app.get('/', (req, res) => {
  res.send('Hello World!')
  //express.static(root, [options] )
  app.use(express.static('public'))
})

app.get('/getData',(req,res) =>{
  res.send('Data received')
})
app.get('/randomtext', (req, res) =>{
  res.send('returning random string of choosing')
})

//listens to the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})