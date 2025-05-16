# CityCare App Starter Project

## Pengantar

Starter project ini dirancang sebagai bahan pelajaran siswa di kelas [Belajar Pengembangan Web Intermediate](https://www.dicoding.com/academies/219).

## Deskripsi
CityCareApp adalah aplikasi pelaporan kerusakan fasilitas umum yang memungkinkan warga Indonesia melaporkan masalah secara langsung kepada pemerintah kota. Dengan aplikasi ini, komunikasi antara warga dan pemerintah menjadi lebih efisien dalam menangani dan menindaklanjuti laporan kerusakan fasilitas umum.

## Prasyarat

- Node.js (disarankan versi terbaru)
- npm atau yarn

## Instalasi

- Lakukan unduh starter project c:
  ```bash
  
  ```

- Masuk ke direktori proyek:
  ```bash
  cd citycareapp-starter-project
  ```

- Instal dependensi:
  ```bash
  npm install
  ```

## Scripts

- `npm run build`: Membuat build production menggunakan Webpack.
- `npm run start-dev`: Menjalankan server development menggunakan Webpack Dev Server.
- `npm run serve`: Menjalankan server HTTP untuk build yang sudah dibuat.
- `npm run prettier`: Memeriksa format kode menggunakan Prettier.
- `npm run prettier:write`: Memformat ulang kode menggunakan Prettier.

## Struktur Proyek

```plaintext
citycareapp
├── package.json            # Informasi dependensi proyek
├── package-lock.json       # File lock untuk dependensi
├── README.md               # Dokumentasi proyek
├── webpack.common.js       # Konfigurasi Webpack (umum)
├── webpack.dev.js          # Konfigurasi Webpack (development)
├── webpack.prod.js         # Konfigurasi Webpack (production)
└── src                     # Direktori utama untuk kode sumber
    ├── index.html          # Berkas HTML utama
    ├── public              # Direktori aset publik
    │   ├── favicon.png     # Ikon situs
    │   └── images          # Gambar yang digunakan dalam proyek
    ├── scripts             # Direktori untuk kode JavaScript
    │   ├── data            # Folder untuk API atau sumber data
    │   ├── pages           # Halaman-halaman utama
    │   ├── routes          # Pengaturan routing
    │   ├── utils           # Helper dan utilitas
    │   ├── templates.js    # Template HTML dinamis
    │   ├── config.js       # Konfigurasi proyek
    │   └── index.js        # Entry point aplikasi
    └── styles              # File CSS
        ├── responsives.css # Gaya untuk responsivitas
        └── styles.css      # Gaya umum
```
