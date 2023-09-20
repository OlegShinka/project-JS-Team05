import customSelect from 'custom-select';
import 'custom-select/src/css/custom-select.css';
import { fetchRecipes, fetchAreas, fetchIngr } from '../api/fetch-recies';
import {
  addOptionsIngr,
  addOptionsAreas,
  createRecipesMarkup,
} from './templates/recipes-markup';
import debounce from 'lodash.debounce';
// import Pagination from 'tui-pagination';
import { createPagination } from './pagination';
import { addToFav, deleteFromFav, isFav } from '../api/fav-localStarage';
import { Notify } from 'notiflix';

const elements = {
  form: document.querySelector('.filter-form'),
  search: document.querySelector('.search-input'),
  clearSearch: document.querySelector('.clean-search'),
  clearForm: document.querySelector('.reset-filter'),
  cstSel: customSelect('.custom-select'),
  recipesCont: document.querySelector('.recipes-container'),
  catList: document.querySelector('.categoris-wrapper'),
  // paginationCont: document.querySelector('#tui-pagination-container'),
  pagination: undefined,
  loader: document.querySelector('.loader-wrapper'),
};

let currentParams = {
  title: '',
  category: '',
  page: '1',
  limit: matchMedia('(max-width: 1109px)').matches ? '8' : '9',
  time: '',
  area: '',
  ingredient: '',
};

//Initial recipes
fetchRecipes(currentParams)
  .then(({ data }) => {
    elements.recipesCont.innerHTML = createRecipesMarkup(data.results);
    elements.pagination = createPagination(data);
    elements.pagination.on('afterMove', handleMove);
  })
  .catch(e => Notify.failure(e.message))
  .finally(() => elements.loader.classList.add('hidden'));

// Add areas
fetchAreas()
  .then(({ data }) => {
    elements.cstSel[1].append(addOptionsAreas(data));
  })
  .catch(e => Notify.failure(e.message));

// Add ingridients
fetchIngr()
  .then(({ data }) => {
    elements.cstSel[2].append(addOptionsIngr(data));
  })
  .catch(e => Notify.failure(e.message));

//Forms cleaners
elements.clearSearch.addEventListener('click', function () {
  elements.search.value = '';
  handleChange();
});
elements.clearForm.addEventListener('click', function () {
  elements.search.value = '';
  elements.cstSel.forEach(sel => {
    sel.value = '0';
    sel.opener.style.color = 'rgba(5, 5, 5, 0.5)';
  });
  handleChange();
});

//Change params
const debounceCallback = debounce(handleChange, 300);
elements.search.addEventListener('input', debounceCallback);
elements.cstSel.forEach(sel =>
  sel.select.addEventListener('change', () => {
    if (sel.value === '') {
      sel.opener.style.color = 'rgba(5, 5, 5, 0.5)';
    } else {
      sel.opener.style.color = 'var(--primary-text-color)';
    }
    handleChange();
  })
);
elements.catList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  handleChange();
});

function handleChange() {
  let category = document.querySelector('.activ').textContent;
  if (category === 'All categories') {
    category = '';
  }
  currentParams = {
    title: elements.search.value?.trim() || '',
    category: category,
    page: '1',
    limit: matchMedia('(max-width: 1109px)').matches ? '8' : '9',
    time: elements.cstSel[0].value,
    area: elements.cstSel[1].value,
    ingredient: elements.cstSel[2].value,
  };

  elements.recipesCont.innerHTML = '';
  elements.loader.classList.remove('hidden');
  fetchRecipes(currentParams)
    .then(({ data }) => {
      if (!data.results.length) {
        Notify.failure('Nothing found.');
        elements.recipesCont.innerHTML = '<p class="empty">Nothing found.</p>';
        return;
      }
      elements.recipesCont.innerHTML = createRecipesMarkup(data.results);
      elements.pagination = createPagination(data);
      elements.pagination.on('afterMove', handleMove);
    })
    .catch(e => Notify.failure(e.message))
    .finally(() => elements.loader.classList.add('hidden'));
}

// Pagination
function handleMove({ page }) {
  currentParams.page = page;
  fetchRecipes(currentParams)
    .then(({ data }) => {
      elements.recipesCont.innerHTML = createRecipesMarkup(data.results);
    })
    .catch(e => Notify.failure(e.message));
}

// Favorites
elements.recipesCont.addEventListener('click', handleFav);

function handleFav(e) {
  if (!e.target.classList.contains('js-fav')) {
    return;
  }
  const { id } = e.target.dataset;
  if (isFav(id)) {
    deleteFromFav(id);
    e.target.parentElement.classList.remove('is-fav');
    Notify.success('Recipe deleted from favotites');
  } else {
    addToFav(id);
    e.target.parentElement.classList.add('is-fav');
    Notify.success('Recipe added to favotites');
  }
}

export { handleChange };
