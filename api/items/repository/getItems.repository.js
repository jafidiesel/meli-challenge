const fetch = require('node-fetch');
module.exports = getItems = async (q, limit = null, offset = null) => {
  try {
    if (q) {
        const response = (
        await fetch(
          `${process.env.API_URL}/search?q=${q}${limit ? '&limit=' + limit : ''}${offset ? '&offset=' + offset : ''}`
        )
      ).json();
      return response;
    }
    throw new Error('No query provided');
  } catch (error) {
    throw error;
  }
};