# Tutorial: Memasang Vocab Quest di GitHub

Panduan ini membawamu dari nol sampai game bisa dimainkan siapa saja lewat alamat seperti
`https://namakamu.github.io/vocab-quest/`. Semua langkah bisa dilakukan lewat browser, tanpa perlu menginstal apa pun.

Waktu yang dibutuhkan: ±15 menit.

> **Memasang ulang setelah repositori lama dihapus?** Ikuti Bagian B–D seperti biasa (akunmu sudah ada, jadi Bagian A dilewati).
> - Jika kamu memakai **nama repositori yang sama** dengan sebelumnya (misalnya `vocab-quest-game`), alamat game kembali seperti dulu. Kemajuan pemain lama juga tetap ada di browser mereka.
> - Jika memakai nama baru, alamatnya ikut berubah. Bagikan alamat baru ke pemain. Kemajuan mereka mulai dari awal, karena tersimpan per alamat.
> - Setelah repositori dihapus, GitHub kadang butuh beberapa menit sebelum nama yang sama bisa dipakai lagi. Kalau muncul pesan nama sudah dipakai, tunggu sebentar lalu coba lagi.

---

## Bagian A · Membuat akun GitHub (lewati jika sudah punya)

1. Buka **https://github.com/signup**.
2. Isi email, kata sandi, dan **username**.
   - Username akan menjadi bagian alamat game, misalnya username `budi-guru` menghasilkan `budi-guru.github.io`.
   - Pilih username yang pendek dan mudah diingat.
3. Selesaikan verifikasi email.

---

## Bagian B · Membuat repositori

1. Setelah masuk, klik tombol **+** di kanan atas, lalu pilih **New repository**.
2. Isi formulirnya:
   - **Repository name:** misalnya `vocab-quest-game` (nama lamamu) atau `vocab-quest`. Nama ini akan menjadi bagian alamat game.
   - **Description** (opsional): `Game belajar bahasa Inggris (kosakata, grammar, reading, ujian) untuk SD sampai mahasiswa`
   - Pilih **Public**. GitHub Pages gratis hanya untuk repositori publik.
   - **Jangan** centang "Add a README file", "Add .gitignore", atau "Choose a license". Semua file yang diperlukan sudah ada di paket ini.
3. Klik **Create repository**.

---

## Bagian C · Mengunggah file (cara termudah, lewat browser)

1. Ekstrak file `vocab-quest-github.zip` di komputermu. Akan muncul folder `vocab-quest`.
2. Di halaman repositori yang baru dibuat, klik tautan **uploading an existing file**. Kalau tautan itu tidak terlihat, klik **Add file**, lalu pilih **Upload files**.
3. Buka folder `vocab-quest` di komputermu, **pilih semua isinya** (Ctrl+A / Cmd+A), lalu **seret ke jendela browser**.
   - Seret *isi* foldernya: `index.html`, `README.md`, folder `src`, `docs`, `tools`, dan seterusnya. Jangan menyeret folder `vocab-quest`-nya sendiri.
   - Folder akan ikut terunggah beserta isinya jika kamu memakai Chrome, Edge, atau Firefox.
4. **Penting:** file `.nojekyll` dan `.gitignore` diawali titik, sehingga sering tersembunyi di Windows/Mac.
   - Windows Explorer: buka menu **View**, lalu centang **Hidden items**.
   - Mac Finder: tekan **Cmd + Shift + .** (titik).
   - Kalau tetap tidak terbawa, tidak apa-apa. Game tetap berjalan tanpa kedua file itu.
5. Di kolom **Commit changes** di bawah, tulis misalnya `Versi pertama Vocab Quest`, lalu klik **Commit changes**.
6. Tunggu sampai daftar file muncul di halaman repositori.

---

## Bagian D · Mengaktifkan GitHub Pages (agar game bisa dimainkan)

1. Di repositori, klik tab **Settings** (ikon roda gigi).
2. Di menu kiri, klik **Pages**.
3. Di bagian **Build and deployment**:
   - **Source:** pilih **Deploy from a branch**.
   - **Branch:** pilih **main** dan folder **/ (root)**, lalu klik **Save**.
4. Tunggu 1–3 menit, lalu muat ulang halaman Pages. Akan muncul tulisan:
   > Your site is live at `https://namakamu.github.io/vocab-quest/`
