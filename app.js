const express = require('express')
const app = express()
const sendRoutes=require('./models/send')
app.use(express.urlencoded({extended:false}))
app.use('/api/sendmail',sendRoutes)
  const port=4000
  app.listen(port,()=>{
      console.log(`app working on port ${port}`)
  })