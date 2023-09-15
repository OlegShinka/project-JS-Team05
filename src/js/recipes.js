import customSelect from 'custom-select';
import 'custom-select/src/css/custom-select.css';

const element = {
  search: document.querySelector('.search-input'),
  clearSearch: document.querySelector('.clean-search'),
  clearForm: document.querySelector('.reset-filter'),
};

element.clearSearch.addEventListener('click', function () {
  element.search.value = '';
});

element.clearForm.addEventListener('click', function () {
  element.search.value = '';
  cstSel.forEach(sel => (sel.value = '0'));
});

const cstSel = customSelect('.custom-select');
