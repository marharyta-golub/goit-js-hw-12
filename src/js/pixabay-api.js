import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '55633968-bd2915ca3a52bf3ac108856c5';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
