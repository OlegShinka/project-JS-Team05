const hrefIco = document.querySelector('.href-ico');

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

export function markupRecipeModal(arr) {
    let preview = `<img src="${arr.thumb}" alt="${arr.title}" class="recipe-img" />`;
    if (arr.youtube) {
      let youtubeId = arr.youtube.slice(32);
      preview = `<iframe class="recipe-img" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0"></iframe>`;
    }
  
    let tags = `<div class="modal-rec-tag-text">#${arr.tags[0]}</div>`;
    for (let i = 1; i < arr.tags.length; i += 1) {
      tags += `<div class="modal-rec-tag-text">#${arr.tags[i]}</div>`;
    }
  
    let ingredients = `
          <div class="modal-rec-ingr-one">
            <div class="modal-rec-ingr-name">${arr.ingredients[0].name}</div>
            <div class="modal-rec-ingr-qnt">${arr.ingredients[0].measure}</div>
          </div>
          <div class="modal-rec-ingr-line"></div>`;
    for (let i = 1; i < arr.ingredients.length; i += 1) {
      ingredients += `<div class="modal-rec-ingr-one">
            <div class="modal-rec-ingr-name">${arr.ingredients[i].name}</div>
            <div class="modal-rec-ingr-qnt">${arr.ingredients[i].measure}</div>
          </div>
          <div class="modal-rec-ingr-line"></div>`;
    }
  
    let stars = addStarsToMarkup(`${arr.rating}`);
  
    const card = `
        <h2 class="modal-rec-title">${arr.title}</h2>
        <div class="modal-rec-img">
          ${preview}
        </div>
        <div class="modal-rec-flex">
          <div class="modal-rec-tags">
            ${tags}        
          </div>
          <div class="modal-rec-rating">
            <div class="modal-rec-rat-text">${arr.rating}</div>
            <div class="modal-rec-rat-stars">${stars}</div>
            <div class="modal-rec-rat-time">${arr.time}</div>
          </div>
        </div>
        <div class="modal-rec-ingr">
          ${ingredients}
        </div>
        <div class="modal-rec-instr">${arr.instructions}</div>`;
    return card;
  }

  export function markupRecipeModalMobile(arr) {
    let preview = `<img src="${arr.thumb}" alt="${arr.title}" class="recipe-img" />`;
    // if (arr.youtube) {
    //   let youtubeId = arr.youtube.slice(32);
    //   preview = `<iframe class="recipe-img" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0"></iframe>`;
    // }
  
    let tags = `<div class="modal-rec-tag-text">#${arr.tags[0]}</div>`;
    for (let i = 1; i < 3; i += 1) {
      tags += `<div class="modal-rec-tag-text">#${arr.tags[i]}</div>`;
    }
  
    let ingredients = `
          <div class="modal-rec-ingr-one">
            <div class="modal-rec-ingr-name">${arr.ingredients[0].name}</div>
            <div class="modal-rec-ingr-qnt">${arr.ingredients[0].measure}</div>
          </div>
          <div class="modal-rec-ingr-line"></div>`;
    for (let i = 1; i < arr.ingredients.length; i += 1) {
      ingredients += `<div class="modal-rec-ingr-one">
            <div class="modal-rec-ingr-name">${arr.ingredients[i].name}</div>
            <div class="modal-rec-ingr-qnt">${arr.ingredients[i].measure}</div>
          </div>
          <div class="modal-rec-ingr-line"></div>`;
    }
  
    let stars = addStarsToMarkup(`${arr.rating}`);
  
    const card = `
        <div class="modal-rec-img">
          ${preview}
        </div>
        <h2 class="modal-rec-title">${arr.title}</h2>           
        <div class="modal-rec-rating">
          <div class="modal-rec-rat-text">${arr.rating}</div>
          <div class="modal-rec-rat-stars">${stars}</div>
          <div class="modal-rec-rat-time">${arr.time}</div>
        </div>
        <div class="modal-rec-ingr">
          ${ingredients}
        </div>
        <div class="modal-rec-tags">
            ${tags}        
          </div>
        <div class="modal-rec-instr">${arr.instructions}</div>`;
    return card;
  }