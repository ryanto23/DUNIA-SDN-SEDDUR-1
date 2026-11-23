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

window.tambahPaketUjian("2", "mtk", "UTS Semester 2", [
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><circle cx='80' cy='35' r='22' fill='#ffffff' stroke='#0284c7' stroke-width='2'/><path d='M80,13 A22,22 0 0,0 80,57 Z' fill='#38bdf8'/><line x1='80' y1='13' x2='80' y2='57' stroke='#0284c7' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar lingkaran di atas! Bagian yang diwarnai biru menunjukkan pecahan ....",
    "p": ["1/2 (setengah)", "1/3 (sepertiga)", "1/4 (seperempat)", "2/3"],
    "b": 0,
    "bahas": "Lingkaran dibagi menjadi 2 bagian sama besar dan 1 bagian diarsir, sehingga nilainya 1/2."
  },
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><rect x='55' y='12' width='50' height='46' fill='#ffffff' stroke='#16a34a' stroke-width='2'/><rect x='55' y='12' width='25' height='23' fill='#22c55e'/><line x1='80' y1='12' x2='80' y2='58' stroke='#16a34a' stroke-width='2'/><line x1='55' y1='35' x2='105' y2='35' stroke='#16a34a' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar persegi yang dibagi menjadi 4 bagian sama besar di atas! Bagian berwarna hijau menunjukkan pecahan ....",
    "p": ["1/2", "1/3", "1/4 (seperempat)", "3/4"],
    "b": 2,
    "bahas": "1 dari 4 bagian sama besar yang diwarnai menunjukkan pecahan 1/4."
  },
  {
    "q": "Pecahan 1/2 dibaca ....",
    "p": ["Satu per dua atau setengah", "Satu per empat", "Dua per satu", "Satu per tiga"],
    "b": 0,
    "bahas": "1/2 dibaca satu per dua atau setengah."
  },
  {
    "q": "Ibu memotong sebuah kue bolu menjadi 4 bagian sama besar. Siti mengambil 1 potong kue. Bagian kue yang diambil Siti adalah ....",
    "p": ["1/2 bagian", "1/3 bagian", "1/4 bagian", "4/1 bagian"],
    "b": 2,
    "bahas": "1 potong dari 4 potongan sama besar bernilai 1/4 bagian."
  },
  {
    "q": "Setengah dari 10 buah apel adalah ....",
    "p": ["2 buah", "4 buah", "5 buah", "6 buah"],
    "b": 2,
    "bahas": "10 dibagi 2 sama dengan 5 buah apel."
  },
  {
    "q": "Seperempat dari 8 buah jeruk adalah ....",
    "p": ["2 buah", "3 buah", "4 buah", "6 buah"],
    "b": 0,
    "bahas": "8 dibagi 4 sama dengan 2 buah jeruk."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='25' y='15' width='125' height='40' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='40' font-size='12' font-weight='bold' text-anchor='middle' fill='#854d0e'>1 meter = ... cm</text></svg>",
    "q": "Perhatikan kartu satuan panjang di atas! Panjang 1 meter sama dengan .... sentimeter (cm).",
    "p": ["10 cm", "50 cm", "100 cm", "1.000 cm"],
    "b": 2,
    "bahas": "1 meter (m) = 100 sentimeter (cm)."
  },
  {
    "q": "Alat ukur panjang baku yang biasa digunakan siswa untuk mengukur panjang buku tulis dan pensil adalah ....",
    "p": ["Penggaris", "Timbangan", "Jam dinding", "Termometer"],
    "b": 0,
    "bahas": "Penggaris mengukur panjang benda dalam satuan sentimeter (cm)."
  },
  {
    "q": "Panjang pita merah 200 cm. Panjang pita merah tersebut sama dengan .... meter.",
    "p": ["2 meter", "20 meter", "200 meter", "1 meter"],
    "b": 0,
    "bahas": "200 cm : 100 = 2 meter."
  },
  {
    "q": "Panjang meja belajar 120 cm, sedangkan panjang kursi 45 cm. Selisih panjang meja belajar dan kursi adalah ....",
    "p": ["65 cm", "75 cm", "85 cm", "165 cm"],
    "b": 1,
    "bahas": "120 cm - 45 cm = 75 cm."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='25' y='15' width='125' height='40' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='40' font-size='12' font-weight='bold' text-anchor='middle' fill='#0369a1'>1 kg = ... gram</text></svg>",
    "q": "Perhatikan kartu satuan berat di atas! Berat 1 kilogram (kg) sama dengan .... gram.",
    "p": ["10 gram", "100 gram", "500 gram", "1.000 gram"],
    "b": 3,
    "bahas": "1 kg = 1.000 gram."
  },
  {
    "q": "Alat yang digunakan pedagang di pasar untuk menimbang berat beras, gula, dan buah-buahan adalah ....",
    "p": ["Timbangan", "Penggaris", "Meteran pita", "Kompas"],
    "b": 0,
    "bahas": "Timbangan digunakan untuk mengukur berat benda."
  },
  {
    "q": "Ibu membeli 2 kg mangga dan 3 kg apel. Berat seluruh buah yang dibeli Ibu adalah ....",
    "p": ["4 kg", "5 kg", "6 kg", "1 kg"],
    "b": 1,
    "bahas": "2 kg + 3 kg = 5 kg."
  },
  {
    "q": "Berat 3.000 gram gula pasir sama dengan .... kg.",
    "p": ["3 kg", "30 kg", "300 kg", "13 kg"],
    "b": 0,
    "bahas": "3.000 gram : 1.000 = 3 kg."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><circle cx='75' cy='38' r='26' fill='#ffffff' stroke='#0f172a' stroke-width='2.5'/><line x1='75' y1='38' x2='75' y2='18' stroke='#0284c7' stroke-width='2.5'/><line x1='75' y1='38' x2='92' y2='38' stroke='#dc2626' stroke-width='3'/><circle cx='75' cy='38' r='3' fill='#0f172a'/></svg>",
    "q": "Perhatikan gambar jam dinding di atas! Jarum pendek menunjuk angka 3 dan jarum panjang menunjuk angka 12. Jam tersebut menunjukkan pukul ....",
    "p": ["03.00", "12.03", "06.00", "09.00"],
    "b": 0,
    "bahas": "Jarum pendek di angka 3 dan jarum panjang di angka 12 dibaca pukul 03.00."
  },
  {
    "q": "Jarum pendek pada jam dinding menunjuk angka 7 dan jarum panjang menunjuk angka 12. Jam tersebut dibaca pukul ....",
    "p": ["07.00", "12.07", "05.00", "08.00"],
    "b": 0,
    "bahas": "Pukul 07.00 ditunjukkan oleh jarum pendek di angka 7 dan jarum panjang di angka 12."
  },
  {
    "q": "Edo mulai belajar pukul 19.00 dan selesai pukul 20.00. Lama Edo belajar adalah ....",
    "p": ["1 jam", "2 jam", "3 jam", "4 jam"],
    "b": 0,
    "bahas": "Dari pukul 19.00 ke pukul 20.00 lamanya adalah 1 jam."
  },
  {
    "q": "Dalam 1 hari terdapat .... jam.",
    "p": ["12 jam", "20 jam", "24 jam", "60 jam"],
    "b": 2,
    "bahas": "1 hari lamanya 24 jam."
  },
  {
    "q": "Pilihlah gambar lingkaran yang diarsir SETENGAH (1/2) bagian!",
    "p": ["Setengah (1/2)", "Seperempat (1/4)", "Penuh", "Kosong"],
    "pSvg": [
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='15' fill='#ffffff' stroke='#0284c7' stroke-width='2'/><path d='M30,7 A15,15 0 0,0 30,37 Z' fill='#38bdf8'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='15' fill='#ffffff' stroke='#0284c7' stroke-width='2'/><path d='M30,22 L30,7 A15,15 0 0,1 45,22 Z' fill='#38bdf8'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='15' fill='#38bdf8'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='15' fill='#ffffff' stroke='#0284c7' stroke-width='2'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama diwarnai separuh (setengah) lingkaran."
  },
  {
    "q": "Hasil dari 1/2 + 1/2 (dua potong setengah apel digabungkan kembali) menjadi .... buah apel utuh.",
    "p": ["1 buah", "2 buah", "3 buah", "4 buah"],
    "b": 0,
    "bahas": "Setengah ditambah setengah menjadi 1 bagian utuh."
  }
]);

