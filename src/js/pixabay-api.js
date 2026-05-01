import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const API_KEY = '55633968-bd2915ca3a52bf3ac108856c5';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  };

  const { data } = await axios.get(BASE_URL, { params });
  return data;
}
