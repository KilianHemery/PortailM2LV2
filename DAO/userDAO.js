const { Client } = require('pg');
const User = require('../metier/User');


class userDAO {


    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe1:groupe1@192.168.222.86:5432/M2L'

        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });

    }

    getListUsers(cb) {
        const query = {
            name: 'get-all-user',
            text: 'SELECT id,username,password FROM utilisateurs ;'
        };

        this._client.query(query, function (err,result) {
            let lesUsers = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function (row) {
                    let unUser;
                    unUser =  new User(row['id'], row['username'], row['password']);
                    lesUsers.push(unUser);
                    console.log(lesUsers);
                });
                cb(lesUsers);
            }
        });

    };
}

//creer une classe user    model différent de métier
module.exports = userDAO;
