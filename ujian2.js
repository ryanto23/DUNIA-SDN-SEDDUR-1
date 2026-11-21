window.DATABASE_BAB = window.DATABASE_BAB || {};
window.DATABASE_SOAL = window.DATABASE_SOAL || {};

Object.assign(window.DATABASE_BAB, {
  "2-pancasila": [
    "Bab 1. Ayo Mengenal Simbol dan Sila Pancasila",
    "Bab 2. Ayo Menaati Aturan di Sekitarku",
    "Bab 3. Kita Beragam Tetapi Tetap Satu",
    "Bab 4. Negara Kesatuan Republik Indonesia"
  ],
  "2-bindo": [
    "Bab 1. Mengenal Perasaan",
    "Bab 2. Menjaga Kesehatan",
    "Bab 3. Berhati-hati di Mana Saja",
    "Bab 4. Keluargaku Unik",
    "Bab 5. Berteman dalam Keragaman",
    "Bab 6. Bijak Memakai Uang",
    "Bab 7. Sayang Lingkungan",
    "Bab 8. Hobi yang Menjadi Prestasi"
  ],
  "2-mtk": [
    "Bab 1. Ayo Membilang sampai dengan 50",
    "Bab 2. Penjumlahan dan Pengurangan",
    "Bab 3. Bentuk di Sekitar Kita",
    "Bab 4. Posisi Benda dan Pola di Sekitar Kita",
    "Bab 5. Pecahan",
    "Bab 6. Pengukuran",
    "Bab 7. Ayo Membilang sampai dengan 100",
    "Bab 8. Berbagai Diagram"
  ],
  "2-ipas": [],
  "2-bing": [
    "Unit 1. Do You Like Apple?",
    "Unit 2. My Father Likes Watermelon",
    "Unit 3. Where is My Pen?",
    "Unit 4. How Many Books Are There?",
    "Unit 5. Where is My Cow?",
    "Unit 6. She is My Sister",
    "Unit 7. She is Tall and He is Short",
    "Unit 8. The Elephant is Big"
  ]
});

Object.assign(window.DATABASE_SOAL, {
  "2-pancasila-Bab 1. Ayo Mengenal Simbol dan Sila Pancasila": [
    { "q": "Simbol sila pertama Pancasila yang berbunyi Ketuhanan Yang Maha Esa adalah ....", "p": ["Bintang", "Rantai", "Pohon Beringin", "Padi dan Kapas"], "b": 0, "bahas": "Simbol sila pertama Pancasila adalah Bintang." }
  ],
  "2-bindo-Bab 1. Mengenal Perasaan": [
    { "q": "Tanda baca yang digunakan di akhir kalimat tanya adalah ....", "p": ["Tanda titik (.)", "Tanda koma (,)", "Tanda tanya (?)", "Tanda seru (!)"], "b": 2, "bahas": "Kalimat tanya selalu diakhiri dengan tanda tanya (?)." }
  ],
  "2-mtk-Bab 1. Ayo Membilang sampai dengan 50": [
    { "q": "Angka 4 pada bilangan 47 menempati nilai tempat ....", "p": ["Satuan", "Puluhan", "Ratusan", "Ribuan"], "b": 1, "bahas": "Pada bilangan 47, angka 4 menempati nilai puluhan (40)." }
  ],
  "2-bing-Unit 1. Do You Like Apple?": [
    { "q": "Bahasa Inggris dari buah 'Pisang' adalah ....", "p": ["Apple", "Orange", "Banana", "Mango"], "b": 2, "bahas": "Banana adalah bahasa Inggris dari buah pisang." }
  ]
});

// Tempelkan kode tambahan dari Generator AI di bawah baris ini
window.tambahPaketUjian("2", "mtk", "UAS Semester 1", [
  {
    "svg": "<svg width='180' height='65' xmlns='http://w3.org'><rect x='10' y='12' width='160' height='42' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='90' y='37' font-size='14' text-anchor='middle'>🍎🍎🍎🍎🍎🍎🍎🍎</text></svg>",
    "q": "Hitunglah banyak buah apel pada gambar di atas! Jumlah apel ada ....",
    "p": ["6 buah", "7 buah", "8 buah", "9 buah"],
    "b": 2,
    "bahas": "Jika dihitung satu per satu dari kiri ke kanan, jumlah apel ada 8 buah."
  },
  {
    "q": "Bilangan 47 dibaca ....",
    "p": [
      "Empat puluh enam",
      "Empat puluh tujuh",
      "Tujuh puluh empat",
      "Empat tujuh"
    ],
    "b": 1,
    "bahas": "4 puluhan (40) dan 7 satuan (7) dibaca empat puluh tujuh."
  },
  {
    "q": "Lambang bilangan dari 'enam puluh lima' adalah ....",
    "p": ["56", "60", "65", "605"],
    "b": 2,
    "bahas": "Enam puluh (60) + lima (5) = 65."
  },
  {
    "q": "Pada bilangan 83, angka yang menempati nilai tempat puluhan adalah ....",
    "p": ["8", "3", "80", "30"],
    "b": 0,
    "bahas": "Angka 8 berada di depan (puluhan) dan angka 3 di belakang (satuan)."
  },
  {
    "q": "Bilangan yang terdiri dari 5 puluhan dan 9 satuan adalah ....",
    "p": ["95", "59", "509", "590"],
    "b": 1,
    "bahas": "5 puluhan (50) + 9 satuan (9) = 59."
  },
  {
    "svg": "<svg width='175' height='65' xmlns='http://w3.org'><rect x='15' y='14' width='50' height='36' rx='6' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='40' y='37' font-size='14' font-weight='bold' text-anchor='middle'>38</text><circle cx='87' cy='32' r='13' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><text x='87' y='37' font-size='13' font-weight='bold' text-anchor='middle'>?</text><rect x='110' y='14' width='50' height='36' rx='6' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='135' y='37' font-size='14' font-weight='bold' text-anchor='middle'>52</text></svg>",
    "q": "Perhatikan dua bilangan pada gambar di atas! Bilangan 38 ... daripada bilangan 52.",
    "p": ["Lebih banyak / lebih besar", "Lebih sedikit / lebih kecil", "Sama banyak", "Lebih panjang"],
    "b": 1,
    "bahas": "38 nilainya lebih kecil (lebih sedikit) daripada 52."
  },
  {
    "q": "Urutan bilangan berikut dari yang terkecil ke terbesar adalah ....",
    "p": [
      "45, 42, 48, 40",
      "40, 42, 45, 48",
      "48, 45, 42, 40",
      "42, 40, 48, 45"
    ],
    "b": 1,
    "bahas": "Urutan bilangan dari paling kecil ke paling besar adalah 40, 42, 45, 48."
  },
  {
    "q": "Bilangan yang terletak tepat di antara 69 dan 71 adalah ....",
    "p": ["68", "70", "72", "79"],
    "b": 1,
    "bahas": "Urutan menghitungnya adalah 69, 70, 71."
  },
  {
    "q": "Hasil penjumlahan dari 24 + 13 adalah ....",
    "p": ["36", "37", "38", "47"],
    "b": 1,
    "bahas": "Puluhan: 20 + 10 = 30. Satuan: 4 + 3 = 7. Jadi 30 + 7 = 37."
  },
  {
    "q": "Rani memiliki 18 buah stiker bintang. Ibu memberinya lagi 15 buah stiker bintang. Jumlah stiker Rani sekarang adalah ....",
    "p": ["23 buah", "32 buah", "33 buah", "43 buah"],
    "b": 2,
    "bahas": "18 + 15 = 33 buah stiker."
  },
  {
    "q": "Hasil pengurangan dari 46 - 22 adalah ....",
    "p": ["22", "24", "26", "68"],
    "b": 1,
    "bahas": "46 - 22 = 24."
  },
  {
    "q": "Di dalam keranjang ada 35 butir telur ayam. Sebanyak 12 butir telur dimasak oleh Ibu. Sisa telur di dalam keranjang adalah ....",
    "p": ["21 butir", "22 butir", "23 butir", "47 butir"],
    "b": 2,
    "bahas": "35 - 12 = 23 butir telur."
  },
  {
    "svg": "<svg width='160' height='75' xmlns='http://w3.org'><polygon points='80,12 35,62 125,62' fill='#fbbf24' stroke='#b45309' stroke-width='3'/></svg>",
    "q": "Perhatikan gambar bangun datar di atas! Bangun datar tersebut memiliki 3 sisi dan 3 sudut, namanya adalah ....",
    "p": ["Lingkaran", "Segitiga", "Persegi", "Persegi panjang"],
    "b": 1,
    "bahas": "Bangun datar yang memiliki 3 sisi dan 3 titik sudut disebut segitiga."
  },
  {
    "q": "Benda di bawah ini yang permukaannya berbentuk lingkaran adalah ....",
    "p": ["Buku tulis", "Uang koin dan roda sepeda", "Papan tulis", "Penggaris segitiga"],
    "b": 1,
    "bahas": "Uang koin dan roda sepeda memiliki permukaan berbentuk lingkaran."
  },
  {
    "q": "Bangun datar persegi memiliki sisi yang sama panjang sebanyak ....",
    "p": ["2 sisi", "3 sisi", "4 sisi", "5 sisi"],
    "b": 2,
    "bahas": "Persegi (segi empat beraturan) memiliki 4 sisi yang sama panjang."
  },
  {
    "svg": "<svg width='150' height='80' xmlns='http://w3.org'><rect x='40' y='25' width='45' height='45' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><polygon points='40,25 58,12 103,12 85,25' fill='#7dd3fc' stroke='#0284c7' stroke-width='2'/><polygon points='85,25 103,12 103,57 85,70' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar bangun ruang berbentuk seperti dadu di atas! Nama bangun ruang tersebut adalah ....",
    "p": ["Bola", "Tabung", "Kubus", "Kerucut"],
    "b": 2,
    "bahas": "Bangun ruang yang semua sisinya berbentuk persegi sama besar seperti dadu dan rubik disebut kubus."
  },
  {
    "q": "Benda di sekitar kita yang berbentuk bangun ruang bola adalah ....",
    "p": ["Kelereng dan bola sepak", "Kotak sepatu", "Kaleng susu", "Topi ulang tahun"],
    "b": 0,
    "bahas": "Kelereng, bola sepak, dan bola basket berbentuk bangun ruang bola."
  },
  {
    "q": "Kaleng susu dan gelas minum memiliki bentuk menyerupai bangun ruang ....",
    "p": ["Kubus", "Tabung", "Bola", "Segitiga"],
    "b": 1,
    "bahas": "Kaleng susu dan gelas memiliki alas dan tutup berbentuk lingkaran sehingga disebut tabung."
  },
  {
    "q": "Topi ulang tahun yang ujung atasnya lancip dan alasnya bulat berbentuk bangun ruang ....",
    "p": ["Kerucut", "Balok", "Kubus", "Bola"],
    "b": 0,
    "bahas": "Topi ulang tahun dan nasi tumpeng berbentuk bangun ruang kerucut."
  },
  {
    "q": "Perhatikan pola gambar berikut: 🔴, 🔵, 🔴, 🔵, 🔴, .... Gambar selanjutnya untuk melengkapi pola adalah ....",
    "p": ["🔴", "🔵", "🟡", "🟢"],
    "b": 1,
    "bahas": "Polanya bergantian merah lalu biru (🔴, 🔵). Setelah merah adalah biru (🔵)."
  },
  {
    "q": "Perhatikan pola bilangan loncat 2 berikut: 2, 4, 6, 8, .... Bilangan berikutnya adalah ....",
    "p": ["9", "10", "11", "12"],
    "b": 1,
    "bahas": "Pola bilangan bertambah 2 setiap langkah: 8 + 2 = 10."
  },
  {
    "q": "Perhatikan pola bilangan loncat 5 berikut: 5, 10, 15, 20, .... Bilangan berikutnya adalah ....",
    "p": ["21", "22", "25", "30"],
    "b": 2,
    "bahas": "Pola bilangan bertambah 5 setiap langkah: 20 + 5 = 25."
  },
  {
    "q": "Di atas meja terdapat 3 piring kue. Setiap piring berisi 4 potong kue. Jumlah seluruh kue di atas meja adalah ....",
    "p": ["7 potong", "10 potong", "12 potong", "15 potong"],
    "b": 2,
    "bahas": "4 + 4 + 4 = 12 potong kue (3 × 4 = 12)."
  },
  {
    "q": "Pilihlah gambar yang berbentuk lingkaran di bawah ini!",
    "p": ["Lingkaran", "Segitiga", "Persegi", "Bintang"],
    "pSvg": [
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='32' cy='23' r='17' fill='#f43f5e' stroke='#991b1b' stroke-width='2'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,7 12,39 52,39' fill='#facc15' stroke='#ca8a04' stroke-width='2'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><rect x='15' y='6' width='34' height='34' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,6 38,18 52,18 41,26 45,39 32,31 19,39 23,26 12,18 26,18' fill='#22c55e'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama berbentuk bulat penuh tanpa sudut yaitu lingkaran."
  },
  {
    "q": "Budi mempunyai 20 butir kelereng. Sebanyak 8 butir kelereng diberikan kepada adiknya. Sisa kelereng Budi sekarang adalah ....",
    "p": ["10 butir", "12 butir", "14 butir", "28 butir"],
    "b": 1,
    "bahas": "20 - 8 = 12 butir kelereng."
  },
  {
    "q": "Hasil dari 15 + 15 adalah ....",
    "p": ["20", "25", "30", "35"],
    "b": 2,
    "bahas": "15 + 15 = 30."
  },
  {
    "q": "Kotak pensil dan penghapus papan tulis biasanya berbentuk bangun ruang ....",
    "p": ["Balok", "Bola", "Kerucut", "Lingkaran"],
    "b": 0,
    "bahas": "Kotak pensil dan penghapus papan tulis memiliki sisi berbentuk persegi panjang seperti balok."
  },
  {
    "q": "Manakah bilangan di bawah ini yang nilainya paling besar?",
    "p": ["67", "76", "59", "71"],
    "b": 1,
    "bahas": "Di antara 67, 76, 59, dan 71, bilangan yang paling besar adalah 76."
  },
  {
    "q": "Siti menabung Rp5.000 pada hari Senin dan Rp5.000 pada hari Selasa. Jumlah uang tabungan Siti seluruhnya adalah ....",
    "p": ["Rp5.000", "Rp10.000", "Rp15.000", "Rp20.000"],
    "b": 1,
    "bahas": "Rp5.000 + Rp5.000 = Rp10.000."
  },
  {
    "q": "Sebuah sepeda memiliki 2 roda. Jika ada 5 sepeda diparkir di halaman sekolah, jumlah seluruh roda sepeda tersebut adalah ....",
    "p": ["7 roda", "8 roda", "10 roda", "12 roda"],
    "b": 2,
    "bahas": "2 + 2 + 2 + 2 + 2 = 10 roda (5 × 2 = 10)."
  }
]);

window.tambahPaketUjian("2", "bindo", "UAS Semester 1", [
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><circle cx='75' cy='38' r='24' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><circle cx='66' cy='32' r='3' fill='#0f172a'/><circle cx='84' cy='32' r='3' fill='#0f172a'/><path d='M64,45 Q75,55 86,45' fill='none' stroke='#0f172a' stroke-width='2.5'/></svg>",
    "q": "Perhatikan ekspresi wajah pada gambar di atas! Wajah yang tersenyum lebar menunjukkan perasaan ....",
    "p": ["Sedih", "Senang / Gembira", "Takut", "Marah"],
    "b": 1,
    "bahas": "Bibir tersenyum melengkung ke atas menunjukkan perasaan senang atau gembira."
  },
  {
    "q": "Ketika mainan kesayangan kita rusak tidak sengaja oleh adik, perasaan yang muncul biasanya adalah sedih, tetapi sebaiknya kita tetap bersikap ....",
    "p": ["Memukul adik", "Sabar dan memaafkan adik", "Berteriak keras-keras", "Merusak mainan adik"],
    "b": 1,
    "bahas": "Meskipun sedih, kita harus menahan amarah, bersikap sabar, dan memaafkan adik."
  },
  {
    "q": "Puisi adalah karya sastra yang disusun dalam bentuk bait dan baris. Saat membaca puisi yang bertema kegembiraan, ekspresi wajah kita sebaiknya ....",
    "p": ["Cemberut", "Ceria dan tersenyum", "Menangis sedih", "Melamun"],
    "b": 1,
    "bahas": "Mimik wajah dan intonasi suara saat membaca puisi harus disesuaikan dengan isi puisi."
  },
  {
    "q": "Penggunaan huruf kapital yang benar pada kalimat berikut adalah ....",
    "p": [
      "budi bermain bola bersama edo di taman.",
      "Budi bermain bola bersama Edo di taman.",
      "Budi bermain bola bersama edo di Taman.",
      "budi bermain Bola bersama Edo di taman."
    ],
    "b": 1,
    "bahas": "Huruf kapital dipakai pada awal kalimat (Budi) dan nama orang (Edo)."
  },
  {
    "q": "Tanda titik (.) digunakan untuk mengakhiri kalimat ....",
    "p": ["Tanya", "Berita / Pernyataan", "Perintah", "Seruan"],
    "b": 1,
    "bahas": "Setiap kalimat berita diakhiri dengan tanda titik (.)."
  },
  {
    "q": "Jarak yang baik antara mata dan buku saat membaca agar mata tetap sehat adalah sekitar ....",
    "p": ["5 cm", "30 cm", "1 meter", "Menempel di mata"],
    "b": 1,
    "bahas": "Membaca dengan jarak sekitar 30 cm di tempat yang cukup terang menjaga kesehatan mata."
  },
  {
    "q": "Kebiasaan buruk yang dapat merusak kesehatan mata anak-anak adalah ....",
    "p": [
      "Membaca buku di ruangan yang terang",
      "Menonton televisi atau bermain ponsel sambil tiduran di tempat gelap",
      "Makan sayur wortel dan buah-buahan",
      "Mengistirahatkan mata setelah belajar"
    ],
    "b": 1,
    "bahas": "Menatap layar ponsel atau membaca sambil tiduran dan kurang cahaya dapat membuat mata cepat lelah dan rusak."
  },
  {
    "q": "Perhatikan kalimat berikut: 'Rina menyapu halaman rumah.' Kata 'Rina' dalam kalimat tersebut berkedudukan sebagai ....",
    "p": ["Subjek", "Predikat", "Objek", "Keterangan"],
    "b": 0,
    "bahas": "Rina adalah pelaku kegiatan sehingga berkedudukan sebagai Subjek (S)."
  },
  {
    "q": "Perhatikan kalimat berikut: 'Ayah mencuci mobil.' Kata 'mobil' berkedudukan sebagai ....",
    "p": ["Subjek", "Predikat", "Objek", "Keterangan waktu"],
    "b": 2,
    "bahas": "Ayah (Subjek), mencuci (Predikat), mobil (Objek)."
  },
  {
    "q": "Kalimat tanya yang tepat untuk menanyakan tempat tinggal teman baru adalah ....",
    "p": [
      "Siapa nama lengkapmu?",
      "Di mana alamat rumahmu?",
      "Kapan kamu lahir?",
      "Berapa jumlah saudaramu?"
    ],
    "b": 1,
    "bahas": "Kata tanya 'Di mana' digunakan untuk menanyakan tempat atau lokasi."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><rect x='55' y='8' width='40' height='60' rx='6' fill='#1e293b'/><circle cx='75' cy='21' r='7' fill='#ef4444'/><circle cx='75' cy='38' r='7' fill='#facc15'/><circle cx='75' cy='55' r='7' fill='#22c55e'/></svg>",
    "q": "Perhatikan gambar lampu lalu lintas di atas! Apabila lampu berwarna merah di bagian atas menyala, maka kendaraan harus ....",
    "p": ["Berhenti", "Berjalan cepat", "Berbelok ke kiri", "Membunyikan klakson"],
    "b": 0,
    "bahas": "Lampu merah artinya berhenti, kuning artinya hati-hati, dan hijau artinya jalan."
  },
  {
    "q": "Tempat yang aman bagi pejalan kaki untuk menyeberang jalan raya adalah ....",
    "p": ["Zebra cross (garis putih hitam)", "Tengah tikungan jalan", "Belakang truk besar", "Jalur sepeda motor"],
    "b": 0,
    "bahas": "Zebra cross adalah jalur penyeberangan khusus pejalan kaki."
  },
  {
    "q": "Sebelum menyeberang jalan raya, hal yang wajib kita lakukan terlebih dahulu adalah ....",
    "p": [
      "Berlari kencang tanpa melihat jalan",
      "Menengok ke kanan dan ke kiri untuk memastikan jalan aman",
      "Berjalan sambil bermain ponsel",
      "Menutup mata dengan tangan"
    ],
    "b": 1,
    "bahas": "Tengok kanan dan kiri sebelum menyeberang agar terhindar dari kendaraan yang melintas."
  },
  {
    "q": "Penulisan kata 'di' yang dipisah karena menunjukkan nama tempat terdapat pada kalimat ....",
    "p": [
      "Buku cerita itu dibaca oleh Siti.",
      "Anak-anak bermain layang-layang di lapangan.",
      "Bola itu ditendang oleh Budi.",
      "Bunga mawar disiram Ibu setiap pagi."
    ],
    "b": 1,
    "bahas": "Kata depan 'di' yang diikuti keterangan tempat ('di lapangan') ditulis terpisah."
  },
  {
    "q": "Tanda seru (!) digunakan pada akhir kalimat ....",
    "p": ["Tanya", "Perintah atau peringatan", "Berita biasa", "Daftar belanja"],
    "b": 1,
    "bahas": "Kalimat perintah atau larangan seperti 'Hati-hati di jalan!' diakhiri tanda seru (!)."
  },
  {
    "q": "Bacalah cerita singkat berikut!\n'Pada hari Minggu, keluarga Siti membersihkan rumah bersama-sama. Ayah memotong rumput di halaman. Ibu mengelap kaca jendela. Siti dan adik merapikan mainan di ruang keluarga. Rumah mereka pun tampak bersih dan rapi.'\n\nSiapa yang memotong rumput di halaman pada cerita di atas?",
    "p": ["Ibu", "Ayah", "Siti", "Adik"],
    "b": 1,
    "bahas": "Berdasarkan bacaan, Ayah bertugas memotong rumput di halaman."
  },
  {
    "q": "Berdasarkan bacaan di atas, kegiatan yang dilakukan keluarga Siti pada hari Minggu adalah ....",
    "p": ["Pergi ke kebun binatang", "Membersihkan rumah bersama-sama", "Memasak kue bolu", "Bermain di pantai"],
    "b": 1,
    "bahas": "Keluarga Siti bekerja sama membersihkan rumah pada hari Minggu."
  },
  {
    "q": "Kalimat berikut yang merupakan kalimat aktif adalah ....",
    "p": [
      "Kucing menangkap tikus di dapur.",
      "Tikus ditangkap oleh kucing di dapur.",
      "Nasi goreng dimakan oleh Adik.",
      "Buku gambar dibawa oleh Rina."
    ],
    "b": 0,
    "bahas": "Kalimat aktif subjeknya melakukan pekerjaan (Kucing menangkap tikus)."
  },
  {
    "q": "Kalimat berikut yang merupakan kalimat pasif adalah ....",
    "p": [
      "Ibu memasak sayur bayam.",
      "Sayur bayam dimasak oleh Ibu.",
      "Budi menulis surat untuk nenek.",
      "Siti menyiram bunga melati."
    ],
    "b": 1,
    "bahas": "Kalimat pasif menggunakan kata kerja berawalan 'di-' ('dimasak oleh Ibu')."
  },
  {
    "q": "Ungkapan permintaan tolong yang santun kepada kakak saat kesulitan mengambil buku di rak tinggi adalah ....",
    "p": [
      "Cepat ambilkan buku itu sekarang!",
      "Kak, tolong ambilkan buku di rak atas itu, ya. Terima kasih.",
      "Ambilkan buku itu, aku tidak mau mengambilnya!",
      "Kenapa bukunya ditaruh di atas?"
    ],
    "b": 1,
    "bahas": "Saat meminta bantuan, gunakan kata 'tolong' dengan bahasa sopan dan ucapkan terima kasih."
  },
  {
    "q": "Sinonim (persamaan arti) dari kata 'senang' adalah ....",
    "p": ["Sedih", "Gembira", "Takut", "Marah"],
    "b": 1,
    "bahas": "Kata 'senang' sama artinya dengan 'gembira' atau 'bahagia'."
  },
  {
    "q": "Antonim (lawan kata) dari kata 'ramai' adalah ....",
    "p": ["Bising", "Sepi", "Banyak", "Penuh"],
    "b": 1,
    "bahas": "Lawan kata dari 'ramai' adalah 'sepi'."
  },
  {
    "q": "Pilihlah gambar benda yang berbahaya jika dimainkan oleh anak-anak di rumah!",
    "p": ["Pisau dapur tajam", "Boneka beruang", "Bola karet", "Buku cerita"],
    "pSvg": [
      "<svg width='70' height='45' xmlns='http://w3.org'><rect x='12' y='20' width='18' height='7' rx='2' fill='#92400e'/><polygon points='30,19 58,23 30,28' fill='#94a3b8' stroke='#334155' stroke-width='1.5'/></svg>",
      "<svg width='70' height='45' xmlns='http://w3.org'><circle cx='35' cy='23' r='13' fill='#d97706'/></svg>",
      "<svg width='70' height='45' xmlns='http://w3.org'><circle cx='35' cy='23' r='14' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/></svg>",
      "<svg width='70' height='45' xmlns='http://w3.org'><rect x='20' y='10' width='30' height='25' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/></svg>"
    ],
    "b": 0,
    "bahas": "Pisau dapur yang tajam berbahaya jika digunakan bermain karena dapat melukai tangan."
  },
  {
    "q": "Susunan kata acak berikut menjadi kalimat yang benar adalah ....\n'membaca - Edo - di - buku - perpustakaan'",
    "p": [
      "Edo membaca buku di perpustakaan.",
      "Buku membaca Edo di perpustakaan.",
      "Perpustakaan membaca Edo di buku.",
      "Di perpustakaan buku membaca Edo."
    ],
    "b": 0,
    "bahas": "Susunan kalimat S-P-O-K yang benar adalah 'Edo membaca buku di perpustakaan.'"
  },
  {
    "q": "Informasi yang benar-benar terjadi dan dapat dibuktikan kebenarannya disebut ....",
    "p": ["Opini (pendapat)", "Fakta", "Dongeng", "Khayalan"],
    "b": 1,
    "bahas": "Fakta adalah keadaan atau peristiwa yang nyata terjadi."
  },
  {
    "q": "Kalimat di bawah ini yang merupakan fakta adalah ....",
    "p": [
      "Kucing adalah hewan peliharaan yang paling lucu sedunia.",
      "Ayam berkembang biak dengan cara bertelur.",
      "Menurutku, rasa es krim stroberi lebih enak daripada cokelat.",
      "Baju berwarna biru terlihat lebih bagus daripada merah."
    ],
    "b": 1,
    "bahas": "Ayam berkembang biak dengan bertelur adalah kenyataan yang pasti benar (fakta)."
  },
  {
    "q": "Orang tua dari ayah dan ibu kita disebut ....",
    "p": ["Paman dan Bibi", "Kakek dan Nenek", "Kakak dan Adik", "Sepupu"],
    "b": 1,
    "bahas": "Ayah dan ibu dari orang tua kita dipanggil Kakek dan Nenek."
  },
  {
    "q": "Saudara laki-laki dari ayah atau ibu kita dipanggil ....",
    "p": ["Bibi", "Paman", "Kakek", "Adik"],
    "b": 1,
    "bahas": "Saudara laki-laki orang tua disebut Paman, sedangkan saudara perempuan disebut Bibi."
  },
  {
    "q": "Ketika berbicara dengan orang yang lebih tua seperti kakek, nenek, dan guru, kita harus menggunakan bahasa yang ....",
    "p": ["Kasar dan berteriak", "Sopan dan santun", "Cepat dan tergesa-gesa", "Sambil membelakangi"],
    "b": 1,
    "bahas": "Berbicara dengan bahasa sopan dan santun menunjukkan rasa hormat kepada orang yang lebih tua."
  },
  {
    "q": "Manfaat menjaga kerukunan dengan semua anggota keluarga di rumah adalah ....",
    "p": [
      "Suasana rumah menjadi damai, hangat, dan menyenangkan",
      "Sering terjadi pertengkaran di rumah",
      "Rumah menjadi berantakan dan kotor",
      "Pekerjaan rumah menjadi semakin berat"
    ],
    "b": 0,
    "bahas": "Kerukunan membuat seluruh anggota keluarga hidup bahagia dan saling menyayangi."
  }
]);

