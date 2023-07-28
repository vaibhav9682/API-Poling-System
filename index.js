const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// database
const db = require('./config/mongoose')

// middlewares
app.use(express.urlencoded())
app.use(bodyParser.json());

app.use('/', require('./routes'))


// server running
app.listen(port, (err) => {

    if (err) {
        console.log('error in starting the server');
    }

    console.log(`express server is running on port ${port}`)
})