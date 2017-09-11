var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/gruppen', db.getAllGruppen);
router.post('/api/user', db.createUser);
router.put('/api/user/:id', db.updateUser);
router.get('/api/user/', db.getAllUser);

module.exports = router;