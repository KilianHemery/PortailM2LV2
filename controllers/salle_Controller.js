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

