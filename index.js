import{a as B,S as M,i as n}from"./assets/vendor-Do60_h77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function m(o,t){const a="55633968-bd2915ca3a52bf3ac108856c5",i="https://pixabay.com/api/",e={key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},{data:r}=await B.get(i,{params:e});return r}const s={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),form:document.querySelector(".form"),loadMoreBtn:document.querySelector(".load-more-btn")},q=new M(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const t=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:l,comments:b,downloads:v})=>`
   <li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img class="gallery-image" src="${a}" alt="${e}" />
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
        <p class="info-value">${b}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Downloads</p>
        <p class="info-value">${v}</p>
      </li>
    </ul>
  </li>
  `).join("");s.gallery.insertAdjacentHTML("beforeend",t),q.refresh()}function w(){s.gallery.innerHTML=""}function g(){s.loader.classList.remove("is-hidden")}function h(){s.loader.classList.add("is-hidden")}function y(){s.loadMoreBtn.classList.remove("is-hidden")}function d(){s.loadMoreBtn.classList.add("is-hidden")}let f="",c=1;const L=15;let u=0;s.form.addEventListener("submit",async o=>{if(o.preventDefault(),f=o.currentTarget.elements["search-text"].value.trim(),!f){n.error({message:"Please enter a search query!",position:"topRight"});return}c=1,w(),d(),g();try{const{hits:t,totalHits:a}=await m(f,c);if(t.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t),s.gallery.children.length>0&&(u=s.gallery.children[0].getBoundingClientRect().height),a>L&&y()}catch(t){console.error(t),n.error({message:"Error fetching images!"})}finally{h(),s.form.reset()}});s.loadMoreBtn.addEventListener("click",async()=>{c+=1,d(),g();try{const{hits:o,totalHits:t}=await m(f,c);p(o),u>0&&scrollBy({top:u*2,behavior:"smooth"});const a=Math.ceil(t/L);c>=a?(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):y()}catch(o){console.error(o),n.error({message:"Error fetching more images!"})}finally{h()}});
//# sourceMappingURL=index.js.map
