import{i as p,d as f,n as r,a as m,g as s,c,b as o}from"./pagination-652d09fd.js";const a={recipesCont:document.querySelector(".recipes-container"),paginationCont:document.querySelector("#tui-pagination-container"),pagination:void 0,noFav:document.querySelector(".no-fav"),categoriesFilter:document.querySelector(".categories-filter")};d();a.recipesCont.addEventListener("click",v);a.categoriesFilter.addEventListener("click",h);function v(t){if(!t.target.classList.contains("js-fav"))return;const{id:e}=t.target.dataset;p(e)?(f(e),d(),r.Notify.success("Recipe deleted from favotites")):(m(e),t.target.parentElement.classList.add("is-fav"),r.Notify.success("Recipe added to favotites"))}function d(){let t=s();if(!t||t.length===0){a.recipesCont.innerHTML="",a.noFav.classList.remove("visually-hidden"),a.paginationCont.classList.add("visually-hidden");return}const e=t.map((i,g,l)=>{if(g===l.findIndex(u=>u.category===i.category))return i.category});a.categoriesFilter.insertAdjacentHTML("beforeend",y(e));const n=matchMedia("(max-width: 1109px)").matches?"8":"9";a.recipesCont.innerHTML=c(t),a.pagination=o({page:1,perPage:n,totalPages:t.length/Number(n)})}function y(t){return t.map(e=>`<button type="button" class="category-btn" data-cat="${e}">${e}</button>`).join("")}function h(t){if(!t.target.classList.contains("category-btn")||t.target.classList.contains("active"))return;let e=s().filter(({category:i})=>t.target.dataset.cat==="all"?!0:i===t.target.dataset.cat);document.querySelector(".category-btn.active").classList.remove("active"),t.target.classList.add("active");const n=matchMedia("(max-width: 1109px)").matches?"8":"9";a.recipesCont.innerHTML=c(e),a.pagination=o({page:1,perPage:n,totalPages:e.length/Number(n)})}
