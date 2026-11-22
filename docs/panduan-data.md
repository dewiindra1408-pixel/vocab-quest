# Panduan Data

Semua konten game ada di `src/data.js`. Setelah mengedit file ini, jalankan `node tools/build.js` untuk menyusun ulang `index.html`.

## 1. Wilayah (`SECTIONS`)

```js
{ "id": "hukum", "idn": "Hukum", "en": "Law", "icon": "⚖️", "lv": "kuliah", "units": [124,125,126,127,128] }
```

- `lv` menentukan jenjang: `sd`, `smp`, `sma`, atau `kuliah`.
- `units` menentukan urutan unit dalam wilayah.
- Unit pertama selalu terbuka.
- Unit berikutnya terbuka setelah unit sebelumnya mendapat minimal 1 bintang.

## 2. Unit (`UNITS`)

```js
"124": {
  "en": "Courts & Legal Professions",
  "idn": "Pengadilan & Profesi Hukum",
  "kind": "pic",                       // pic = bergambar, exp = ungkapan, mix = campuran
  "cats": { "court": "Courts & hearings · Pengadilan & persidangan", ... },
  "words": "courtroom|ruang sidang|🏛️|court\n..."
}
```

`words` berisi satu baris per kata, dipisahkan `\n`.

**Kata bergambar** (4 kolom):
```
kata|arti|emoji|kategori
courtroom|ruang sidang|🏛️|court
```

**Ungkapan / istilah** (8 kolom, kolom emoji dikosongkan):
```
kata|arti||kategori|definisi bahasa Inggris|contoh kalimat dengan ___|bentuk di kalimat|pengecoh
ratify|meratifikasi||law|to give formal approval to a treaty|Parliament must ___ the treaty.|ratify|rectify
```

Aturan:
- Contoh kalimat harus berisi tepat satu `___`.
- `bentuk di kalimat` adalah teks yang mengisi `___`. Teks ini boleh berbeda dari kata dasarnya, misalnya `fricatives` untuk kata `fricative`.
- `pengecoh` harus berbeda dari jawaban dan salah di kalimat itu. Pengecoh dipakai di *Coret yang Salah* dan *Benar atau Salah*.
- Setiap kategori minimal berisi 3 kata.
- Dalam satu unit, jangan ada dua kata dengan emoji yang sama.
- Jangan memakai emoji Unicode 15 ke atas, karena belum tampil di HP lama.
- Jika kolom emoji kosong pada kata bergambar, game memakai ikon SVG dari peta `ICONS` di `src/app.html` (kunci huruf kecil). Jika ikonnya juga tidak ada, game menampilkan huruf awal.

## 3. Contoh kalimat (`SENT`)

Contoh kalimat dipakai di babak **Bentuk Kalimat**.

```js
const SENT = { "87": { "bar chart": "The bar chart compares five countries.", ... }, ... };
```

- Unit ungkapan otomatis memakai kalimat contohnya sendiri. `SENT` hanya diperlukan untuk kata bergambar.
- Setiap unit butuh **minimal 7 kalimat** (gabungan `SENT` + ungkapan).
- Buat kalimat pendek (maksimal 12 kata) dengan urutan yang jelas, supaya hanya ada satu susunan yang benar.

## 4. Kata yang bisa saling menggantikan (`SYN` di `src/app.html`)

Kata-kata dalam satu kelompok `SYN` tidak akan muncul bersama sebagai pilihan jawaban. Tujuannya agar tidak ada soal dengan dua jawaban benar, misalnya *therefore* dan *consequently*. Tambahkan kelompok baru jika kamu menambah ungkapan yang bersinonim.

## 5. Menambah unit baru, langkah singkat

1. Tambahkan objek unit baru ke `UNITS` dengan nomor yang belum dipakai.
2. Masukkan nomornya ke `units` pada wilayah yang sesuai di `SECTIONS`.
3. Untuk unit bergambar, tambahkan minimal 7 contoh kalimat ke `SENT`.
4. Jalankan `node tools/build.js`, buka `index.html`, lalu coba unitnya.
5. Opsional: jalankan `node tools/kurikulum.js` untuk memperbarui daftar unit.


## Grammar (`GRAM`)

Setiap unit grammar otomatis masuk wilayah grammar jenjangnya (nomor unit mulai 201).

```js
{ id:"g-sma4", lv:"sma", en:"Passive Voice", idn:"Kalimat Pasif",
  rule:{ points:["..."], formula:["be + V3"], examples:[["The bridge was built in 1990.","Jembatan itu dibangun pada 1990."]], trap:"..." },
  items:`...` }
```

Baris di `items`:
```
mc|kalimat dengan ___|opsi1;opsi2;opsi3;opsi4|indeks benar (0–3)|alasan
err|kalimat dengan [empat] [bagian] [yang] [ditandai]|indeks bagian salah|perbaikan|alasan
time|kalimat|zona   (habit, now, past, pastprog, uptonow, beforepast, future)
ord|kalimat benar lengkap
tr|perintah|kalimat asal|kalimat hasil
```

Babak Garis Waktu muncul jika unit punya minimal 3 baris `time`. Babak Cari Kesalahan muncul jika ada minimal 3 baris `err`.

Babak **Grammar dalam Konteks** di unit kosakata mengambil soal `mc` dari unit grammar jenjang yang sama. Topiknya bergilir.

## Reading (`READ` dan `CLOSE`)

`READ` berisi unit reading (nomor mulai 301). Satu bacaan = satu babak.

```js
{ id:"r-sma2", lv:"sma", en:"Report Texts", idn:"Teks Laporan", texts:[
  { title:"Orangutans", type:"Report text", p:["paragraf 1","paragraf 2"], q:`...` } ] }
```

`CLOSE` berisi bacaan penutup. Bacaan ini ditambahkan di akhir wilayah kosakata yang disebut di `region`:

```js
{ region:"kerja", title:"...", type:"...", p:[...], q:`...` }
```

Baris soal:
```
jenis|pertanyaan|opsi1;opsi2;opsi3;opsi4|indeks benar|potongan kalimat bukti (atau -)|alasan
```

- `jenis`: `main`, `detail`, `infer`, `vocab`, `ref`, `purpose`, `seq`, `head`, `tfng` (opsi harus `True;False;Not Given`), atau `ev`.
- `ev` (Tunjukkan buktinya): opsi dikosongkan, indeks diisi `-`. Potongan bukti wajib ada.
- Potongan bukti harus persis sama dengan sebagian dari **satu** kalimat di teks. Kalimat itulah yang ditandai setelah pemain menjawab.
- Opsi diacak otomatis, kecuali soal True/False/Not Given.

## Halaman disclaimer

Teksnya ada di fungsi `showDisclaimer()` di `src/app.html`. Untuk mengubah isinya, edit daftar poin di fungsi itu.

Jika perubahannya penting dan kamu ingin halaman itu muncul lagi untuk semua pemain (termasuk yang sudah menekan "Saya mengerti"), naikkan nilai `DISC_V` di atas fungsi tersebut, misalnya dari `1` menjadi `2`.
