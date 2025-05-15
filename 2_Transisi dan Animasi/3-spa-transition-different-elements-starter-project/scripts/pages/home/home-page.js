import CatsLocal from '../../data/local/cats.js';
import { generateCatItemTemplate } from '../../templates.js';
import HomePresenter from './home-presenter.js';

export default class HomePage {
  #presenter;

  async render() {
    return `
      <h1 class="content-title">Home Page</h1>
      <p>Ini adalah konten halaman utama.</p>
      
      <div id="cats"></div>
      <div id="loading-container"></div>

      <p>Mari kita cek <a href="#/about">halaman about</a>!</p>
    `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
      model: CatsLocal,
    });

    this.#presenter.showCats();
  }

  showCats(cats) {
    const html = cats.reduce(
      (accumulator, currentValue) => accumulator.concat(generateCatItemTemplate(currentValue)),
      '',
    );

    document.getElementById('cats').innerHTML = `
      <ul class="cats-list">${html}</ul>
    `;
  }

  showLoading() {
    document.getElementById('loading-container').innerHTML = `
      <div class="loader"></div>
    `;
  }

  hideLoading() {
    document.getElementById('loading-container').innerHTML = '';
  }
}
