var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
    function(req, res) {
        console.log(req.session);

        res.render('index', { title: 'Portail de la M2L', user: req.user });
    }
);

router.get('/reseaux',
    function(req, res) {
        console.log(req.session);

        res.render('reseaux', { title: 'Réseaux Informatique', user: req.user });
    }
);

router.get('/propos',
    function(req, res) {
        console.log(req.session);

        res.render('propos', { title: 'L\'annuaire des ligues', user: req.user  });
    }
);

router.get('/equipement',
    function(req, res) {
        console.log(req.session);

        res.render('equipement', { title: 'Équipement en matériel informatique des espaces', user: req.user  });
    }
);

router.get('/services',
    function(req, res) {
        console.log(req.session);

        res.render('services', { title: 'Services de la M2L', user: req.user });
    }
);

router.get('/contact',
    function (req,res) {
        console.log(req.session);

        res.render('contact', {title: 'Contact', user: req.user });
    }
);

router.get('/description',
    function (req,res) {
        console.log(req.session);

        res.render('description', {title: 'Description', user: req.user});
    }
);


module.exports = router;