require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Home',(req,res)=>{
    res.send('<h1>Hii This is home</h1>' )
    res.send("you are in home screen")
    // console.log("you are in home screen")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


