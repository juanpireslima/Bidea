const axios = require('axios');

async function axiosUsd() {
  try {
    const {data:response} = await axios.get(
      `https://currency26.p.rapidapi.com/convert/USD/CLP/1`,
      {headers: {
          "x-rapidapi-key" : "bfd3eed097msh3573a036d7857bap1ca430jsn11a32210d1cc"
        }
      })
    return response
  }

  catch (error) {
    console.log(error);
  }
}

module.exports = axiosUsd();