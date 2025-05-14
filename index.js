import{a as p,S as g,i as n}from"./assets/vendor-D3PmPE7A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(s){const r=new URLSearchParams({key:"48886554-241e539fadf1e6089b951f472",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get(`https://pixabay.com/api/?${r}`).then(o=>o.data).catch(o=>{throw o})}const c=document.querySelector(".gallery"),f=document.querySelector("#gallery span"),h=new g("#gallery ul li a",{captions:!0,captionsData:"alt",captionDelay:250,disableScroll:!0,enableKeyboard:!0,nav:!0,closeText:"×",swipeClose:!0,enableKeyboard:!0});function y(s){const r=s.map(({previewURL:o,largeImageURL:a,tags:e,comments:t,downloads:i,likes:u,views:d})=>`<li class="gallery-link"><a class="gallery-item" href="${a}">
    <img class="gallery-image" src="${o}" alt="${e}"/></a>
    <div class="info">
          <div class="info-list">
            <h4 class="info-title">Likes</h4>
            <p class="info-text">${u}</p>
          </div>
          <div class="info-list">
            <h4 class="info-title">Views</h4>
            <p class="info-text">${d}</p>
          </div>
          <div class="info-list">
            <h4 class="info-title">Comments</h4>
            <p class="info-text">${t}</p>
          </div>
          <div class="info-list">
            <h4 class="info-title">Downloads</h4>
            <p class="info-text">${i}</p>
          </div>
        </div></li> `).join("");c.innerHTML=r,h.refresh()}function v(){c.innerHTML=" "}function b(){f.classList.add("loader")}function l(){f.classList.remove("loader")}const L=document.querySelector("input"),S=document.querySelector("button");S.addEventListener("click",s=>{s.preventDefault();const r=L.value.trim();if(!r){n.warning({message:"Please enter a search query.",position:"topRight",messageColor:"#fff",messageSize:"16px",iconUrl:"./img/Group.svg",backgroundColor:" #EF4040",iconColor:"#fff"});return}v(),b(),m(r).then(o=>{o.hits.length===0?(n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",messageSize:"16px",iconUrl:"./img/Group.svg",backgroundColor:" #EF4040",iconColor:"#fff"}),l()):y(o.hits)}).catch(o=>{n.error({message:"Error",position:"topRight"}),console.log(o)}).finally(()=>{l()})});
//# sourceMappingURL=index.js.map
