module.exports.home = function(req,res){
    //return res.end('<h1> Express is up for Arial</h1>');'
    // returning directly to browser

    return res.render('home',{
        title : "Home"
    });
};