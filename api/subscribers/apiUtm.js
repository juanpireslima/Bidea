const axios = require('axios');

const date = new Date();

async function axiosUtm() {
  try {
    const {data:response} = await axios.get(`https://mindicador.cl/api/utm/${date.getDate()}-${1+(date.getMonth())}-${date.getFullYear()}`)
    return response
  }

  catch (error) {
    console.log(error);
  }
}

module.exports = axiosUtm();