window.tambahPaketUjian("2", "bindo", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='65' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='42' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='38' font-size='14' font-weight='bold' text-anchor='middle' fill='#854d0e'>Tanda Koma ( , )</text></svg>",
    "q": "Perhatikan kartu tanda baca di atas! Penulisan tanda koma (,) dalam perincian yang benar terdapat pada kalimat ....",
    "p": [
      "Ibu membeli apel, jeruk, dan mangga di pasar.",
      "Ibu membeli apel jeruk dan mangga, di pasar.",
      "Ibu, membeli apel jeruk dan mangga di pasar.",
      "Ibu membeli, apel, jeruk dan, mangga."
    ],
    "b": 0,
    "bahas": "Tanda koma digunakan untuk memisahkan unsur-unsur dalam perincian lebih dari dua benda."
  },
  {
    "q": "Di antara kata-kata berikut yang merupakan KATA BENDA adalah ....",
    "p": ["Pensil dan buku", "Cantik dan rajin", "Berlari dan tidur", "Besar dan kecil"],
    "b": 0,
    "bahas": "Pensil dan buku adalah nama benda (kata benda)."
  },
  {
    "q": "Di antara kata-kata berikut yang merupakan KATA SIFAT adalah ....",
    "p": ["Rajin dan ramah", "Meja dan kursi", "Makan dan minum", "Sepeda dan bola"],
    "b": 0,
    "bahas": "Rajin dan ramah menjelaskan sifat seseorang (kata sifat)."
  },
  {
    "q": "Antonim (lawan kata) dari kata 'rajin' adalah ....",
    "p": ["Malas", "Pintar", "Sopan", "Cepat"],
    "b": 0,
    "bahas": "Lawan kata dari rajin adalah malas."
  },
  {
    "q": "Antonim (lawan kata) dari kata 'hemat' adalah ....",
    "p": ["Boros", "Rajin", "Murah", "Cermat"],
    "b": 0,
    "bahas": "Lawan kata dari hemat adalah boros."
  },
  {
    "svg": "<svg width='165' height='70' xmlns='http://w3.org'><rect x='20' y='15' width='125' height='40' rx='6' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='82' y='40' font-size='12' font-weight='bold' text-anchor='middle' fill='#15803d'>Rp5.000,00</text></svg>",
    "q": "Perhatikan gambar uang kertas pada ilustrasi di atas! Nilai mata uang rupiah tersebut dibaca ....",
    "p": [
      "Lima ratus rupiah",
      "Lima ribu rupiah",
      "Lima puluh ribu rupiah",
      "Lima rupiah"
    ],
    "b": 1,
    "bahas": "Rp5.000,00 dibaca lima ribu rupiah."
  },
  {
    "q": "Mata uang resmi negara Indonesia adalah ....",
    "p": ["Rupiah", "Ringgit", "Dolar", "Yen"],
    "b": 0,
    "bahas": "Mata uang negara Indonesia adalah Rupiah (Rp)."
  },
  {
    "q": "Cara bijak menggunakan uang saku yang diberikan orang tua setiap hari adalah ....",
    "p": [
      "Menyisihkan sebagian uang saku untuk ditabung di celengan",
      "Menghabiskan seluruh uang saku untuk membeli mainan mahal",
      "Membeli jajanan yang tidak sehat secara berlebihan",
      "Membuang uang receh di jalan"
    ],
    "b": 0,
    "bahas": "Menabung sebagian uang saku melatih sikap hemat dan bijak mengelola uang."
  },
  {
    "q": "Pekerjaan atau profesi orang yang bertugas mengobati orang sakit di rumah sakit atau puskesmas adalah ....",
    "p": ["Dokter", "Nelayan", "Petani", "Sopir"],
    "b": 0,
    "bahas": "Dokter bertugas memeriksa dan mengobati pasien yang sakit."
  },
  {
    "q": "Pekerjaan masyarakat pesisir Pulau Madura yang menangkap ikan di laut menggunakan perahu disebut ....",
    "p": ["Nelayan", "Pedagang", "Guru", "Polisi"],
    "b": 0,
    "bahas": "Nelayan adalah orang yang mata pencahariannya menangkap ikan di laut."
  },
  {
    "svg": "<svg width='165' height='70' xmlns='http://w3.org'><rect x='20' y='12' width='125' height='46' rx='8' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><text x='82' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#92400e'>CERITA FABEL</text><text x='82' y='47' font-size='9' text-anchor='middle' fill='#0f172a'>Semut &amp; Belalang</text></svg>",
    "q": "Perhatikan kartu bacaan pada gambar di atas! Cerita dongeng yang tokoh-tokohnya diperankan oleh hewan yang dapat berbicara seperti manusia disebut ....",
    "p": ["Fabel", "Berita koran", "Buku kamus", "Pantun"],
    "b": 0,
    "bahas": "Fabel adalah cerita fiksi dengan tokoh binatang yang berperilaku seperti manusia."
  },
  {
    "q": "Dalam cerita fabel 'Semut dan Belalang', semut rajin mengumpulkan makanan sebelum musim hujan tiba, sedangkan belalang hanya bermalas-malasan bernyanyi. Sifat yang patut ditiru dari semut adalah ....",
    "p": ["Rajin bekerja dan suka menabung persediaan", "Pemalas", "Sombong", "Suka mengejek"],
    "b": 0,
    "bahas": "Semut rajin bekerja keras dan menyiapkan bekal untuk masa depan."
  },
  {
    "q": "Ketika bermain bersama teman yang berbeda suku dan agama di sekolah, sikap kita yang baik adalah ....",
    "p": [
      "Saling menghormati dan berteman dengan rukun",
      "Mengejek logat bahasa teman",
      "Memilih teman yang kaya saja",
      "Bertengkar saat bermain"
    ],
    "b": 0,
    "bahas": "Keragaman teman di sekolah harus disikapi dengan saling menghargai dan rukun."
  },
  {
    "q": "Sinonim (persamaan kata) dari kata 'bijak' adalah ....",
    "p": ["Pandai dan berhati-hati dalam bertindak", "Ceroboh", "Pemarah", "Malas"],
    "b": 0,
    "bahas": "Bijak berarti pandai menggunakan akal budi dan cermat dalam bertindak."
  },
  {
    "q": "Susunan kata acak 'menabung - Siti - celengan - di - uang' menjadi kalimat yang tepat adalah ....",
    "p": [
      "Siti menabung uang di celengan.",
      "Celengan menabung uang di Siti.",
      "Uang menabung Siti di celengan.",
      "Di celengan uang Siti menabung."
    ],
    "b": 0,
    "bahas": "Susunan kalimat S-P-O-K yang tepat adalah 'Siti menabung uang di celengan.'"
  },
  {
    "q": "Perbedaan antara 'kebutuhan' dan 'keinginan' adalah kebutuhan merupakan barang yang ....",
    "p": [
      "Harus dipenuhi agar dapat hidup dan belajar dengan baik (seperti makanan dan buku sekolah)",
      "Boleh ditunda karena hanya untuk bersenang-senang",
      "Harganya selalu paling mahal di toko",
      "Tidak pernah dipakai sama sekali"
    ],
    "b": 0,
    "bahas": "Kebutuhan adalah hal pokok yang diperlukan seperti makanan sehat, pakaian, dan perlengkapan sekolah."
  },
  {
    "q": "Pilihlah gambar CELENGAN (tempat menabung uang) di bawah ini!",
    "p": ["Celengan", "Bola", "Segitiga", "Pensil"],
    "pSvg": [
      "<svg width='60' height='45' xmlns='http://w3.org'><ellipse cx='30' cy='24' rx='16' ry='12' fill='#f43f5e' stroke='#be123c' stroke-width='2'/><line x1='24' y1='15' x2='36' y2='15' stroke='#0f172a' stroke-width='2.5'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='13' fill='#38bdf8'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><polygon points='30,8 12,37 48,37' fill='#22c55e'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><rect x='14' y='18' width='32' height='8' fill='#facc15'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama berwarna merah muda dengan lubang koin di atasnya adalah celengan."
  },
  {
    "q": "Tanda baca yang dipakai untuk mengakhiri kalimat tanya 'Berapa harga buku tulis ini...' adalah ....",
    "p": ["Tanda tanya (?)", "Tanda titik (.)", "Tanda koma (,)", "Tanda seru (!)"],
    "b": 0,
    "bahas": "Kalimat tanya diakhiri dengan tanda tanya (?)."
  },
  {
    "q": "Jika diberi uang kembalian belanja oleh Ibu di warung, sikap jujur yang harus kita lakukan adalah ....",
    "p": [
      "Mengembalikan seluruh uang kembalian kepada Ibu",
      "Menyembunyikan uang kembalian di saku",
      "Membelikan permen tanpa izin Ibu",
      "Berbohong uangnya hilang"
    ],
    "b": 0,
    "bahas": "Jujur mengembalikan uang kembalian adalah perilaku terpuji."
  },
  {
    "q": "Manfaat membiasakan menabung sejak kelas 2 SD adalah ....",
    "p": [
      "Memiliki simpanan uang untuk keperluan sekolah di masa depan",
      "Menjadi anak yang boros",
      "Sering kehilangan uang jajan",
      "Tidak punya teman bermain"
    ],
    "b": 0,
    "bahas": "Menabung melatih hidup hemat dan menyiapkan dana untuk kebutuhan penting."
  }
]);

window.tambahPaketUjian("2", "pai", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='32' font-size='11' font-weight='bold' text-anchor='middle' fill='#854d0e'>SURAH AL-FALAQ</text><text x='87' y='47' font-size='9' text-anchor='middle' fill='#0f172a'>Terdiri atas 5 Ayat • Waktu Subuh</text></svg>",
    "q": "Perhatikan kartu informasi surah pada gambar di atas! Arti dari nama Surah 'Al-Falaq' adalah ....",
    "p": ["Waktu subuh", "Manusia", "Nikmat yang banyak", "Pertolongan"],
    "b": 0,
    "bahas": "Al-Falaq secara bahasa artinya waktu subuh."
  },
  {
    "q": "Surah Al-Falaq mengajarkan kepada umat Islam agar senantiasa memohon perlindungan dari segala kejahatan makhluk hanya kepada ....",
    "p": ["Allah Swt.", "Benda keramat", "Manusia kaya", "Dukun"],
    "b": 0,
    "bahas": "Qul a'uzu birabbil-falaq (Katakanlah: Aku berlindung kepada Tuhan yang menguasai subuh)."
  },
  {
    "q": "Surah Al-Kautsar merupakan surah paling pendek di dalam Al-Qur'an yang terdiri atas .... ayat.",
    "p": ["3 ayat", "4 ayat", "5 ayat", "6 ayat"],
    "b": 0,
    "bahas": "Surah Al-Kautsar berjumlah 3 ayat dan memiliki arti nikmat yang banyak."
  },
  {
    "q": "Perintah Allah Swt. pada ayat kedua Surah Al-Kautsar yang berbunyi 'Fasalli lirabbika wanhar' adalah perintah untuk melaksanakan ....",
    "p": [
      "Salat dan berkurban karena Allah",
      "Puasa dan zakat fitrah",
      "Haji ke Baitullah",
      "Belajar membaca buku"
    ],
    "b": 0,
    "bahas": "'Fasalli lirabbika wanhar' artinya Maka laksanakanlah salat karena Tuhanmu, dan berkurbanlah."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='11' font-weight='bold' text-anchor='middle' fill='#0369a1'>MALAIKAT ALLAH</text><text x='87' y='47' font-size='9' text-anchor='middle' fill='#0f172a'>Diciptakan dari Nur (Cahaya)</text></svg>",
    "q": "Perhatikan kartu informasi pada gambar di atas! Malaikat adalah makhluk gaib ciptaan Allah Swt. yang diciptakan dari ....",
    "p": ["Nur (cahaya)", "Tanah liat", "Api yang menyala", "Air hujan"],
    "b": 0,
    "bahas": "Malaikat diciptakan dari nur (cahaya) dan selalu taat menjalankan perintah Allah Swt."
  },
  {
    "q": "Iman kepada malaikat-malaikat Allah merupakan rukun iman yang ke-....",
    "p": ["Satu", "Dua", "Tiga", "Empat"],
    "b": 1,
    "bahas": "Rukun iman kedua adalah iman kepada malaikat-malaikat Allah."
  },
  {
    "q": "Jumlah nama malaikat Allah Swt. yang wajib kita ketahui dan imani ada .... malaikat.",
    "p": ["5 malaikat", "10 malaikat", "25 malaikat", "99 malaikat"],
    "b": 1,
    "bahas": "Ada 10 nama malaikat yang wajib kita ketahui beserta tugas-tugasnya."
  },
  {
    "q": "Malaikat yang bertugas menyampaikan wahyu dari Allah Swt. kepada para nabi dan rasul adalah Malaikat ....",
    "p": ["Jibril", "Mikail", "Israfil", "Izrail"],
    "b": 0,
    "bahas": "Malaikat Jibril bertugas menyampaikan wahyu."
  },
  {
    "q": "Malaikat yang bertugas menurunkan air hujan dan membagikan rezeki kepada makhluk hidup adalah Malaikat ....",
    "p": ["Mikail", "Jibril", "Malik", "Ridwan"],
    "b": 0,
    "bahas": "Malaikat Mikail bertugas mengatur hujan dan membagikan rezeki."
  },
  {
    "q": "Malaikat yang bertugas meniup sangkakala pada hari kiamat tiba adalah Malaikat ....",
    "p": ["Israfil", "Izrail", "Munkar", "Nakir"],
    "b": 0,
    "bahas": "Malaikat Israfil bertugas meniup sangkakala."
  },
  {
    "q": "Malaikat yang bertugas mencabut nyawa setiap makhluk hidup apabila ajalnya telah tiba adalah Malaikat ....",
    "p": ["Izrail", "Israfil", "Raqib", "Atid"],
    "b": 0,
    "bahas": "Malaikat Izrail bertugas mencabut nyawa."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#15803d'>MALAIKAT RAQIB &amp; ATID</text><text x='87' y='47' font-size='9' text-anchor='middle' fill='#0f172a'>Pencatat Amal Baik &amp; Buruk</text></svg>",
    "q": "Perhatikan kartu tugas malaikat pada gambar di atas! Malaikat yang bertugas mencatat amal kebaikan manusia adalah Malaikat ....",
    "p": ["Raqib", "Atid", "Malik", "Ridwan"],
    "b": 0,
    "bahas": "Malaikat Raqib mencatat amal baik, sedangkan Malaikat Atid mencatat amal buruk."
  },
  {
    "q": "Malaikat yang bertugas menjaga pintu surga dengan wajah ramah dan penuh senyuman adalah Malaikat ....",
    "p": ["Ridwan", "Malik", "Munkar", "Nakir"],
    "b": 0,
    "bahas": "Malaikat Ridwan menjaga pintu surga, sedangkan Malaikat Malik menjaga pintu neraka."
  },
  {
    "q": "Malaikat yang bertugas menanyai manusia di dalam alam kubur adalah Malaikat ....",
    "p": ["Munkar dan Nakir", "Raqib dan Atid", "Jibril dan Mikail", "Malik dan Ridwan"],
    "b": 0,
    "bahas": "Malaikat Munkar dan Nakir bertugas menanyai manusia di alam kubur."
  },
  {
    "q": "Sifat istimewa yang dimiliki oleh para malaikat Allah Swt. adalah ....",
    "p": [
      "Selalu patuh kepada perintah Allah Swt. dan tidak pernah berbuat dosa",
      "Suka makan dan minum seperti manusia",
      "Sering tidur di siang hari",
      "Kadang-kadang membantah perintah Allah"
    ],
    "b": 0,
    "bahas": "Malaikat tidak makan, tidak minum, tidak tidur, dan selalu taat kepada Allah Swt."
  },
  {
    "q": "Menyadari bahwa setiap perbuatan kita selalu dicatat oleh Malaikat Raqib dan Atid membuat kita selalu berusaha untuk ....",
    "p": [
      "Memperbanyak amal kebaikan dan menjauhi perbuatan tercela",
      "Berani berbohong saat tidak ada guru",
      "Mengambil barang teman diam-diam",
      "Malas mengerjakan salat lima waktu"
    ],
    "b": 0,
    "bahas": "Keyakinan diawasi malaikat mendorong kita selalu berbuat jujur dan baik."
  },
  {
    "q": "Contoh amal kebaikan di sekolah yang dicatat oleh Malaikat Raqib adalah ....",
    "p": [
      "Membantu teman yang kesulitan, berkata jujur, dan menjaga kebersihan kelas",
      "Mengejek teman di halaman sekolah",
      "Menyontek saat ulangan",
      "Membuang sampah di laci meja"
    ],
    "b": 0,
    "bahas": "Segala perbuatan baik dan jujur dicatat sebagai pahala oleh Malaikat Raqib."
  },
  {
    "q": "Pilihlah gambar simbol MASJID (tempat salat dan mengaji umat Islam) di bawah ini!",
    "p": ["Masjid", "Bola", "Kotak", "Bintang"],
    "pSvg": [
      "<svg width='65' height='45' xmlns='http://w3.org'><path d='M18,22 A14,14 0 0,1 46,22 Z' fill='#22c55e'/><rect x='18' y='22' width='28' height='16' fill='#dcfce7' stroke='#16a34a' stroke-width='1.5'/><line x1='32' y1='4' x2='32' y2='9' stroke='#ca8a04' stroke-width='2'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='32' cy='22' r='13' fill='#38bdf8'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><rect x='18' y='10' width='28' height='25' fill='#ef4444'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,6 37,17 49,17 39,24 42,36 32,29 22,36 25,24 15,17 27,17' fill='#facc15'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama berkubah hijau adalah masjid."
  },
  {
    "q": "Ketika turun hujan yang menyuburkan tanaman sebagai rezeki dari Allah Swt. melalui Malaikat Mikail, kita mengucapkan doa dan rasa syukur dengan membaca ....",
    "p": ["Alhamdulillah", "Astaghfirullah", "Innalillahi", "Subhanallah"],
    "b": 0,
    "bahas": "Mensyukuri turunnya hujan diwujudkan dengan mengucapkan Alhamdulillah."
  },
  {
    "q": "Anak yang beriman kepada malaikat Allah Swt. akan selalu bersikap ....",
    "p": ["Disiplin, jujur, dan taat beribadah", "Pemalas dan suka berbohong", "Sombong kepada teman", "Kasar kepada orang tua"],
    "b": 0,
    "bahas": "Iman kepada malaikat membentuk pribadi yang jujur, disiplin, dan taat beribadah."
  }
]);

