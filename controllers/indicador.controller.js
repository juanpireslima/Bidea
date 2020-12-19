const Indicador = require('../models/indicador.model');
const api = require('../api/api.js');

const date = new Date();

// Creating, Only use if the db was deleted
 /* exports.create = function(req, res, next) {
  let indicador = new Indicador(
    {
      date : req.body.date,
      indicators : req.body.indicators
    }
  );
    indicador.save(function(err) {
      if(err) {
        return next(err);
      }
        res.send('Indicador cadastrado com sucesso')
    })
} */


// Getting data
exports.details = function (req, res, next) {
  Indicador.findById("5fde16de149cd4172480ce51", function (err, indicador) {
    if (err) return next(err);
    if(indicador.date === `${date.getDate()}-${1+(date.getMonth())}-${date.getFullYear()}` ) {
      res.send(indicador);
    } else {
      api()
      res.send(indicador);
    }
    })
};

// Update used by api
exports.update = function (req, res, next) {
  Indicador.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, indicador) {
      if (err) return next(err);
      res.send('Indicador atualizado !');
  });
};

