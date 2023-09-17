const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
const END_POINT = "/recipes/popular";

async function getPopularRecipes () {
    const response = await fetch(`${BASE_URL}${END_POINT}`);
    const data = await response.json();
    return data;
}

export {getPopularRecipes};