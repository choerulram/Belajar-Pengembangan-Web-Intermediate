import CatsLocal from '../../data/local/cats.js';
import { parseActivePathname } from '../../routes/url-parser.js';
import { generateCatDetailTemplate } from '../../templates.js';
import CatDetailPresenter from './cat-detail-presenter.js';

export default class CatDetailPage {
  #presenter;

  async render() {
    return `
      <div id="cat-detail"></div>

      <p>Oke, sudah cukup. Kita bisa kembali ke <a href="#/">halaman home</a>.</p>
    `;
  }

  async afterRender() {
    const { id } = parseActivePathname();

    this.#presenter = new CatDetailPresenter(id, {
      view: this,
      model: CatsLocal,
    });

    this.#presenter.getCatDetail();
  }

  showCat(cat) {
    const html = generateCatDetailTemplate(cat);

    document.getElementById('cat-detail').innerHTML = html;
  }
}