window.tambahPaketUjian("2", "pai", "UAS Semester 1", [
  {
    "q": "Surah An-Nas merupakan surah ke-114 (terakhir) dalam Al-Qur'an dan terdiri atas 6 ayat. Nama An-Nas memiliki arti ....",
    "p": ["Waktu subuh", "Manusia", "Pertolongan", "Gajah"],
    "b": 1,
    "bahas": "Kata An-Nas secara bahasa memiliki arti manusia."
  },
  {
    "q": "Dalam Q.S. An-Nas, umat Islam diperintahkan untuk memohon perlindungan dari kejahatan bisikan setan hanya kepada ....",
    "p": ["Malaikat", "Allah Swt.", "Manusia kuat", "Jin"],
    "b": 1,
    "bahas": "Qul a'uzu birabbin-nas (Katakanlah: Aku berlindung kepada Tuhan manusia, yaitu Allah Swt.)."
  },
  {
    "q": "Membaca Al-Qur'an dimulai dari arah sebelah ....",
    "p": ["Kiri ke kanan", "Kanan ke kiri", "Bawah ke atas", "Tengah ke pinggir"],
    "b": 1,
    "bahas": "Huruf hijaiyah dalam Al-Qur'an ditulis dan dibaca dari kanan ke kiri."
  },
  {
    "q": "Tanda baca dalam huruf hijaiyah yang berbunyi 'i' dan terletak di bawah huruf disebut harakat ....",
    "p": ["Fathah", "Kasrah", "Dammah", "Sukun"],
    "b": 1,
    "bahas": "Fathah berbunyi 'a', Kasrah berbunyi 'i', dan Dammah berbunyi 'u'."
  },
  {
    "q": "Huruf hijaiyah yang tidak dapat disambung dengan huruf sesudahnya di sebelah kiri di bawah ini adalah ....",
    "p": [
      "Ba, Ta, Tsa",
      "Alif, Dal, Dzal, Ra, Zai, Wawu",
      "Sin, Syin, Sad",
      "Kaf, Lam, Mim"
    ],
    "b": 1,
    "bahas": "Enam huruf hijaiyah (Alif, Dal, Dzal, Ra, Zai, Wawu) hanya bisa disambung dari kanan dan tidak bisa menyambung huruf di sebelah kirinya."
  },
  {
    "svg": "<svg width='170' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='140' height='46' rx='10' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='85' y='32' font-size='11' font-weight='bold' text-anchor='middle' fill='#15803d'>AL-HAFIZ</text><text x='85' y='48' font-size='9' text-anchor='middle' fill='#0f172a'>Asmaulhusna Allah Swt.</text></svg>",
    "q": "Perhatikan kartu Asmaulhusna pada gambar di atas! Arti dari Asmaulhusna 'Al-Hafiz' adalah Allah Swt. Maha ....",
    "p": ["Memelihara / Menjaga", "Melindungi", "Mengetahui", "Teliti"],
    "b": 0,
    "bahas": "Al-Hafiz artinya Allah Maha Memelihara dan Menjaga seluruh makhluk serta alam semesta."
  },
  {
    "q": "Asmaulhusna 'Al-Wali' memiliki arti bahwa Allah Swt. Maha ....",
    "p": ["Melindungi", "Melihat", "Mendengar", "Menciptakan"],
    "b": 0,
    "bahas": "Al-Wali artinya Allah Maha Melindungi hamba-hamba-Nya yang beriman."
  },
  {
    "q": "Allah Swt. mengetahui segala sesuatu yang tampak maupun yang tersembunyi di dalam hati manusia karena Allah memiliki Asmaulhusna ....",
    "p": ["Al-'Alim", "Al-Hafiz", "As-Salam", "Al-Malik"],
    "b": 0,
    "bahas": "Al-'Alim artinya Allah Maha Mengetahui segala sesuatu."
  },
  {
    "q": "Arti dari Asmaulhusna 'Al-Khabir' adalah Allah Swt. Maha ....",
    "p": ["Teliti / Waspada", "Besar", "Pengampun", "Merajai"],
    "b": 0,
    "bahas": "Al-Khabir artinya Allah Maha Teliti terhadap segala perbuatan makhluk-Nya."
  },
  {
    "q": "Perilaku meneladani Asmaulhusna 'Al-Hafiz' dalam kehidupan sehari-hari dapat dilakukan dengan cara ....",
    "p": [
      "Menjaga kebersihan diri, merawat buku pelajaran, dan menjaga lingkungan",
      "Mencoret-coret tembok kelas",
      "Membuang sampah di sungai",
      "Merusak tanaman di halaman sekolah"
    ],
    "b": 0,
    "bahas": "Menjaga kesehatan tubuh, barang milik sendiri, dan kelestarian alam adalah wujud meneladani sifat Al-Hafiz."
  },
  {
    "q": "Perilaku meneladani Asmaulhusna 'Al-Khabir' saat mengerjakan tugas atau ulangan di sekolah adalah ....",
    "p": [
      "Mengerjakan soal dengan teliti, cermat, dan jujur tanpa menyontek",
      "Mengerjakan soal dengan terburu-buru asal selesai",
      "Menyontek jawaban teman di sebelahnya",
      "Tidak memeriksa kembali hasil pekerjaannya"
    ],
    "b": 0,
    "bahas": "Teliti dan jujur saat belajar mencerminkan keimanan bahwa Allah Maha Teliti (Al-Khabir)."
  },
  {
    "q": "Perasaan ikut merasakan kesedihan atau kesulitan yang dialami oleh orang lain serta tergerak untuk menolongnya disebut ....",
    "p": ["Empati", "Sombong", "Iri hati", "Malas"],
    "b": 0,
    "bahas": "Empati adalah kemampuan merasakan apa yang dirasakan orang lain dan mendorong kita berbuat baik."
  },
  {
    "q": "Ketika ada teman sekelas yang lupa membawa pensil saat pelajaran menggambar, sikap empati yang baik adalah ....",
    "p": [
      "Meminjamkan pensil cadangan kita kepadanya dengan senang hati",
      "Mengejeknya di depan teman-teman",
      "Menyembunyikan pensil kita di dalam tas",
      "Membiarkannya sedih sendirian"
    ],
    "b": 0,
    "bahas": "Membantu teman yang membutuhkan adalah akhlak terpuji yang disukai Allah Swt."
  },
  {
    "q": "Anak yang selalu berkata benar sesuai kenyataan dan tidak pernah berbohong memiliki sifat terpuji yaitu ....",
    "p": ["Jujur", "Kikir", "Pemarah", "Penakut"],
    "b": 0,
    "bahas": "Jujur adalah kesesuaian antara perkataan, hati, dan perbuatan yang sebenarnya."
  },
  {
    "q": "Keuntungan yang diperoleh anak yang selalu bersikap jujur adalah ....",
    "p": [
      "Dipercaya dan disayangi oleh Allah Swt., orang tua, guru, serta teman",
      "Dijauhi oleh semua teman di sekolah",
      "Hatinya selalu merasa gelisah dan takut",
      "Sering mendapat hukuman dari guru"
    ],
    "b": 0,
    "bahas": "Kejujuran membawa ketenangan hati dan membuat kita dipercaya oleh semua orang."
  },
  {
    "q": "Panggilan suci yang dikumandangkan untuk memberitahukan kepada umat Islam bahwa waktu salat fardu telah tiba disebut ....",
    "p": ["Azan", "Iqamah", "Zikir", "Doa"],
    "b": 0,
    "bahas": "Azan dikumandangkan sebagai tanda masuknya waktu salat wajib lima waktu."
  },
  {
    "q": "Panggilan tanda bahwa salat berjamaah akan segera dimulai dan jamaah diminta berdiri meluruskan saf disebut ....",
    "p": ["Azan", "Iqamah", "Takbiratul ihram", "Salam"],
    "b": 1,
    "bahas": "Iqamah dikumandangkan sesaat sebelum salat berjamaah dimulai."
  },
  {
    "q": "Orang yang bertugas mengumandangkan azan dan iqamah di masjid atau musala disebut ....",
    "p": ["Imam", "Muazin", "Makmum", "Khatib"],
    "b": 1,
    "bahas": "Muazin adalah orang yang mengumandangkan azan."
  },
  {
    "q": "Ketika mendengar suara azan berkumandang dari masjid, sikap yang baik bagi seorang muslim adalah ....",
    "p": [
      "Menghentikan kegiatan, mendengarkan dengan tenang, dan menjawab lafaz azan",
      "Berteriak-teriak lebih keras dari suara azan",
      "Terus bermain tanpa mempedulikan waktu salat",
      "Menutup telinga dan mengobrol ramai"
    ],
    "b": 0,
    "bahas": "Menghormati azan dilakukan dengan diam mendengarkan, menjawab setiap lafaznya, lalu berdoa setelah azan."
  },
  {
    "q": "Lafaz 'Hayya 'alas-salah' dalam azan memiliki arti ....",
    "p": [
      "Allah Maha Besar",
      "Marilah mendirikan salat",
      "Marilah menuju kemenangan",
      "Tiada Tuhan selain Allah"
    ],
    "b": 1,
    "bahas": "'Hayya 'alas-salah' artinya marilah mendirikan salat, sedangkan 'Hayya 'alal-falah' artinya marilah menuju kemenangan."
  },
  {
    "q": "Pada azan salat Subuh, setelah lafaz 'Hayya 'alal-falah' ditambahkan kalimat 'As-salatu khairum minan-naum' yang artinya ....",
    "p": [
      "Salat itu lebih baik daripada tidur",
      "Marilah kita berpuasa",
      "Segeralah bekerja di pagi hari",
      "Allah Maha Pengampun"
    ],
    "b": 0,
    "bahas": "'As-salatu khairum minan-naum' artinya salat itu lebih baik daripada tidur."
  },
  {
    "svg": "<svg width='170' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='140' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='85' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>RUKUN ISLAM KE-2</text><text x='85' y='48' font-size='9' text-anchor='middle' fill='#0f172a'>Mendirikan Salat 5 Waktu</text></svg>",
    "q": "Perhatikan gambar di atas! Ibadah salat fardu merupakan tiang agama dan termasuk rukun Islam yang ke-....",
    "p": ["Satu", "Dua", "Tiga", "Empat"],
    "b": 1,
    "bahas": "Rukun Islam ke-1 syahadat, ke-2 mendirikan salat, ke-3 zakat, ke-4 puasa Ramadan, ke-5 haji."
  },
  {
    "q": "Gerakan pertama dalam salat yang dilakukan sambil mengangkat kedua tangan dan mengucapkan 'Allahu Akbar' disebut ....",
    "p": ["Rukuk", "Takbiratul ihram", "Sujud", "Iktidal"],
    "b": 1,
    "bahas": "Takbiratul ihram adalah takbir pembuka yang menandai dimulainya ibadah salat."
  },
  {
    "q": "Gerakan membungkukkan badan hingga punggung lurus sejajar dengan kepala sambil memegang kedua lutut dalam salat disebut ....",
    "p": ["Rukuk", "Sujud", "Duduk tasyahud", "Salam"],
    "b": 0,
    "bahas": "Rukuk dilakukan dengan membungkukkan badan lurus dan membaca tasbih rukuk."
  },
  {
    "q": "Gerakan meletakkan dahi, hidung, kedua telapak tangan, kedua lutut, dan ujung jari kaki ke lantai dalam salat disebut ....",
    "p": ["Iktidal", "Sujud", "Rukuk", "Takbir"],
    "b": 1,
    "bahas": "Sujud adalah gerakan merendahkan diri bersujud kepada Allah Swt. di atas tempat sujud."
  },
  {
    "q": "Gerakan paling akhir sebagai penutup ibadah salat dengan menolehkan kepala ke kanan dan ke kiri adalah ....",
    "p": ["Takbiratul ihram", "Salam", "Rukuk", "Iktidal"],
    "b": 1,
    "bahas": "Salat diawali dengan takbiratul ihram dan diakhiri dengan ucapan salam."
  },
  {
    "q": "Salat fardu yang dikerjakan pada siang hari sekitar pukul 12.00 dengan jumlah 4 rakaat adalah salat ....",
    "p": ["Subuh", "Zuhur", "Magrib", "Isya"],
    "b": 1,
    "bahas": "Salat Zuhur dikerjakan pada tengah hari sebanyak 4 rakaat."
  },
  {
    "q": "Salat fardu yang dikerjakan pada malam hari sekitar pukul 19.00 dengan jumlah 4 rakaat adalah salat ....",
    "p": ["Subuh", "Asar", "Magrib", "Isya"],
    "b": 3,
    "bahas": "Salat Isya dikerjakan pada waktu malam sebanyak 4 rakaat."
  },
  {
    "q": "Sebelum melaksanakan salat fardu, umat Islam wajib bersuci dari hadas kecil dengan cara ....",
    "p": ["Berwudu menggunakan air bersih", "Makan dan minum", "Berlari di halaman", "Tidur sebentar"],
    "b": 0,
    "bahas": "Berwudu dengan air suci menyucikan merupakan syarat sah sebelum melaksanakan salat."
  },
  {
    "q": "Manfaat membiasakan melaksanakan salat lima waktu secara tertib sejak kecil adalah ....",
    "p": [
      "Melatih kedisiplinan, menenangkan hati, dan mendekatkan diri kepada Allah Swt.",
      "Membuat waktu bermain menjadi terganggu",
      "Membuat tubuh menjadi malas belajar",
      "Menjauhkan diri dari teman-teman"
    ],
    "b": 0,
    "bahas": "Salat mendidik anak menjadi disiplin waktu, bersih, sabar, dan selalu ingat kepada Allah Swt."
  }
]);

