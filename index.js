import{a as u,S as p,i as n}from"./assets/vendor-D1AWmRWP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(s){const t="55633968-bd2915ca3a52bf3ac108856c5",o="https://pixabay.com/api/",i={key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(o,{params:i}).then(e=>e.data)}const a={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),form:document.querySelector(".form")},d=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:l,comments:c,downloads:f})=>`
   <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img class="gallery-image" src="${o}" alt="${e}" />
    </a>
    <ul class="info">
      <li class="info-item">
        <p class="info-label">Likes</p>
        <p class="info-value">${r}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Views</p>
        <p class="info-value">${l}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Comments</p>
        <p class="info-value">${c}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Downloads</p>
        <p class="info-value">${f}</p>
      </li>
    </ul>
  </li>
  `).join("");a.gallery.innerHTML=t,d.refresh()}function y(){a.gallery.innerHTML=""}function h(){a.loader.classList.remove("is-hidden")}function L(){a.loader.classList.add("is-hidden")}a.form.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search query!",position:"topRight"});return}y(),h(),m(t).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits)}).catch(o=>{console.error(o),n.error({message:"Error fetching images!",position:"topRight"})}).finally(()=>{L(),a.form.reset()})});
//# sourceMappingURL=index.js.map
