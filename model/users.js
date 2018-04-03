const userDAO = require('../DAO/userDAO');
const UserDAO = new userDAO();

/*
var records = [
    { id: 1, username: 'jack', password: 'secret'}
  , { id: 2, username: 'jill', password: 'birthday'}
];
*/

// Research function by id
exports.findById = function(id,callback) {
    UserDAO.getListUsers(function (listUsers){
        if(listUsers != null) {
            listUsers.forEach(function (user) {
                if (user.id === id) {
                    callback(null, user);
                }
            });
        } else {
            callback(null, null);
        }
    });
};

// Research function by Username
exports.findByUsername = function(username, user) {
    UserDAO.getListUsers(function (listUsers){
        find = false;
        if(listUsers != null) {
            listUsers.forEach(function (User) {
                if (User.username === username) {
                    find= true;
                    user(null, User);
                }
            });
            if (!find){
                user(null,null);
            }
        } else {
            user(null, null);
        }
    });
};