window.tambahPaketUjian("2", "pancasila", "UAS Semester 1", [
  {
    "q": "Dasar negara Republik Indonesia yang berjumlah lima sila adalah ....",
    "p": ["UUD 1945", "Pancasila", "Bendera Merah Putih", "Lagu Indonesia Raya"],
    "b": 1,
    "bahas": "Pancasila berasal dari kata panca (lima) dan sila (dasar), yang menjadi dasar negara Indonesia."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><rect x='25' y='12' width='100' height='50' rx='6' fill='#0f172a'/><polygon points='75,18 81,32 96,32 84,41 88,55 75,46 62,55 66,41 54,32 69,32' fill='#facc15'/></svg>",
    "q": "Perhatikan simbol sila Pancasila pada gambar di atas! Bintang emas berlatar hitam merupakan lambang Pancasila sila ke-....",
    "p": ["Satu", "Dua", "Tiga", "Empat"],
    "b": 0,
    "bahas": "Bintang emas melambangkan sila pertama Pancasila, yaitu Ketuhanan Yang Maha Esa."
  },
  {
    "q": "Bunyi sila pertama Pancasila adalah ....",
    "p": [
      "Persatuan Indonesia",
      "Ketuhanan Yang Maha Esa",
      "Kemanusiaan yang adil dan beradab",
      "Keadilan sosial bagi seluruh rakyat Indonesia"
    ],
    "b": 1,
    "bahas": "Sila pertama Pancasila berbunyi 'Ketuhanan Yang Maha Esa'."
  },
  {
    "q": "Contoh perilaku yang sesuai dengan sila pertama Pancasila di rumah adalah ....",
    "p": [
      "Berdoa sebelum dan sesudah makan bersama keluarga",
      "Berebut mainan dengan adik",
      "Membiarkan kamar tidur berantakan",
      "Menonton televisi sampai larut malam"
    ],
    "b": 0,
    "bahas": "Berdoa dan beribadah sesuai agama masing-masing merupakan pengamalan sila pertama Pancasila."
  },
  {
    "q": "Lambang sila kedua Pancasila yang berbunyi 'Kemanusiaan yang adil dan beradab' adalah ....",
    "p": ["Pohon beringin", "Rantai emas", "Kepala banteng", "Padi dan kapas"],
    "b": 1,
    "bahas": "Rantai emas dengan mata rantai persegi dan bulat melambangkan sila kedua Pancasila."
  },
  {
    "q": "Ketika adik terjatuh saat bermain sepeda di halaman rumah, sikap kakak yang sesuai dengan sila kedua Pancasila adalah ....",
    "p": [
      "Menertawakan adik dari teras",
      "Segera menolong adik berdiri dan mengobati lukanya",
      "Memarahi adik karena kurang hati-hati",
      "Pura-pura tidak melihat"
    ],
    "b": 1,
    "bahas": "Menolong anggota keluarga dan menyayangi sesama adalah wujud pengamalan sila kedua."
  },
  {
    "q": "Pohon beringin yang rindang merupakan lambang sila ketiga Pancasila yang berbunyi ....",
    "p": [
      "Ketuhanan Yang Maha Esa",
      "Persatuan Indonesia",
      "Keadilan sosial bagi seluruh rakyat Indonesia",
      "Kemanusiaan yang adil dan beradab"
    ],
    "b": 1,
    "bahas": "Pohon beringin adalah lambang sila ketiga Pancasila, Persatuan Indonesia."
  },
  {
    "q": "Contoh sikap yang menjaga persatuan di lingkungan keluarga sesuai sila ketiga Pancasila adalah ....",
    "p": [
      "Hidup rukun dan bekerja sama membersihkan rumah bersama keluarga",
      "Bertengkar dengan kakak memperebutkan saluran televisi",
      "Tidak mau berbicara dengan adik",
      "Menolak membantu ibu di dapur"
    ],
    "b": 0,
    "bahas": "Hidup rukun dan kompak bersama anggota keluarga mencerminkan sila ketiga Pancasila."
  },
  {
    "q": "Lambang sila keempat Pancasila adalah ....",
    "p": ["Bintang emas", "Rantai emas", "Kepala banteng", "Padi dan kapas"],
    "b": 2,
    "bahas": "Kepala banteng melambangkan sila keempat Pancasila yang mengutamakan musyawarah."
  },
  {
    "q": "Keluarga Siti berdiskusi bersama untuk menentukan tempat berlibur pada hari Minggu. Kegiatan berdiskusi untuk mengambil keputusan bersama disebut ....",
    "p": ["Musyawarah", "Pertengkaran", "Perlombaan", "Perintah"],
    "b": 0,
    "bahas": "Musyawarah adalah membahas masalah bersama-sama untuk mencapai kesepakatan."
  },
  {
    "q": "Lambang sila kelima Pancasila yang berbunyi 'Keadilan sosial bagi seluruh rakyat Indonesia' adalah ....",
    "p": ["Pohon beringin", "Padi dan kapas", "Bintang emas", "Kepala banteng"],
    "b": 1,
    "bahas": "Padi dan kapas melambangkan pangan dan sandang sebagai kebutuhan pokok semua rakyat."
  },
  {
    "q": "Contoh pengamalan sila kelima Pancasila di rumah adalah ....",
    "p": [
      "Menyisihkan sebagian uang saku untuk ditabung dan berbagi kue sama rata dengan adik",
      "Menghabiskan semua uang saku untuk membeli mainan mahal",
      "Mengambil kue bagian adik tanpa izin",
      "Membiarkan keran air terus mengalir"
    ],
    "b": 0,
    "bahas": "Gemar menabung, hidup hemat, dan bersikap adil kepada adik mencerminkan sila kelima."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>ATURAN DI RUMAH</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Membuat Hidup Tertib &amp; Nyaman</text></svg>",
    "q": "Perhatikan gambar di atas! Aturan di rumah dibuat oleh ayah dan ibu dengan tujuan agar kehidupan keluarga menjadi ....",
    "p": [
      "Tertib, aman, nyaman, dan rukun",
      "Kacau dan sering bertengkar",
      "Membosankan dan penuh hukuman",
      "Kotor dan berantakan"
    ],
    "b": 0,
    "bahas": "Aturan di rumah bertujuan menciptakan ketertiban, keamanan, dan keharmonisan seluruh anggota keluarga."
  },
  {
    "q": "Setelah bangun tidur di pagi hari, aturan yang baik dilakukan oleh anak mandiri adalah ....",
    "p": [
      "Merapikan bantal dan melipat selimut sendiri",
      "Langsung bermain ponsel di atas kasur",
      "Membiarkan tempat tidur berantakan",
      "Tidur kembali sampai siang"
    ],
    "b": 0,
    "bahas": "Merapikan tempat tidur sendiri melatih kemandirian dan kedisiplinan sejak kecil."
  },
  {
    "q": "Sebelum berangkat ke sekolah maupun keluar rumah untuk bermain, kita wajib ....",
    "p": [
      "Berpamitan dan mencium tangan ayah serta ibu",
      "Pergi diam-diam lewat pintu belakang",
      "Berteriak dari luar pagar",
      "Mengambil sepeda tanpa izin"
    ],
    "b": 0,
    "bahas": "Berpamitan kepada orang tua agar orang tua mengetahui keberadaan kita dan mendoakan keselamatan kita."
  },
  {
    "q": "Aturan yang harus dilakukan sebelum dan sesudah makan di rumah adalah ....",
    "p": [
      "Mencuci tangan dengan sabun dan berdoa",
      "Makan sambil berdiri dan berlarian",
      "Berbicara keras saat mulut penuh makanan",
      "Meninggalkan piring kotor di ruang tamu"
    ],
    "b": 0,
    "bahas": "Mencuci tangan menjaga kebersihan dan berdoa merupakan wujud syukur atas rezeki makanan."
  },
  {
    "q": "Setelah selesai bermain bersama adik di ruang keluarga, mainan yang berserakan di lantai sebaiknya ....",
    "p": [
      "Dirapikan dan dimasukkan kembali ke dalam kotak mainan",
      "Dibiarkan berserakan di lantai",
      "Disuruh ibu yang membereskannya",
      "Ditendang ke kolong meja"
    ],
    "b": 0,
    "bahas": "Merapikan mainan setelah dipakai menjaga kerapian rumah dan mencegah orang lain tersandung."
  },
  {
    "q": "Pilihlah gambar simbol sila kelima Pancasila (Padi dan Kapas / Kemakmuran)!",
    "p": ["Padi dan Kapas", "Bintang", "Rantai", "Pohon Beringin"],
    "pSvg": [
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='25' cy='23' r='8' fill='#ffffff' stroke='#16a34a' stroke-width='2'/><ellipse cx='42' cy='23' rx='5' ry='12' fill='#facc15' stroke='#ca8a04' stroke-width='1.5'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,6 38,18 52,18 41,26 45,39 32,31 19,39 23,26 12,18 26,18' fill='#facc15'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='25' cy='23' r='9' fill='none' stroke='#f59e0b' stroke-width='3'/><circle cx='39' cy='23' r='9' fill='none' stroke='#f59e0b' stroke-width='3'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><rect x='29' y='26' width='7' height='14' fill='#92400e'/><circle cx='32' cy='19' r='12' fill='#16a34a'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama melambangkan kapas putih dan butir padi kuning (simbol sila kelima Pancasila)."
  },
  {
    "q": "Sepatu dan tas sekolah setelah pulang dari sekolah sebaiknya diletakkan di ....",
    "p": [
      "Rak sepatu dan meja belajar dengan rapi",
      "Depan pintu masuk sehingga menghalangi jalan",
      "Atas tempat tidur",
      "Lantai ruang tamu"
    ],
    "b": 0,
    "bahas": "Meletakkan sepatu di rak dan tas di meja belajar membuat rumah rapi dan mudah dicari keesokan harinya."
  },
  {
    "q": "Aturan waktu belajar di rumah pada malam hari sebaiknya dilaksanakan dengan cara ....",
    "p": [
      "Mematikan televisi dan mengerjakan PR dengan sungguh-sungguh",
      "Belajar sambil menonton film kartun",
      "Menunda PR hingga pagi hari di sekolah",
      "Bermain game sampai mengantuk"
    ],
    "b": 0,
    "bahas": "Suasana tenang tanpa gangguan televisi membantu kita fokus belajar dan mengerjakan tugas."
  },
  {
    "q": "Apabila kita melanggar aturan di rumah, misalnya pulang bermain terlalu sore tanpa izin, sikap yang benar adalah ....",
    "p": [
      "Mengakui kesalahan dengan jujur dan meminta maaf kepada ayah dan ibu",
      "Berbohong mengatakan ada tugas kelompok",
      "Menyalahkan teman bermain",
      "Marah saat dinasihati orang tua"
    ],
    "b": 0,
    "bahas": "Jujur dan meminta maaf menunjukkan sikap patuh dan menghormati orang tua."
  },
  {
    "q": "Bendera kebangsaan Negara Indonesia berwarna ....",
    "p": ["Merah dan Putih", "Merah dan Kuning", "Putih dan Biru", "Hijau dan Putih"],
    "b": 0,
    "bahas": "Bendera negara Indonesia adalah Sang Saka Merah Putih."
  },
  {
    "q": "Warna merah pada Bendera Merah Putih memiliki arti ....",
    "p": ["Berani", "Suci", "Sedih", "Takut"],
    "b": 0,
    "bahas": "Merah berarti berani dan putih berarti suci."
  },
  {
    "q": "Lagu kebangsaan Negara Republik Indonesia yang dinyanyikan saat upacara bendera adalah ....",
    "p": ["Indonesia Raya", "Garuda Pancasila", "Bagimu Negeri", "Halo-Halo Bandung"],
    "b": 0,
    "bahas": "Lagu kebangsaan Indonesia adalah 'Indonesia Raya' ciptaan W.R. Supratman."
  },
  {
    "q": "Ketika menyanyikan lagu 'Indonesia Raya' saat upacara bendera, sikap tubuh kita harus ....",
    "p": [
      "Berdiri tegak dengan sikap sempurna dan khidmat",
      "Duduk santai sambil mengobrol",
      "Berjalan-jalan di sekitar barisan",
      "Tertawa bersama teman"
    ],
    "b": 0,
    "bahas": "Berdiri tegak saat lagu kebangsaan dinyanyikan merupakan wujud penghormatan kepada bangsa dan negara."
  },
  {
    "q": "Contoh sikap patuh aturan saat berada di ruang kelas adalah ....",
    "p": [
      "Duduk rapi, memperhatikan penjelasan guru, dan mengangkat tangan sebelum bertanya",
      "Berlari-lari di atas meja kelas",
      "Makan jajanan saat guru menerangkan",
      "Membuang kertas ke kolong bangku teman"
    ],
    "b": 0,
    "bahas": "Memperhatikan guru dan menjaga ketertiban kelas adalah kewajiban siswa."
  },
  {
    "q": "Apabila teman berbeda agama sedang beribadah, sikap kita yang mencerminkan sila pertama Pancasila adalah ....",
    "p": [
      "Menghormati dan tidak mengganggunya",
      "Membuat suara berisik di dekatnya",
      "Mengejek cara ibadahnya",
      "Melarangnya berdoa"
    ],
    "b": 0,
    "bahas": "Menghormati teman yang sedang beribadah menjaga kerukunan antarumat beragama."
  },
  {
    "q": "Perisai yang terdapat pada dada Burung Garuda Pancasila memuat simbol Pancasila sebanyak ....",
    "p": ["3 simbol", "4 simbol", "5 simbol", "6 simbol"],
    "b": 2,
    "bahas": "Terdapat 5 simbol sila Pancasila pada perisai Garuda Pancasila: bintang, rantai, pohon beringin, kepala banteng, serta padi dan kapas."
  },
  {
    "q": "Contoh tindakan menjaga kebersihan rumah yang dapat dilakukan anak kelas 2 SD adalah ....",
    "p": [
      "Menyapu lantai ruang tamu dan membuang sampah ke tempat sampah",
      "Mencoret-coret tembok ruang tamu",
      "Menumpahkan minuman di atas karpet",
      "Membuang bungkus jajanan di halaman"
    ],
    "b": 0,
    "bahas": "Menyapu lantai dan membuang sampah pada tempatnya membantu menjaga rumah tetap bersih dan sehat."
  },
  {
    "q": "Manfaat dari menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari di rumah adalah ....",
    "p": [
      "Keluarga menjadi harmonis, rukun, saling menyayangi, dan penuh berkah",
      "Sering terjadi perselisihan antaranggota keluarga",
      "Pekerjaan rumah menjadi terbengkalai",
      "Anak menjadi malas belajar"
    ],
    "b": 0,
    "bahas": "Mengamalkan Pancasila membuat hubungan antaranggota keluarga penuh kasih sayang dan kedamaian."
  }
]);

window.tambahPaketUjian("2", "bing", "UAS Semester 1", [
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><circle cx='75' cy='40' r='22' fill='#ef4444' stroke='#991b1b' stroke-width='2'/><path d='M75,18 Q78,8 85,12' fill='none' stroke='#16a34a' stroke-width='3'/></svg>",
    "q": "Look at the picture above! It is red and sweet. What fruit is it?",
    "p": ["Banana", "Apple", "Orange", "Grape"],
    "b": 1,
    "bahas": "Gambar menunjukkan sebuah buah apel merah (apple)."
  },
  {
    "q": "A monkey likes eating a yellow ....",
    "p": ["banana", "watermelon", "avocado", "strawberry"],
    "b": 0,
    "bahas": "Buah pisang berwarna kuning dalam bahasa Inggris adalah 'banana'."
  },
  {
    "q": "Do you like watermelon? Yes, I ....",
    "p": ["do", "does", "am", "is"],
    "b": 0,
    "bahas": "Pertanyaan 'Do you like...?' dijawab singkat dengan 'Yes, I do.'"
  },
  {
    "q": "Cici likes orange, ... she does not like durian.",
    "p": ["and", "but", "or", "so"],
    "b": 1,
    "bahas": "Kata penghubung 'but' (tetapi) digunakan untuk menyatakan hal yang berlawanan (suka jeruk, tetapi tidak suka durian)."
  },
  {
    "q": "My father ... like papaya. He eats it after dinner.",
    "p": ["like", "likes", "do not", "am"],
    "b": 1,
    "bahas": "Subjek tunggal 'My father' (he) menggunakan kata kerja 'likes'."
  },
  {
    "svg": "<svg width='160' height='65' xmlns='http://w3.org'><rect x='25' y='12' width='110' height='42' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='80' y='39' font-size='16' font-weight='bold' text-anchor='middle' fill='#0f172a'>15</text></svg>",
    "q": "Look at the number card above! How do you say '15' in English?",
    "p": ["Five", "Fifteen", "Fifty", "Fourteen"],
    "b": 1,
    "bahas": "15 dalam bahasa Inggris adalah 'fifteen'."
  },
  {
    "q": "The number after eleven (11) is ....",
    "p": ["ten", "twelve", "thirteen", "twenty"],
    "b": 1,
    "bahas": "Angka setelah 11 (eleven) adalah 12 (twelve)."
  },
  {
    "q": "What is ten plus seven? (10 + 7 = ...)",
    "p": ["Sixteen", "Seventeen", "Eighteen", "Nineteen"],
    "b": 1,
    "bahas": "10 + 7 = 17 (seventeen)."
  },
  {
    "q": "How do you write '20' in English?",
    "p": ["Twelve", "Twenty", "Two", "Thirteen"],
    "b": 1,
    "bahas": "20 dalam bahasa Inggris ditulis 'twenty'."
  },
  {
    "q": "There ... one teacher in the classroom.",
    "p": ["is", "are", "am", "do"],
    "b": 0,
    "bahas": "Untuk benda atau orang berjumlah satu (tunggal), digunakan 'There is'."
  },
  {
    "q": "There ... twelve pencils in my pencil case.",
    "p": ["is", "are", "am", "was"],
    "b": 1,
    "bahas": "Untuk benda berjumlah lebih dari satu (jamak: twelve pencils), digunakan 'There are'."
  },
  {
    "svg": "<svg width='170' height='80' xmlns='http://w3.org'><rect x='30' y='42' width='110' height='10' fill='#92400e'/><rect x='40' y='52' width='8' height='22' fill='#92400e'/><rect x='122' y='52' width='8' height='22' fill='#92400e'/><circle cx='85' cy='30' r='11' fill='#ef4444' stroke='#991b1b' stroke-width='2'/></svg>",
    "q": "Look at the picture above! Where is the red ball? It is ... the table.",
    "p": ["in", "on", "under", "behind"],
    "b": 1,
    "bahas": "Bola merah berada tepat di atas permukaan meja (on the table)."
  },
  {
    "svg": "<svg width='170' height='80' xmlns='http://w3.org'><rect x='30' y='25' width='110' height='10' fill='#92400e'/><rect x='40' y='35' width='8' height='35' fill='#92400e'/><rect x='122' y='35' width='8' height='35' fill='#92400e'/><circle cx='85' cy='58' r='11' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/></svg>",
    "q": "Look at the picture above! Where is the blue ball? It is ... the table.",
    "p": ["on", "in", "under", "above"],
    "b": 2,
    "bahas": "Bola biru berada di bawah kolong meja (under the table)."
  },
  {
    "q": "Made puts his books and ruler ... his school bag.",
    "p": ["in", "under", "behind", "between"],
    "b": 0,
    "bahas": "Buku dan penggaris disimpan di dalam tas sekolah (in his school bag)."
  },
  {
    "q": "Where is my eraser? It is ... the pencil case.",
    "p": ["in", "at", "to", "for"],
    "b": 0,
    "bahas": "Penghapus berada di dalam tempat pensil (in the pencil case)."
  },
  {
    "q": "Mr. Ahmad is my .... He is my mother's husband.",
    "p": ["sister", "father", "mother", "grandmother"],
    "b": 1,
    "bahas": "Suami dari ibu kita adalah ayah (father)."
  },
  {
    "q": "Mrs. Rina is my .... She cooks delicious food for our family.",
    "p": ["brother", "grandfather", "mother", "uncle"],
    "b": 2,
    "bahas": "Ibu dalam bahasa Inggris adalah 'mother'."
  },
  {
    "q": "My father's father is my ....",
    "p": ["brother", "grandfather", "uncle", "son"],
    "b": 1,
    "bahas": "Ayah dari ayah kita adalah kakek (grandfather)."
  },
  {
    "q": "My mother's mother is my ....",
    "p": ["sister", "aunt", "grandmother", "daughter"],
    "b": 2,
    "bahas": "Ibu dari ibu kita adalah nenek (grandmother)."
  },
  {
    "q": "Aisyah is a girl. She is my ....",
    "p": ["brother", "sister", "father", "grandfather"],
    "b": 1,
    "bahas": "Saudara perempuan dalam bahasa Inggris adalah 'sister'."
  },
  {
    "q": "Udin is a boy. He is my ....",
    "p": ["sister", "mother", "brother", "grandmother"],
    "b": 2,
    "bahas": "Saudara laki-laki dalam bahasa Inggris adalah 'brother'."
  },
  {
    "q": "Which picture shows 'a star'?",
    "p": ["Star", "Apple", "Ball", "Book"],
    "pSvg": [
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,6 38,18 52,18 41,26 45,39 32,31 19,39 23,26 12,18 26,18' fill='#facc15' stroke='#ca8a04' stroke-width='1.5'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='32' cy='24' r='14' fill='#ef4444'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='32' cy='24' r='14' fill='#38bdf8'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><rect x='18' y='10' width='28' height='26' fill='#22c55e'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama adalah bintang berwarna kuning (a star)."
  },
  {
    "q": "What color is a ripe strawberry?",
    "p": ["Blue", "Red", "Black", "Purple"],
    "b": 1,
    "bahas": "Buah stroberi yang matang berwarna merah (red)."
  },
  {
    "q": "How many eyes do you have? I have ... eyes.",
    "p": ["one", "two", "three", "four"],
    "b": 1,
    "bahas": "Kita memiliki dua (two) mata."
  },
  {
    "q": "We write on the book using a ....",
    "p": ["pencil", "eraser", "bag", "chair"],
    "b": 0,
    "bahas": "Kita menulis di buku menggunakan pensil (pencil)."
  },
  {
    "q": "Arrange these words into a good sentence: 'like - I - mango - sweet'",
    "p": [
      "I like sweet mango.",
      "Sweet mango like I.",
      "Like I sweet mango.",
      "Mango I sweet like."
    ],
    "b": 0,
    "bahas": "Susunan kalimat yang benar adalah 'I like sweet mango.'"
  },
  {
    "q": "Who is she? She is my sister. ... name is Siti.",
    "p": ["His", "Her", "My", "Your"],
    "b": 1,
    "bahas": "Kata ganti kepunyaan untuk perempuan (she) adalah 'Her' (Her name is Siti)."
  },
  {
    "q": "Who is he? He is my brother. ... name is Edo.",
    "p": ["Her", "His", "My", "Our"],
    "b": 1,
    "bahas": "Kata ganti kepunyaan untuk laki-laki (he) adalah 'His' (His name is Edo)."
  },
  {
    "q": "The cat is sleeping ... the chair.",
    "p": ["on", "in", "between", "from"],
    "b": 0,
    "bahas": "Kucing tidur di atas kursi: 'on the chair'."
  },
  {
    "q": "'Ada tiga belas buku di atas meja.' The English sentence is ....",
    "p": [
      "There is thirteen books on the table.",
      "There are thirteen books on the table.",
      "There are thirty books on the table.",
      "There are three books under the table."
    ],
    "b": 1,
    "bahas": "Tiga belas buku = thirteen books (jamak, memakai There are), di atas meja = on the table."
  }
]);

window.tambahPaketUjian("2", "madura", "UAS Semester 1", [
  {
    "q": "Lamon bâ'na èntar ka sakola'an, sabellunna mangkat bâ'na kodhu ngocap .... dâ' Eppa' sareng Embu'.",
    "p": ["Pamètan / Assalamualaikum", "Mator sakalangkong", "Mènta sapora", "Sèngko' tèdung"],
    "b": 0,
    "bahas": "Sabellunna mangkat sakola'an kodhu pamètan sareng ngocap salam dâ' Eppa' bân Embu'."
  },
  {
    "q": "Oca' 'mator sakalangkong' èocapaghi lamon bâ'na ....",
    "p": ["Ètolongè kanca", "Ngalakonè kasala'an", "Mangkat tèdung", "Nangès"],
    "b": 0,
    "bahas": "Mator sakalangkong (terima kasih) èocapaghi bilâ ètolongè otabâ èberri' bârâng."
  },
  {
    "q": "Bhâsa alosna oca' 'èyâ' (iya) dâlem bhâsa Madhurâ èngghi panèka ....",
    "p": ["Èngghi", "Bhunten", "Enjâ'", "Ta' tao"],
    "b": 0,
    "bahas": "Èyâ bhâsa alosna 'èngghi'."
  },
  {
    "q": "Bhâsa alosna oca' 'enjâ'' (tidak) dâlem bhâsa Madhurâ èngghi panèka ....",
    "p": ["Èngghi", "Bhunten", "Sèngko'", "Bâ'na"],
    "b": 1,
    "bahas": "Enjâ' bhâsa alosna 'bhunten'."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><path d='M55,20 Q40,38 55,56 Q68,50 65,38 Q68,26 55,20 Z' fill='#fed7aa' stroke='#ea580c' stroke-width='2'/><path d='M55,28 Q48,38 55,48' fill='none' stroke='#9a3412' stroke-width='2'/></svg>",
    "q": "Abâs ghâmbhâr angghuta bhâdhân è attas! Angghuta bhâdhân ghâpanèka aghuna ka'angghuy ngèdingaghi sowara. Nyamana èngghi panèka ....",
    "p": ["Mata", "Kopèng", "Èlong", "Tanang"],
    "b": 1,
    "bahas": "Kopèng (telinga) aghuna ka'angghuy ngèdingaghi sowara."
  },
  {
    "q": "Angghuta bhâdhân sè aghuna ka'angghuy ajhâlân sareng berka' èngghi panèka ....",
    "p": ["Tanang", "Soko", "Kopèng", "Cèthak"],
    "b": 1,
    "bahas": "Soko (kaki) aghuna ka'angghuy ajhâlân sareng berka'."
  },
  {
    "q": "Angghuta bhâdhân sè aghuna ka'angghuy nolès sareng negghu' buku èngghi panèka ....",
    "p": ["Soko", "Tanang", "Èlong", "Kopèng"],
    "b": 1,
    "bahas": "Tanang (tangan) aghuna ka'angghuy nolès bân negghu' bârâng."
  },
  {
    "q": "Nyama kèbân sè bisa ngabber è langngè' bân andi' lèmbâng èngghi panèka ....",
    "p": ["Mano'", "Jhuko'", "Sapè", "Kocèng"],
    "b": 0,
    "bahas": "Mano' (burung) andi' lèmbâng (sayap) ka'angghuy ngabber."
  },
  {
    "svg": "<svg width='160' height='75' xmlns='http://w3.org'><ellipse cx='75' cy='38' rx='36' ry='16' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/><polygon points='111,38 132,24 132,52' fill='#0284c7'/><circle cx='55' cy='34' r='3' fill='#0f172a'/></svg>",
    "q": "Abâs ghâmbhâr kèbân è attas! Kèbân ghâpanèka odi' è dhâlem aèng. Nyamana dâlem bhâsa Madhurâ èngghi panèka ....",
    "p": ["Jhuko'", "Ajâm", "Embik", "Kocèng"],
    "b": 0,
    "bahas": "Jhuko' (ikan) odi' è aèng."
  },
  {
    "q": "Kèbân sè monyèna 'meong-meong' bân senneng nangkep tèkos è roma èngghi panèka ....",
    "p": ["Kocèng", "Sapè", "Ajâm", "Mano'"],
    "b": 0,
    "bahas": "Kocèng monyèna meong-meong."
  },
  {
    "q": "Kèbân sè ngasèllaghi susu potè sè sèhat ka'angghuy èkènom èngghi panèka ....",
    "p": ["Sapè", "Jhuko'", "Olar", "Kocèng"],
    "b": 0,
    "bahas": "Sapè ngasèllaghi susu sè aghizi."
  },
  {
    "q": "Nyama buwâ sè kolè'na bârna konèng bân èkasennengngè kèbân monyet èngghi panèka ....",
    "p": ["Ghâddhâng", "Semangka", "Pao", "Jerruk"],
    "b": 0,
    "bahas": "Ghâddhâng artèna pisang."
  },
  {
    "q": "Nyama buwâ sè rajâ, kolè'na bârna bhuru (hijau), bân èssèna bârna mèra manis èngghi panèka ....",
    "p": ["Semangka", "Ghâddhâng", "Salak", "Anggur"],
    "b": 0,
    "bahas": "Semangka èssèna mèra bân bânnya' aèngnga."
  },
  {
    "q": "Kakanan sè èdhâ'âr sabbhân arè bi' orèng Madhurâ sè èghâbây dâri padhi èngghi panèka ....",
    "p": ["Nasè'", "Roti", "Kue", "Permèn"],
    "b": 0,
    "bahas": "Nasè' (nasi) asal dâri bherrâs/padhi."
  },
  {
    "q": "Ènoman (minuman) sè asalla dâri somor otabâ ghunong sè bhersè bân bennèng èngghi panèka ....",
    "p": ["Aèng potè", "Kopi celleng", "Ès sirup", "Tèh manès"],
    "b": 0,
    "bahas": "Aèng potè (air putih) sanget sèhat ka'angghuy bhâdhân."
  },
  {
    "svg": "<svg width='160' height='65' xmlns='http://w3.org'><rect x='25' y='12' width='110' height='42' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='80' y='39' font-size='16' font-weight='bold' text-anchor='middle' fill='#0f172a'>5</text></svg>",
    "q": "Abâs angka è ghâmbhâr attas! Bilângan '5' dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Empa'", "Lèma'", "Ennem", "Pètto'"],
    "b": 1,
    "bahas": "1 = sèttong, 2 = duwâ', 3 = tello', 4 = empa', 5 = lèma'."
  },
  {
    "q": "Bilângan '7' dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Ennem", "Pètto'", "Bâllu'", "Sanga'"],
    "b": 1,
    "bahas": "6 = ennem, 7 = pètto', 8 = bâllu', 9 = sanga', 10 = sapolo."
  },
  {
    "q": "Bârnana langngè' è bâkto sèyang sè cerrah èngghi panèka ....",
    "p": ["Bhiru", "Celleng", "Mèra", "Konèng"],
    "b": 0,
    "bahas": "Bhiru artèna biru."
  },
  {
    "q": "Bârnana obu' (rambut) orèng Indonesia umumma èngghi panèka ....",
    "p": ["Celleng", "Potè", "Konèng", "Bhuru"],
    "b": 0,
    "bahas": "Celleng artèna hitam."
  },
  {
    "q": "Lamon bâ'na ngalakonè kasala'an dâ' kanca, bâ'na kodhu ....",
    "p": ["Mènta sapora", "Nangès", "Berka' molè", "Ngekkè'"],
    "b": 0,
    "bahas": "Mènta sapora artèna meminta maaf."
  },
  {
    "q": "Pakakas sè èghuna'aghi ka'angghuy nyapo lantai roma sopajâ bhersè èngghi panèka ....",
    "p": ["Sapo", "Pèso", "Sendok", "Potlot"],
    "b": 0,
    "bahas": "Sapo èghuna'aghi nyapo lantai."
  },
  {
    "q": "Pakakas sè èghuna'aghi ka'angghuy ngakan nasè' è pèrèng èngghi panèka ....",
    "p": ["Sendok", "Potlot", "Gunting", "Sapo"],
    "b": 0,
    "bahas": "Sendok èghuna'aghi ngakan nasè' otabâ sop."
  },
  {
    "q": "Pilih ghâmbhâr bângon segitello' (segitiga) è bâbâ panèka!",
    "p": ["Segitello'", "Bunder", "Persegi", "Bintang"],
    "pSvg": [
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,7 12,39 52,39' fill='#facc15' stroke='#ca8a04' stroke-width='2'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='32' cy='23' r='16' fill='#ef4444'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><rect x='15' y='6' width='34' height='34' fill='#38bdf8'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,6 38,18 52,18 41,26 45,39 32,31 19,39 23,26 12,18 26,18' fill='#22c55e'/></svg>"
    ],
    "b": 0,
    "bahas": "Ghâmbhâr kapèng sèttong panèka bângon segitello'."
  },
  {
    "q": "Lamon bâ'na èberri' jhâjhân bi' Embu', tanang sè èghuna'aghi ka'angghuy narèma kodhu tanang ....",
    "p": ["Kangan (kanan)", "Kacèr (kiri)", "Duwâ'na soko", "Tanang kacèr sambi toju'"],
    "b": 0,
    "bahas": "Narèma bârâng dâri orèng laèn kodhu ngangghuy tanang kangan (tangan kanan) kalabân sopan."
  },
  {
    "q": "Oca' 'tèdung' dâlem bhâsa Indonesia artèna ....",
    "p": ["Tidur", "Makan", "Minum", "Belajar"],
    "b": 0,
    "bahas": "Tèdung artèna tidur."
  },
  {
    "q": "Oca' 'ngakan' dâlem bhâsa Indonesia artèna ....",
    "p": ["Makan", "Tidur", "Berlari", "Menulis"],
    "b": 0,
    "bahas": "Ngakan artèna makan."
  },
  {
    "q": "Oca' 'ngombhi' dâlem bhâsa Indonesia artèna ....",
    "p": ["Minum", "Makan", "Membaca", "Bermain"],
    "b": 0,
    "bahas": "Ngombhi artèna minum."
  },
  {
    "q": "Sabellunna ngakan è roma, na'-kana' sè bhâghus kodhu ....",
    "p": ["Abâcco tanang bân adu'a", "Langsung ngakan ceppet", "Amaèn è tanèyan", "Nangès"],
    "b": 0,
    "bahas": "Abâcco tanang (cuci tangan) bân adu'a sabellunna ngakan panèka kabiyasa'an sè bhâghus."
  },
  {
    "q": "Tabhâligghâ dâri oca' 'rajâ' (besar) èngghi panèka ....",
    "p": ["Kènè'", "Tèngghi", "Lanjhâng", "Lèbâr"],
    "b": 0,
    "bahas": "Rajâ tabhâligghâ kènè' (kecil)."
  },
  {
    "q": "Sareng kanca è sakola'an, kita kodhu odi' ....",
    "p": ["Rokon bân salèng nolongè", "Atokar sabbhân arè", "Salèng ngèjhek", "Ta' usa aca'-kanca"],
    "b": 0,
    "bahas": "Odi' rokon sareng kanca mabâdâ suasana sakola'an sè nyaman."
  }
]);

