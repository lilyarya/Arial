const express= require('express');      // not to be overidden so const
const app = express();
const port = 8000;

app.listen(port,function(err){
    if (err){
        console.log('Error in runnin server : ${err}');
    };
    console.log('Server is running on th port 8000');
});