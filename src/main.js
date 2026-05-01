import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  refs,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-functions.js';

let query = '';
let page = 1;
const perPage = 15;
let cardHeight = 0;

refs.form.addEventListener('submit', async event => {
  event.preventDefault();

  query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }
  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(hits);

    if (refs.gallery.children.length > 0) {
      cardHeight = refs.gallery.children[0].getBoundingClientRect().height;
    }

    if (totalHits > perPage) {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error(error);
    iziToast.error({ message: 'Error fetching images!' });
  } finally {
    hideLoader();
    refs.form.reset();
  }
});

refs.loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    createGallery(hits);

    if (cardHeight > 0) {
      scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    const totalPages = Math.ceil(totalHits / perPage);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error(error);
    iziToast.error({ message: 'Error fetching more images!' });
  } finally {
    hideLoader();
  }
});
