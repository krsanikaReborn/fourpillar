var express = require('express');
var router = express.Router();
var forcesController = require('../controllers/forcesController');

/* GET home page. */
router.get('/', forcesController.index);
router.get('/all', forcesController.all);


module.exports = router;