window.tambahPaketUjian("2", "pancasila", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>KEBERAGAMAN TEMAN</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Berbeda Hobi, Suku &amp; Ciri Fisik</text></svg>",
    "q": "Perhatikan kartu informasi pada gambar di atas! Di sekolah kita memiliki banyak teman dengan ciri fisik dan hobi yang berbeda. Sikap kita yang baik adalah ....",
    "p": [
      "Saling menghargai, menghormati, dan berteman dengan rukun",
      "Mengejek teman yang berbeda dengan kita",
      "Hanya mau berteman dengan anak yang sama hobinya",
      "Menjauhi teman yang berasal dari daerah lain"
    ],
    "b": 0,
    "bahas": "Perbedaan antarteman adalah anugerah Tuhan yang harus disikapi dengan saling menghargai."
  },
  {
    "q": "Setiap anak memiliki hobi (kegemaran) masing-masing. Budi suka bermain sepak bola, sedangkan Siti suka membaca buku. Hobi Budi dan Siti ....",
    "p": ["Berbeda tetapi tetap rukun bermain bersama", "Harus dipaksa sama", "Membuat mereka bertengkar", "Tidak boleh dilakukan"],
    "b": 0,
    "bahas": "Perbedaan kegemaran tidak menghalangi persahabatan di kelas."
  },
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><circle cx='50' cy='35' r='16' fill='#fed7aa' stroke='#ea580c' stroke-width='2'/><line x1='38' y1='22' x2='62' y2='22' stroke='#0f172a' stroke-width='3'/><circle cx='100' cy='35' r='16' fill='#fde68a' stroke='#ca8a04' stroke-width='2'/><path d='M88,22 Q94,16 100,22 Q106,16 112,22' fill='none' stroke='#0f172a' stroke-width='3'/></svg>",
    "q": "Perhatikan gambar dua anak dengan jenis rambut berbeda (lurus dan keriting) di atas! Ciri fisik manusia yang berbeda-beda merupakan ciptaan ....",
    "p": ["Tuhan Yang Maha Esa", "Manusia sendiri", "Tukang cukur", "Teman sekelas"],
    "b": 0,
    "bahas": "Semua ciri fisik manusia adalah ciptaan Tuhan Yang Maha Esa yang patut disyukuri."
  },
  {
    "q": "Ketika ada teman baru pindahan dari luar Pulau Madura yang berbicara dengan logat bahasa daerah yang berbeda, sikap kita adalah ....",
    "p": [
      "Menyambutnya dengan ramah dan mengajaknya berkenalan",
      "Menertawakan cara bicaranya",
      "Melarangnya duduk di dekat kita",
      "Pura-pura tidak mendengar saat dia bertanya"
    ],
    "b": 0,
    "bahas": "Menyambut teman baru dengan ramah mencerminkan nilai kemanusiaan dan persatuan."
  },
  {
    "q": "Di Indonesia terdapat 6 agama resmi yang diakui negara, yaitu Islam, Kristen, Katolik, Hindu, Buddha, dan ....",
    "p": ["Konghucu", "Sunda Wiwitan", "Kejawen", "Animisme"],
    "b": 0,
    "bahas": "Enam agama resmi di Indonesia: Islam, Kristen, Katolik, Hindu, Buddha, dan Konghucu."
  },
  {
    "q": "Tempat ibadah umat beragama Kristen dan Katolik adalah ....",
    "p": ["Gereja", "Masjid", "Pura", "Vihara"],
    "b": 0,
    "bahas": "Masjid (Islam), Gereja (Kristen & Katolik), Pura (Hindu), Vihara (Buddha), Klenteng (Konghucu)."
  },
  {
    "q": "Tempat ibadah umat beragama Hindu adalah ....",
    "p": ["Pura", "Masjid", "Gereja", "Klenteng"],
    "b": 0,
    "bahas": "Umat Hindu melaksanakan ibadah di Pura."
  },
  {
    "q": "Saat teman yang berbeda agama sedang merayakan hari raya keagamaannya, sikap toleransi yang baik adalah ....",
    "p": [
      "Mengucapkan selamat dan menjaga kerukunan bertetangga",
      "Mengganggu jalannya perayaan mereka",
      "Mengejek pakaian ibadah mereka",
      "Membuat kegaduhan di depan tempat ibadahnya"
    ],
    "b": 0,
    "bahas": "Toleransi beragama menjaga kedamaian dan persatuan bangsa."
  },
  {
    "q": "Pengamalan Pancasila sila ke-1 (Ketuhanan Yang Maha Esa) di sekolah ditunjukkan dengan cara ....",
    "p": [
      "Berdoa sebelum dan sesudah pelajaran serta menghormati teman yang berbeda agama",
      "Menyapu halaman kelas bersama",
      "Memilih ketua kelas dengan musyawarah",
      "Menabung uang saku"
    ],
    "b": 0,
    "bahas": "Berdoa dan saling menghormati kebebasan beragama adalah wujud sila pertama."
  },
  {
    "q": "Pengamalan Pancasila sila ke-3 (Persatuan Indonesia) saat bermain di lapangan sekolah adalah ....",
    "p": [
      "Bermain bersama semua teman tanpa membeda-bedakan suku dan asal daerah",
      "Membuat kelompok geng yang memusuhi kelas lain",
      "Berebut mainan ayunan",
      "Mengejek nama orang tua teman"
    ],
    "b": 0,
    "bahas": "Berteman tanpa pilih-pilih memperkuat persatuan di sekolah."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#15803d'>GOTONG ROYONG</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Bekerja Sama Membersihkan Kelas</text></svg>",
    "q": "Perhatikan kartu kegiatan pada gambar di atas! Manfaat bekerja sama membersihkan ruang kelas bersama teman adalah ....",
    "p": [
      "Kelas menjadi bersih, pekerjaan cepat selesai, dan mempererat persahabatan",
      "Kelas menjadi kotor berantakan",
      "Waktu istirahat habis untuk bertengkar",
      "Hanya satu anak yang kelelahan"
    ],
    "b": 0,
    "bahas": "Gotong royong meringankan pekerjaan dan menumbuhkan kekompakan."
  },
  {
    "q": "Ketika terjadi perbedaan pendapat saat memilih permainan yang akan dimainkan bersama teman, cara penyelesaian terbaik adalah ....",
    "p": [
      "Berdiskusi (musyawarah) secara baik-baik agar semua setuju",
      "Memaksakan permainan yang kita sukai sendiri",
      "Marah dan pulang ke rumah",
      "Menangis di tengah lapangan"
    ],
    "b": 0,
    "bahas": "Musyawarah (sila keempat) menyelesaikan perbedaan pendapat secara damai."
  },
  {
    "q": "Contoh makanan tradisional khas Pulau Madura yang terkenal lezat ke seluruh Indonesia adalah ....",
    "p": ["Satè Madhurâ dan Soto Madura", "Pempek Palembang", "Gudeg Yogyakarta", "Papeda Papua"],
    "b": 0,
    "bahas": "Sate Madura dan Soto Madura merupakan kekayaan kuliner Nusantara dari Madura."
  },
  {
    "q": "Meskipun setiap daerah di Indonesia memiliki makanan khas dan pakaian adat yang berbeda-beda, kita harus merasa ....",
    "p": [
      "Bangga dan mencintai kekayaan budaya Indonesia",
      "Malu dengan budaya daerah sendiri",
      "Sombong dan merendahkan daerah lain",
      "Tidak peduli dengan budaya bangsa"
    ],
    "b": 0,
    "bahas": "Keberagaman budaya Nusantara adalah kekayaan bangsa Indonesia yang membanggakan."
  },
  {
    "q": "Apabila melihat teman terjatuh saat berlari di halaman sekolah, sikap kemanusiaan (sila kedua) yang harus kita lakukan adalah ....",
    "p": [
      "Segera menolongnya berdiri dan membawanya ke ruang UKS jika terluka",
      "Menertawakannya bersama teman-teman",
      "Membiarkannya menangis sendirian",
      "Melangkahinya sambil berlari"
    ],
    "b": 0,
    "bahas": "Menolong teman yang kesusahan adalah wujud nyata sila kedua Pancasila."
  },
  {
    "q": "Simbol sila kedua Pancasila (Kemanusiaan yang adil dan beradab) pada perisai Garuda Pancasila adalah ....",
    "p": ["Rantai emas", "Bintang emas", "Pohon beringin", "Kepala banteng"],
    "b": 0,
    "bahas": "Rantai emas melambangkan hubungan sesama manusia yang saling membantu."
  },
  {
    "q": "Pilihlah gambar simbol RANTAI EMAS (Sila Kedua Pancasila) di bawah ini!",
    "p": ["Rantai", "Bintang", "Pohon", "Segitiga"],
    "pSvg": [
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='22' cy='22' r='8' fill='none' stroke='#ca8a04' stroke-width='3'/><circle cx='33' cy='22' r='8' fill='none' stroke='#ca8a04' stroke-width='3'/><circle cx='44' cy='22' r='8' fill='none' stroke='#ca8a04' stroke-width='3'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,6 37,17 49,17 39,24 42,36 32,29 22,36 25,24 15,17 27,17' fill='#facc15'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><circle cx='32' cy='18' r='11' fill='#16a34a'/><rect x='29' y='27' width='6' height='12' fill='#92400e'/></svg>",
      "<svg width='65' height='45' xmlns='http://w3.org'><polygon points='32,8 14,37 50,37' fill='#38bdf8'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama menunjukkan mata rantai emas yang saling berkaitan."
  },
  {
    "q": "Sikap sopan santun yang harus diterapkan saat berbicara dengan teman di kelas adalah ....",
    "p": [
      "Menggunakan kata-kata yang baik, lembut, dan tidak mengejek",
      "Berteriak kasar di telinga teman",
      "Memanggil teman dengan julukan buruk",
      "Memotong pembicaraan teman"
    ],
    "b": 0,
    "bahas": "Berbicara santun menjaga perasaan teman dan menciptakan kerukunan."
  },
  {
    "q": "Ketika ibu guru membagi kelompok belajar secara acak di kelas, sikap kita yang baik adalah ....",
    "p": [
      "Menerima anggota kelompok dengan senang hati dan bekerja sama mengerjakan tugas",
      "Menolak bergabung jika tidak satu kelompok dengan sahabat dekat",
      "Marah dan tidak mau mengerjakan tugas",
      "Menyuruh satu orang mengerjakan semua tugas"
    ],
    "b": 0,
    "bahas": "Bekerja sama dengan siapa saja melatih kebersamaan dan sikap adil."
  },
  {
    "q": "Kerukunan antarteman di sekolah membuat suasana belajar menjadi ....",
    "p": [
      "Nyaman, aman, damai, dan menyenangkan",
      "Ribut dan penuh pertengkaran",
      "Membosankan dan menakutkan",
      "Kotor dan berantakan"
    ],
    "b": 0,
    "bahas": "Hidup rukun menciptakan lingkungan sekolah yang harmonis."
  }
]);

