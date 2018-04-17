const SallePgDAO = require('../DAO/salleDAO');
const sallePgDAO = new SallePgDAO();

exports.salles = function (req, res, next){
    sallePgDAO.selectSalles(function (lesSalles) {
        sallePgDAO.selectSallesReservees(function (lesSallesReservees) {
                res.render('visualiser',{listeSalles: lesSalles, listeSallesReservees: lesSallesReservees, user: req.user  })
            }
        );
        }
    );
};



/*
//Affichage de toutes les categories

exports.categorie_list = function(req,res,next) {
    const query = {

        name: 'affichage-toutes-salles',
        text: 'SELECT * FROM categorie'

    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('visualiser', { listeCategorie : result });
        }
    });
};
*/