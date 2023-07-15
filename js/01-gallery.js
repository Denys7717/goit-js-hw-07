import { galleryItems } from "./gallery-items.js";

const galleryElem = document.querySelector(".gallery");
galleryElem.addEventListener("click", showImg);

function showImg(event) {
  event.preventDefault();

  if (event.target.className === "gallery__image") {
    const instance = basicLightbox.create(
      `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
      {
        onShow: () => {
          document.addEventListener("keydown", closeModal);
        },
        onClose: () => {
          document.removeEventListener("keydown", closeModal);
        },
      }
    );
    instance.show();

    function closeModal(evt) {
      if (evt.code !== "Escape") {
        return;
      }
      instance.close();
    }
  }
}

const imgListArr = galleryItems.map(
  (image) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
);
const template = imgListArr.join("");
galleryElem.insertAdjacentHTML("beforeend", template);
