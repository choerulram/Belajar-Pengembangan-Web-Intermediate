export default class CatDetailPresenter {
  #catId;
  #view;
  #model;

  constructor(catId, { view, model }) {
    this.#catId = catId;
    this.#view = view;
    this.#model = model;
  }

  async getCatDetail() {
    const cat = await this.#model.getCatById(this.#catId);
    this.#view.showCat(cat);
  }
}