window.tambahPaketUjian("2", "bing", "UTS Semester 2", [
  {
    "svg": "<svg width='165' height='70' xmlns='http://w3.org'><rect x='20' y='12' width='125' height='46' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='82' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>MY FAMILY</text><text x='82' y='47' font-size='9' text-anchor='middle' fill='#0f172a'>Grandfather &amp; Grandmother</text></svg>",
    "q": "Look at the family card above! What does 'Grandmother' mean in Indonesian?",
    "p": ["Kakek", "Nenek", "Bibi", "Paman"],
    "b": 1,
    "bahas": "'Grandmother' artinya nenek, sedangkan 'Grandfather' artinya kakek."
  },
  {
    "q": "Mr. Budi is my father. ... is very handsome and kind.",
    "p": ["She", "He", "It", "We"],
    "b": 1,
    "bahas": "Kata ganti untuk laki-laki tunggal (Mr. Budi / ayah) adalah 'He'."
  },
  {
    "q": "Mrs. Ani is my mother. ... is cooking in the kitchen.",
    "p": ["He", "She", "They", "We"],
    "b": 1,
    "bahas": "Kata ganti untuk perempuan tunggal (Mrs. Ani / ibu) adalah 'She'."
  },
  {
    "q": "This is Made. ... bag is blue.",
    "p": ["His", "Her", "My", "Our"],
    "b": 0,
    "bahas": "Kepemilikan untuk laki-laki tunggal (Made) menggunakan 'His'."
  },
  {
    "q": "That is Cici. ... dress is pink.",
    "p": ["His", "Her", "Its", "Their"],
    "b": 1,
    "bahas": "Kepemilikan untuk perempuan tunggal (Cici) menggunakan 'Her'."
  },
  {
    "svg": "<svg width='160' height='75' xmlns='http://w3.org'><rect x='45' y='12' width='18' height='52' rx='4' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/><rect x='95' y='36' width='18' height='28' rx='4' fill='#facc15' stroke='#ca8a04' stroke-width='2'/></svg>",
    "q": "Look at the picture above! The blue bar on the left is ..., and the yellow bar on the right is short.",
    "p": ["tall", "fat", "old", "small"],
    "b": 0,
    "bahas": "Lawan kata dari 'short' (pendek) adalah 'tall' (tinggi)."
  },
  {
    "q": "What is the opposite (antonim) of 'big'?",
    "p": ["Tall", "Small", "Old", "Long"],
    "b": 1,
    "bahas": "Lawan kata dari 'big' (besar) adalah 'small' (kecil)."
  },
  {
    "q": "My grandfather is 75 years old. He is ....",
    "p": ["young", "old", "short", "thin"],
    "b": 1,
    "bahas": "Kakek berusia 75 tahun artinya sudah tua (old), lawannya muda (young)."
  },
  {
    "q": "My baby sister is 1 year old. She is very ....",
    "p": ["old", "young", "tall", "big"],
    "b": 1,
    "bahas": "Adik bayi berusia 1 tahun masih sangat muda (young)."
  },
  {
    "q": "What does 'beautiful' mean in Indonesian?",
    "p": ["Tampan", "Cantik", "Tinggi", "Gemuk"],
    "b": 1,
    "bahas": "'Beautiful' artinya cantik, sedangkan 'handsome' artinya tampan."
  },
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><ellipse cx='75' cy='38' rx='35' ry='22' fill='#94a3b8' stroke='#475569' stroke-width='2'/><text x='75' y='42' font-size='10' font-weight='bold' text-anchor='middle' fill='#ffffff'>ELEPHANT</text></svg>",
    "q": "Look at the label above! An elephant is a very ... animal.",
    "p": ["small", "big", "thin", "short"],
    "b": 1,
    "bahas": "Gajah (elephant) adalah hewan yang bertubuh sangat besar (big)."
  },
  {
    "q": "An ant (semut) is a ... insect.",
    "p": ["big", "small", "tall", "fat"],
    "b": 1,
    "bahas": "Semut adalah serangga yang bertubuh kecil (small)."
  },
  {
    "q": "A giraffe has a ... neck.",
    "p": ["short", "long", "small", "fat"],
    "b": 1,
    "bahas": "Jerapah (giraffe) memiliki leher yang panjang (long)."
  },
  {
    "q": "Who is your father's brother? He is my ....",
    "p": ["aunt", "uncle", "sister", "grandmother"],
    "b": 1,
    "bahas": "Saudara laki-laki dari ayah atau ibu adalah paman (uncle)."
  },
  {
    "q": "Who is your mother's sister? She is my ....",
    "p": ["uncle", "aunt", "brother", "grandfather"],
    "b": 1,
    "bahas": "Saudara perempuan dari ayah atau ibu adalah bibi (aunt)."
  },
  {
    "q": "Is your brother tall? Yes, he ....",
    "p": ["is", "am", "are", "do"],
    "b": 0,
    "bahas": "Pertanyaan 'Is your brother...?' dijawab singkat dengan 'Yes, he is.'"
  },
  {
    "q": "Is your sister fat? No, she ....",
    "p": ["is not", "am not", "are not", "do not"],
    "b": 0,
    "bahas": "Jawaban negatif singkat untuk 'Is your sister...?' adalah 'No, she is not.'"
  },
  {
    "q": "Which picture shows a BIG ball?",
    "p": ["Big ball", "Small ball", "Square", "Triangle"],
    "pSvg": [
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='17' fill='#ef4444' stroke='#991b1b' stroke-width='2'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='7' fill='#38bdf8'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><rect x='16' y='10' width='28' height='25' fill='#facc15'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><polygon points='30,8 12,37 48,37' fill='#22c55e'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama adalah lingkaran bola berukuran besar (big ball)."
  },
  {
    "q": "Arrange these words into a good sentence: 'is - tall - Father - My'",
    "p": [
      "My father is tall.",
      "Tall is my father.",
      "Father is tall my.",
      "Is tall my father."
    ],
    "b": 0,
    "bahas": "Susunan kalimat yang tepat adalah 'My father is tall.'"
  },
  {
    "q": "'Adik perempuanku cantik.' The English translation is ....",
    "p": [
      "My sister is beautiful.",
      "My brother is handsome.",
      "My mother is tall.",
      "My father is old."
    ],
    "b": 0,
    "bahas": "Adik perempuanku cantik = My sister is beautiful."
  }
]);

