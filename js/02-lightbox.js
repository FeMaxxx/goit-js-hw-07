import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeCard = ({ preview, original, description }) =>
  `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
  `;

const cards = galleryItems.map(makeCard).join("");

galleryEl.insertAdjacentHTML("beforeend", cards);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

galleryEl.addEventListener("click", giveOriginalImg);
