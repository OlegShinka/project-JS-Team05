async function postOrderNow(order) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },

    body: JSON.stringify(order),
  };
  const response = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/orders/add',

    options
  );
  console.log(response);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

export { postOrderNow };
