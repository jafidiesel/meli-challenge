const { formatItems, formatCategories, formatItem} = require("../helpers/formatters");
const { getItems, getItem, getItemDescription } = require("../repository/items.repository");

const getAllItems = async (query, limit= null, offset= null) => {
    const response = await getItems(query, limit, offset);
    const getAllItemsDTO = {
      author: {
        name: "",
        lastname: "",
      },
      categories: formatCategories(response.filters),
      items: formatItems(response.results),
    };
    return getAllItemsDTO;
};

const getItemById = async (id) => {
    const itemResponse = await getItem(id);
    const itemDescriptionResponse = await getItemDescription(id);
    const getItemByIdDTO = {
      author: {
        name: "",
        lastname: "",
      },
      item: formatItem(itemResponse, itemDescriptionResponse),
    };
    return getItemByIdDTO;
};

module.exports = {
  getAllItems,
  getItemById,
};