window.tambahPaketUjian("2", "madura", "UTS Semester 2", [
  {
    "svg": "<svg width='150' height='70' xmlns='http://w3.org'><rect x='40' y='15' width='70' height='42' rx='4' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/><line x1='75' y1='15' x2='75' y2='57' stroke='#ffffff' stroke-width='2.5'/></svg>",
    "q": "Abâs ghâmbhâr buku è attas! Lamon Hasan buka buku, Hasan lagi ....",
    "p": ["Maca", "Tèdung", "Berka'", "Alangngoy"],
    "b": 0,
    "bahas": "Maca artèna membaca."
  },
  {
    "q": "Oca' 'nolès' dâlem bhâsa Indonesia artèna ....",
    "p": ["Menulis", "Membaca", "Berjalan", "Duduk"],
    "b": 0,
    "bahas": "Nolès artèna menulis."
  },
  {
    "q": "Oca' 'toju'' dâlem bhâsa Indonesia artèna ....",
    "p": ["Duduk", "Berdiri", "Tidur", "Lari"],
    "b": 0,
    "bahas": "Toju' artèna duduk, dhinèng manjheng artèna berdiri."
  },
  {
    "q": "Oca' 'manjheng' dâlem bhâsa Indonesia artèna ....",
    "p": ["Berdiri", "Duduk", "Tidur", "Makan"],
    "b": 0,
    "bahas": "Manjheng artèna berdiri."
  },
  {
    "svg": "<svg width='165' height='70' xmlns='http://w3.org'><circle cx='55' cy='35' r='20' fill='#ef4444' stroke='#991b1b' stroke-width='2'/><circle cx='115' cy='38' r='9' fill='#22c55e' stroke='#15803d' stroke-width='2'/></svg>",
    "q": "Abâs bunderan mèra sè rajâ è kacèr bân bunderan bhuru è kangan! Tabhâligghâ (antonim) dâri oca' 'rajâ' (besar) èngghi panèka ....",
    "p": ["Kènè' (kecil)", "Lanjhâng", "Tèngghi", "Panas"],
    "b": 0,
    "bahas": "Rajâ (besar) tabhâligghâ kènè' (kecil)."
  },
  {
    "q": "Tabhâligghâ (antonim) dâri oca' 'lanjhâng' (panjang) èngghi panèka ....",
    "p": ["Pandhâ' (pendek)", "Rajâ", "Bhersè", "Cellep"],
    "b": 0,
    "bahas": "Lanjhâng (panjang) tabhâligghâ pandhâ' (pendek)."
  },
  {
    "q": "Tabhâligghâ (antonim) dâri oca' 'bhersè' (bersih) èngghi panèka ....",
    "p": ["Kotor", "Raddhin", "Sèhat", "Bhâghus"],
    "b": 0,
    "bahas": "Bhersè tabhâligghâ kotor."
  },
  {
    "svg": "<svg width='165' height='65' xmlns='http://w3.org'><rect x='25' y='12' width='115' height='42' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='82' y='39' font-size='16' font-weight='bold' text-anchor='middle' fill='#0f172a'>17</text></svg>",
    "q": "Abâs angka è ghâmbhâr attas! Bilângan '17' dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Ennem bellâs", "Pètto' bellâs", "Bâllu' bellâs", "Sanga' bellâs"],
    "b": 1,
    "bahas": "17 dâlem bhâsa Madhurâ èbâca 'pètto' bellâs'."
  },
  {
    "q": "Bilângan '19' dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Bâllu' bellâs", "Sanga' bellâs", "Du polo", "Sabellâs"],
    "b": 1,
    "bahas": "19 dâlem bhâsa Madhurâ èbâca 'sanga' bellâs'."
  },
  {
    "q": "Bilângan '20' dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Sapolo", "Du polo", "Tello polo", "Sèlaè'"],
    "b": 1,
    "bahas": "20 dâlem bhâsa Madhurâ èbâca 'du polo'."
  },
  {
    "q": "Kakanan khas Madhurâ sè èghâbây dâri dhâghing ajâm sè èsundukè bân èobbhâr kalabân bumbu kacang èngghi panèka ....",
    "p": ["Satè Madhurâ", "Bakso", "Pecel", "Rawon"],
    "b": 0,
    "bahas": "Satè Madhurâ panèka kakanan khas Madhurâ sè sanget kasohor."
  },
  {
    "q": "Polo Madhurâ kasohor ngasèllaghi bumbu dâpor sè rassana accèn (asin) dâri aèng tasè', èngghi panèka ....",
    "p": ["Buja (garam)", "Ghulâ", "Cabbhi", "Mènynya'"],
    "b": 0,
    "bahas": "Buja (garam) èghâbây dâri aèng tasè' è tambâ' buja Madhurâ."
  },
  {
    "q": "Mainan tradisional sè èkaghâbây dâri kertas bân perrèng tèpès sè èpa'abber è lapangan ngangghuy benang èngghi panèka ....",
    "p": ["Lajângan (layang-layang)", "Bal-balan", "Kelereng", "Boneka"],
    "b": 0,
    "bahas": "Lajângan èpa'abber è bâkto bâdâ angèn."
  },
  {
    "q": "Bhâsa alosna oca' 'mangkat / èntar' ka'angghuy Bapak Guru èngghi panèka ....",
    "p": ["Mèyos", "Sare", "Dhâ'âr", "Kondhur"],
    "b": 0,
    "bahas": "Èntar bhâsa alosna 'mèyos'."
  },
  {
    "q": "Bhâsa alosna oca' 'molè' (pulang) ka'angghuy Ibu Guru èngghi panèka ....",
    "p": ["Kondhur / Palèman", "Mèyos", "Rabhu", "Sare"],
    "b": 0,
    "bahas": "Molè bhâsa alosna 'kondhur' otabâ 'palèman'."
  },
  {
    "q": "Kèbân sè odi' è darat, andi' tandhu', bân abhânto petani macol sabâ èngghi panèka ....",
    "p": ["Sapè / Kerbhu", "Jhuko'", "Mano'", "Kocèng"],
    "b": 0,
    "bahas": "Sapè sareng kerbhu abhânto petani è sabâ."
  },
  {
    "q": "Bârnana bhiru dâun (hijau) dâlem bhâsa Madhurâ èsebbhut ....",
    "p": ["Bhuru", "Bhiru", "Mèra", "Konèng"],
    "b": 0,
    "bahas": "Hijau dâlem bhâsa Madhurâ èngghi panèka 'bhuru', dhinèng biru èngghi panèka 'bhiru'."
  },
  {
    "q": "Pilih ghâmbhâr LAJÂNGAN (layang-layang) è bâbâ panèka!",
    "p": ["Lajângan", "Bola", "Buku", "Kocèng"],
    "pSvg": [
      "<svg width='60' height='45' xmlns='http://w3.org'><polygon points='30,5 46,20 30,38 14,20' fill='#facc15' stroke='#ca8a04' stroke-width='2'/><line x1='30' y1='5' x2='30' y2='38' stroke='#0f172a' stroke-width='1'/><line x1='14' y1='20' x2='46' y2='20' stroke='#0f172a' stroke-width='1'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='13' fill='#ef4444'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><rect x='16' y='10' width='28' height='24' fill='#22c55e'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='24' r='12' fill='#fed7aa'/></svg>"
    ],
    "b": 0,
    "bahas": "Ghâmbhâr kapèng sèttong konèng panèka lajângan."
  },
  {
    "q": "Ronto plastik sè bâdâ è tanèyan sakola'an kodhu èbuwâng ka ....",
    "p": ["Tempat ronto (tempat sampah)", "Kolong bangku", "Selokan", "Attas mèjâ"],
    "b": 0,
    "bahas": "Mbuwâng ronto ka tempat ronto ajâgâ kabersèyan sakola'an."
  },
  {
    "q": "Sabbhân arè sabellunna tèdung malem, kita kodhu ....",
    "p": [
      "Ngosok ghighi, abhersè'è soko, bân adhu'a",
      "Ngakan permen bânnya'",
      "Amaèn è lowar roma",
      "Nontong TV sampe' lagghu"
    ],
    "b": 0,
    "bahas": "Ngosok ghighi bân adhu'a sabellunna tèdung panèka kabiyasa'an sè bhâghus."
  }
]);

