const fetch = require('node-fetch');

const getItems = async (q, limit = null, offset = null) => {
  try {
    if (!q) throw new Error('No query provided');
    return (
      await fetch(
        `${process.env.API_URL}sites/MLA/search?q=${q}${limit ? '&limit=' + limit : ''}${offset ? '&offset=' + offset : ''}`
      )
    ).json();
  } catch (error) {
    throw error;
  }
};

const getItem = async (id) => {
  try {
    if (!id) throw new Error('No item id provided');
    return (await fetch(`${process.env.API_URL}/items/${id}`)).json();
  } catch (error) {
    throw error;
  }
};

const getItemDescription = async (id) => {
  try {
    if (!id) throw new Error('No item id provided');
    return (
      await fetch(`${process.env.API_URL}/items/${id}/description`)
    ).json();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getItems,
  getItem,
  getItemDescription,
};
