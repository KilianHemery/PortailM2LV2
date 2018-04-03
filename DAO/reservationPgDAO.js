const  {Client} = require('pg');
const Reservation = require('../model/reservation');

class ReservationPgDAO {

    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe1:groupe1@192.168.222.86:5432/M2L'
        });//text: "INSERT INTO reservation VALUES (3, '19/12/2017', 1, 'abdc', 'a@mail', '0123456789')"

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    insertReservation(dateDeb, salle, nom, email, tel, dateFin) {

        let insert = {
            name: 'insertion',
            //text: "select ajoutReservation('"$1"',"$2",'"$3"','"$4"','"$5"','"$6"')"
            text: "INSERT INTO reservation ( datedebut, unesalle, nom, email, tel, datefin) VALUES ($1,$2,$3,$4,$5,$6)",
            values: [dateDeb, salle, nom, email, tel, dateFin]
        };

        this._client.query(insert, function (err) {
            if (err) {
                console.log(nom);
                console.log(err.stack);
            }
        });
    }
    selectSalle(displaycb)
        {

        const salle = {
            name: 'salle',
            text: 'SELECT * FROM salle'
        };

        this._client.query(salle, function (err, result) {
            if (err) {
                console.log(err.stack);
            } else {
               var lesSalles = [];
               result.rows.forEach(function(row)
               {
                  lesSalles.push(row);
               });
                displaycb(lesSalles);
            }


        });

    }

}
module.exports = ReservationPgDAO;