window.tambahPaketUjian("2", "kesenian", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><polygon points='25,55 60,20 95,55' fill='#22c55e'/><polygon points='70,55 110,15 150,55' fill='#16a34a'/><circle cx='135' cy='18' r='9' fill='#facc15'/></svg>",
    "q": "Perhatikan gambar pemandangan gunung dan matahari di atas! Warna yang paling tepat untuk mewarnai matahari pagi adalah ....",
    "p": ["Kuning atau oranye cerah", "Hitam pekat", "Ungu tua", "Abu-abu gelap"],
    "b": 0,
    "bahas": "Matahari pagi bersinar cerah sehingga cocok diwarnai kuning atau oranye."
  },
  {
    "q": "Kegiatan menggambar suasana hati seperti wajah tersenyum gembira atau pemandangan alam yang indah disebut menggambar ....",
    "p": ["Ekspresi", "Peta jalan", "Garis tepi", "Huruf angka"],
    "b": 0,
    "bahas": "Gambar ekspresi menuangkan perasaan dan imajinasi ke dalam karya gambar."
  },
  {
    "q": "Untuk membuat garis tepi gambar pemandangan tampak tegas dan jelas setelah diwarnai krayon, kita dapat menebalkannya menggunakan ....",
    "p": ["Spidol hitam atau pensil warna gelap", "Penghapus karet", "Lem kertas", "Penggaris besi"],
    "b": 0,
    "bahas": "Spidol hitam memperjelas garis batas objek gambar."
  },
  {
    "svg": "<svg width='165' height='70' xmlns='http://w3.org'><rect x='25' y='15' width='115' height='40' rx='8' fill='#fce7f3' stroke='#db2777' stroke-width='2'/><text x='82' y='40' font-size='11' font-weight='bold' text-anchor='middle' fill='#9d174d'>TEKNIK CETAK / CAP</text></svg>",
    "q": "Perhatikan kartu informasi pada gambar di atas! Bahan alam yang dapat dipotong dan digunakan sebagai cetakan stempel (cap) gambar bunga adalah ....",
    "p": [
      "Pelepah pisang, wortel, dan kentang",
      "Batu kali yang keras",
      "Kaca jendela",
      "Kawat besi"
    ],
    "b": 0,
    "bahas": "Pelepah pisang, wortel, dan umbi kentang mudah dipotong menjadi pola stempel cap."
  },
  {
    "q": "Jari tangan dan telapak tangan kita juga dapat dicelupkan ke pewarna aman lalu ditempelkan ke kertas gambar untuk membuat lukisan cap yang disebut ....",
    "p": ["Finger painting (lukis jari)", "Seni pahat", "Seni anyam", "Origami"],
    "b": 0,
    "bahas": "Finger painting adalah teknik melukis langsung menggunakan jari dan telapak tangan."
  },
  {
    "q": "Setelah selesai melakukan kegiatan melukis menggunakan pewarna jari (finger painting), hal pertama yang harus segera dilakukan adalah ....",
    "p": [
      "Mencuci tangan dengan air bersih dan sabun",
      "Mengusapkan tangan ke baju seragam teman",
      "Memegang buku pelajaran yang bersih",
      "Menggosok mata dengan jari"
    ],
    "b": 0,
    "bahas": "Mencuci tangan dengan air dan sabun menjaga kebersihan serta kesehatan."
  },
  {
    "q": "Karya seni rupa yang memiliki ukuran panjang, lebar, dan tinggi sehingga dapat dilihat dari depan, samping, maupun belakang disebut karya seni rupa ....",
    "p": ["Tiga dimensi", "Dua dimensi", "Satu garis", "Datar"],
    "b": 0,
    "bahas": "Patung kecil, vas bunga, dan mainan dari kardus termasuk karya tiga dimensi."
  },
  {
    "q": "Bahan lunak buatan yang berwarna-warni dan mudah dibentuk menjadi tiruan buah-buahan atau hewan dengan tangan adalah ....",
    "p": ["Plastisin / lilin mainan", "Kardus tebal", "Batu bata", "Kayu jati"],
    "b": 0,
    "bahas": "Plastisin bersifat lunak dan lentur sehingga mudah dibentuk."
  },
  {
    "q": "Bahan alam lunak di sekitar sungai atau sawah yang dapat dibentuk menjadi celengan atau mangkuk kecil lalu dijemur hingga keras adalah ....",
    "p": ["Tanah liat", "Pasir kering", "Kertas koran", "Daun pisang"],
    "b": 0,
    "bahas": "Tanah liat (lempung) adalah bahan alam lunak untuk membuat gerabah dan patung."
  },
  {
    "q": "Kardus bekas kemasan susu atau sepatu dapat dimanfaatkan menjadi karya seni tiga dimensi berupa ....",
    "p": [
      "Mainan rumah-rumahan, mobil-mobilan, atau tempat pensil",
      "Air minum kemasan",
      "Cat air warna-warni",
      "Benang jahit"
    ],
    "b": 0,
    "bahas": "Kardus bekas mudah digunting dan ditempel menjadi kerajinan tiga dimensi."
  },
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><rect x='50' y='15' width='60' height='40' rx='4' fill='#d97706' stroke='#92400e' stroke-width='2'/><line x1='50' y1='25' x2='110' y2='25' stroke='#fef3c7' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar kotak kardus di atas! Untuk merekatkan bagian-bagian kardus bekas agar menempel kuat saat membuat prakarya rumah-rumahan, kita menggunakan ....",
    "p": ["Lem kertas kuat / selotip", "Air putih", "Penghapus karet", "Pensil warna"],
    "b": 0,
    "bahas": "Lem atau selotip merekatkan potongan kardus dengan rapi."
  },
  {
    "q": "Biji-bijian kering seperti kacang hijau, jagung, dan kedelai dapat ditempelkan pada pola gambar burung untuk membuat karya ....",
    "p": ["Kolase / mozaik biji-bijian", "Lukisan cat minyak", "Origami kertas", "Patung kayu"],
    "b": 0,
    "bahas": "Biji-bijian kering memberi tekstur dan warna alami yang indah pada karya tempel."
  },
  {
    "q": "Campuran warna cat air biru dan kuning dengan jumlah yang sama akan menghasilkan warna baru yaitu ....",
    "p": ["Hijau", "Ungu", "Oranye", "Merah"],
    "b": 0,
    "bahas": "Biru + kuning = hijau."
  },
  {
    "q": "Campuran warna cat air merah dan kuning akan menghasilkan warna baru yaitu ....",
    "p": ["Oranye (jingga)", "Hijau", "Ungu", "Biru"],
    "b": 0,
    "bahas": "Merah + kuning = oranye."
  },
  {
    "q": "Untuk membuat gambar langit pada malam hari bertabur bintang, warna krayon yang paling sesuai adalah ....",
    "p": [
      "Biru tua atau hitam dengan bintang berwarna kuning",
      "Kuning seluruhnya tanpa bintang",
      "Putih polos",
      "Merah muda seluruhnya"
    ],
    "b": 0,
    "bahas": "Langit malam berwarna gelap (biru tua/hitam) kontras dengan cahaya bintang berwarna kuning."
  },
  {
    "q": "Saat menggunting pola gambar dari kertas karton, kita harus memegang gunting dengan ....",
    "p": [
      "Hati-hati dan mengikuti garis pola secara perlahan",
      "Terburu-buru sambil bercanda dengan teman",
      "Menutup mata",
      "Berlari-lari di dalam kelas"
    ],
    "b": 0,
    "bahas": "Ketelitian dan kehati-hatian menjaga keselamatan kerja dan kerapian potongan."
  },
  {
    "q": "Pilihlah gambar RUMAH SEDERHANA dari gabungan bentuk segitiga dan kotak di bawah ini!",
    "p": ["Rumah", "Bola", "Bintang", "Bulan"],
    "pSvg": [
      "<svg width='60' height='45' xmlns='http://w3.org'><polygon points='30,6 12,22 48,22' fill='#ef4444'/><rect x='16' y='22' width='28' height='18' fill='#fef08a' stroke='#ca8a04' stroke-width='1.5'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><circle cx='30' cy='22' r='14' fill='#38bdf8'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><polygon points='30,6 36,18 49,18 39,26 42,38 30,31 18,38 21,26 11,18 24,18' fill='#facc15'/></svg>",
      "<svg width='60' height='45' xmlns='http://w3.org'><path d='M32,8 A14,14 0 1,0 32,36 A10,10 0 1,1 32,8 Z' fill='#a855f7'/></svg>"
    ],
    "b": 0,
    "bahas": "Gambar pertama memiliki atap segitiga merah dan dinding kotak kuning."
  },
  {
    "q": "Karya seni yang sudah selesai dibuat sebaiknya kita rawat dan simpan dengan baik sebagai wujud ....",
    "p": [
      "Menghargai hasil usaha dan kreativitas diri sendiri",
      "Kesombongan kepada teman",
      "Membuang-buang waktu belajar",
      "Mengotori lemari kelas"
    ],
    "b": 0,
    "bahas": "Menyimpan dan merawat karya melatih rasa bangga dan tanggung jawab."
  },
  {
    "q": "Ketika teman menunjukkan hasil prakarya plastisinnya yang lucu di depan kelas, sikap kita yang baik adalah ....",
    "p": [
      "Memberikan tepuk tangan dan memuji karyanya dengan ramah",
      "Mengejek bentuknya jelek",
      "Meremas plastisin milik teman hingga rusak",
      "Tertawa terbahak-bahak mengejek"
    ],
    "b": 0,
    "bahas": "Memberi pujian dan tepuk tangan menumbuhkan rasa percaya diri teman."
  },
  {
    "q": "Manfaat memanfaatkan barang bekas seperti kardus dan botol plastik untuk membuat kerajinan tangan adalah ....",
    "p": [
      "Mengurangi sampah di lingkungan dan melatih kreativitas",
      "Menambah tumpukan sampah di rumah",
      "Membuat halaman sekolah menjadi kotor",
      "Menghabiskan banyak uang jajan"
    ],
    "b": 0,
    "bahas": "Daur ulang barang bekas menjaga kebersihan lingkungan sekaligus menghasilkan karya berguna."
  }
]);

