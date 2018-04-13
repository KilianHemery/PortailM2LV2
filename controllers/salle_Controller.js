const SallePgDAO = require('../DAO/salleDAO');
const sallePgDAO = new SallePgDAO();

exports.salles = function (req, res, next){
    sallePgDAO.selectSalles(function (lesSalles) {
            res.render('visualiser',{listeSalles: lesSalles, user: req.user  })
        }
    );
};