5. Klik alamat itu. Game sudah bisa dimainkan siapa saja, tanpa akun Claude atau GitHub.

**Cek cepat setelah game terbuka:**
- Muncul layar **pilih jenjang** (SD, SMP, SMA, Kuliah).
- Di peta setiap jenjang ada wilayah kosakata, **Grammar**, dan **Reading**, ditambah panel **📝 Mode Ujian** di samping.
- Jika yang tampil masih versi lama, tekan **Ctrl+F5** (di HP: tarik layar ke bawah untuk memuat ulang). Bisa juga tunggu beberapa menit, karena GitHub Pages butuh waktu memperbarui.

**Tips:**
- Buka README.md di repositori, klik ikon pensil, ganti `<username-kamu>` dengan username aslimu, lalu klik **Commit changes**.
- Di halaman utama repositori, klik ikon ⚙️ di samping **About**, lalu centang **Use your GitHub Pages website**. Tautan game akan tampil di halaman repositori.

---

## Bagian E · Memperbarui game di kemudian hari

### Cara 1 · Lewat browser
1. Siapkan file `index.html` versi baru, misalnya hasil build atau file baru dari Claude.
2. Di repositori, klik **Add file**, lalu **Upload files**, dan seret file `index.html` baru. File lama otomatis tertimpa.
3. Klik **Commit changes**. GitHub Pages diperbarui sendiri dalam 1–3 menit.

Jika kamu juga mengubah data, unggah `src/data.js` dan/atau `src/app.html` dengan cara yang sama supaya kode sumber tetap sinkron.

### Cara 2 · Lewat GitHub Desktop (tanpa perintah terminal)
1. Unduh **https://desktop.github.com** dan masuk dengan akun GitHub.
2. Klik **File**, lalu **Clone repository**, pilih `vocab-quest`, dan tentukan folder di komputermu.
3. Ubah atau timpa file di folder itu.
4. Di GitHub Desktop, tulis ringkasan perubahan, klik **Commit to main**, lalu **Push origin**.

### Cara 3 · Lewat terminal (untuk yang terbiasa Git)
```bash
git clone https://github.com/namakamu/vocab-quest.git
cd vocab-quest
# ... ubah src/data.js atau src/app.html ...
node tools/build.js          # menyusun ulang index.html
git add .
git commit -m "Tambah unit baru"
git push
```

---

## Bagian F · Pertanyaan umum

**Apakah kemajuan pemain hilang jika game diperbarui?**
Tidak. Jenjang, bintang, kotak ulang, dan riwayat ujian disimpan di browser pemain, dan tetap ada selama alamat situsnya sama. Kemajuan di versi claude.ai dan versi GitHub Pages **terpisah**, karena alamatnya berbeda.

**Apakah ada biaya?**
Tidak. GitHub Pages gratis untuk repositori publik. Batasnya jauh di atas kebutuhan game ini: ukuran situs 1 GB dan lalu lintas sekitar 100 GB per bulan.

**Halaman menampilkan "404"?**
- Tunggu beberapa menit setelah mengaktifkan Pages.
- Pastikan `index.html` ada di **akar** repositori (halaman utama repositori langsung menampilkan `index.html`, `README.md`, `src`, `docs`, `tools`), bukan di dalam subfolder `vocab-quest/`. Kalau ternyata ada di subfolder, unggah ulang *isi* foldernya.
- Alamat harus diakhiri nama repositori: `.../vocab-quest/`.

**Bisa memakai domain sendiri (misalnya vocab.sekolahku.sch.id)?**
Bisa. Buka **Settings → Pages → Custom domain**, lalu ikuti petunjuk GitHub untuk mengatur DNS di penyedia domainmu.

**Perlu menambahkan lisensi?**
Itu keputusanmu. Klik **Add file → Create new file**, beri nama `LICENSE`, lalu klik **Choose a license template**.
- Untuk kode, pilihan umum adalah **MIT**: orang lain boleh memakai dan mengubahnya asal mencantumkan namamu.
- Kalau kamu tidak ingin orang lain memakai ulang kontennya, jangan tambahkan lisensi. Tanpa lisensi, semua hak tetap padamu.