window.tambahPaketUjian("2", "kesenian", "UAS Semester 1", [
  {
    "q": "Tiga warna dasar (primer) dalam seni rupa adalah ....",
    "p": [
      "Merah, kuning, dan biru",
      "Hijau, ungu, dan oranye",
      "Hitam, putih, dan cokelat",
      "Merah muda, abu-abu, dan krem"
    ],
    "b": 0,
    "bahas": "Warna dasar atau primer terdiri dari merah, kuning, dan biru."
  },
  {
    "svg": "<svg width='185' height='65' xmlns='http://w3.org'><circle cx='35' cy='32' r='16' fill='#38bdf8'/><text x='62' y='37' font-size='14' font-weight='bold'>+</text><circle cx='90' cy='32' r='16' fill='#facc15'/><text x='117' y='37' font-size='14' font-weight='bold'>=</text><circle cx='148' cy='32' r='18' fill='#22c55e' stroke='#0f172a' stroke-width='2'/></svg>",
    "q": "Perhatikan pencampuran warna pada gambar di atas! Jika warna biru dicampur dengan warna kuning, maka akan menghasilkan warna ....",
    "p": ["Oranye", "Hijau", "Ungu", "Cokelat"],
    "b": 1,
    "bahas": "Campuran warna biru dan kuning menghasilkan warna hijau."
  },
  {
    "q": "Jika warna merah dicampur dengan warna kuning, maka akan menghasilkan warna ....",
    "p": ["Hijau", "Ungu", "Oranye (jingga)", "Biru"],
    "b": 2,
    "bahas": "Campuran warna merah dan kuning menghasilkan warna oranye."
  },
  {
    "q": "Warna buah pisang yang sudah matang dan sinar matahari pagi biasanya diwarnai menggunakan warna ....",
    "p": ["Kuning", "Biru", "Hitam", "Ungu"],
    "b": 0,
    "bahas": "Pisang matang dan matahari cerah identik dengan warna kuning."
  },
  {
    "q": "Warna air laut yang jernih dan langit cerah di siang hari adalah ....",
    "p": ["Merah", "Biru", "Hitam", "Cokelat"],
    "b": 1,
    "bahas": "Langit cerah dan air laut identik dengan warna biru."
  },
  {
    "q": "Alat yang digunakan untuk menggambar sketsa awal di atas kertas gambar adalah ....",
    "p": ["Pensil", "Gunting", "Lem kertas", "Penggaris besi"],
    "b": 0,
    "bahas": "Pensil digunakan untuk membuat sketsa garis sebelum gambar diwarnai."
  },
  {
    "q": "Alat yang digunakan untuk menghapus goresan pensil yang salah saat menggambar adalah ....",
    "p": ["Rautan", "Penghapus karet", "Kuas cat", "Spidol"],
    "b": 1,
    "bahas": "Penghapus karet berfungsi membersihkan goresan pensil yang salah."
  },
  {
    "svg": "<svg width='160' height='60' xmlns='http://w3.org'><polyline points='15,42 35,18 55,42 75,18 95,42 115,18 135,42' fill='none' stroke='#ef4444' stroke-width='4'/></svg>",
    "q": "Perhatikan bentuk garis berkelok-kelok tajam naik turun pada gambar di atas! Garis tersebut disebut garis ....",
    "p": ["Lurus", "Zig-zag", "Lingkaran", "Lengkung"],
    "b": 1,
    "bahas": "Garis patah-patah bersudut tajam disebut garis zig-zag."
  },
  {
    "q": "Garis yang berbentuk bulat melingkar tanpa ujung seperti uang koin disebut garis ....",
    "p": ["Lurus", "Lingkaran", "Zig-zag", "Tegak"],
    "b": 1,
    "bahas": "Garis lingkaran membentuk bangun datar lingkaran."
  },
  {
    "q": "Karya seni rupa yang dibuat dengan cara menempelkan potongan kertas warna, daun kering, atau biji-bijian pada gambar disebut ....",
    "p": ["Kolase", "Lukisan", "Patung", "Anyaman"],
    "b": 0,
    "bahas": "Kolase adalah karya seni tempel menggunakan bahan-bahan kecil pada permukaan gambar."
  },
  {
    "q": "Bahan yang digunakan untuk merekatkan potongan kertas warna saat membuat kolase adalah ....",
    "p": ["Lem kertas", "Air putih", "Minyak goreng", "Bedak"],
    "b": 0,
    "bahas": "Lem kertas digunakan untuk menempelkan potongan kertas atau biji-bijian."
  },
  {
    "q": "Seni melipat kertas berbentuk persegi menjadi bentuk perahu, pesawat, atau burung disebut ....",
    "p": ["Melipat kertas (origami)", "Mengukir", "Memahat", "Menjahit"],
    "b": 0,
    "bahas": "Origami adalah seni melipat kertas menjadi berbagai bentuk lucu tanpa lem."
  },
  {
    "q": "Bahan alam di sekitar rumah yang dapat digunakan untuk membuat karya kerajinan kolase adalah ....",
    "p": [
      "Daun kering, ranting kecil, dan biji kacang hijau",
      "Pecahan kaca tajam",
      "Kawat besi berduri",
      "Batu bata besar"
    ],
    "b": 0,
    "bahas": "Daun kering dan biji-bijian aman serta indah digunakan untuk karya kolase."
  },
  {
    "q": "Permukaan kaca cermin dan kertas buku gambar apabila diraba dengan jari terasa ....",
    "p": ["Kasar", "Halus dan licin", "Berduri", "Berbulu"],
    "b": 1,
    "bahas": "Kaca cermin dan kertas gambar memiliki permukaan halus."
  },
  {
    "q": "Kulit buah durian dan batu bata apabila diraba dengan tangan terasa ....",
    "p": ["Licin", "Kasar", "Lembut", "Basah"],
    "b": 1,
    "bahas": "Kulit durian dan batu bata memiliki tekstur kasar."
  },
  {
    "q": "Pilihlah gambar bentuk bangun datar persegi (segi empat) di bawah ini!",
    "p": ["Persegi", "Lingkaran", "Segitiga", "Bintang"],
    "pSvg": [
      "<svg width='65' height='45' xmlns='http://w3.org'><rect x='15' y='6' width='34' height='34' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='32' cy='23' r='16' fill='#ef4444'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,7 12,39 52,39' fill='#facc15'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,6 38,18 52,18 41,26 45,39 32,31 19,39 23,26 12,18 26,18' fill='#22c55e'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama memiliki 4 sisi yang sama panjang yaitu persegi."
  },
  {
    "q": "Alat musik sederhana yang dimainkan dengan cara dipukul menggunakan tangan atau pemukul adalah ....",
    "p": ["Kendang dan drum", "Seruling", "Gitar", "Biola"],
    "b": 0,
    "bahas": "Kendang dan drum termasuk alat musik ritmis yang dimainkan dengan cara dipukul."
  },
  {
    "q": "Alat musik seruling dan pianika dapat mengeluarkan bunyi apabila dimainkan dengan cara ....",
    "p": ["Dipetik", "Ditiup", "Dipukul", "Digesek"],
    "b": 1,
    "bahas": "Seruling dan pianika dimainkan dengan cara ditiup."
  },
  {
    "q": "Suara tepuk tangan dan hentakan kaki termasuk sumber bunyi yang berasal dari ....",
    "p": ["Alam", "Anggota tubuh manusia", "Alat elektronik", "Hewan"],
    "b": 1,
    "bahas": "Tepuk tangan, jentik jari, dan hentakan kaki menghasilkan bunyi ritmis dari tubuh manusia."
  },
  {
    "q": "Lagu anak-anak berjudul 'Balonku' memiliki suasana yang ....",
    "p": ["Sedih dan lambat", "Riang dan gembira", "Menakutkan", "Marah"],
    "b": 1,
    "bahas": "Lagu 'Balonku' dinyanyikan dengan tempo riang dan penuh semangat."
  },
  {
    "q": "Menari adalah menggerakkan anggota tubuh secara indah mengikuti irama ....",
    "p": ["Musik / lagu", "Angin kencang", "Suara petir", "Langkah orang berlari"],
    "b": 0,
    "bahas": "Gerak tari dilakukan selaras dengan irama musik pengiring."
  },
  {
    "q": "Gerakan menirukan kupu-kupu terbang dilakukan dengan cara menggerakkan kedua ....",
    "p": ["Tangan ke atas dan ke bawah seperti sayap", "Kaki melompat-lompat", "Kepala menggeleng cepat", "Mata berkedip-kedip"],
    "b": 0,
    "bahas": "Kedua tangan direntangkan dan dikepakkan naik turun menirukan sayap kupu-kupu."
  },
  {
    "q": "Saat menggambar pemandangan gunung dan sawah, daun padi dan pepohonan sebaiknya diwarnai dengan warna ....",
    "p": ["Hijau", "Merah", "Ungu", "Hitam"],
    "b": 0,
    "bahas": "Warna hijau menggambarkan daun pohon dan tanaman padi yang segar."
  },
  {
    "q": "Plastisin atau lilin mainan dapat dibentuk menjadi berbagai bentuk hewan dan buah dengan cara ....",
    "p": ["Ditekan dan dipilin dengan jari tangan", "Dipotong dengan gergaji besi", "Dibakar di atas api", "Direndam di dalam air panas"],
    "b": 0,
    "bahas": "Plastisin bersifat lunak sehingga mudah dibentuk menggunakan jari tangan."
  },
  {
    "q": "Sikap yang baik ketika teman sedang menyanyikan lagu di depan kelas adalah ....",
    "p": [
      "Mendengarkan dengan tenang dan memberikan tepuk tangan setelah selesai",
      "Menertawakan suara teman",
      "Berteriak-teriak mengganggu teman",
      "Berjalan keluar kelas"
    ],
    "b": 0,
    "bahas": "Memberi tepuk tangan menunjukkan rasa hormat dan dukungan kepada teman."
  },
  {
    "q": "Ketika menggunakan gunting untuk memotong kertas gambar di kelas, kita harus berhati-hati agar ....",
    "p": [
      "Jari tangan tidak terluka",
      "Gunting menjadi patah",
      "Kertas menjadi basah",
      "Pensil warna hilang"
    ],
    "b": 0,
    "bahas": "Gunting memiliki ujung tajam sehingga harus digunakan dengan hati-hati."
  },
  {
    "q": "Warna hitam dan putih apabila dicampurkan bersama akan menghasilkan warna ....",
    "p": ["Abu-abu", "Hijau", "Oranye", "Merah muda"],
    "b": 0,
    "bahas": "Campuran warna hitam dan putih menghasilkan warna abu-abu."
  },
  {
    "q": "Setelah selesai mewarnai dengan krayon atau pensil warna, alat gambar sebaiknya ....",
    "p": [
      "Disimpan kembali ke dalam kotak dengan rapi",
      "Ditinggalkan di atas lantai kelas",
      "Dipatahkan menjadi dua bagian",
      "Dicoretkan ke baju teman"
    ],
    "b": 0,
    "bahas": "Merapikan alat gambar menjaga kebersihan kelas dan membuat peralatan awet."
  },
  {
    "q": "Karya gambar yang sudah selesai dibuat dapat dipajang di dinding kelas agar kelas terlihat ....",
    "p": ["Indah dan rapi", "Kotor dan sempit", "Gelap", "Berantakan"],
    "b": 0,
    "bahas": "Memajang hasil karya siswa memperindah ruang kelas dan menumbuhkan rasa bangga."
  },
  {
    "q": "Belajar menggambar, bernyanyi, dan menari di sekolah membuat hati kita merasa ....",
    "p": ["Senang dan bersemangat", "Sedih dan bosan", "Takut", "Marah"],
    "b": 0,
    "bahas": "Kegiatan seni melatih kreativitas sekaligus menciptakan suasana belajar yang gembira."
  }
]);

window.tambahPaketUjian("2", "mtk", "UTS Semester 1", [
  {
    "svg": "<svg width='180' height='65' xmlns='http://w3.org'><rect x='12' y='12' width='75' height='40' rx='6' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='49' y='36' font-size='12' text-anchor='middle'>🍎🍎🍎🍎🍎</text><rect x='93' y='12' width='75' height='40' rx='6' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='130' y='36' font-size='12' text-anchor='middle'>🍎🍎🍎🍎</text></svg>",
    "q": "Hitunglah seluruh buah apel pada kedua kotak di atas!",
    "p": ["8", "9", "10", "11"],
    "b": 1,
    "bahas": "5 apel + 4 apel = 9 buah apel."
  },
  {
    "svg": "<svg width='185' height='68' xmlns='http://w3.org'><rect x='12' y='12' width='45' height='42' rx='5' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='34' y='37' font-size='10' font-weight='bold' text-anchor='middle'>10</text><rect x='64' y='12' width='45' height='42' rx='5' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='86' y='37' font-size='10' font-weight='bold' text-anchor='middle'>10</text><rect x='118' y='12' width='55' height='42' rx='5' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='145' y='37' font-size='12' text-anchor='middle'>⭐⭐⭐</text></svg>",
    "q": "Perhatikan gambar balok puluhan dan bintang satuan di atas! Bilangan yang ditunjukkan gambar tersebut adalah ....",
    "p": ["20", "23", "32", "13"],
    "b": 1,
    "bahas": "2 puluhan (20) + 3 satuan (3) = 23."
  },
  {
    "q": "Bilangan 67 dibaca ....",
    "p": ["Enam puluh tujuh", "Tujuh puluh enam", "Enam tujuh", "Enam ratus tujuh"],
    "b": 0,
    "bahas": "6 puluhan dan 7 satuan dibaca enam puluh tujuh."
  },
  {
    "q": "Lambang bilangan dari 'delapan puluh empat' adalah ....",
    "p": ["48", "84", "804", "840"],
    "b": 1,
    "bahas": "Delapan puluh (80) + empat (4) = 84."
  },
  {
    "svg": "<svg width='165' height='65' xmlns='http://w3.org'><rect x='25' y='12' width='115' height='40' rx='8' fill='#fce7f3' stroke='#db2777' stroke-width='2'/><text x='82' y='38' font-size='15' font-weight='bold' text-anchor='middle' fill='#9d174d'>59</text></svg>",
    "q": "Perhatikan kartu bilangan di atas! Pada bilangan 59, angka 5 menempati nilai tempat ....",
    "p": ["Satuan", "Puluhan", "Ratusan", "Ribuan"],
    "b": 1,
    "bahas": "Pada bilangan 59, angka 5 adalah puluhan (50) dan angka 9 adalah satuan."
  },
  {
    "q": "Nilai angka 8 pada bilangan 48 adalah ....",
    "p": ["8", "80", "40", "48"],
    "b": 0,
    "bahas": "Angka 8 berada di tempat satuan sehingga nilainya 8."
  },
  {
    "svg": "<svg width='180' height='65' xmlns='http://w3.org'><rect x='15' y='14' width='52' height='36' rx='6' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='41' y='37' font-size='13' font-weight='bold' text-anchor='middle'>74</text><circle cx='90' cy='32' r='12' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='90' y='37' font-size='12' font-weight='bold' text-anchor='middle'>?</text><rect x='113' y='14' width='52' height='36' rx='6' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='139' y='37' font-size='13' font-weight='bold' text-anchor='middle'>47</text></svg>",
    "q": "Perhatikan dua bilangan di atas! Bilangan 74 ... daripada 47.",
    "p": ["Lebih kecil", "Lebih besar", "Sama dengan", "Lebih sedikit"],
    "b": 1,
    "bahas": "74 lebih besar daripada 47."
  },
  {
    "q": "Urutan bilangan berikut dari yang terkecil adalah ....",
    "p": ["35, 31, 38, 33", "31, 33, 35, 38", "38, 35, 33, 31", "33, 31, 38, 35"],
    "b": 1,
    "bahas": "Urutan dari paling kecil ke paling besar adalah 31, 33, 35, 38."
  },
  {
    "svg": "<svg width='185' height='60' xmlns='http://w3.org'><rect x='10' y='12' width='35' height='35' rx='5' fill='#dcfce7' stroke='#16a34a'/><text x='27' y='34' font-size='11' font-weight='bold' text-anchor='middle'>20</text><rect x='52' y='12' width='35' height='35' rx='5' fill='#dcfce7' stroke='#16a34a'/><text x='69' y='34' font-size='11' font-weight='bold' text-anchor='middle'>25</text><rect x='94' y='12' width='35' height='35' rx='5' fill='#dcfce7' stroke='#16a34a'/><text x='111' y='34' font-size='11' font-weight='bold' text-anchor='middle'>30</text><rect x='136' y='12' width='35' height='35' rx='5' fill='#fef08a' stroke='#ca8a04'/><text x='153' y='34' font-size='11' font-weight='bold' text-anchor='middle'>?</text></svg>",
    "q": "Perhatikan pola bilangan loncat 5 pada gambar di atas! Bilangan untuk mengisi kotak (?) adalah ....",
    "p": ["31", "32", "35", "40"],
    "b": 2,
    "bahas": "Bilangan loncat 5: 20, 25, 30, 35."
  },
  {
    "q": "Hasil penjumlahan dari 24 + 13 adalah ....",
    "p": ["35", "36", "37", "38"],
    "b": 2,
    "bahas": "Puluhan: 20 + 10 = 30, Satuan: 4 + 3 = 7. Jadi 37."
  },
  {
    "q": "Hasil penjumlahan menyimpan dari 38 + 16 adalah ....",
    "p": ["44", "52", "54", "64"],
    "b": 2,
    "bahas": "8 + 6 = 14 (tulis 4 simpan 1), 1 + 3 + 1 = 5. Jadi 54."
  },
  {
    "svg": "<svg width='180' height='65' xmlns='http://w3.org'><rect x='12' y='12' width='156' height='40' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='90' y='37' font-size='12' font-weight='bold' text-anchor='middle' fill='#0369a1'>25 Buku + 14 Buku = ...</text></svg>",
    "q": "Budi memiliki 25 buku cerita. Ibu membelikan lagi 14 buku cerita. Jumlah buku Budi sekarang adalah ....",
    "p": ["38 buku", "39 buku", "40 buku", "49 buku"],
    "b": 1,
    "bahas": "25 + 14 = 39 buku."
  },
  {
    "q": "Hasil pengurangan dari 49 - 15 adalah ....",
    "p": ["32", "33", "34", "35"],
    "b": 2,
    "bahas": "49 - 15 = 34."
  },
  {
    "q": "Hasil pengurangan meminjam dari 52 - 17 adalah ....",
    "p": ["35", "37", "45", "69"],
    "b": 0,
    "bahas": "52 - 17 = 35."
  },
  {
    "q": "Di keranjang ada 36 buah jeruk. Sebanyak 12 buah jeruk dimakan bersama keluarga. Sisa jeruk di keranjang ada ....",
    "p": ["22 buah", "24 buah", "26 buah", "48 buah"],
    "b": 1,
    "bahas": "36 - 12 = 24 buah jeruk."
  },
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><polygon points='80,10 40,58 120,58' fill='#ef4444' stroke='#991b1b' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar bangun datar di atas! Banyak sisi pada bangun segitiga tersebut ada ....",
    "p": ["2 sisi", "3 sisi", "4 sisi", "5 sisi"],
    "b": 1,
    "bahas": "Segitiga memiliki 3 sisi dan 3 sudut."
  },
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><rect x='50' y='12' width='60' height='46' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/></svg>",
    "q": "Gambar bangun datar berwarna biru di atas memiliki 4 sisi dan 4 sudut, disebut ....",
    "p": ["Segitiga", "Segi empat", "Lingkaran", "Oval"],
    "b": 1,
    "bahas": "Bangun yang memiliki 4 sisi disebut segi empat."
  },
  {
    "q": "Benda di ruang kelas yang permukaannya berbentuk lingkaran adalah ....",
    "p": ["Papan tulis", "Jam dinding bulat", "Buku gambar", "Meja guru"],
    "b": 1,
    "bahas": "Jam dinding bulat berbentuk lingkaran."
  },
  {
    "q": "Pilihlah gambar yang menunjukkan bangun LINGKARAN!",
    "p": ["Lingkaran", "Segitiga", "Persegi", "Bintang"],
    "pSvg": [
      "<svg width='60' height='42' xmlns='http://w3.org'><circle cx='30' cy='21' r='15' fill='#facc15' stroke='#ca8a04' stroke-width='2'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><polygon points='30,5 10,37 50,37' fill='#ef4444'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><rect x='14' y='5' width='32' height='32' fill='#38bdf8'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><polygon points='30,5 35,16 48,16 38,23 41,35 30,28 19,35 22,23 12,16 25,16' fill='#22c55e'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama yang berbentuk bulat tanpa sudut adalah lingkaran."
  },
  {
    "q": "Bilangan yang terletak tepat di antara 68 dan 70 adalah ....",
    "p": ["67", "69", "71", "72"],
    "b": 1,
    "bahas": "Urutannya adalah 68, 69, 70."
  }
]);

