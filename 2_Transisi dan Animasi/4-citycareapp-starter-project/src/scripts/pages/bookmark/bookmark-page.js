export default class BookmarkPage {
  async render() {
    return '';
  }

  async afterRender() {
    alert('Halaman laporan tersimpan akan segera hadir!');

    location.href = '#/';
  }
}
