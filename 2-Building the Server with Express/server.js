// http is a module no need to install it from the npm
// const http  = require('http')

// server created
// const server = http.createServer((req,res)=>{
//     res.end("This is response from the server")
// })

// server start
// server.listen(3000,()=>{
//     console.log('Server running on port 3000')
// })


// express is a module need to install it from the npm
const express = require('express')

// server created
const app = express()

app.get('/',(req,res)=>{
    res.send("This is response from the server")
})

// req - object containing details of client request.
// req.headers , req.body , req.params , req.query ,req.cookies
// res - object containing details of server response.
// res.send() , res.json() , res.end() ()

// server started
app.listen(3000,()=>{
    console.log('Server running on port 3000')
})