window.tambahPaketUjian("2", "bindo", "UTS Semester 1", [
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><circle cx='75' cy='38' r='24' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><circle cx='66' cy='32' r='3' fill='#0f172a'/><circle cx='84' cy='32' r='3' fill='#0f172a'/><path d='M65,48 Q75,38 85,48' fill='none' stroke='#0f172a' stroke-width='2.5'/></svg>",
    "q": "Perhatikan ekspresi wajah pada gambar di atas! Bibir melengkung ke bawah menunjukkan perasaan ....",
    "p": ["Senang", "Sedih", "Terkejut", "Mengantuk"],
    "b": 1,
    "bahas": "Bibir melengkung ke bawah menggambarkan perasaan sedih."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><circle cx='75' cy='38' r='24' fill='#fecaca' stroke='#dc2626' stroke-width='2'/><line x1='61' y1='26' x2='71' y2='31' stroke='#0f172a' stroke-width='2.5'/><line x1='89' y1='26' x2='79' y2='31' stroke='#0f172a' stroke-width='2.5'/><circle cx='66' cy='35' r='3' fill='#0f172a'/><circle cx='84' cy='35' r='3' fill='#0f172a'/><line x1='66' y1='49' x2='84' y2='49' stroke='#0f172a' stroke-width='2.5'/></svg>",
    "q": "Perhatikan wajah berwarna kemerahan dengan alis menukik pada gambar di atas! Ekspresi tersebut menunjukkan perasaan ....",
    "p": ["Gembira", "Marah", "Malu", "Tenang"],
    "b": 1,
    "bahas": "Alis menukik dan wajah memerah menunjukkan perasaan marah."
  },
  {
    "q": "Ketika kita mendapat hadiah buku cerita baru dari Ibu, perasaan kita adalah ....",
    "p": ["Sedih", "Senang / Gembira", "Takut", "Marah"],
    "b": 1,
    "bahas": "Menerima hadiah membuat hati merasa senang dan bersyukur."
  },
  {
    "q": "Saat merasa marah karena mainan direbut teman, cara menenangkan diri yang baik adalah ....",
    "p": [
      "Menarik napas dalam-dalam, menghitung sampai sepuluh, dan berbicara baik-baik",
      "Memukul teman sekuat tenaga",
      "Berteriak sambil menangis keras",
      "Melempar buku ke lantai"
    ],
    "b": 0,
    "bahas": "Menarik napas dalam-dalam membantu meredakan amarah agar tidak menyakiti orang lain."
  },
  {
    "q": "Penggunaan huruf kapital yang benar terdapat pada kalimat ....",
    "p": [
      "siti dan rina bermain boneka di teras.",
      "Siti dan Rina bermain boneka di teras.",
      "Siti dan rina bermain Boneka di teras.",
      "siti dan Rina bermain boneka di Teras."
    ],
    "b": 1,
    "bahas": "Huruf kapital dipakai di awal kalimat (Siti) dan nama orang (Rina)."
  },
  {
    "q": "Tanda baca yang digunakan pada akhir kalimat berita seperti 'Ayah membaca koran di ruang tamu' adalah ....",
    "p": ["Titik (.)", "Tanya (?)", "Seru (!)", "Koma (,)"],
    "b": 0,
    "bahas": "Kalimat berita diakhiri dengan tanda titik (.)."
  },
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><rect x='25' y='12' width='110' height='46' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='80' y='33' font-size='11' font-weight='bold' text-anchor='middle' fill='#0369a1'>JARAK BACA</text><text x='80' y='48' font-size='10' text-anchor='middle' fill='#0f172a'>Minimal 30 cm</text></svg>",
    "q": "Perhatikan kartu informasi kesehatan mata di atas! Membaca buku dengan jarak sekitar 30 cm di tempat terang bertujuan agar ....",
    "p": [
      "Mata tetap sehat dan tidak cepat lelah",
      "Buku cepat selesai dibaca",
      "Tulisan terlihat kecil sekali",
      "Mata menjadi mengantuk"
    ],
    "b": 0,
    "bahas": "Jarak baca ideal 30 cm dengan pencahayaan cukup menjaga kesehatan mata."
  },
  {
    "q": "Kebiasaan yang dapat merusak kesehatan mata adalah ....",
    "p": [
      "Menonton layar ponsel sambil tiduran di ruangan gelap",
      "Makan sayur wortel dan bayam",
      "Belajar di meja belajar yang terang",
      "Mengistirahatkan mata setelah membaca"
    ],
    "b": 0,
    "bahas": "Menatap layar di tempat gelap dan sambil tiduran membuat mata cepat rusak."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><polygon points='75,14 63,56 87,56' fill='#f97316' stroke='#c2410c' stroke-width='2'/><path d='M75,14 Q65,5 60,12 M75,14 Q85,5 90,12' fill='none' stroke='#16a34a' stroke-width='2.5'/></svg>",
    "q": "Perhatikan gambar sayuran berwarna oranye di atas! Sayuran wortel kaya vitamin A yang sangat baik untuk kesehatan ....",
    "p": ["Telinga", "Mata", "Kaki", "Rambut"],
    "b": 1,
    "bahas": "Wortel mengandung vitamin A yang menjaga kesehatan mata."
  },
  {
    "q": "Perhatikan kalimat berikut: 'Budi menyiram bunga.' Kata 'Budi' dalam kalimat tersebut berkedudukan sebagai ....",
    "p": ["Subjek", "Predikat", "Objek", "Keterangan"],
    "b": 0,
    "bahas": "Budi adalah pelaku kegiatan sehingga disebut Subjek (S)."
  },
  {
    "q": "Perhatikan kalimat berikut: 'Ibu memasak nasi.' Kata 'memasak' berkedudukan sebagai ....",
    "p": ["Subjek", "Predikat", "Objek", "Nama tempat"],
    "b": 1,
    "bahas": "Memasak adalah kata kerja (kegiatan yang dilakukan) sehingga disebut Predikat (P)."
  },
  {
    "q": "Perhatikan kalimat berikut: 'Edo menendang bola.' Kata 'bola' berkedudukan sebagai ....",
    "p": ["Subjek", "Predikat", "Objek", "Keterangan waktu"],
    "b": 2,
    "bahas": "Edo (Subjek), menendang (Predikat), bola (Objek)."
  },
  {
    "q": "Kata tanya yang digunakan untuk menanyakan nama orang adalah ....",
    "p": ["Siapa", "Di mana", "Kapan", "Berapa"],
    "b": 0,
    "bahas": "Kata tanya 'Siapa' menanyakan orang."
  },
  {
    "q": "Kalimat tanya berikut yang menggunakan tanda baca dengan benar adalah ....",
    "p": [
      "Di mana kamu membeli buku gambar itu?",
      "Di mana kamu membeli buku gambar itu.",
      "Di mana kamu membeli buku gambar itu!",
      "Di mana kamu membeli buku gambar itu,"
    ],
    "b": 0,
    "bahas": "Kalimat tanya diawali kata tanya dan diakhiri tanda tanya (?)."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><line x1='20' y1='45' x2='155' y2='45' stroke='#0284c7' stroke-width='2'/><rect x='30' y='20' width='22' height='25' fill='#38bdf8'/><rect x='65' y='15' width='22' height='30' fill='#22c55e'/><rect x='100' y='25' width='22' height='20' fill='#f59e0b'/></svg>",
    "q": "Perhatikan gambar grafik batang sederhana di atas! Batang yang paling tinggi adalah batang berwarna ....",
    "p": ["Biru", "Hijau", "Oranye", "Merah"],
    "b": 1,
    "bahas": "Batang di tengah berwarna hijau paling tinggi dibanding batang biru dan oranye."
  },
  {
    "q": "Sinonim (persamaan arti) dari kata 'gembira' adalah ....",
    "p": ["Sedih", "Senang", "Takut", "Cemas"],
    "b": 1,
    "bahas": "Gembira sama artinya dengan senang atau bahagia."
  },
  {
    "q": "Antonim (lawan kata) dari kata 'bersih' adalah ....",
    "p": ["Rapi", "Kotor", "Sehat", "Wangi"],
    "b": 1,
    "bahas": "Lawan kata dari bersih adalah kotor."
  },
  {
    "q": "Susunan kata acak 'minum - Siti - susu - hangat' menjadi kalimat yang benar adalah ....",
    "p": [
      "Siti minum susu hangat.",
      "Susu minum Siti hangat.",
      "Hangat minum Siti susu.",
      "Minum Siti hangat susu."
    ],
    "b": 0,
    "bahas": "Susunan Subjek-Predikat-Objek yang tepat adalah 'Siti minum susu hangat.'"
  },
  {
    "q": "Pilihlah gambar ekspresi wajah TERSENYUM SENANG di bawah ini!",
    "p": ["Senyum", "Sedih", "Datar", "Kotak"],
    "pSvg": [
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='23' r='16' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><circle cx='25' cy='19' r='2' fill='#0f172a'/><circle cx='35' cy='19' r='2' fill='#0f172a'/><path d='M23,27 Q30,34 37,27' fill='none' stroke='#0f172a' stroke-width='2'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='23' r='16' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><path d='M23,31 Q30,24 37,31' fill='none' stroke='#0f172a' stroke-width='2'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='23' r='16' fill='#e2e8f0' stroke='#64748b' stroke-width='2'/><line x1='23' y1='28' x2='37' y2='28' stroke='#0f172a' stroke-width='2'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><rect x='14' y='7' width='32' height='32' fill='#fca5a5'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama berwarna kuning dengan bibir tersenyum ke atas."
  },
  {
    "q": "Saat teman sedang bercerita di depan kelas, sikap kita yang baik adalah ....",
    "p": [
      "Mendengarkan dengan tenang dan tidak memotong pembicaraannya",
      "Berteriak-teriak mengganggu teman",
      "Mengobrol ramai dengan teman sebangku",
      "Tertawa mengejek ceritanya"
    ],
    "b": 0,
    "bahas": "Menyimak dengan tenang menghargai teman yang sedang berbicara."
  }
]);

