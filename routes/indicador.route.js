const express = require('express');
const router = express.Router();

const indicador_controller = require('../controllers/indicador.controller');

// EndPoints

// router.post('/create', indicador_controller.create); Only use if the db was deleted

router.get('/indicadoreshoy', indicador_controller.details);

router.put('/:id/update', indicador_controller.update);

module.exports = router;