const { formatItems, formatCategories} = require("../helpers/formatters");
const getItemsRepository = require("../repository/getItems.repository");

const getAllItems = async (req, res) => {
  try {
    const response = await getItemsRepository(req.query.q, req.query.limit, req.query.offset);
    console.log(response)
    res.status(200).send({
      author: {
        name: "",
        lastname: "",
      },
      categories: formatCategories(response.filters),
      items: formatItems(response.results),
    });
  } catch (error) {
    // this will be removed once the route validators are implemented
    res.status(400).send({ message: error.message});
  }
};

const getItemById = async (req, res) => {
  try {
    res.status(200).send({ id: req.params.id });
  } catch (error) {
    res.status;
  }
};

module.exports = {
  getAllItems,
  getItemById,
};
