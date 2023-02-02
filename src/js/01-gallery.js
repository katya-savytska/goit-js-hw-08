import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createCard(galleryItems){
    return galleryItems
    .map(({preview, original, description})=>{
        return `<a class='gallery__link' href='${original}'>
        <img  class='gallery__image' src='${preview}' alt='${description}'>
        </a>`;})
        .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});
