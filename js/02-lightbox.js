import { galleryItems } from "./gallery-items.js";

const galleryElem = document.querySelector(".gallery");
galleryElem.addEventListener("click", (event) => event.preventDefault());

const imgListArr = galleryItems.map(
  (image) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</li>`
);
const template = imgListArr.join("");
galleryElem.insertAdjacentHTML("beforeend", template);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
