const { Client } = require('pg');

var state ={
    db :null,
}

exports.connect = function(done){
    if (state.db) return done();
    const client = new Client({
        connectionString : 'postgres://groupe1:groupe1@192.168.222.86:5432/M2L'
        //connectionString : process.ENV.DATABASE_URL

    });

    client.connect(function (err, db){

        if (err) return done(err);
        state.db = db;
        done();
    });

};

exports.get = function (){
    return state.db;
};

exports.close = function(done) {
    if (state.db) {
        state.db.close(function(err, result) {
            state.db = null;
            state.mode = null;
            done(err)
        })
    }
};