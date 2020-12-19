const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let indicadorSchema = new Schema({
  date: {type: String},
  indicators:{
      dollar: {type: String, required: true},
      uf: {type: String, required: true},
      utm: {type: String, required: true}
  }
});

module.exports = mongoose.model('indicador', indicadorSchema);