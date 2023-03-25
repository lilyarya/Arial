const express= require('express');      // not to be overidden so const
const app = express();
const port = 8000;
//use express router

app.use('/',require('./routes/index')); // you can do only routes

app.listen(port,function(err){
    if (err){
        console.log('Error in runnin server : ${err}');
    };
    console.log('Server is running on the port 8000');
});