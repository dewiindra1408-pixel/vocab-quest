# Vocab Quest 🎯

Game belajar bahasa Inggris untuk pelajar **SD (mulai kelas 3) sampai mahasiswa**: kosakata, grammar & tenses, reading, dan mode ujian. Antarmukanya berbahasa Indonesia. Game berjalan sepenuhnya di browser: tidak perlu akun, tidak ada server, dan tidak ada data pemain yang dikirim ke mana pun.

**Main sekarang:** `https://<username-kamu>.github.io/<nama-repositori>/` (ganti setelah GitHub Pages aktif, lihat [TUTORIAL-GITHUB.md](TUTORIAL-GITHUB.md))

## Isi game

- **Halaman disclaimer** tampil sekali sebelum masuk game: tujuan dan batasan, keterangan bahwa mode ujian bukan tes resmi, ketepatan materi, data & privasi, serta gambar dan penggunaan. Bisa dibuka lagi lewat tautan di bagian bawah halaman.
- **Pilih jenjang di awal:** SD, SMP, SMA, atau Kuliah. Setiap jenjang punya peta sendiri dan bisa diganti kapan saja.
- **Kosakata: 26 wilayah · 152 unit · 4.064 kata & ungkapan.** Daftar lengkapnya ada di [docs/daftar-unit.md](docs/daftar-unit.md).
  - SD: sekolah, keluarga, rumah, makanan, hewan & alam, kota & hobi.
  - SMP & SMA: kehidupan sehari-hari, sekolah, dunia kerja, kota & perjalanan, sains & dunia digital.
  - Kuliah: TOEFL & IELTS, kehidupan mahasiswa, dan tujuh bidang akademik (Linguistik, Pendidikan, Akuntansi, Hubungan Internasional, Pertambangan, Sains, Hukum).
  - Babak per unit:
    - SMP–Kuliah 8 babak: mengenali kata, Hafalan Kilat, mengelompokkan/memahami makna, mengeja/menilai kalimat, teka-teki/susun ungkapan, Bentuk Kalimat (7 soal), Grammar dalam Konteks, Tantangan 60 Detik.
    - SD 6 babak yang lebih ringan.
- **Grammar & tenses: 31 unit** (SD 7, SMP 9, SMA 9, Kuliah 6).
  - Setiap unit dibuka dengan kartu aturan: rumus, contoh, dan jebakan umum.
  - Babaknya: Pilih Bentuk, Garis Waktu, Cari Kesalahan (gaya TOEFL Written Expression), Susun/Ubah Kalimat, dan Tantangan Grammar.
- **Reading:**
  - Satu wilayah reading per jenjang (16 unit, 32 bacaan), disusun per jenis teks Kurikulum Merdeka dan teks akademik gaya TOEFL/IELTS.
  - Bacaan penutup di akhir setiap wilayah kosakata (26 bacaan).
  - Jenis soal: gagasan utama, informasi rinci, kesimpulan, kosakata dalam konteks, rujukan kata, tujuan penulis, urutan, True/False/Not Given, judul paragraf, dan **Tunjukkan buktinya** (ketuk kalimat bukti di teks).
- **Mode ujian:**
  - Paket: Kuis Singkat (20 soal/15 menit), Ujian Standar (50/45), Kuis Ceria untuk SD (15/20), dan Simulasi ala TOEFL ITP untuk Kuliah (90/80, tanpa Listening).
  - Fitur: timer, navigasi nomor, tanda ragu-ragu, nilai per bagian, pembahasan, perkiraan CEFR (bukan skor resmi), dan cetak/simpan PDF.
- **Bintang & kunci unit:** unit berikutnya terbuka setelah unit sebelumnya mendapat minimal 1 bintang. Mode guru membuka semua unit.
- **Kotak ulang:** kata yang pernah salah dikumpulkan untuk diulang.
- **Tanpa suara:** semua babak berbasis teks dan gambar, sehingga berjalan sama di semua perangkat dan browser.
- **Tema terang/gelap** mengikuti pengaturan perangkat.

Kemajuan pemain (jenjang, bintang, kotak ulang, statistik, riwayat ujian, persetujuan disclaimer) disimpan di `localStorage` browser masing-masing pemain.

## Struktur folder

```
vocab-quest/
├── index.html              ← game siap pakai (hasil build). File inilah yang dibuka GitHub Pages.
├── src/
│   ├── app.html            ← kode game: tampilan, gaya, logika, ikon SVG. Berisi penanda /*DATA*/
│   └── data.js             ← semua data: SECTIONS, UNITS, SENT (kosakata), GRAM (grammar), READ & CLOSE (reading)
├── tools/
│   ├── build.js            ← menggabungkan src/app.html + src/data.js menjadi index.html
│   └── kurikulum.js        ← membuat ulang docs/daftar-unit.md dari data
├── docs/
│   ├── daftar-unit.md      ← daftar wilayah & unit (dibuat otomatis)
│   ├── panduan-data.md     ← format data & cara menambah unit/kata
│   └── sumber-riset.md     ← dasar riset kosakata bidang akademik
├── TUTORIAL-GITHUB.md      ← langkah memasang di GitHub & GitHub Pages
├── .nojekyll               ← agar GitHub Pages menyajikan file apa adanya
└── .gitignore
```

## Menjalankan di komputer sendiri

Cukup buka `index.html` dengan dua klik. Game langsung jalan di browser.

## Mengubah konten

1. Edit `src/data.js` (kata, unit, contoh kalimat, grammar, bacaan) atau `src/app.html` (tampilan/logika).
2. Jalankan build. Perintah ini perlu [Node.js](https://nodejs.org) versi 16 ke atas:
   ```bash
   node tools/build.js
   node tools/kurikulum.js   # opsional, memperbarui docs/daftar-unit.md
   ```
3. Buka `index.html` untuk mencoba, lalu unggah perubahan ke GitHub.

Format data dijelaskan di [docs/panduan-data.md](docs/panduan-data.md).

## Catatan hak cipta

Semua kosakata, terjemahan, definisi, contoh kalimat, materi grammar, bacaan, soal, ikon SVG, dan kode ditulis khusus untuk proyek ini. Gambar memakai emoji standar Unicode, yang ditampilkan dengan font emoji perangkat masing-masing, dan ikon SVG buatan sendiri. Tidak ada gambar atau teks yang disalin dari buku.

Font *Bricolage Grotesque* dan *Atkinson Hyperlegible* dimuat dari Google Fonts (lisensi SIL Open Font License).
