// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryBox = document.querySelector('.gallery');

function createGallary (items) {
    return items.map((item) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`).join("");
};

const addGallaryMarkup = createGallary(galleryItems);

galleryBox.innerHTML = addGallaryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