window.tambahPaketUjian("2", "pai", "UTS Semester 1", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='87' y='32' font-size='11' font-weight='bold' text-anchor='middle' fill='#15803d'>SURAH AN-NAS</text><text x='87' y='47' font-size='9' text-anchor='middle' fill='#0f172a'>Terdiri atas 6 Ayat • Artinya Manusia</text></svg>",
    "q": "Perhatikan kartu informasi surah di atas! Surah An-Nas merupakan surah ke-114 (penutup) dalam Al-Qur'an yang artinya ....",
    "p": ["Waktu subuh", "Manusia", "Pertolongan", "Gajah"],
    "b": 1,
    "bahas": "An-Nas secara bahasa memiliki arti manusia."
  },
  {
    "q": "Dalam Surah An-Nas kita diajarkan agar memohon perlindungan dari kejahatan bisikan setan hanya kepada ....",
    "p": ["Allah Swt.", "Malaikat", "Manusia kuat", "Jin"],
    "b": 0,
    "bahas": "Qul a'uzu birabbin-nas (Katakanlah: Aku berlindung kepada Tuhan manusia, yaitu Allah Swt.)."
  },
  {
    "q": "Ayat ke-3 Surah An-Nas berbunyi 'Ilahin-nas' yang memiliki arti ....",
    "p": ["Tuhan manusia", "Raja manusia", "Sembahan manusia", "Dari golongan jin"],
    "b": 2,
    "bahas": "'Malikin-nas' artinya Raja manusia, sedangkan 'Ilahin-nas' artinya Sembahan manusia."
  },
  {
    "svg": "<svg width='175' height='65' xmlns='http://w3.org'><rect x='20' y='12' width='135' height='40' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='37' font-size='11' font-weight='bold' text-anchor='middle' fill='#854d0e'>← Kanan ke Kiri</text></svg>",
    "q": "Perhatikan tanda panah arah pada gambar di atas! Menulis dan membaca huruf hijaiyah dalam Al-Qur'an selalu dimulai dari arah ....",
    "p": ["Kiri ke kanan", "Kanan ke kiri", "Bawah ke atas", "Tengah ke pinggir"],
    "b": 1,
    "bahas": "Tulisan Arab/huruf hijaiyah ditulis dan dibaca dari kanan ke kiri."
  },
  {
    "q": "Tanda baca harakat yang terletak di atas huruf hijaiyah dan berbunyi 'a' disebut ....",
    "p": ["Fathah", "Kasrah", "Dammah", "Sukun"],
    "b": 0,
    "bahas": "Fathah berbunyi 'a', Kasrah berbunyi 'i', dan Dammah berbunyi 'u'."
  },
  {
    "q": "Tanda baca harakat yang bentuknya seperti huruf wawu kecil di atas huruf dan berbunyi 'u' disebut ....",
    "p": ["Fathah", "Kasrah", "Dammah", "Tanwin"],
    "b": 2,
    "bahas": "Dammah berbunyi 'u'."
  },
  {
    "q": "Di antara huruf hijaiyah berikut yang TIDAK DAPAT disambung dengan huruf sesudahnya di sebelah kiri adalah ....",
    "p": ["Alif, Dal, Dzal, Ra, Zai, Wawu", "Ba, Ta, Tsa", "Sin, Syin, Sad", "Kaf, Lam, Mim"],
    "b": 0,
    "bahas": "Enam huruf hijaiyah (ا د ذ ر ز و) tidak bisa menyambung huruf di sebelah kirinya."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='11' font-weight='bold' text-anchor='middle' fill='#0369a1'>AL-HAFIZ</text><text x='87' y='47' font-size='9' text-anchor='middle' fill='#0f172a'>Asmaulhusna Allah Swt.</text></svg>",
    "q": "Perhatikan kartu Asmaulhusna pada gambar di atas! Arti dari 'Al-Hafiz' adalah Allah Swt. Maha ....",
    "p": ["Memelihara / Menjaga", "Melindungi", "Mengetahui", "Teliti"],
    "b": 0,
    "bahas": "Al-Hafiz artinya Allah Maha Memelihara dan Menjaga seluruh makhluk-Nya."
  },
  {
    "q": "Asmaulhusna 'Al-Wali' memiliki arti bahwa Allah Swt. Maha ....",
    "p": ["Melindungi", "Mendengar", "Melihat", "Menciptakan"],
    "b": 0,
    "bahas": "Al-Wali artinya Allah Maha Melindungi hamba-hamba-Nya yang beriman."
  },
  {
    "q": "Allah Swt. mengetahui semua perbuatan kita baik yang tampak maupun yang tersembunyi karena Allah memiliki Asmaulhusna ....",
    "p": ["Al-'Alim", "Al-Hafiz", "As-Salam", "Al-Malik"],
    "b": 0,
    "bahas": "Al-'Alim artinya Allah Maha Mengetahui segala sesuatu."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#fce7f3' stroke='#db2777' stroke-width='2'/><text x='87' y='32' font-size='11' font-weight='bold' text-anchor='middle' fill='#9d174d'>AL-KHABIR</text><text x='87' y='47' font-size='9' text-anchor='middle' fill='#0f172a'>Allah Maha Teliti</text></svg>",
    "q": "Perhatikan gambar di atas! Sikap meneladani Asmaulhusna 'Al-Khabir' saat mengerjakan soal ulangan di kelas adalah ....",
    "p": [
      "Mengerjakan soal dengan teliti, cermat, dan jujur tanpa menyontek",
      "Mengerjakan soal terburu-buru asal cepat selesai",
      "Menyontek jawaban teman di sebelahnya",
      "Tidak memeriksa kembali hasil pekerjaannya"
    ],
    "b": 0,
    "bahas": "Teliti dan cermat dalam belajar mencerminkan meneladani sifat Allah Al-Khabir."
  },
  {
    "q": "Contoh perilaku meneladani Asmaulhusna 'Al-Hafiz' dalam menjaga barang milik sendiri adalah ....",
    "p": [
      "Merawat buku pelajaran dengan rapi dan menyimpan alat tulis di tempat pensil",
      "Mencoret-coret halaman buku pelajaran",
      "Membiarkan pensil berserakan di lantai kelas",
      "Merobek kertas buku tulis untuk bermain"
    ],
    "b": 0,
    "bahas": "Merawat dan menjaga barang milik sendiri dengan baik adalah wujud meneladani sifat Al-Hafiz."
  },
  {
    "q": "Sebelum membaca Al-Qur'an, umat Islam disunahkan membaca ta'awuz dan basmalah serta dalam keadaan suci dengan cara ....",
    "p": ["Berwudu terlebih dahulu", "Makan dan minum", "Berlari-lari di halaman", "Tidur sebentar"],
    "b": 0,
    "bahas": "Berwudu sebelum menyentuh dan membaca mushaf Al-Qur'an merupakan adab mulia."
  },
  {
    "q": "Ketika ada teman yang membaca ayat-ayat suci Al-Qur'an di kelas, sikap kita yang baik adalah ....",
    "p": [
      "Mendengarkan dengan tenang dan khidmat",
      "Berteriak-teriak mengobrol dengan teman lain",
      "Tertawa keras di dekatnya",
      "Bermain bola di dalam kelas"
    ],
    "b": 0,
    "bahas": "Mendengarkan bacaan Al-Qur'an dengan tenang mendatangkan pahala dan rahmat Allah Swt."
  },
  {
    "q": "Asmaulhusna artinya nama-nama Allah Swt. yang baik dan indah. Jumlah Asmaulhusna seluruhnya ada ....",
    "p": ["25", "50", "99", "100"],
    "b": 2,
    "bahas": "Asmaulhusna berjumlah 99 nama indah milik Allah Swt."
  },
  {
    "q": "Menyadari bahwa Allah Swt. memiliki sifat 'Al-'Alim' (Maha Mengetahui) membuat kita selalu bersikap ....",
    "p": [
      "Jujur dan berhati-hati dalam berkata serta berbuat meskipun tidak ada guru yang melihat",
      "Berani mengambil barang teman saat kelas sepi",
      "Berbohong kepada orang tua di rumah",
      "Malas belajar saat tidak diawasi"
    ],
    "b": 0,
    "bahas": "Keyakinan bahwa Allah Maha Mengetahui membuat kita jujur di mana saja berada."
  },
  {
    "q": "Memohon perlindungan hanya kepada Allah Swt. (Al-Wali) dilakukan dengan cara rajin ....",
    "p": [
      "Berdoa sebelum dan sesudah melakukan kegiatan",
      "Meminta pertolongan kepada pohon besar",
      "Memakai jimat di saku baju",
      "Takut sendirian di kamar"
    ],
    "b": 0,
    "bahas": "Berdoa hanya kepada Allah Swt. adalah wujud keimanan kepada Al-Wali."
  },
  {
    "q": "Perilaku menjaga kelestarian lingkungan sekolah sebagai teladan sifat 'Al-Hafiz' adalah ....",
    "p": [
      "Menyiram tanaman di taman sekolah dan membuang sampah pada tempatnya",
      "Memetik bunga di taman hingga rusak",
      "Membuang bungkus jajan di selokan",
      "Mencoret dinding kelas dengan kapur"
    ],
    "b": 0,
    "bahas": "Menjaga kebersihan dan kelestarian tanaman mencerminkan sifat memelihara (Al-Hafiz)."
  },
  {
    "q": "Pilihlah gambar simbol yang mengingatkan kita untuk selalu rajin membaca AL-QUR'AN!",
    "p": ["Al-Qur'an", "Bola", "Mobil", "Es krim"],
    "pSvg": [
      "<svg width='65' height='45' xmlns='http://w3.org'><rect x='14' y='8' width='36' height='28' rx='3' fill='#22c55e' stroke='#15803d' stroke-width='2'/><line x1='32' y1='8' x2='32' y2='36' stroke='#fef08a' stroke-width='2'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='32' cy='22' r='14' fill='#38bdf8'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><rect x='14' y='16' width='36' height='14' rx='4' fill='#ef4444'/><circle cx='22' cy='32' r='4' fill='#0f172a'/><circle cx='42' cy='32' r='4' fill='#0f172a'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='25,22 39,22 32,40' fill='#d97706'/><circle cx='32' cy='16' r='8' fill='#f43f5e'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama berbentuk kitab/buku terbuka berwarna hijau melambangkan mushaf Al-Qur'an."
  },
  {
    "q": "Anak yang rajin membaca Al-Qur'an dan meneladani Asmaulhusna akan disayang oleh ....",
    "p": ["Allah Swt., orang tua, dan guru", "Setan yang membisikkan kejahatan", "Orang yang malas", "Penjahat"],
    "b": 0,
    "bahas": "Allah Swt., orang tua, dan guru mencintai anak yang rajin mengaji dan berakhlak mulia."
  }
]);

