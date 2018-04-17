const ReservationPgDAO = require('../DAO/reservationPgDAO');
const reservationPgDAO = new ReservationPgDAO();

exports.liste_reservation = function (req, res, next) {
    reservationPgDAO.insertReservation(req.body.salle, req.body.nom, req.body.email, req.body.tel, req.body.utilisateur, req.body.datedebut, req.body.datefin);
    res.render('reservation', {action:'validation', user: req.user});
};

exports.liste_salle = function (req, res, next){
    reservationPgDAO.selectSalle(function (lesSalles) {
            res.render('reservation',{listeSalles: lesSalles, action:'new',user: req.user})
        }
    );
};