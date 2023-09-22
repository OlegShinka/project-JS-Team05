export async function patchRating(recipeId, num, mail) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const END_POINT = `/recipes/${recipeId}/rating`;

  const updateData = {
    rate: Number(num),
    email: mail,
  };

  const options = {
    method: 'PATCH',
    body: JSON.stringify(updateData),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const response = await fetch(`${BASE_URL}${END_POINT}`, options);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}
