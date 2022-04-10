// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryEl = document.querySelector('.gallery');


function makeGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('')
    
  
}

const GalleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', GalleryItemsMarkup); 


let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
})

