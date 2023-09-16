import customSelect from 'custom-select';
import 'custom-select/src/css/custom-select.css';

const elements = {
  form: document.querySelector('.filter-form'),
  search: document.querySelector('.search-input'),
  clearSearch: document.querySelector('.clean-search'),
  clearForm: document.querySelector('.reset-filter'),
  cstSel: customSelect('.custom-select'),
};

elements.clearSearch.addEventListener('click', function () {
  elements.search.value = '';
});

elements.clearForm.addEventListener('click', function () {
  elements.search.value = '';
  elements.cstSel.forEach(sel => (sel.value = '0'));
});

elements.search.addEventListener('change', () => console.log(elements.search));
elements.cstSel.forEach(sel =>
  sel.select.addEventListener('change', () => {
    // console.dir(sel);
    if (sel.value === '0') {
      sel.opener.style.color = 'rgba(5, 5, 5, 0.5)';
    } else {
      sel.opener.style.color = '#050505';
    }
  })
);