window.tambahPaketUjian("2", "pancasila", "UTS Semester 1", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>ATURAN DI RUMAH</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Disepakati &amp; Dipatuhi Keluarga</text></svg>",
    "q": "Perhatikan kartu informasi pada gambar di atas! Aturan di rumah dibuat oleh orang tua untuk dipatuhi oleh ....",
    "p": [
      "Seluruh anggota keluarga di rumah",
      "Ayah dan ibu saja",
      "Adik yang masih kecil saja",
      "Tamu yang datang berkunjung"
    ],
    "b": 0,
    "bahas": "Aturan di rumah wajib ditaati oleh semua anggota keluarga agar tercipta ketertiban dan kerukunan."
  },
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><rect x='30' y='25' width='90' height='28' rx='4' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><rect x='35' y='16' width='25' height='12' rx='3' fill='#ffffff' stroke='#0284c7' stroke-width='1.5'/><rect x='90' y='16' width='25' height='12' rx='3' fill='#ffffff' stroke='#0284c7' stroke-width='1.5'/></svg>",
    "q": "Perhatikan gambar tempat tidur yang rapi di atas! Setelah bangun tidur di pagi hari, aturan baik yang harus kita lakukan adalah ....",
    "p": [
      "Merapikan bantal dan melipat selimut sendiri",
      "Langsung menonton televisi tanpa mandi",
      "Membiarkan kasur berantakan",
      "Tidur kembali sampai siang hari"
    ],
    "b": 0,
    "bahas": "Merapikan tempat tidur sendiri melatih kemandirian dan kedisiplinan sejak kecil."
  },
  {
    "q": "Sebelum berangkat ke sekolah maupun keluar rumah untuk bermain, kita wajib ....",
    "p": [
      "Berpamitan dan mencium tangan ayah serta ibu",
      "Pergi diam-diam lewat pintu belakang",
      "Berteriak dari luar pagar rumah",
      "Mengambil mainan teman tanpa izin"
    ],
    "b": 0,
    "bahas": "Berpamitan kepada orang tua membuat orang tua tenang dan mendoakan keselamatan kita."
  },
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><circle cx='80' cy='35' r='22' fill='#ffffff' stroke='#0284c7' stroke-width='2'/><circle cx='80' cy='35' r='14' fill='#fef08a' stroke='#ca8a04' stroke-width='1.5'/></svg>",
    "q": "Perhatikan gambar piring makan di atas! Aturan yang baik sebelum makan bersama keluarga adalah ....",
    "p": [
      "Mencuci tangan dengan sabun dan berdoa",
      "Langsung makan sambil berdiri",
      "Berbicara keras saat mulut penuh makanan",
      "Berebut lauk dengan adik"
    ],
    "b": 0,
    "bahas": "Mencuci tangan menjaga kebersihan dan berdoa merupakan wujud syukur kepada Tuhan."
  },
  {
    "q": "Setelah selesai makan di meja makan, piring dan gelas kotor sebaiknya ....",
    "p": [
      "Dibawa ke dapur untuk dicuci",
      "Ditinggalkan di atas meja makan",
      "Diletakkan di bawah kursi",
      "Disembunyikan di dalam kamar"
    ],
    "b": 0,
    "bahas": "Membawa piring kotor ke dapur menjaga meja makan tetap bersih dan rapi."
  },
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><rect x='40' y='15' width='80' height='42' rx='5' fill='#f8fafc' stroke='#334155' stroke-width='2'/><line x1='40' y1='29' x2='120' y2='29' stroke='#334155' stroke-width='2'/><line x1='40' y1='43' x2='120' y2='43' stroke='#334155' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar rak sepatu di atas! Setelah pulang dari sekolah, sepatu sekolah sebaiknya diletakkan di ....",
    "p": [
      "Rak sepatu dengan rapi",
      "Tengah ruang tamu",
      "Atas tempat tidur",
      "Depan pintu masuk sehingga menghalangi jalan"
    ],
    "b": 0,
    "bahas": "Menyimpan sepatu di rak sepatu membuat rumah rapi dan mudah ditemukan saat akan dipakai lagi."
  },
  {
    "q": "Aturan waktu belajar di rumah pada malam hari sebaiknya dilakukan dengan cara ....",
    "p": [
      "Mematikan televisi dan mengerjakan PR dengan sungguh-sungguh",
      "Belajar sambil menonton film kartun",
      "Menunda PR hingga pagi hari di sekolah",
      "Bermain ponsel sampai larut malam"
    ],
    "b": 0,
    "bahas": "Suasana tenang tanpa suara televisi membantu kita fokus belajar."
  },
  {
    "q": "Setelah selesai bermain bersama adik di ruang keluarga, mainan yang berserakan di lantai harus ....",
    "p": [
      "Dirapikan dan dimasukkan kembali ke kotak mainan",
      "Dibiarkan berserakan di lantai",
      "Disuruh ibu membereskan semuanya",
      "Ditendang ke kolong meja"
    ],
    "b": 0,
    "bahas": "Merapikan mainan mencegah orang lain tersandung dan menjaga kerapian rumah."
  },
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><circle cx='75' cy='35' r='22' fill='#ffffff' stroke='#0f172a' stroke-width='2'/><line x1='75' y1='35' x2='75' y2='20' stroke='#dc2626' stroke-width='2.5'/><line x1='75' y1='35' x2='88' y2='35' stroke='#0f172a' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar jam dinding di atas! Tidur malam tidak terlalu larut (sekitar pukul 21.00) merupakan aturan di rumah agar tubuh kita ....",
    "p": [
      "Segar, sehat, dan tidak bangun kesiangan",
      "Lemas dan mengantuk di sekolah",
      "Terlambat datang ke sekolah",
      "Lupa mengerjakan tugas"
    ],
    "b": 0,
    "bahas": "Tidur cukup dan teratur menjaga kesehatan serta membuat kita bangun pagi dengan segar."
  },
  {
    "q": "Apabila kita melanggar aturan di rumah, misalnya pulang bermain terlalu sore tanpa izin, sikap yang benar adalah ....",
    "p": [
      "Mengakui kesalahan dengan jujur dan meminta maaf kepada ayah dan ibu",
      "Berbohong mengatakan ada kerja kelompok",
      "Menyalahkan teman bermain",
      "Marah saat dinasihati orang tua"
    ],
    "b": 0,
    "bahas": "Jujur mengakui kesalahan dan meminta maaf adalah wujud hormat kepada orang tua."
  },
  {
    "q": "Contoh sikap patuh aturan saat berada di ruang kelas adalah ....",
    "p": [
      "Duduk tertib, memperhatikan penjelasan guru, dan mengangkat tangan sebelum bertanya",
      "Berlari-lari di atas kursi kelas",
      "Makan jajanan saat guru menerangkan pelajaran",
      "Mengobrol keras dengan teman sebangku"
    ],
    "b": 0,
    "bahas": "Memperhatikan guru dan menjaga ketertiban kelas adalah aturan utama di sekolah."
  },
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><rect x='55' y='22' width='40' height='36' rx='4' fill='#22c55e' stroke='#15803d' stroke-width='2'/><rect x='50' y='16' width='50' height='6' rx='2' fill='#16a34a'/></svg>",
    "q": "Perhatikan gambar tempat sampah berwarna hijau di atas! Sampah bungkus jajanan setelah istirahat harus dibuang ke ....",
    "p": ["Tempat sampah", "Kolong bangku kelas", "Selokan air", "Halaman sekolah"],
    "b": 0,
    "bahas": "Membuang sampah di tempat sampah menjaga lingkungan tetap bersih dan sehat."
  },
  {
    "q": "Menghemat energi listrik di rumah sesuai aturan keluarga dapat dilakukan dengan cara ....",
    "p": [
      "Mematikan lampu dan kipas angin saat meninggalkan ruangan",
      "Menyalakan televisi sepanjang malam saat tidur",
      "Membuka pintu kulkas terlalu lama",
      "Menyalakan semua lampu kamar di siang hari"
    ],
    "b": 0,
    "bahas": "Mematikan peralatan listrik yang tidak dipakai menghemat biaya dan energi."
  },
  {
    "q": "Saat mengantre mencuci tangan di depan kelas bersama teman-teman, sikap yang mematuhi aturan adalah ....",
    "p": [
      "Berbaris dengan sabar menunggu giliran tanpa mendorong teman",
      "Menyerobot barisan paling depan",
      "Mendorong teman agar cepat selesai",
      "Bermain percikan air ke baju teman"
    ],
    "b": 0,
    "bahas": "Budaya antre melatih kesabaran dan menghargai hak orang lain."
  },
  {
    "q": "Apabila ingin meminjam pensil warna milik kakak di rumah, aturan sopan santun yang harus dilakukan adalah ....",
    "p": [
      "Meminta izin terlebih dahulu dan mengembalikannya setelah selesai dipakai",
      "Langsung mengambil dari tas kakak diam-diam",
      "Mematahkan pensil warna kakak",
      "Menyembunyikannya di dalam kamar"
    ],
    "b": 0,
    "bahas": "Meminta izin sebelum memakai barang orang lain adalah aturan sopan santun yang wajib dijaga."
  },
  {
    "q": "Akibat yang terjadi apabila anggota keluarga di rumah TIDAK mematuhi aturan yang berlaku adalah ....",
    "p": [
      "Rumah menjadi berantakan, tidak nyaman, dan sering terjadi perselisihan",
      "Suasana rumah menjadi sangat damai",
      "Semua pekerjaan rumah cepat selesai",
      "Keluarga hidup semakin rukun"
    ],
    "b": 0,
    "bahas": "Pelanggaran aturan menimbulkan ketidaktertiban dan ketidaknyamanan bersama."
  },
  {
    "q": "Manfaat yang kita rasakan jika selalu patuh pada aturan di rumah dan di sekolah adalah ....",
    "p": [
      "Hidup menjadi disiplin, tertib, aman, dan disayang orang tua serta guru",
      "Sering mendapat teguran dari guru",
      "Dijauhi oleh teman-teman di kelas",
      "Pekerjaan rumah menumpuk berantakan"
    ],
    "b": 0,
    "bahas": "Kepatuhan terhadap aturan membentuk karakter disiplin dan membawa ketenteraman."
  },
  {
    "q": "Pilihlah gambar simbol yang mengingatkan kita untuk MEMBUANG SAMPAH PADA TEMPATNYA!",
    "p": ["Tempat sampah", "Bola sepak", "Pensil", "Sepeda"],
    "pSvg": [
      "<svg width='60' height='45' xmlns='http://w3.org'><rect x='18' y='12' width='24' height='26' rx='3' fill='#22c55e' stroke='#15803d' stroke-width='2'/><rect x='15' y='8' width='30' height='4' fill='#16a34a'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='14' fill='#38bdf8'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><rect x='26' y='8' width='8' height='28' fill='#facc15'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='20' cy='28' r='7' fill='none' stroke='#0f172a' stroke-width='2'/><circle cx='40' cy='28' r='7' fill='none' stroke='#0f172a' stroke-width='2'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama adalah tempat sampah berwarna hijau."
  },
  {
    "q": "Ketika ibu sedang sibuk membersihkan ruang tamu, sikap anak yang patuh dan berbakti adalah ....",
    "p": [
      "Ikut membantu mengelap meja atau merapikan bantal sofa",
      "Mengotori lantai yang baru saja disapu ibu",
      "Berteriak meminta dibuatkan minuman segera",
      "Pergi bermain tanpa pamit"
    ],
    "b": 0,
    "bahas": "Membantu pekerjaan orang tua meringankan beban ibu dan mempererat kasih sayang keluarga."
  },
  {
    "q": "Simbol sila pertama Pancasila pada perisai Garuda Pancasila yang mengingatkan kita untuk rajin beribadah sesuai aturan agama adalah ....",
    "p": ["Bintang emas", "Rantai emas", "Pohon beringin", "Kepala banteng"],
    "b": 0,
    "bahas": "Bintang emas melambangkan sila pertama Pancasila, Ketuhanan Yang Maha Esa."
  }
]);

