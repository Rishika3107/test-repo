//how to write a post request
const express = require('express')  // express package 
const port = 3002
const app = express();// initialises instance of express

app.post('/conversation', (req, res) => { // if you are sending '/' then you are going to get 'Hello World'
    res.send('<h>Welcome Rishika<h>')
})

app.listen(port , () => {
    console.log(`Example app listening on ${port}`)
})
// write in browser to get the http server "localhost:3000"