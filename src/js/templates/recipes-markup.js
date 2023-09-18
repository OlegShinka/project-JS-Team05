const hrefIco = document.querySelector('.href-ico');

function createRecipesMarkup(arr) {
  return arr
    .map(
      ({
        _id,
        preview,
        area,
        category,
        description,
        title,
        rating,
        time,
      }) => `<div class="thumb" data-id=${_id} style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.6) 4.82%, rgba(5, 5, 5, 0) 108.72%),
    url(${preview}), lightgray -25px -10px / 116.716% 114.018% no-repeat; background-size: cover;">
            <h3 class="recipe-title">${title}</h3>
            <p class="recipe-desc">${description}</p>
            <div class="bottom-of-recipe">
                <p class="rating"><span class="rating-num">${rating}</span> ${addStarsToMarkup(
        rating
      )}</p>
                <button class="btn-see-recipe js-see-recipe recipe-desc" type="button" data-id=${_id}>See recipe</button>
            </div>
            </div>`
    )
    .join('');
}

function addStarsToMarkup(rating) {
  const goldStars = Math.round(Number(rating));
  let markup = '';
  for (let i = 1; i < 6; i += 1) {
    markup += `<svg class="rating-icon rating-icon-${
      i <= goldStars ? 'orange' : 'grey'
    }" width="14" height="14">
                        <use href="${hrefIco.href.baseVal}#icon-Star"></use>
                    </svg>`;
  }
  return markup;
}

function addOptionsIngr(arr) {
  return arr.map(({ _id, name }) => {
    const option = document.createElement('option');
    option.text = name;
    option.value = _id;
    return option;
  });
}

function addOptionsAreas(arr) {
  return arr.map(({ name }) => {
    const option = document.createElement('option');
    option.text = name;
    option.value = name;
    return option;
  });
}

export { createRecipesMarkup, addOptionsIngr, addOptionsAreas };
