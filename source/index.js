const express = require('express')
const port = 3500
const app = express()

__dirname ='./source/'

app.get('/', async(req, res, next) =>{
        res.sendFile('login.html',{root: __dirname+ 'public/'});
    //res.send(__dirname+ 'public/')
    })

app.listen(port)
console.log(`Server on port ${port}`)