window.tambahPaketUjian("2", "bing", "UTS Semester 1", [
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><circle cx='75' cy='38' r='18' fill='#ef4444' stroke='#991b1b' stroke-width='2'/><path d='M75,20 Q82,12 88,16' fill='none' stroke='#16a34a' stroke-width='2.5'/></svg>",
    "q": "Look at the red fruit above! What fruit is it?",
    "p": ["Banana", "Apple", "Grape", "Orange"],
    "b": 1,
    "bahas": "Buah bulat berwarna merah pada gambar adalah apel (apple)."
  },
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><path d='M45,48 Q75,58 105,22 Q85,42 45,48 Z' fill='#facc15' stroke='#ca8a04' stroke-width='2'/></svg>",
    "q": "Look at the yellow fruit above! Monkeys like eating this fruit. It is a ....",
    "p": ["banana", "watermelon", "strawberry", "pineapple"],
    "b": 0,
    "bahas": "Pisang berwarna kuning dalam bahasa Inggris adalah 'banana'."
  },
  {
    "q": "What is 'semangka' in English?",
    "p": ["Watermelon", "Mango", "Papaya", "Avocado"],
    "b": 0,
    "bahas": "Semangka dalam bahasa Inggris adalah 'watermelon'."
  },
  {
    "q": "What is 'jeruk' in English?",
    "p": ["Grape", "Orange", "Apple", "Pear"],
    "b": 1,
    "bahas": "Jeruk dalam bahasa Inggris adalah 'orange'."
  },
  {
    "q": "What is 'anggur' in English?",
    "p": ["Grape", "Banana", "Durian", "Melon"],
    "b": 0,
    "bahas": "Anggur dalam bahasa Inggris adalah 'grape'."
  },
  {
    "q": "I ... eating sweet mango.",
    "p": ["like", "likes", "is", "am"],
    "b": 0,
    "bahas": "Subjek 'I' berpasangan dengan kata kerja 'like'."
  },
  {
    "q": "Cici ... eating strawberry. It is sweet and sour.",
    "p": ["like", "likes", "do", "are"],
    "b": 1,
    "bahas": "Subjek tunggal 'Cici' (she) berpasangan dengan 'likes'."
  },
  {
    "q": "Made ... eating papaya.",
    "p": ["like", "likes", "do not", "are"],
    "b": 1,
    "bahas": "Subjek tunggal 'Made' (he) menggunakan 'likes'."
  },
  {
    "q": "Do you like pineapple? Yes, I ....",
    "p": ["do", "does", "is", "am"],
    "b": 0,
    "bahas": "Pertanyaan 'Do you like...?' dijawab singkat dengan 'Yes, I do.'"
  },
  {
    "q": "Do you like durian? No, I ....",
    "p": ["do not", "does not", "is not", "am not"],
    "b": 0,
    "bahas": "Jawaban negatif singkat untuk 'Do you like...?' adalah 'No, I do not.'"
  },
  {
    "svg": "<svg width='165' height='70' xmlns='http://w3.org'><rect x='20' y='12' width='125' height='46' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='82' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>MY FATHER</text><text x='82' y='47' font-size='9' text-anchor='middle' fill='#0f172a'>Likes Watermelon</text></svg>",
    "q": "Look at the card above! What does 'My father' mean in Indonesian?",
    "p": ["Ibuku", "Ayahku", "Kakakku", "Kakekku"],
    "b": 1,
    "bahas": "'My father' artinya ayahku."
  },
  {
    "q": "What is 'ibu' in English?",
    "p": ["Father", "Mother", "Brother", "Sister"],
    "b": 1,
    "bahas": "Ibu dalam bahasa Inggris adalah 'mother'."
  },
  {
    "q": "What is 'kakek' in English?",
    "p": ["Grandfather", "Grandmother", "Uncle", "Aunt"],
    "b": 0,
    "bahas": "Kakek adalah 'grandfather' dan nenek adalah 'grandmother'."
  },
  {
    "q": "My mother ... orange juice every morning.",
    "p": ["like", "likes", "do", "are"],
    "b": 1,
    "bahas": "Subjek tunggal 'My mother' menggunakan 'likes'."
  },
  {
    "q": "My grandfather ... not like sour mango.",
    "p": ["do", "does", "is", "are"],
    "b": 1,
    "bahas": "Kalimat negatif untuk subjek tunggal 'My grandfather' menggunakan 'does not like'."
  },
  {
    "q": "Does your sister like banana? Yes, she ....",
    "p": ["do", "does", "is", "am"],
    "b": 1,
    "bahas": "Pertanyaan 'Does your sister...?' dijawab singkat dengan 'Yes, she does.'"
  },
  {
    "q": "What color is a ripe watermelon inside?",
    "p": ["Red", "Blue", "Black", "Purple"],
    "b": 0,
    "bahas": "Bagian dalam semangka matang berwarna merah (red)."
  },
  {
    "q": "Which picture shows 'an orange'?",
    "p": ["Orange", "Banana", "Star", "Book"],
    "pSvg": [
      "<svg width='60' height='42' xmlns='http://w3.org'><circle cx='30' cy='22' r='14' fill='#f97316' stroke='#c2410c' stroke-width='2'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><path d='M16,30 Q32,38 45,12 Q32,26 16,30 Z' fill='#facc15'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><polygon points='30,5 35,16 48,16 38,23 41,35 30,28 19,35 22,23 12,16 25,16' fill='#22c55e'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><rect x='16' y='8' width='28' height='26' fill='#38bdf8'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama berbentuk bulat berwarna jingga adalah buah jeruk (an orange)."
  },
  {
    "q": "Arrange these words into a good sentence: 'likes - Father - my - apple'",
    "p": [
      "My father likes apple.",
      "Likes my father apple.",
      "Apple likes my father.",
      "Father apple my likes."
    ],
    "b": 0,
    "bahas": "Susunan kalimat yang tepat adalah 'My father likes apple.'"
  },
  {
    "q": "'Aku suka makan pisang.' The English translation is ....",
    "p": [
      "I like eating banana.",
      "I likes eating banana.",
      "I do not like banana.",
      "My mother likes banana."
    ],
    "b": 0,
    "bahas": "Aku suka makan pisang = I like eating banana."
  }
]);

window.tambahPaketUjian("2", "madura", "UTS Semester 1", [
  {
    "q": "Lamon èberri' kakanan bi' Nèni', kita ngocap ....",
    "p": ["Mator sakalangkong", "Nyoon sèwu", "Mènta sapora", "Sèngko' molè"],
    "b": 0,
    "bahas": "Mator sakalangkong artèna terima kasih."
  },
  {
    "q": "Bhâsa alosna oca' 'ngakan' ka'angghuy Eppa' sareng Embu' èngghi panèka ....",
    "p": ["Dhâ'âr", "Sare", "Mèyos", "Rabhu"],
    "b": 0,
    "bahas": "Ngakan bhâsa alosna 'dhâ'âr'."
  },
  {
    "q": "Bhâsa alosna oca' 'tèdung' ka'angghuy orèng towa èngghi panèka ....",
    "p": ["Sare", "Dhâ'âr", "Kondhur", "Adhâbu"],
    "b": 0,
    "bahas": "Tèdung bhâsa alosna 'sare'."
  },
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><path d='M55,22 Q42,35 55,48 Q62,48 62,35 Q62,22 55,22 Z' fill='#fed7aa' stroke='#ea580c' stroke-width='2'/><path d='M95,22 Q108,35 95,48 Q88,48 88,35 Q88,22 95,22 Z' fill='#fed7aa' stroke='#ea580c' stroke-width='2'/></svg>",
    "q": "Abâs ghâmbhâr angghuta bhâdhân è attas! Angghuta bhâdhân ka'angghuy ngèdingaghi sowara èngghi panèka ....",
    "p": ["Kopèng", "Mata", "Èlong", "Tanang"],
    "b": 0,
    "bahas": "Kopèng (telinga) aghuna ka'angghuy ngèdingaghi sowara."
  },
  {
    "q": "Angghuta bhâdhân ka'angghuy nolès è buku èngghi panèka ....",
    "p": ["Tanang", "Soko", "Kopèng", "Èlong"],
    "b": 0,
    "bahas": "Tanang artèna tangan."
  },
  {
    "q": "Oca' 'Eppa'' dâlem bhâsa Indonesia artèna ....",
    "p": ["Ayah", "Ibu", "Kakek", "Nenek"],
    "b": 0,
    "bahas": "Eppa' artèna ayah, dhinèng Embu' artèna ibu."
  },
  {
    "q": "Oca' 'Kaki'' dâlem bhâsa Indonesia artèna ....",
    "p": ["Kakek", "Nenek", "Paman", "Kakak"],
    "b": 0,
    "bahas": "Kaki' artèna kakek, dhinèng Nèni' artèna nenek."
  },
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><ellipse cx='75' cy='38' rx='35' ry='14' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/><polygon points='110,38 128,24 128,52' fill='#0284c7'/><circle cx='55' cy='34' r='3' fill='#0f172a'/></svg>",
    "q": "Abâs ghâmbhâr kèbân sè odi' è aèng è attas! Nyamana dâlem bhâsa Madhurâ èngghi panèka ....",
    "p": ["Jhuko'", "Kocèng", "Ajâm", "Mano'"],
    "b": 0,
    "bahas": "Jhuko' artèna ikan."
  },
  {
    "q": "Kèbân sè monyèna 'embè'-embè'' bân ngakan rebbhâ èngghi panèka ....",
    "p": ["Embik", "Kocèng", "Jhuko'", "Mano'"],
    "b": 0,
    "bahas": "Embik artèna kambing."
  },
  {
    "q": "Buwâ sè bârna mèra è dhâlemma bân bânnya' aèngnga èngghi panèka ....",
    "p": ["Semangka", "Ghâddhâng", "Salak", "Dhurin"],
    "b": 0,
    "bahas": "Semangka bârna mèra è dhâlemma."
  },
  {
    "svg": "<svg width='160' height='65' xmlns='http://w3.org'><rect x='25' y='12' width='110' height='42' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='80' y='39' font-size='16' font-weight='bold' text-anchor='middle' fill='#0f172a'>12</text></svg>",
    "q": "Abâs angka è ghâmbhâr attas! Bilângan '12' dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Sabellâs", "Du bellâs", "Tello bellâs", "Du polo"],
    "b": 1,
    "bahas": "12 dâlem bhâsa Madhurâ èbâca 'du bellâs'."
  },
  {
    "q": "Bilângan '10' dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Pètto'", "Bâllu'", "Sanga'", "Sapolo"],
    "b": 3,
    "bahas": "10 dâlem bhâsa Madhurâ èbâca 'sapolo'."
  },
  {
    "q": "Bârnana langngè' è bâkto sèyang sè cerrah èngghi panèka ....",
    "p": ["Bhiru", "Celleng", "Mèra", "Konèng"],
    "b": 0,
    "bahas": "Bhiru artèna biru."
  },
  {
    "q": "Bârnana obu'na na'-kana' Madhurâ èngghi panèka ....",
    "p": ["Celleng", "Potè", "Konèng", "Bhuru"],
    "b": 0,
    "bahas": "Celleng artèna hitam."
  },
  {
    "q": "Pakakas ka'angghuy nyapo lantai roma sopajâ bhersè èngghi panèka ....",
    "p": ["Sapo", "Potlot", "Buku", "Sendok"],
    "b": 0,
    "bahas": "Sapo artèna sapu."
  },
  {
    "q": "Oca' 'maca' artèna ....",
    "p": ["Membaca", "Menulis", "Tidur", "Lari"],
    "b": 0,
    "bahas": "Maca artèna membaca."
  },
  {
    "q": "Oca' 'ngombhi' artèna ....",
    "p": ["Minum", "Makan", "Jalan", "Duduk"],
    "b": 0,
    "bahas": "Ngombhi artèna minum."
  },
  {
    "q": "Pilih ghâmbhâr BUNDER (lingkaran) è bâbâ panèka!",
    "p": ["Bunder", "Segitello'", "Kotak", "Bintang"],
    "pSvg": [
      "<svg width='60' height='42' xmlns='http://w3.org'><circle cx='30' cy='21' r='14' fill='#ef4444'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><polygon points='30,5 10,37 50,37' fill='#facc15'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><rect x='14' y='5' width='32' height='32' fill='#38bdf8'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><polygon points='30,5 35,16 48,16 38,23 41,35 30,28 19,35 22,23 12,16 25,16' fill='#22c55e'/></svg>"
    ],
    "b": 0,
    "bahas": "Ghâmbhâr kapèng sèttong bunder mèra."
  },
  {
    "q": "Sabellunna tèdung malem, kita kodhu ngosok ....",
    "p": ["Ghighi", "Kopèng", "Soko", "Obu'"],
    "b": 0,
    "bahas": "Ngosok ghighi (menggosok gigi) sabellunna tèdung ajâgâ ghighi pagghun bhersè."
  },
  {
    "q": "Sareng kanca è sakola'an, kita kodhu ....",
    "p": ["Rokon bân salèng nolongè", "Atokar sabbhân arè", "Ngèjhek kanca", "Nangès keras"],
    "b": 0,
    "bahas": "Odi' rokon sareng kanca mabâdâ sakola'an sè nyaman."
  }
]);

window.tambahPaketUjian("2", "kesenian", "UTS Semester 1", [
  {
    "svg": "<svg width='180' height='65' xmlns='http://w3.org'><circle cx='35' cy='32' r='16' fill='#ef4444'/><circle cx='90' cy='32' r='16' fill='#facc15'/><circle cx='145' cy='32' r='16' fill='#38bdf8'/></svg>",
    "q": "Perhatikan tiga lingkaran warna pada gambar di atas! Merah, kuning, dan biru termasuk kelompok warna ....",
    "p": ["Dasar (primer)", "Campuran (sekunder)", "Netral", "Gelap"],
    "b": 0,
    "bahas": "Merah, kuning, dan biru adalah tiga warna dasar (primer)."
  },
  {
    "svg": "<svg width='185' height='65' xmlns='http://w3.org'><circle cx='35' cy='32' r='16' fill='#ef4444'/><text x='62' y='37' font-size='14' font-weight='bold'>+</text><circle cx='90' cy='32' r='16' fill='#facc15'/><text x='117' y='37' font-size='14' font-weight='bold'>=</text><circle cx='148' cy='32' r='18' fill='#f97316' stroke='#0f172a' stroke-width='2'/></svg>",
    "q": "Perhatikan pencampuran warna di atas! Warna merah dicampur warna kuning menghasilkan warna ....",
    "p": ["Hijau", "Oranye (jingga)", "Ungu", "Hitam"],
    "b": 1,
    "bahas": "Campuran merah dan kuning menghasilkan warna oranye."
  },
  {
    "q": "Jika warna biru dicampur dengan warna kuning, maka akan menghasilkan warna ....",
    "p": ["Hijau", "Ungu", "Oranye", "Merah muda"],
    "b": 0,
    "bahas": "Campuran biru dan kuning menghasilkan warna hijau."
  },
  {
    "q": "Jika warna merah dicampur dengan warna biru, maka akan menghasilkan warna ....",
    "p": ["Ungu", "Hijau", "Kuning", "Cokelat"],
    "b": 0,
    "bahas": "Campuran merah dan biru menghasilkan warna ungu."
  },
  {
    "q": "Buah semangka yang sudah matang di bagian dalamnya diwarnai dengan warna ....",
    "p": ["Merah", "Biru", "Hitam", "Ungu"],
    "b": 0,
    "bahas": "Daging buah semangka matang berwarna merah segar."
  },
  {
    "q": "Daun pepohonan dan rumput di lapangan sekolah biasanya diwarnai dengan warna ....",
    "p": ["Hijau", "Merah", "Ungu", "Hitam"],
    "b": 0,
    "bahas": "Daun dan rumput yang segar berwarna hijau."
  },
  {
    "svg": "<svg width='160' height='60' xmlns='http://w3.org'><line x1='20' y1='30' x2='140' y2='30' stroke='#0284c7' stroke-width='4'/></svg>",
    "q": "Perhatikan gambar garis mendatar di atas! Garis tersebut disebut garis ....",
    "p": ["Lurus mendatar", "Zig-zag", "Lingkaran", "Lengkung"],
    "b": 0,
    "bahas": "Garis pada gambar adalah garis lurus mendatar."
  },
  {
    "svg": "<svg width='160' height='60' xmlns='http://w3.org'><path d='M15,38 Q38,14 60,38 T105,38 T145,38' fill='none' stroke='#16a34a' stroke-width='4'/></svg>",
    "q": "Perhatikan bentuk garis bergelombang pada gambar di atas! Garis tersebut disebut garis ....",
    "p": ["Lengkung / gelombang", "Lurus tegak", "Zig-zag", "Kotak"],
    "b": 0,
    "bahas": "Garis tersebut berbentuk lengkung bergelombang."
  },
  {
    "q": "Alat gambar yang menghasilkan warna tebal seperti lilin dan tidak perlu dicampur air adalah ....",
    "p": ["Krayon", "Cat air", "Pensil 2B", "Penghapus"],
    "b": 0,
    "bahas": "Krayon langsung digoreskan pada kertas gambar dan menghasilkan warna tebal."
  },
  {
    "q": "Alat yang digunakan untuk menggoreskan cat air ke atas kertas gambar adalah ....",
    "p": ["Kuas", "Gunting", "Penggaris", "Rautan"],
    "b": 0,
    "bahas": "Kuas digunakan untuk menyapukan cat air pada gambar."
  },
  {
    "q": "Alat yang digunakan untuk meraut ujung pensil gambar yang tumpul agar runcing kembali adalah ....",
    "p": ["Rautan pensil", "Penghapus", "Lem kertas", "Palet"],
    "b": 0,
    "bahas": "Rautan pensil digunakan untuk meruncingkan ujung pensil."
  },
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><rect x='45' y='15' width='60' height='40' fill='#facc15' stroke='#ca8a04' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar bangun datar di atas! Bentuk benda yang menyerupai persegi panjang tersebut adalah ....",
    "p": ["Buku gambar dan papan tulis", "Bola sepak", "Roda sepeda", "Uang koin"],
    "b": 0,
    "bahas": "Buku gambar dan papan tulis berbentuk persegi panjang."
  },
  {
    "q": "Bentuk atap rumah pada gambar pemandangan biasanya digambar menggunakan bangun datar ....",
    "p": ["Segitiga atau trapesium", "Lingkaran", "Bintang", "Oval"],
    "b": 0,
    "bahas": "Atap rumah umumnya berbentuk segitiga atau trapesium."
  },
  {
    "q": "Bahan alam yang dapat kita kumpulkan di halaman rumah untuk membuat hiasan kolase adalah ....",
    "p": [
      "Daun kering, ranting kecil, dan biji-bijian",
      "Pecahan kaca tajam",
      "Besi berkarat",
      "Kawat berduri"
    ],
    "b": 0,
    "bahas": "Daun kering dan biji-bijian aman dan indah untuk kerajinan kolase."
  },
  {
    "q": "Permukaan kapas dan bulu kucing apabila diraba terasa ....",
    "p": ["Lembut dan halus", "Kasar dan tajam", "Keras seperti batu", "Berduri"],
    "b": 0,
    "bahas": "Kapas dan bulu kucing memiliki tekstur lembut."
  },
  {
    "q": "Permukaan kulit buah salak dan batang kayu apabila diraba terasa ....",
    "p": ["Kasar", "Licin seperti kaca", "Basah", "Lembut seperti kapas"],
    "b": 0,
    "bahas": "Kulit salak dan batang kayu memiliki tekstur kasar."
  },
  {
    "q": "Membuat bentuk hewan kelinci atau buah apel dari plastisin dilakukan dengan cara ....",
    "p": [
      "Ditekan, dipilin, dan dibentuk dengan jari tangan",
      "Dipotong menggunakan gergaji",
      "Dibakar di atas kompor",
      "Direndam di dalam ember air"
    ],
    "b": 0,
    "bahas": "Plastisin bersifat lunak sehingga mudah dibentuk dengan jari tangan."
  },
  {
    "q": "Pilihlah gambar bangun SEGITIGA di bawah ini!",
    "p": ["Segitiga", "Lingkaran", "Persegi", "Bintang"],
    "pSvg": [
      "<svg width='60' height='42' xmlns='http://w3.org'><polygon points='30,5 10,37 50,37' fill='#ef4444' stroke='#991b1b' stroke-width='2'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><circle cx='30' cy='21' r='14' fill='#38bdf8'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><rect x='14' y='5' width='32' height='32' fill='#facc15'/></svg>",
      "<svg width='60' height='42' xmlns='http://w3.org'><polygon points='30,5 35,16 48,16 38,23 41,35 30,28 19,35 22,23 12,16 25,16' fill='#22c55e'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama berwarna merah yang memiliki 3 sisi adalah segitiga."
  },
  {
    "q": "Agar hasil mewarnai gambar terlihat indah dan rapi, kita mewarnai ....",
    "p": [
      "Di dalam garis gambar dan tidak keluar garis",
      "Mencoret-coret keluar dari garis tepi",
      "Menekan krayon sampai kertas robek",
      "Mengotori seluruh halaman buku"
    ],
    "b": 0,
    "bahas": "Mewarnai di dalam garis membuat gambar tampak rapi dan bersih."
  },
  {
    "q": "Setelah selesai menggambar dan mewarnai di kelas, alat gambar sebaiknya ....",
    "p": [
      "Dirapikan kembali ke dalam kotak pensil atau tas",
      "Dibiarkan berserakan di lantai",
      "Dipatahkan menjadi dua",
      "Ditinggalkan di meja teman"
    ],
    "b": 0,
    "bahas": "Merapikan alat gambar menjaga kebersihan kelas dan melatih tanggung jawab."
  }
]);

