const express = require('express')

const app = express()
// to read the body of the request
// we use middleware
// express by default does not read the body of the request
app.use(express.json())// built in middleware


let notes = []

// notes create
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.json({
        message:"Note created successfully",
        notes:notes
    })
})

// notes read
app.get('/notes',(req,res)=>{
    res.json({
        message:"Notes fetched successfully",
        notes:notes
    })
})
// notes update
// notes delete

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
