import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('input');
const button = document.querySelector('button');

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions'
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';


button.addEventListener('click', (event) => {
   
    event.preventDefault();
    
    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
          message: "Please enter a search query.",
            position: 'topRight',
            messageColor: '#fff',
            messageSize: '16px',
            iconUrl: "./img/Group.svg",
            backgroundColor: " #EF4040",
            iconColor: '#fff'
        });
        return;
    }
    clearGallery();
    showLoader();
    getImagesByQuery(query)
        .then(data => {
            
            if (data.hits.length === 0) {
                
                iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: 'topRight',
            messageColor: '#fff',
            messageSize: '16px',
            iconUrl: "./img/Group.svg",
            backgroundColor: " #EF4040",
            iconColor: '#fff'
        })
        hideLoader();
            } else {
                createGallery(data.hits)
    }
        }).catch(err => {
            iziToast.error({
      message: "Error",
      position: "topRight"
    })
    console.log(err);
        })
        .finally(() => {
            hideLoader();
          });
    
})


    
    
    
    
    
  





