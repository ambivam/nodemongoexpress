const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config');

app.use(cors())
app.use(bodyParser.json())

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);


//connect to DB
mongoose.connect(process.env.DB_CONNECTION,() => console.log('connected to db'));


//How do we start listening to server
app.listen(3001);