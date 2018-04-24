var express = require('express');
var router = express.Router();

var reservation_Controller = require('../controllers/reservation_Controller');


router.get('/', reservation_Controller.liste_salle);

router.post('/',reservation_Controller.liste_reservation);



module.exports = router;