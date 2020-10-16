const express = require('express')
const app = express()
const port = 3000
 
//henter controller fra sti
let userController = require('../Controller/userController')

//read endpoint på routen '/'
app.get('/user/', userController)

 
app.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  })

