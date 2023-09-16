const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
const allСategorisBtn = document.querySelector('.all-categoris');
const categorisList = document.querySelector('.categoris-list');
let activButton = null;

//////запити на бек

async function allCategoris() {
  const url = `${BASE_URL}/categories`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
async function oneCategory(cat) {
  const url = `${BASE_URL}/recipes?category=${cat}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
async function allRecipes() {
  const url = `${BASE_URL}/recipes`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
///////отримання даних

async function getAllCategoris() {
  activButton = allСategorisBtn;
  activButton.classList.add('activ');
  try {
    const data = await allCategoris();

    const markup = data
      .map(
        cat =>
          `<button class='categoris-btn' type='button'>${cat.name}</button>`
      )
      .join('');
    categorisList.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}
getAllCategoris();
categorisList.addEventListener('click', onCategoryClick);
async function onCategoryClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const category = event.target.textContent;
  activButton.classList.remove('activ');
  activButton = event.target;
  activButton.classList.add('activ');
  try {
    const data = await oneCategory(category);
  } catch (error) {
    console.log(error);
  }
}

allСategorisBtn.addEventListener('click', onAllCategorisClick);
async function onAllCategorisClick() {
  activButton.classList.remove('activ');
  activButton = allСategorisBtn;
  activButton.classList.add('activ');
  try {
    const data = await allRecipes();
  } catch (error) {
    console.log(error);
  }
}
