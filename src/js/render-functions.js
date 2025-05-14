import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/styles.css';

const galleryContainer = document.querySelector('#gallery ul');

const lightbox = new SimpleLightbox('#gallery ul li a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  disableScroll: true,
  enableKeyboard: true,
  nav: true,
  closeText:	'×',	
  swipeClose: true,
  enableKeyboard: true,                        
});
  
export function createGallery(images) {
  const markup = images
    .map(({ previewURL, largeImageURL, tags, comments, downloads, likes, views }) =>
      `<li class="gallery-link"><a class="gallery-item" href="${largeImageURL}">
    <img class="gallery-image" src="${previewURL}" alt="${tags}"/></a>
    <div class="info">
          <div class="info-list">
            <h4 class="info-title">Likes</h4>
            <p class="info-text">${likes}</p>
          </div>
          <div class="info-list">
            <h4 class="info-title">Views</h4>
            <p class="info-text">${views}</p>
          </div>
          <div class="info-list">
            <h4 class="info-title">Comments</h4>
            <p class="info-text">${comments}</p>
          </div>
          <div class="info-list">
            <h4 class="info-title">Downloads</h4>
            <p class="info-text">${downloads}</p>
          </div>
        </div></li> `)
    .join("");
    
  galleryContainer.innerHTML = markup;
  
  lightbox.refresh();
};

export function clearGallery() {
  galleryContainer.innerHTML = ' ';
};

export function showLoader() {
  galleryContainer.innerHTML = `<span class="loader"></span>`;
  
};

export function hideLoader() {
  const loaderRemove = document.querySelector('.loader');
  loaderRemove.classList.remove('loader');
}
  

