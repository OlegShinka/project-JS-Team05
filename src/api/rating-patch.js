import axios from 'axios';

export async function patchRating(recipeId, num) {
  const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  const END_POINT = `/recipes/${recipeId}/rating`;

  const options = {
    method: 'PATCH',
    rating: num,
  };

  // try {
  //   const response = await axios.get(`${BASE_URL}${END_POINT}`);
  //   if (response.status !== 200) {
  //     console.log("---");
  //     throw new Error(`Request failed with status ${response.status}`);
  //   } console.log("+++");
  //   return response.data;
  // } catch (error) {
  //   throw error;
  // }
}
