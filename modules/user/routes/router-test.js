const express = require('express');

const router = express.Router();
const controller = require('../controllers/user-controller');
const _ctrl = new controller();

router.get('/oi', _ctrl.get);
module.exports = router;
