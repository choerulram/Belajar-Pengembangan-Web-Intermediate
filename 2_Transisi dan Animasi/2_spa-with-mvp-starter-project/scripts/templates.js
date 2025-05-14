export function generateCatItemTemplate({ id, image, name }) {
  return `
    <li class="cats-item">
      <a href="#/cat/${id}" class="cats-item__link">
        <img
          class="cats-item__image"
          src="${image}"
          alt="Cat's name: ${name}"
        >
        <h2 class="cats-item__title">${name}</h2>
      </a>
    </li>
  `;
}

export function generateCatDetailTemplate({ image, name }) {
  return `
    <div class="cat-detail__image-container">
      <img
        class="cat-detail__image"
        src="${image}"
        alt="${name}"
      >
    </div>
    <h1 class="cat-detail__title">${name}</h1>
    <div class="cat-detail__description">
      Kucing adalah hewan mamalia kecil yang sering dijadikan peliharaan karena sifatnya yang mandiri, lincah,
      dan penuh rasa ingin tahu. Mereka memiliki indra pendengaran dan penglihatan yang sangat tajam,
      serta mampu melihat dalam kondisi cahaya redup. Kucing dikenal dengan kebiasaannya membersihkan diri dengan menjilati bulunya,
      yang membantu menjaga kebersihan dan kesehatan kulit mereka.
    </div>
  `;
}
