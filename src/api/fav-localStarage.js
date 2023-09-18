import { fetchRecipeById, fetchRecipes } from './fetch-recies';

const FAV_KEY = 'favorites';

function getFavArray() {
  return JSON.parse(localStorage.getItem(FAV_KEY));
}

async function addToFav(id) {
  let favorites = getFavArray() || [];
  if (favorites.some(fav => fav._id === id)) {
    return;
  }
  try {
    const recipe = await fetchRecipeById(id);
    favorites.push(recipe.data);
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.log(error.statusText);
  }
}

function deleteFromFav(id) {
  let favorites = getFavArray() || [];
  const idx = favorites.findIndex(fav => fav._id === id);
  favorites.splice(idx, 1);
  localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
}

function isFav(id) {
  let favorites = getFavArray() || [];
  return favorites.some(fav => fav._id === id);
}

export { getFavArray, addToFav, deleteFromFav, isFav };
