import{i as g,d as p,n as o,a as f,g as i,c,b as s,p as v}from"./switchdark-9705a7f2.js";const a={recipesCont:document.querySelector(".recipes-container"),paginationCont:document.querySelector("#tui-pagination-container"),pagination:void 0,noFav:document.querySelector(".no-fav"),categoriesFilter:document.querySelector(".categories-filter"),otherCat:document.querySelector(".other-categories")};d();a.recipesCont.addEventListener("click",h);a.categoriesFilter.addEventListener("click",L);function h(e){if(!e.target.classList.contains("js-fav"))return;const{id:t}=e.target.dataset;g(t)?(p(t),d(),o.Notify.success("Recipe deleted from favotites")):(f(t),e.target.parentElement.classList.add("is-fav"),o.Notify.success("Recipe added to favotites"))}function d(){let e=i();if(!e||e.length===0){a.recipesCont.innerHTML="",a.otherCat.innerHTML="",a.noFav.classList.remove("hidden"),a.paginationCont.classList.add("hidden");return}const t=e.map((r,l,u)=>{if(l===u.findIndex(m=>m.category===r.category))return r.category});a.otherCat.innerHTML=y(t);const n=matchMedia("(max-width: 1109px)").matches?"8":"9";a.recipesCont.innerHTML=c(e),a.pagination=s({page:1,perPage:n,totalPages:e.length/Number(n)})}function y(e){return e.map(t=>{if(t)return`<button type="button" class="category-btn" data-cat="${t}">${t}</button>`}).join("")}function L(e){if(!e.target.classList.contains("category-btn")||e.target.classList.contains("active"))return;let t=i().filter(({category:r})=>e.target.dataset.cat==="all"?!0:r===e.target.dataset.cat);document.querySelector(".category-btn.active").classList.remove("active"),e.target.classList.add("active");const n=matchMedia("(max-width: 1109px)").matches?"8":"9";a.recipesCont.innerHTML=c(t),a.pagination=s({page:1,perPage:n,totalPages:t.length/Number(n)})}const b=document.querySelector("[data-modal-overnow]"),C=document.querySelector("[data-modal-close]"),F=document.querySelector("[name = subscribe-orderNow]");C.addEventListener("click",S);F.addEventListener("submit",M);function M(e){e.preventDefault();const t=e.currentTarget,n={name:t.name_customers.value,phone:t.tel_customers.value,email:t.email_customers.value,comment:t.comment_customers.value};v(n).catch(r=>{o.Notify.failure("Error order now!")})}function S(){b.classList.toggle("is-hidden")}
