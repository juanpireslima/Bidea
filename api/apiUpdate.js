const axios = require('axios');
const date = new Date();

const update = function(dollar, uf, utm) {
  axios.put('http://localhost:3333/bideafactory/5fde16de149cd4172480ce51/update', {"date": `${date.getDate()}-${1+(date.getMonth())}-${date.getFullYear()}`,"indicators":{"dollar": `${dollar}`, "uf": `${uf}`, "utm": `${utm}`}})
}

module.exports = update