window.daftarMapelBaru("pjok", "PJOK (Olahraga)");
window.tambahPaketUjian("2", "pjok", "UAS Semester 2", [
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><polygon points='35,55 43,35 51,55' fill='#f97316'/><polygon points='75,55 83,35 91,55' fill='#f97316'/><polygon points='115,55 123,35 131,55' fill='#f97316'/><path d='M25 50 Q43 28 63 48 T103 48 T143 48' stroke='#0284c7' fill='none' stroke-width='2.5' stroke-dasharray='4,2'/><text x='90' y='23' font-size='9' font-weight='bold' text-anchor='middle' fill='#92400e'>LARI BERKELOK (ZIG-ZAG)</text></svg>",
    "q": "Perhatikan gambar lintasan di atas! Berlari berkelok-kelok (zig-zag) melewati rintangan kerucut melatih .... tubuh.",
    "p": ["Kelincahan", "Kekuatan gigi", "Suara nyanyian", "Daya ingat"],
    "b": 0,
    "bahas": "Berlari zig-zag melatih kelincahan mengubah arah gerak tubuh dengan cepat."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><rect x='25' y='52' width='130' height='10' rx='4' fill='#22c55e'/><path d='M65 48 C65 32 105 32 105 48' stroke='#15803d' fill='none' stroke-width='3'/><polygon points='102,45 109,49 103,52' fill='#15803d'/><text x='90' y='24' font-size='9' font-weight='bold' text-anchor='middle' fill='#15803d'>GULING DEPAN DI MATRAS</text></svg>",
    "q": "Perhatikan gambar gerakan di atas! Saat melakukan guling depan (roll depan) di atas matras, bagian tubuh yang pertama menyentuh matras setelah kedua telapak tangan adalah ....",
    "p": ["Tengkuk (punggung atas)", "Dahi", "Lutut", "Ujung hidung"],
    "b": 0,
    "bahas": "Dagu ditempelkan ke dada sehingga tengkuk mendarat aman di atas matras."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><line x1='35' y1='25' x2='145' y2='25' stroke='#334155' stroke-width='4'/><line x1='35' y1='25' x2='35' y2='65' stroke='#334155' stroke-width='4'/><line x1='145' y1='25' x2='145' y2='65' stroke='#334155' stroke-width='4'/><circle cx='90' cy='38' r='6' fill='#f59e0b'/><line x1='78' y1='25' x2='84' y2='44' stroke='#0284c7' stroke-width='3'/><line x1='102' y1='25' x2='96' y2='44' stroke='#0284c7' stroke-width='3'/><text x='90' y='62' font-size='8' font-weight='bold' text-anchor='middle' fill='#0369a1'>BERGAJUT DI PALANG</text></svg>",
    "q": "Perhatikan gambar di atas! Latihan bergantung pada palang tunggal dengan kedua tangan melatih kekuatan otot ....",
    "p": ["Lengan dan bahu", "Betis dan tumit", "Leher", "Jari kaki"],
    "b": 0,
    "bahas": "Bergantung menahan berat badan melatih kekuatan otot tangan, lengan, dan bahu."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><rect x='35' y='28' width='50' height='26' rx='8' fill='#facc15' stroke='#ca8a04' stroke-width='2'/><text x='60' y='44' font-size='8' font-weight='bold' text-anchor='middle' fill='#713f12'>PAPAN LUNCUR</text><path d='M95 45 Q115 37 135 45 T160 45' stroke='#0284c7' fill='none' stroke-width='3'/><text x='128' y='32' font-size='8' font-weight='bold' text-anchor='middle' fill='#1e3a8a'>KOLAM RENANG</text></svg>",
    "q": "Perhatikan gambar alat bantu renang di atas! Benda tersebut dipegang dengan kedua tangan saat belajar meluncur dan menggerakkan kaki di kolam renang, namanya adalah ....",
    "p": ["Papan seluncur (kickboard)", "Raket bulu tangkis", "Bola kasti", "Tongkat estafet"],
    "b": 0,
    "bahas": "Papan seluncur membantu menjaga tubuh tetap terapung saat melatih gerakan kaki renang."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><circle cx='55' cy='40' r='16' fill='#fff' stroke='#dc2626' stroke-width='3'/><line x1='44' y1='29' x2='66' y2='51' stroke='#dc2626' stroke-width='3'/><text x='120' y='36' font-size='9' font-weight='bold' text-anchor='middle' fill='#991b1b'>DILARANG LARI</text><text x='120' y='49' font-size='8' text-anchor='middle' fill='#7f1d1d'>Di Tepi Kolam Licin</text></svg>",
    "q": "Perhatikan rambu keselamatan di atas! Mengapa kita dilarang keras berlari-lari di pinggir kolam renang?",
    "p": ["Karena lantai tepi kolam basah dan licin sehingga mudah terpeleset", "Karena air kolam bisa tumpah semua", "Karena sepatu bisa cepat kotor", "Karena dilarang bernapas cepat"],
    "b": 0,
    "bahas": "Lantai keramik di tepi kolam renang licin dan berisiko menyebabkan cedera jika berlari."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#f3e8ff' stroke='#7c3aed' stroke-width='2'/><rect x='35' y='24' width='36' height='34' rx='6' fill='#a855f7'/><text x='53' y='45' font-size='9' font-weight='bold' text-anchor='middle' fill='#fff'>SAMPO</text><text x='122' y='37' font-size='9' font-weight='bold' text-anchor='middle' fill='#5b21b6'>KERAMAS</text><text x='122' y='50' font-size='8' text-anchor='middle' fill='#334155'>Menjaga Kebersihan Rambut</text></svg>",
    "q": "Perhatikan gambar di atas! Bagian tubuh yang dibersihkan menggunakan sampo secara teratur agar tidak gatal dan berketombe adalah ....",
    "p": ["Rambut dan kulit kepala", "Kuku jari", "Gigi geraham", "Telapak kaki"],
    "b": 0,
    "bahas": "Keramas dengan sampo membersihkan keringat dan kotoran pada rambut serta kulit kepala."
  },
  {
    "q": "Variasi gerak berjalan ke depan, berjalan ke belakang, dan berjalan ke samping termasuk kelompok gerak ....",
    "p": ["Lokomotor", "Nonlokomotor", "Manipulatif", "Diam"],
    "b": 0,
    "bahas": "Semua variasi gerak berjalan yang memindahkan posisi tubuh termasuk gerak lokomotor."
  },
  {
    "q": "Gerakan melompat ke depan dengan tolakan dua kaki secara bersama-sama menirukan gerakan hewan ....",
    "p": ["Katak", "Ular", "Ikan", "Burung bangau"],
    "b": 0,
    "bahas": "Lompat katak menolak dan mendarat menggunakan kedua kaki secara bersamaan."
  },
  {
    "q": "Gerakan menekuk lutut, membungkukkan badan, dan memutar pinggang di tempat termasuk gerak ....",
    "p": ["Nonlokomotor", "Lokomotor", "Manipulatif", "Melayang"],
    "b": 0,
    "bahas": "Menekuk dan memutar anggota tubuh tanpa berpindah tempat adalah gerak nonlokomotor."
  },
  {
    "q": "Dalam permainan bola kasti, gerakan melempar bola melambung digunakan untuk mengoper bola ke teman yang jaraknya ....",
    "p": ["Jauh", "Sangat dekat", "Di belakang punggung", "Di bawah tanah"],
    "b": 0,
    "bahas": "Lemparan melambung menghasilkan lintasan tinggi dan jauh."
  },
  {
    "q": "Gerakan menendang bola dan menghentikan bola menggunakan kaki termasuk variasi gerak ....",
    "p": ["Manipulatif", "Lokomotor", "Nonlokomotor", "Istirahat"],
    "b": 0,
    "bahas": "Mengendalikan bola dengan kaki atau tangan disebut gerak manipulatif."
  },
  {
    "q": "Sikap awal saat melakukan gerakan guling depan (roll depan) adalah berdiri atau jongkok menghadap matras dengan kedua telapak tangan bertumpu pada ....",
    "p": ["Matras selebar bahu", "Kepala sendiri", "Lutut teman", "Dinding tembok"],
    "b": 0,
    "bahas": "Kedua telapak tangan diletakkan di atas matras selebar bahu sebagai tumpuan awal."
  },
  {
    "q": "Berdiri dengan satu kaki sambil merentangkan kedua tangan ke samping melatih ....",
    "p": ["Keseimbangan statis", "Kecepatan lari cepat", "Kekuatan pukulan", "Suara merdu"],
    "b": 0,
    "bahas": "Menahan posisi tubuh tetap seimbang di tempat disebut keseimbangan statis."
  },
  {
    "q": "Senam irama dapat dilakukan dengan iringan musik, nyanyian, maupun ....",
    "p": ["Ketukan tepuk tangan atau hitungan teratur", "Suara petir", "Tangisan keras", "Teriakan sembarangan"],
    "b": 0,
    "bahas": "Irama pengiring senam ritmik bisa berupa musik, ketukan, atau hitungan 1 sampai 8."
  },
  {
    "q": "Gerakan melangkahkan kaki ke kiri dan ke kanan sambil mengayunkan lengan mengikuti ketukan lagu merupakan gerak dasar senam ....",
    "p": ["Irama (ritmik)", "Lantai", "Ketangkasan palang", "Bela diri"],
    "b": 0,
    "bahas": "Keserasian langkah kaki dan ayunan lengan mengikuti ketukan adalah ciri senam irama."
  },
  {
    "q": "Sebelum masuk ke dalam kolam renang, kita wajib melakukan pemanasan di tepi kolam agar otot tidak mengalami ....",
    "p": ["Kram (kejang otot)", "Lapar", "Mengantuk", "Haus"],
    "b": 0,
    "bahas": "Pemanasan mencegah kram otot saat tubuh berada di dalam air kolam yang dingin."
  },
  {
    "q": "Latihan pengenalan air di kolam renang dangkal bagi siswa kelas 2 SD misalnya bermain berjalan di dalam air dan ....",
    "p": ["Memasukkan wajah ke air sambil meniup gelembung udara (bubbling)", "Menyelam ke dasar kolam yang paling dalam", "Mendorong teman hingga terjatuh", "Berenang tanpa pengawasan guru"],
    "b": 0,
    "bahas": "Latihan bubbling melatih pernapasan dan keberanian di dalam air."
  },
  {
    "q": "Minuman yang paling sehat dan baik dikonsumsi setelah selesai berolahraga adalah ....",
    "p": ["Air putih bersih yang matang", "Minuman bersoda terlalu dingin", "Air keran mentah", "Minuman berwarna mencolok"],
    "b": 0,
    "bahas": "Air putih menggantikan cairan keringat tubuh secara sehat."
  },
  {
    "q": "Setelah selesai pelajaran olahraga dan baju berkeringat, tindakan menjaga kebersihan diri yang benar adalah ....",
    "p": ["Segera mengganti pakaian dengan seragam bersih dan mencuci baju olahraga yang basah", "Memakai baju berkeringat sampai pulang sekolah sore hari", "Menyimpan baju basah keringat di dalam tas", "Tidak usah mandi sampai besok pagi"],
    "b": 0,
    "bahas": "Mengganti pakaian berkeringat mencegah biang keringat dan penyakit kulit."
  },
  {
    "q": "Bagian tubuh yang harus dibersihkan dengan sabun saat mandi setiap hari dua kali adalah ....",
    "p": ["Seluruh kulit tubuh", "Mata bagian dalam", "Gigi geraham", "Lubang telinga dalam"],
    "b": 0,
    "bahas": "Mandi pakai sabun membersihkan keringat, debu, dan kuman di seluruh permukaan kulit."
  },
  {
    "q": "Kuku jari tangan dan kaki yang panjang dan kotor dapat menjadi sarang .... penyebab sakit perut.",
    "p": ["Kuman dan bakteri", "Vitamin", "Oksigen", "Air bersih"],
    "b": 0,
    "bahas": "Kotoran di bawah kuku dapat ikut tertelan saat makan jika tidak dipotong bersih."
  },
  {
    "q": "Permainan tradisional seperti lompat tali karet dan engklek bermanfaat melatih kekuatan otot ....",
    "p": ["Kaki dan keseimbangan", "Leher", "Jari tangan", "Telinga"],
    "b": 0,
    "bahas": "Lompat tali dan engklek melatih tolakan otot kaki dan keseimbangan tubuh."
  },
  {
    "q": "Saat bermain estafet bola bersama teman seregu, kunci utama agar regu bisa menang adalah ....",
    "p": ["Kompak, bekerja sama, dan saling menyemangati", "Saling menyalahkan jika bola jatuh", "Berebut bola sendiri-sendiri", "Berlaku curang kepada regu lawan"],
    "b": 0,
    "bahas": "Kerja sama dan kekompakan sangat dibutuhkan dalam permainan beregu."
  },
  {
    "q": "Apabila melihat teman terjatuh saat bermain kejar-kejaran di halaman sekolah, sikap kita sebaiknya ....",
    "p": ["Segera menolongnya berdiri dan mengantarnya ke ruang UKS jika terluka", "Menertawakannya bersama teman lain", "Membiarkannya menangis di lapangan", "Mengejeknya karena tidak hati-hati"],
    "b": 0,
    "bahas": "Menolong teman yang kesulitan adalah wujud kepedulian dan sportivitas."
  },
  {
    "q": "Waktu istirahat yang paling baik untuk memulihkan tenaga anak kelas 2 SD setelah beraktivitas seharian adalah ....",
    "p": ["Tidur malam yang cukup selama 8–10 jam", "Bermain gim sampai tengah malam", "Menonton televisi sampai larut malam", "Begadang tanpa tidur"],
    "b": 0,
    "bahas": "Tidur malam yang cukup mengembalikan energi tubuh dan membantu pertumbuhan."
  }
]);

