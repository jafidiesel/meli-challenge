async function getItems(search: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items?q=${search}&limit=4`
  );
    return response.json();
}

async function getItem(id: string)  {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/${id}`
  );
  return response.json();
}

export { getItem, getItems };
