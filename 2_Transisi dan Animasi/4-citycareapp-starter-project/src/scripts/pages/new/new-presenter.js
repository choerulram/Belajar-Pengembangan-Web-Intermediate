export default class NewPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async showNewFormMap() {
    this.#view.showMapLoading();
    try {
      await this.#view.initialMap();
    } catch (error) {
      console.error('showNewFormMap: error:', error);
    } finally {
      this.#view.hideMapLoading();
    }
  }

  async postNewReport({ title, damageLevel, description, evidenceImages, latitude, longitude }) {
    this.#view.showSubmitLoadingButton();
    try {
      const data = {
        title: title,
        damageLevel: damageLevel,
        description: description,
        evidenceImages: evidenceImages,
        latitude: latitude,
        longitude: longitude,
      };
      const response = await this.#model.storeNewReport(data);

      if (!response.ok) {
        console.error('postNewReport: response:', response);
        this.#view.storeFailed(response.message);
        return;
      }

      this.#view.storeSuccessfully(response.message, response.data);
    } catch (error) {
      console.error('postNewReport: error:', error);
      this.#view.storeFailed(error.message);
    } finally {
      this.#view.hideSubmitLoadingButton();
    }
  }
}
