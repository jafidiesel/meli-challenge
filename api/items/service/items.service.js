const { formatItems, formatCategories, formatItem} = require("../helpers/formatters");
const { getItems, getItem, getItemDescription } = require("../repository/items.repository");

const getAllItems = async (req, res) => {
  try {
    const response = await getItems(req.query.q, req.query.limit, req.query.offset);
    res.status(200).send({
      author: {
        name: "",
        lastname: "",
      },
      categories: formatCategories(response.filters),
      items: formatItems(response.results),
    });
  } catch (error) {
    // this will be improved once the route validators are implemented
    res.status(error.status ? error.status : 400).send({ message: error.message});
  }
};

const getItemById = async (req, res) => {
  try {
    const itemResponse = await getItem(req.params.id);
    const itemDescriptionResponse = await getItemDescription(req.params.id);
    res.status(200).send({
      author: {
        name: "",
        lastname: "",
      },
      item: formatItem(itemResponse, itemDescriptionResponse),
    });
  } catch (error) {
    // this will be improved once the route validators are implemented
    res.status(error.status ? error.status : 400).send({ message: error.message });
  }
};

module.exports = {
  getAllItems,
  getItemById,
};
