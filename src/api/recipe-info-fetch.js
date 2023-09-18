import axios from 'axios';

export async function fetchInfoRecipe(recipeId) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const END_POINT = '/recipes';

  try {
    const response = await axios.get(`${BASE_URL}${END_POINT}/${recipeId}`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}
