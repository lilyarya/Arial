module.exports.profile = function(req,res){
    //res.end('<h1>User profile </h1>');
    return res.render('user_profile',{
        title:" User Profile"   // send this to body in layouts
    });
};