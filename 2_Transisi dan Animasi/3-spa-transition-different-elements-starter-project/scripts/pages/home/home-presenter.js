export default class HomePresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async showCats() {
    this.#view.showLoading();

    const cats = await this.#model.getAllCats();
    this.#view.showCats(cats);

    this.#view.hideLoading();
  }
}
