// simple backend http server in node js 

const express = require('express')  // express package 
const port = 3000
const app = express();// initialises instance of express

app.get('/', (req, res) => { // if you are sending '/' then you are going to get 'Hello World'
    res.send('Hello World')
})

app.listen(port , () => {
    console.log(`Example app listening on ${port}`)
})
// write in browser to get the http server "localhost:3000"