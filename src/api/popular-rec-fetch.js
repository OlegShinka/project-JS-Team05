const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
const END_POINT = '/recipes/popular';

//пошук популярних рецептів
async function getPopularRecipes() {
  const response = await fetch(`${BASE_URL}${END_POINT}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
}

export { getPopularRecipes};
