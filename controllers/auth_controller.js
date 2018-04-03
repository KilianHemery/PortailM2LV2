var db = require('../databases/db.js')

// LOGIN
exports.login_form = function(req, res) { // attention à la route / depuis le /login
     res.render('login');
 };

exports.login_authentication = function(req, res) {
    res.redirect('/');
};


//LOGOUT
exports.logout = function(req, res){
     req.logout();
     res.redirect('/');
 };

// !?????
exports.login_Verification = function (req,res) {

    varUsername = exports.username;
    varUserPassword = exports.password;

    const utilisateur = {
        name: 'verification utilisateurs',
        text: 'select username, password from utilisateurs where username='+varUsername+ 'and password ='+varUserPassword+''
    }

    //a modif
    db.get().query(utilisateur, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('index', {user: req.user  });
        }
    });

};


