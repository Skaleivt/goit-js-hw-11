import axios from 'axios';
import "izitoast/dist/css/iziToast.min.css";

export function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: '48886554-241e539fadf1e6089b951f472',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  });

  return axios.get(`https://pixabay.com/api/?${searchParams}`)
    .then(response => response.data)
    .catch((err) => {
      throw err;
  });
}
