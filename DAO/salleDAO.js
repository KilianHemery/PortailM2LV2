const  {Client} = require('pg');
const Salle = require('../model/visualiser');

class SallePgDAO {

    constructor() {
        this._client = new Client({
            connectionString: 'postgres://groupe1:groupe1@192.168.222.86:5432/M2L'
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    selectSalles(displaycb)
    {
        const lesSalles = {
            name: 'affichage-toutes-salles',
            text: 'SELECT salle.libelle, capacite, libellecat, categorie.horaireDebut, categorie.horaireFin FROM salle INNER JOIN categorie ON salle.unecategorie = categorie.id order by salle.libelle'
        };

        this._client.query(lesSalles, function (err, result) {
            if (err){
                console.log(err.stack);
            }else {
                var allSalles = [];
                result.rows.forEach(function (row)
                {
                allSalles.push(row);
                });
                displaycb(allSalles);
            }
        });
    }

    selectSallesReservees(displaycb2)
    {
        const lesSallesReservees = {
            name: 'affichage-toutes-salles-reservees',
            text: 'select salle.libelle, reservation.datedebut, reservation.datefin FROM salle, reservation where salle.id = reservation.unesalle'
        };

        this._client.query(lesSallesReservees, function (err, result) {
            if (err){
                console.log(err.stack);
            }else {
                var allSallesReservees = [];
                result.rows.forEach(function (row)
                {
                    allSallesReservees.push(row);
                });
                displaycb2(allSallesReservees);
            }
        });
    }
}
module.exports = SallePgDAO;