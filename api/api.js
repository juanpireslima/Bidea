const apiUf = require('./subscribers/apiUf')
const apiUtm = require('./subscribers/apiUtm')
const apiUsd = require('./subscribers/apiUsd')
const update = require('./apiUpdate')


// Function gets all 3 api data and stores in a variable, then update db data
function api(){
const searchUpdate =  async function() {
  var ufData = await apiUf
  var utmData = await apiUtm
  var usdData = await apiUsd
  var apiData = {ufData, utmData, usdData}
  update(apiData.usdData.vl, apiData.ufData.serie[0].valor, apiData.utmData.serie[0].valor)
  //console.log(apiData.usdData.vl)
}()}

module.exports = api;