import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  form: document.querySelector('.form'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
   <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    </a>
    <ul class="info">
      <li class="info-item">
        <p class="info-label">Likes</p>
        <p class="info-value">${likes}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Views</p>
        <p class="info-value">${views}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Comments</p>
        <p class="info-value">${comments}</p>
      </li>
      <li class="info-item">
        <p class="info-label">Downloads</p>
        <p class="info-value">${downloads}</p>
      </li>
    </ul>
  </li>
  `
    )
    .join('');

  refs.gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
