class HomePage {
    async render() {
        return `
            <h1 class="content-title">Home Page</h1>
            <p>Ini adalah konten halaman utama.</p>
            <p>Mari kita cek <a href="#/about">halaman about</a>!</p>
        `;
    }

    async afterRender() {
        // Do something...
    }
}

class AboutPage {
    async render() {
        return `
            <h1 class="content-title">About Page</h1>
            <p>ini adalah halaman about.</p>
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

    async afterRender(){
        // Do something...
    }
}

const routes = {
    '/': () => new HomePage(),
    '/about': () => new AboutPage()
};

export default routes;