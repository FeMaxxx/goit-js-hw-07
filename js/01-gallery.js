import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeCard = ({ preview, original, description }) =>
  `<div id="myButton" class="gallery__item">
    <a id="myModal" class="gallery__link">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
    </a>
  </div>`;

const cards = galleryItems.map(makeCard).join("");

galleryEl.insertAdjacentHTML("beforeend", cards);

const giveOriginalImg = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  showModal(e.target);
};

galleryEl.addEventListener("click", giveOriginalImg);

const showModal = (imagelink) => {
  const original = imagelink.dataset.source;
  const instance = basicLightbox.create(
    `
    <div class="modal">
      <a><img class="modal-image" src="${original}"></a>
    </div>
  `
  );

  document.addEventListener("keydown", (e) => {
    closeModal(e, instance);
  });

  instance.show();
};

const closeModal = (e, instance) => {
  if (e.key === "Escape") {
    document.removeEventListener("keydown", closeModal);
    instance.close();
  }
};
