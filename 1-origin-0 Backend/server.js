// http is a module no need to install from npm
const http = require('http')


const server = http.createServer((req,res) => {
    res.end('Hello World from the server')
}) // server created 

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})




// package is what we need to install from npm like (cat-me)
