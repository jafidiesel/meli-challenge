const fetch = require('node-fetch');

const getItems = async (q, limit = null, offset = null) => {
  try {
    if (!q) throw new Error('No query provided');
    const response = await fetch(
        `${process.env.API_URL}/sites/MLA/search?q=${q}${limit ? '&limit=' + limit : ''}${offset ? '&offset=' + offset : ''}`
      );
    const responseJson = await response.json();

    if(!response.ok) throw responseJson;
    return responseJson;
  } catch (error) {
    throw error;
  }
};

const getItem = async (id) => {
  try {
    if (!id) throw new Error('No item id provided');
    const response = await fetch(`${process.env.API_URL}/items/${id}`);
    const responseJson = await response.json();

    if(!response.ok) throw responseJson;
    return responseJson;
  } catch (error) {
    throw error;
  }
};

const getItemDescription = async (id) => {
  try {
    if (!id) throw new Error('No item id provided');
    const response = await fetch(`${process.env.API_URL}/items/${id}/description`);
    const responseJson = await response.json();

    if(!response.ok) return null;
    return responseJson;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getItems,
  getItem,
  getItemDescription,
};
