'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/chat-controller');
const auth = require('../../../middlewares/authentication');

let _ctrl = new controller();
router.post('/', auth, _ctrl.post);
router.put('/delete/:id/:id2', auth, _ctrl.deleteMessage); //id é do chat e id 2 eh da mensagem
router.get('/', auth, _ctrl.get);
router.get('/:id', auth, _ctrl.getById);
router.get('/:id/page/:page', auth, _ctrl.getByPage2);
router.get('/page/:page', auth, _ctrl.getMyChats);
router.put('/send/:id', auth, _ctrl.sendMessage);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;
