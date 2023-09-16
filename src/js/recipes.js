import customSelect from 'custom-select';
import 'custom-select/src/css/custom-select.css';
import { fetchRecipes, fetchAreas, fetchIngr } from '../api/fetch-recies';
import { addOptions, createRecipesMarkup } from './templates/recipes-markup';
import debounce from 'lodash.debounce';

const elements = {
  form: document.querySelector('.filter-form'),
  search: document.querySelector('.search-input'),
  clearSearch: document.querySelector('.clean-search'),
  clearForm: document.querySelector('.reset-filter'),
  cstSel: customSelect('.custom-select'),
  recipesCont: document.querySelector('.recipes-container'),
  catList: document.querySelector('.categoris-list'),
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
  })
  .catch(e => console.log(e.message));

// Add areas
fetchAreas()
  .then(({ data }) => {
    elements.cstSel[1].append(addOptions(data));
  })
  .catch(e => console.log(e.message));

// Add ingridients
fetchIngr()
  .then(({ data }) => {
    elements.cstSel[2].append(addOptions(data));
  })
  .catch(e => console.log(e.message));

//Forms cleaners
elements.clearSearch.addEventListener('click', function () {
  elements.search.value = '';
  handleChange();
});
elements.clearForm.addEventListener('click', function () {
  elements.search.value = '';
  elements.cstSel.forEach(sel => (sel.value = '0'));
  handleChange();
});

//Change params
const debounceCallback = debounce(handleChange, 300);
elements.search.addEventListener('input', debounceCallback);
elements.cstSel.forEach(sel =>
  sel.select.addEventListener('change', () => {
    if (sel.value === '0') {
      sel.opener.style.color = 'rgba(5, 5, 5, 0.5)';
    } else {
      sel.opener.style.color = 'var(--primary-text-color)';
    }
    handleChange();
  })
);
elements.catList.addEventListener('click', e => {
  if (!e.target.classList.contains('categoris-btn')) {
    return;
  }
  handleChange();
});

function handleChange() {
  console.log(matchMedia('(max-width: 1109px)').matches);
  currentParams = {
    title: elements.search.value?.trim() || '',
    category: document.querySelector('.categoris-btn.activ')?.textContent || '',
    page: '1',
    limit: matchMedia('(max-width: 1109px)').matches ? '8' : '9',
    time: elements.cstSel[0].value,
    area: elements.cstSel[1].value,
    ingredient: elements.cstSel[2].value,
  };
  fetchRecipes(currentParams)
    .then(({ data }) => {
      elements.recipesCont.innerHTML = createRecipesMarkup(data.results);
    })
    .catch(e => console.log(e.message));
}
