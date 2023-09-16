import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

async function fetchRecipes(params = {}) {
  const END_POINT = '/recipes';
  const currentParams = new URLSearchParams({
    title: params.title || '',
    category: params.category || '',
    page: params.page || '1',
    limit: params.limit || '8',
    time: params.time || '',
    area: params.area || '',
    ingredient: params.ingredient || '',
  });
  return await axios.get(`${BASE_URL}${END_POINT}?${currentParams}`);
}

async function fetchAreas() {
  const END_POINT = '/areas';
  return await axios.get(`${BASE_URL}${END_POINT}`);
}

async function fetchIngr() {
  const END_POINT = '/ingredients';
  return await axios.get(`${BASE_URL}${END_POINT}`);
}

export { fetchRecipes, fetchAreas, fetchIngr };
