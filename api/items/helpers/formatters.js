const formatItems = (items) => {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 2,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    state_address: null,
  }));
};

const formatCategories = (filters) => {
  if (!filters || filters.length === 0) return [];
  return filters[0].values[0].path_from_root.map((category) => category.name);
};

const formatItem = (item, itemDescription) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 2,
    },
    picture: item.pictures[0].url,
    thumbnail: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: item.sold_quantity,
    description: !itemDescription ? "" : itemDescription.plain_text,
  };
}

module.exports = {
  formatItems,
  formatCategories,
  formatItem
};
