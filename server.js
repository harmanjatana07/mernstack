const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const mongoDB = require('./config/keys').mongoURI;

const app = express();

//bodyParser 
app.use(bodyParser.json());

//connect to mongodb
mongoose.connect(mongoDB).then(() => {
    console.log("MongoDB Connected");
}).catch(()=>{
    console.log("Error");
})

//use routes
app.use('/api/items', items);

const port = process.env.PORT | 5000;
app.listen(port, function(){
    console.log(`server started on ${port}`);
})
