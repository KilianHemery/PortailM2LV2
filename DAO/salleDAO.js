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
            text: 'SELECT salle.libelle, capacite, libellecat, concat(heureouverture ,\'H\', minutesouvertures) as "heureouverture", concat(heurefermeture ,\'H\',minutesfermetures) as "heurefermeture" FROM salle INNER JOIN categorie ON salle.unecategorie = categorie.id'
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
}
module.exports = SallePgDAO;