window.daftarMapelBaru("pjok", "PJOK (Olahraga)");
window.tambahPaketUjian("2", "pjok", "UAS Semester 1", [
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><rect x='25' y='48' width='35' height='12' rx='3' fill='#f59e0b'/><rect x='75' y='44' width='35' height='16' rx='3' fill='#f97316'/><rect x='125' y='40' width='35' height='20' rx='3' fill='#ef4444'/><path d='M35 45 Q58 25 82 41 Q108 20 135 37' stroke='#0284c7' fill='none' stroke-width='2.5' stroke-dasharray='4,2'/><text x='90' y='22' font-size='9' font-weight='bold' text-anchor='middle' fill='#0369a1'>MELOMPATI RINTANGAN</text></svg>",
    "q": "Perhatikan gambar rintangan kardus bertingkat di atas! Gerakan melompati rintangan tersebut melatih kekuatan dan daya ledak otot ....",
    "p": ["Tungkai (kaki)", "Leher", "Jari tangan", "Telinga"],
    "b": 0,
    "bahas": "Melompati rintangan bertingkat bertumpu pada kekuatan tolakan otot kaki."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><circle cx='50' cy='28' r='7' fill='#f59e0b'/><line x1='50' y1='35' x2='50' y2='52' stroke='#b45309' stroke-width='3'/><line x1='30' y1='40' x2='70' y2='40' stroke='#b45309' stroke-width='3'/><line x1='50' y1='52' x2='40' y2='63' stroke='#b45309' stroke-width='3'/><line x1='50' y1='52' x2='60' y2='63' stroke='#b45309' stroke-width='3'/><text x='118' y='36' font-size='9' font-weight='bold' text-anchor='middle' fill='#92400e'>MEMUTAR PINGGANG</text><text x='118' y='49' font-size='8' text-anchor='middle' fill='#78350f'>Gerak Nonlokomotor</text></svg>",
    "q": "Perhatikan gambar di atas! Gerakan memutar pinggang ke kiri dan ke kanan dengan kedua tangan di pinggang tanpa berpindah tempat termasuk gerak ....",
    "p": ["Nonlokomotor", "Lokomotor", "Manipulatif", "Meluncur"],
    "b": 0,
    "bahas": "Memutar pinggang di tempat tanpa berpindah posisi adalah contoh gerak nonlokomotor."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><rect x='28' y='36' width='55' height='8' rx='4' fill='#a16207'/><circle cx='105' cy='40' r='9' fill='#ef4444' stroke='#991b1b' stroke-width='1.5'/><text x='138' y='35' font-size='9' font-weight='bold' text-anchor='middle' fill='#15803d'>BOLA</text><text x='138' y='48' font-size='9' font-weight='bold' text-anchor='middle' fill='#15803d'>KASTI</text></svg>",
    "q": "Perhatikan gambar tongkat kayu dan bola kecil di atas! Peralatan tersebut digunakan dalam permainan bola kecil beregu yang bernama ....",
    "p": ["Bola kasti", "Sepak bola", "Bola basket", "Bola voli"],
    "b": 0,
    "bahas": "Bola kasti dimainkan menggunakan bola kecil dan tongkat kayu pemukul."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><circle cx='48' cy='40' r='16' fill='#22c55e'/><text x='48' y='44' font-size='9' font-weight='bold' text-anchor='middle' fill='#fff'>4 SEHAT</text><text x='118' y='35' font-size='9' font-weight='bold' text-anchor='middle' fill='#991b1b'>MAKANAN</text><text x='118' y='48' font-size='9' font-weight='bold' text-anchor='middle' fill='#991b1b'>BERGIZI</text><text x='118' y='60' font-size='7.5' text-anchor='middle' fill='#7f1d1d'>Nasi • Lauk • Sayur • Buah</text></svg>",
    "q": "Perhatikan poster gizi di atas! Agar tubuh anak kelas 2 SD kuat saat berolahraga dan tidak mudah sakit, kita harus makan makanan sehat yang mengandung ....",
    "p": ["Nasi, lauk pauk, sayur-sayuran, dan buah-buahan", "Permen, es krim, dan kerupuk saja", "Minuman bersoda dan jajanan pedas saja", "Cokelat dan gula pasir setiap waktu"],
    "b": 0,
    "bahas": "Makanan bergizi seimbang menyediakan tenaga, zat pembangun, dan vitamin bagi tubuh."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#f3e8ff' stroke='#7c3aed' stroke-width='2'/><rect x='25' y='52' width='130' height='8' rx='3' fill='#7c3aed'/><circle cx='65' cy='44' r='7' fill='#f59e0b'/><line x1='72' y1='46' x2='105' y2='46' stroke='#5b21b6' stroke-width='4'/><text x='90' y='26' font-size='9' font-weight='bold' text-anchor='middle' fill='#5b21b6'>GERAK MERAYAP RENDAH</text></svg>",
    "q": "Perhatikan gambar gerakan di atas! Gerakan berpindah tempat dengan posisi perut menempel atau dekat dengan lantai seperti tentara melewati rintangan kawat disebut ....",
    "p": ["Merayap", "Melompat tinggi", "Berjalan jinjit", "Berlari cepat"],
    "b": 0,
    "bahas": "Merayap dilakukan dengan posisi tubuh rendah mendekati lantai menggunakan tarikan lengan dan dorongan kaki."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='10' y='10' width='160' height='60' rx='10' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><rect x='30' y='28' width='45' height='26' rx='6' fill='#ef4444'/><text x='52' y='44' font-size='8' font-weight='bold' text-anchor='middle' fill='#fff'>SAMPAH</text><polygon points='85,40 110,40 110,36 120,42 110,48 110,44 85,44' fill='#2563eb'/><rect x='125' y='26' width='32' height='30' rx='4' fill='#16a34a'/><text x='141' y='44' font-size='7' font-weight='bold' text-anchor='middle' fill='#fff'>TONG</text></svg>",
    "q": "Perhatikan gambar di atas! Cara menjaga kebersihan lingkungan sekolah agar nyaman digunakan untuk olahraga adalah ....",
    "p": ["Membuang sampah pada tempatnya dan membersihkan lapangan sekolah", "Membuang bungkus jajanan di tengah lapangan", "Menumpuk daun kering di saluran air", "Mencoret-coret dinding kelas"],
    "b": 0,
    "bahas": "Lingkungan sekolah yang bersih membuat kegiatan belajar dan olahraga menjadi sehat serta nyaman."
  },
  {
    "q": "Variasi gerak berjalan jinjit menggunakan ujung telapak kaki bermanfaat untuk melatih kekuatan otot kaki dan ....",
    "p": ["Keseimbangan tubuh", "Kekuatan leher", "Suara nyanyian", "Kecepatan mengetik"],
    "b": 0,
    "bahas": "Berjalan jinjit melatih otot betis, pergelangan kaki, dan keseimbangan."
  },
  {
    "q": "Dalam permainan lomba lari estafet memindahkan bendera kecil secara beregu, setiap anggota regu harus berlari cepat dan menyerahkan bendera kepada ....",
    "p": ["Teman satu regunya berikutnya", "Regu lawan", "Penonton di pinggir lapangan", "Penjaga kantin"],
    "b": 0,
    "bahas": "Lari estafet adalah lari sambung beregu yang membutuhkan kerja sama dan kecepatan."
  },
  {
    "q": "Gerakan menekuk kedua lutut setengah jongkok lalu berdiri tegak kembali secara berulang-ulang di tempat melatih kekuatan otot ....",
    "p": ["Paha dan tungkai", "Lengan atas", "Leher", "Jari tangan"],
    "b": 0,
    "bahas": "Gerakan jongkok-berdiri (squat) memperkuat otot paha dan lutut."
  },
  {
    "q": "Gerakan mengayunkan kedua lengan ke samping kiri dan kanan sambil menekuk lutut mengikuti hitungan termasuk variasi gerak ....",
    "p": ["Nonlokomotor", "Lokomotor", "Manipulatif", "Melompat jauh"],
    "b": 0,
    "bahas": "Gerakan dilakukan di tempat tanpa memindahkan posisi kaki sehingga termasuk nonlokomotor."
  },
  {
    "q": "Dalam permainan sepak bola mini, gerakan menendang bola ke arah gawang lawan disebut ....",
    "p": ["Menembak bola (shooting)", "Menangkap bola", "Memukul bola", "Melompati bola"],
    "b": 0,
    "bahas": "Shooting adalah tendangan yang diarahkan ke gawang untuk mencetak gol."
  },
  {
    "q": "Saat menangkap bola yang datang melambung dari atas, posisi kedua telapak tangan yang benar adalah ....",
    "p": [
      "Diangkat ke atas di depan wajah dengan jari-jari terbuka membentuk mangkuk menghadap arah datangnya bola",
      "Disembunyikan di belakang punggung",
      "Dikepalkan rapat seperti tinju",
      "Diletakkan di atas lutut"
    ],
    "b": 0,
    "bahas": "Membentuk mangkuk dengan jari-jari lentur meredam benturan bola saat ditangkap."
  },
  {
    "q": "Dalam permainan lempar tangkap bola berpasangan, gerakan melempar bola menyusur tanah dilakukan dengan cara mengayunkan tangan dari ....",
    "p": ["Bawah ke depan sejajar permukaan tanah", "Atas kepala tinggi-tinggi", "Belakang punggung memutar", "Samping telinga"],
    "b": 0,
    "bahas": "Lemparan menyusur tanah membuat bola menggelinding rendah di atas tanah."
  },
  {
    "q": "Permainan tradisional egrang batok kelapa atau bakiak beregu melatih keseimbangan tubuh serta .... antar-teman.",
    "p": ["Kekompakan dan kerja sama", "Pertengkaran", "Sikap egois", "Kemalasan"],
    "b": 0,
    "bahas": "Bakiak beregu hanya bisa melaju cepat jika langkah seluruh anggota regu kompak."
  },
  {
    "q": "Gerakan push-up bertumpu pada lutut (push-up modifikasi untuk anak SD) melatih kekuatan otot ....",
    "p": ["Lengan, bahu, dan dada", "Betis", "Leher", "Telinga"],
    "b": 0,
    "bahas": "Push-up melatih otot tubuh bagian atas terutama lengan dan dada."
  },
  {
    "q": "Gerakan duduk berlunjur dengan kedua kaki dibuka lebar membentuk huruf V lalu membungkuk meraih ujung kaki melatih .... otot punggung dan paha.",
    "p": ["Kelenturan", "Kecepatan lari", "Kekuatan gigi", "Keseimbangan satu kaki"],
    "b": 0,
    "bahas": "Peregangan duduk huruf V melenturkan otot punggung bawah dan paha bagian dalam."
  },
  {
    "q": "Sarapan pagi sebelum berangkat ke sekolah dan mengikuti pelajaran PJOK sangat penting karena ....",
    "p": ["Memberikan sumber energi agar tubuh kuat berolahraga dan otak mudah berkonsentrasi belajar", "Membuat perut sakit saat berjalan", "Menyebabkan mengantuk di lapangan", "Mengurangi kekuatan otot"],
    "b": 0,
    "bahas": "Sarapan pagi mengisi cadangan energi tubuh setelah berpuasa selama tidur malam."
  },
  {
    "q": "Jika rumah memiliki ruang tamu atau kamar tidur yang bersih dan rapi, manfaatnya bagi kesehatan penghuni rumah adalah ....",
    "p": ["Udara segar bebas debu, terhindar dari sarang nyamuk/kuman, dan nyaman beristirahat", "Banyak nyamuk bersarang di sudut kamar", "Udara pengap dan berbau", "Mudah terserang batuk dan pilek"],
    "b": 0,
    "bahas": "Rumah yang bersih dan berventilasi baik mencegah penyakit saluran pernapasan dan DBD."
  },
  {
    "q": "Cara menjaga kebersihan tempat tidur setelah bangun pagi setiap hari adalah ....",
    "p": ["Merapikan selimut, menepuk bantal, dan membuka jendela kamar agar sinar matahari masuk", "Membiarkan selimut berantakan di lantai", "Makan camilan remah-remah di atas kasur", "Menutup rapat jendela kamar sepanjang hari"],
    "b": 0,
    "bahas": "Sinar matahari pagi dan sirkulasi udara membunuh kuman serta tungau di kamar tidur."
  },
  {
    "q": "Posisi duduk yang benar saat menulis dan membaca buku di kelas agar tulang punggung tidak bengkok adalah ....",
    "p": ["Duduk tegak dengan punggung bersandar nyaman pada kursi dan jarak mata ke buku sekitar 30 cm", "Membungkuk menempelkan dagu ke meja", "Miring ke kiri atau ke kanan terus-menerus", "Tiduran di atas meja belajar"],
    "b": 0,
    "bahas": "Sikap duduk tegak menjaga pertumbuhan tulang belakang anak tetap lurus dan sehat."
  },
  {
    "q": "Saat berjalan membawa tas sekolah yang berisi buku pelajaran, cara memakai tas ransel yang paling sehat untuk tulang punggung adalah ....",
    "p": ["Memakai kedua tali bahu tas di punggung kiri dan kanan secara seimbang", "Menyampirkan tas berat hanya di satu bahu saja", "Menjinjing tas berat dengan satu tangan terus-menerus", "Menaruh tas di atas kepala"],
    "b": 0,
    "bahas": "Kedua tali ransel membagi beban secara merata pada bahu kiri dan kanan."
  },
  {
    "q": "Sebelum memulai pelajaran PJOK di lapangan, kita wajib melakukan pemanasan selama 5–10 menit agar terhindar dari ....",
    "p": ["Cedera otot dan keseleo", "Rasa haus", "Keringat sehat", "Semangat belajar"],
    "b": 0,
    "bahas": "Pemanasan meningkatkan suhu otot dan kelenturan sendi sebelum berolahraga."
  },
  {
    "q": "Setelah selesai berolahraga, kita melakukan pendinginan yang ditandai dengan gerakan ....",
    "p": ["Mengayun lengan perlahan dan menarik napas dalam-dalam sambil berjalan santai", "Berlari secepat-cepatnya keliling lapangan", "Melompat setinggi-tingginya", "Push-up sekuat tenaga"],
    "b": 0,
    "bahas": "Gerakan ringan dan pengaturan napas membantu tubuh kembali rileks."
  },
  {
    "q": "Sikap sportif yang harus ditunjukkan siswa kelas 2 SD ketika timnya kalah dalam permainan olahraga adalah ....",
    "p": ["Mengucapkan selamat kepada tim pemenang dengan tersenyum dan tetap bersemangat berlatih", "Menangis dan marah-marah menyalahkan teman", "Mengejek tim pemenang", "Tidak mau bersalaman setelah pertandingan"],
    "b": 0,
    "bahas": "Menerima kekalahan dengan lapang dada adalah wujud sportivitas sejati."
  },
  {
    "q": "Kegiatan olahraga bersama teman-teman di sekolah maupun di lingkungan rumah bermanfaat untuk mempererat ....",
    "p": ["Persahabatan dan kerukunan", "Permusuhan", "Pertengkaran", "Sikap sombong"],
    "b": 0,
    "bahas": "Bermain olahraga bersama menumbuhkan rasa kebersamaan, saling menghargai, dan kerukunan."
  }
]);
