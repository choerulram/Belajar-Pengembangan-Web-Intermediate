export default class AboutPage {
  async render() {
    return `
      <h1 class="content-title">About Page</h1>
      <p>Ini adalah konten halaman about.</p>
      <ol>
        <li>Kita</li>
        <li>punya</li>
        <li>elemen</li>
        <li>daftar</li>
        <li>di sini!</li>
      </ol>
      <p>Oke, sudah cukup. Kita bisa kembali ke <a href="#/">halaman home</a>.</p>
    `;
  }

  async afterRender() {
    // Do something...
  }
}
