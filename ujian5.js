window.DATABASE_BAB = window.DATABASE_BAB || {};
window.DATABASE_SOAL = window.DATABASE_SOAL || {};

Object.assign(window.DATABASE_BAB, {
  "5-pancasila": [
    "Bab 1. Pancasila dalam Kehidupanku",
    "Bab 2. Norma dalam Kehidupanku",
    "Bab 3. Keragaman Budaya Indonesiaku",
    "Bab 4. Aku dan Lingkungan Sekitarku"
  ],
  "5-bindo": [
    "Bab 1. Aku yang Unik",
    "Bab 2. Buku Jendela Dunia",
    "Bab 3. Ekspresi Diri Melalui Hobi",
    "Bab 4. Belajar Berwirausaha",
    "Bab 5. Menjadi Warga Dunia",
    "Bab 6. Cinta Indonesia",
    "Bab 7. Sayangi Bumi",
    "Bab 8. Bergerak Bersama"
  ],
  "5-mtk": [
    "Bab 1. Bilangan Cacah sampai 100.000",
    "Bab 2. KPK dan FPB",
    "Bab 3. Bilangan Pecahan",
    "Bab 4. Keliling Bangun Datar",
    "Bab 5. Luas Daerah Bangun Datar",
    "Bab 6. Sudut",
    "Bab 7. Membandingkan Ciri-Ciri Bangun Datar",
    "Bab 8. Data",
    "Bab 9. Bilangan Cacah sampai 1.000.000"
  ],
  "5-ipas": [
    "Bab 1. Melihat karena Cahaya, Mendengar karena Bunyi",
    "Bab 2. Harmoni dalam Ekosistem",
    "Bab 3. Magnet, Listrik, dan Teknologi untuk Kehidupan",
    "Bab 4. Ayo Berkenalan dengan Bumi Kita",
    "Bab 5. Bagaimana Kita Hidup dan Bertumbuh",
    "Bab 6. Indonesiaku Kaya Raya",
    "Bab 7. Daerahku Kebanggaanku",
    "Bab 8. Bumiku Sayang, Bumiku Malang"
  ],
  "5-bing": [
    "Unit 1. What Delicious Bakso!",
    "Unit 2. I Want an Ice Cream Cone",
    "Unit 3. How Much Is It?",
    "Unit 4. I've Got a Stomachache",
    "Unit 5. What a Nice Skirt!",
    "Unit 6. Parts of Our Body That Work Together",
    "Unit 7. How Tall Are You?",
    "Unit 8. The Giraffe Is Taller Than the Deer"
  ]
});

Object.assign(window.DATABASE_SOAL, {
  "5-pancasila-Bab 1. Pancasila dalam Kehidupanku": [
    { "q": "Nilai yang terkandung dalam sila kedua Pancasila adalah nilai ....", "p": ["Ketuhanan", "Kemanusiaan", "Persatuan", "Keadilan"], "b": 1, "bahas": "Sila kedua berbunyi Kemanusiaan yang Adil dan Beradab." }
  ],
  "5-bindo-Bab 1. Aku yang Unik": [
    { "q": "Kata sifat yang menggambarkan seseorang yang suka menolong adalah ....", "p": ["Pemarah", "Dermawan", "Pemalu", "Kikir"], "b": 1, "bahas": "Dermawan adalah sifat suka memberi dan menolong sesama." }
  ],
  "5-mtk-Bab 2. KPK dan FPB": [
    { "q": "Kelipatan Persekutuan Terkecil (KPK) dari bilangan 4 dan 6 adalah ....", "p": ["8", "12", "18", "24"], "b": 1, "bahas": "Kelipatan 4: 4, 8, 12. Kelipatan 6: 6, 12. KPK-nya adalah 12." }
  ],
  "5-ipas-Bab 2. Harmoni dalam Ekosistem": [
    { "q": "Peristiwa makan dan dimakan antarmakhluk hidup dengan urutan tertentu disebut ....", "p": ["Simbiosis", "Rantai makanan", "Adaptasi", "Populasi"], "b": 1, "bahas": "Rantai makanan adalah urutan makan dan dimakan dalam ekosistem." }
  ],
  "5-bing-Unit 1. What Delicious Bakso!": [
    { "q": "Kata 'Sweet' dalam bahasa Indonesia berarti ....", "p": ["Asin", "Pahit", "Manis", "Pedas"], "b": 2, "bahas": "Sweet artinya manis." }
  ]
});

// Tempelkan kode tambahan dari Generator AI di bawah baris ini
window.tambahPaketUjian("5", "mtk", "UAS Semester 1", [
  {
    "q": "Lambang bilangan dari 'enam puluh empat ribu dua ratus sembilan' adalah ....",
    "p": ["64.290", "64.209", "64.029", "60.429"],
    "b": 1,
    "bahas": "Enam puluh empat ribu (64.000) + dua ratus (200) + sembilan (9) = 64.209."
  },
  {
    "q": "Pada bilangan 87.542, angka yang menempati nilai tempat puluhan ribu adalah ....",
    "p": ["8", "7", "5", "4"],
    "b": 0,
    "bahas": "8 = puluhan ribu, 7 = ribuan, 5 = ratusan, 4 = puluhan, 2 = satuan."
  },
  {
    "q": "Nilai tempat angka 7 pada bilangan 57.318 bernilai ....",
    "p": ["70.000", "7.000", "700", "70"],
    "b": 1,
    "bahas": "Angka 7 berada di posisi ribuan sehingga nilainya adalah 7.000."
  },
  {
    "q": "Hasil dari 34.750 + 28.675 adalah ....",
    "p": ["62.425", "63.325", "63.425", "64.425"],
    "b": 2,
    "bahas": "34.750 + 28.675 = 63.425."
  },
  {
    "q": "Hasil dari 75.000 - 29.450 adalah ....",
    "p": ["45.550", "45.650", "46.550", "55.550"],
    "b": 0,
    "bahas": "75.000 - 29.450 = 45.550."
  },
  {
    "q": "Sebuah toko buku menjual 15 paket alat tulis. Setiap paket berisi 24 buku tulis. Jumlah seluruh buku tulis yang terjual adalah ....",
    "p": ["340 buku", "350 buku", "360 buku", "380 buku"],
    "b": 2,
    "bahas": "15 × 24 = 360 buku tulis."
  },
  {
    "q": "Kelipatan Persekutuan Terkecil (KPK) dari 12 dan 18 adalah ....",
    "p": ["24", "36", "48", "72"],
    "b": 1,
    "bahas": "Kelipatan 12: 12, 24, 36... Kelipatan 18: 18, 36... Jadi KPK = 36."
  },
  {
    "q": "Faktor Persekutuan Terbesar (FPB) dari 24 dan 36 adalah ....",
    "p": ["6", "8", "12", "18"],
    "b": 2,
    "bahas": "Faktor 24 = 1, 2, 3, 4, 6, 8, 12, 24. Faktor 36 = 1, 2, 3, 4, 6, 9, 12, 18, 36. Jadi FPB = 12."
  },
  {
    "q": "Lampu merah menyala setiap 4 detik sekali dan lampu kuning menyala setiap 6 detik sekali. Jika pada pukul 08.00 kedua lampu menyala bersama, maka kedua lampu akan menyala bersama lagi setelah ....",
    "p": ["10 detik", "12 detik", "16 detik", "24 detik"],
    "b": 1,
    "bahas": "KPK dari 4 dan 6 adalah 12 detik."
  },
  {
    "q": "Ibu memiliki 30 kue bolu dan 45 kue donat. Kue tersebut akan dimasukkan ke dalam kotak dengan jumlah sama banyak untuk setiap jenisnya. Banyak kotak terbanyak yang dibutuhkan Ibu adalah ....",
    "p": ["5 kotak", "10 kotak", "15 kotak", "30 kotak"],
    "b": 2,
    "bahas": "FPB dari 30 dan 45 adalah 15 kotak."
  },
  {
    "q": "Bilangan prima yang terletak di antara 10 dan 20 adalah ....",
    "p": [
      "11, 13, 17, 19",
      "11, 13, 15, 17, 19",
      "12, 14, 16, 18",
      "11, 15, 17, 19"
    ],
    "b": 0,
    "bahas": "Bilangan prima hanya memiliki 2 faktor (1 dan dirinya sendiri), yaitu 11, 13, 17, dan 19."
  },
  {
    "q": "Urutan pecahan berikut dari yang terkecil ke terbesar yang benar adalah ....",
    "p": [
      "1/2, 2/3, 3/4",
      "3/4, 2/3, 1/2",
      "2/3, 1/2, 3/4",
      "1/2, 3/4, 2/3"
    ],
    "b": 0,
    "bahas": "Disamakan penyebut 12: 1/2 = 6/12, 2/3 = 8/12, 3/4 = 9/12. Urutannya 1/2, 2/3, 3/4."
  },
  {
    "q": "Hasil penjumlahan pecahan 2/3 + 1/4 adalah ....",
    "p": ["3/7", "3/12", "11/12", "9/12"],
    "b": 2,
    "bahas": "2/3 + 1/4 = 8/12 + 3/12 = 11/12."
  },
  {
    "q": "Hasil pengurangan pecahan 5/6 - 1/2 adalah ....",
    "p": ["4/4", "1/3", "2/3", "4/6"],
    "b": 1,
    "bahas": "5/6 - 1/2 = 5/6 - 3/6 = 2/6 = 1/3."
  },
  {
    "q": "Bibi membeli 2 1/2 kg tepung terigu, lalu digunakan untuk membuat kue sebanyak 1 1/4 kg. Sisa tepung terigu Bibi sekarang adalah ....",
    "p": ["1 1/4 kg", "1 1/2 kg", "3/4 kg", "1 3/4 kg"],
    "b": 0,
    "bahas": "2 1/2 - 1 1/4 = 2 2/4 - 1 1/4 = 1 1/4 kg."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><rect x='40' y='15' width='50' height='50' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='98' y='44' font-size='11' fill='#0f172a'>s = 16 cm</text></svg>",
    "q": "Keliling bangun persegi pada gambar di atas adalah ....",
    "p": ["32 cm", "48 cm", "64 cm", "256 cm"],
    "b": 2,
    "bahas": "Keliling persegi = 4 × sisi = 4 × 16 = 64 cm."
  },
  {
    "q": "Sebuah taman berbentuk persegi panjang memiliki panjang 24 meter dan lebar 15 meter. Keliling taman tersebut adalah ....",
    "p": ["39 meter", "78 meter", "98 meter", "360 meter"],
    "b": 1,
    "bahas": "Keliling persegi panjang = 2 × (p + l) = 2 × (24 + 15) = 2 × 39 = 78 meter."
  },
  {
    "q": "Keliling sebuah persegi adalah 84 cm. Panjang sisi persegi tersebut adalah ....",
    "p": ["18 cm", "21 cm", "24 cm", "42 cm"],
    "b": 1,
    "bahas": "Sisi persegi = Keliling : 4 = 84 : 4 = 21 cm."
  },
  {
    "q": "Sebuah segitiga sama sisi memiliki panjang sisi 18 cm. Keliling segitiga tersebut adalah ....",
    "p": ["36 cm", "54 cm", "72 cm", "162 cm"],
    "b": 1,
    "bahas": "Keliling segitiga sama sisi = 3 × 18 = 54 cm."
  },
  {
    "svg": "<svg width='170' height='80' xmlns='http://w3.org'><polygon points='25,65 145,65 85,15' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><line x1='85' y1='15' x2='85' y2='65' stroke='#dc2626' stroke-width='2' stroke-dasharray='4'/><text x='90' y='45' font-size='10' fill='#dc2626'>t = 10 cm</text><text x='85' y='77' font-size='10' text-anchor='middle' fill='#0f172a'>alas = 14 cm</text></svg>",
    "q": "Luas bangun segitiga pada gambar di atas adalah ....",
    "p": ["48 cm²", "70 cm²", "140 cm²", "280 cm²"],
    "b": 1,
    "bahas": "Luas segitiga = 1/2 × alas × tinggi = 1/2 × 14 × 10 = 70 cm²."
  },
  {
    "q": "Sebuah jajargenjang memiliki panjang alas 16 cm dan tinggi 9 cm. Luas jajargenjang tersebut adalah ....",
    "p": ["50 cm²", "72 cm²", "144 cm²", "164 cm²"],
    "b": 2,
    "bahas": "Luas jajargenjang = alas × tinggi = 16 × 9 = 144 cm²."
  },
  {
    "q": "Sebuah belah ketupat memiliki panjang diagonal masing-masing 12 cm dan 18 cm. Luas belah ketupat tersebut adalah ....",
    "p": ["30 cm²", "60 cm²", "108 cm²", "216 cm²"],
    "b": 2,
    "bahas": "Luas belah ketupat = 1/2 × d1 × d2 = 1/2 × 12 × 18 = 108 cm²."
  },
  {
    "q": "Layang-layang milik Rudi memiliki panjang diagonal 20 cm dan 15 cm. Luas layang-layang Rudi adalah ....",
    "p": ["70 cm²", "150 cm²", "300 cm²", "350 cm²"],
    "b": 1,
    "bahas": "Luas layang-layang = 1/2 × d1 × d2 = 1/2 × 20 × 15 = 150 cm²."
  },
  {
    "q": "Sebuah trapesium memiliki panjang sisi sejajar 10 cm dan 16 cm, serta tinggi 8 cm. Luas trapesium tersebut adalah ....",
    "p": ["96 cm²", "104 cm²", "128 cm²", "208 cm²"],
    "b": 1,
    "bahas": "Luas trapesium = 1/2 × (a + b) × t = 1/2 × (10 + 16) × 8 = 1/2 × 26 × 8 = 104 cm²."
  },
  {
    "q": "Luas sebuah segitiga adalah 96 cm². Jika panjang alasnya 16 cm, maka tinggi segitiga tersebut adalah ....",
    "p": ["6 cm", "12 cm", "18 cm", "24 cm"],
    "b": 1,
    "bahas": "Tinggi = (2 × Luas) : alas = (2 × 96) : 16 = 192 : 16 = 12 cm."
  },
  {
    "q": "Hasil dari 3 1/4 + 2 2/5 adalah ....",
    "p": ["5 3/9", "5 13/20", "5 7/20", "6 3/20"],
    "b": 1,
    "bahas": "3 1/4 + 2 2/5 = 3 5/20 + 2 8/20 = 5 13/20."
  },
  {
    "q": "Keliling sebuah segitiga sembarang dengan panjang sisi 12 cm, 15 cm, dan 19 cm adalah ....",
    "p": ["36 cm", "46 cm", "56 cm", "66 cm"],
    "b": 1,
    "bahas": "Keliling segitiga = jumlah semua sisinya = 12 + 15 + 19 = 46 cm."
  },
  {
    "q": "Pak Ahmad berlari mengelilingi lapangan berbentuk persegi panjang dengan panjang 45 m dan lebar 30 m sebanyak 2 putaran. Jarak total yang ditempuh Pak Ahmad adalah ....",
    "p": ["150 meter", "225 meter", "300 meter", "450 meter"],
    "b": 2,
    "bahas": "Keliling 1 putaran = 2 × (45 + 30) = 150 m. Untuk 2 putaran = 2 × 150 = 300 meter."
  },
  {
    "q": "Faktorisasi prima dari bilangan 48 adalah ....",
    "p": ["2³ × 3", "2⁴ × 3", "2² × 3²", "2 × 3³"],
    "b": 1,
    "bahas": "48 = 16 × 3 = 2 × 2 × 2 × 2 × 3 = 2⁴ × 3."
  },
  {
    "q": "Sebuah lantai kamar mandi berbentuk persegi dengan panjang sisi 3 meter akan dipasang ubin persegi berukuran sisi 30 cm. Banyak ubin yang dibutuhkan adalah ....",
    "p": ["10 ubin", "30 ubin", "100 ubin", "300 ubin"],
    "b": 2,
    "bahas": "Luas lantai = 300 cm × 300 cm = 90.000 cm². Luas 1 ubin = 30 × 30 = 900 cm². Banyak ubin = 90.000 : 900 = 100 ubin."
  }
]);

window.tambahPaketUjian("5", "ipas", "UAS Semester 1", [
  {
    "q": "Cahaya matahari yang masuk melalui celah jendela kamar terlihat lurus seperti garis sinar. Hal ini membuktikan sifat cahaya yaitu ....",
    "p": [
      "Cahaya dapat dibiaskan",
      "Cahaya merambat lurus",
      "Cahaya dapat diuraikan",
      "Cahaya dapat dipantulkan"
    ],
    "b": 1,
    "bahas": "Sinar matahari yang menembus celah sempit atau senter yang dinyalakan di ruang gelap menunjukkan bahwa cahaya merambat lurus."
  },
  {
    "svg": "<svg width='160' height='75' xmlns='http://w3.org'><rect x='30' y='15' width='100' height='45' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><line x1='30' y1='35' x2='130' y2='35' stroke='#38bdf8' stroke-width='2'/><line x1='95' y1='10' x2='80' y2='35' stroke='#92400e' stroke-width='4'/><line x1='80' y1='35' x2='72' y2='58' stroke='#92400e' stroke-width='4'/></svg>",
    "q": "Perhatikan gambar pensil yang dicelupkan ke dalam gelas berisi air bening di atas! Pensil tersebut tampak seolah-olah patah atau bengkok karena adanya peristiwa ....",
    "p": ["Pemantulan cahaya", "Pembiasan cahaya", "Penguraian cahaya", "Penyerapan cahaya"],
    "b": 1,
    "bahas": "Pembiasan cahaya terjadi ketika cahaya merambat melalui dua medium yang berbeda kerapatannya (udara ke air)."
  },
  {
    "q": "Pelangi yang muncul di langit setelah hujan turun merupakan bukti bahwa cahaya putih matahari dapat ....",
    "p": ["Diuraikan (dispersi)", "Menembus benda gelap", "Merambat melingkar", "Diserap oleh awan"],
    "b": 0,
    "bahas": "Titik-titik air hujan bertindak seperti prisma yang menguraikan cahaya putih matahari menjadi tujuh warna pelangi."
  },
  {
    "q": "Bagian mata manusia yang berfungsi mengatur banyak sedikitnya cahaya yang masuk ke dalam bola mata adalah ....",
    "p": ["Retina", "Iris dan pupil", "Kornea", "Saraf optik"],
    "b": 1,
    "bahas": "Pupil adalah celah masuknya cahaya yang besar-kecilnya diatur oleh otot iris."
  },
  {
    "q": "Kelainan mata pada seseorang yang tidak dapat melihat benda-benda yang letaknya jauh dengan jelas (rabun jauh) dapat dibantu dengan kacamata berlensa ....",
    "p": ["Cembung (positif)", "Cekung (negatif)", "Rangkap", "Silinder"],
    "b": 1,
    "bahas": "Rabun jauh (miopi) dibantu menggunakan kacamata berlensa cekung (minus) agar bayangan jatuh tepat di retina."
  },
  {
    "q": "Bunyi dihasilkan oleh benda yang bergetar. Bunyi tidak dapat merambat melalui ruang ....",
    "p": ["Zat padat", "Zat cair", "Zat gas (udara)", "Hampa udara (vakum)"],
    "b": 3,
    "bahas": "Bunyi memerlukan medium perantara (padat, cair, atau gas) untuk merambat sehingga tidak terdengar di ruang hampa."
  },
  {
    "q": "Bunyi pantul yang terdengar hampir bersamaan dengan bunyi asli sehingga membuat suara di dalam gedung kosong terdengar tidak jelas disebut ....",
    "p": ["Gema", "Gaung (kerdam)", "Ultrasonik", "Infrasonik"],
    "b": 1,
    "bahas": "Gaung terjadi ketika jarak dinding pemantul dekat sehingga bunyi pantul mengganggu bunyi asli."
  },
  {
    "q": "Bagian telinga manusia yang berfungsi menangkap gelombang bunyi dari luar dan meneruskannya ke saluran telinga adalah ....",
    "p": ["Daun telinga", "Gendang telinga", "Rumah siput (koklea)", "Tulang sanggurdi"],
    "b": 0,
    "bahas": "Daun telinga berfungsi mengumpulkan dan menangkap gelombang suara dari lingkungan sekitar."
  },
  {
    "svg": "<svg width='190' height='65' xmlns='http://w3.org'><rect x='5' y='18' width='38' height='28' rx='5' fill='#dcfce7' stroke='#16a34a'/><text x='24' y='35' font-size='8' text-anchor='middle'>Padi</text><text x='49' y='35' font-size='10'>→</text><rect x='56' y='18' width='38' height='28' rx='5' fill='#fef08a' stroke='#ca8a04'/><text x='75' y='35' font-size='8' text-anchor='middle'>Tikus</text><text x='100' y='35' font-size='10'>→</text><rect x='107' y='18' width='34' height='28' rx='5' fill='#fed7aa' stroke='#ea580c'/><text x='124' y='35' font-size='8' text-anchor='middle'>Ular</text><text x='146' y='35' font-size='10'>→</text><rect x='153' y='18' width='34' height='28' rx='5' fill='#fecaca' stroke='#dc2626'/><text x='170' y='35' font-size='8' text-anchor='middle'>Elang</text></svg>",
    "q": "Perhatikan bagan rantai makanan di ekosistem sawah pada gambar di atas! Makhluk hidup yang berperan sebagai konsumen tingkat II adalah ....",
    "p": ["Padi", "Tikus", "Ular", "Elang"],
    "b": 2,
    "bahas": "Padi = produsen, Tikus = konsumen I, Ular = konsumen II, Elang = konsumen III (puncak)."
  },
  {
    "q": "Berdasarkan rantai makanan padi → tikus → ular → elang, apabila populasi ular berkurang drastis akibat perburuan liar, maka dampak yang akan terjadi adalah ....",
    "p": [
      "Populasi tikus meningkat pesat dan hasil panen padi menurun",
      "Populasi tikus ikut punah seluruhnya",
      "Populasi elang bertambah sangat banyak",
      "Tanaman padi tumbuh semakin subur"
    ],
    "b": 0,
    "bahas": "Jika pemangsa tikus (ular) berkurang, jumlah tikus melonjak dan merusak tanaman padi."
  },
  {
    "q": "Bakteri dan jamur yang menguraikan sisa-sisa makhluk hidup yang telah mati menjadi zat hara penyubur tanah berperan sebagai ....",
    "p": ["Produsen", "Konsumen puncak", "Dekomposer (pengurai)", "Herbivora"],
    "b": 2,
    "bahas": "Jamur dan bakteri adalah dekomposer yang menguraikan bangkai dan daun gugur menjadi mineral tanah."
  },
  {
    "q": "Hubungan timbal balik antara dua makhluk hidup berbeda jenis yang saling menguntungkan, seperti kupu-kupu dan bunga, disebut simbiosis ....",
    "p": ["Parasitisme", "Komensalisme", "Mutualisme", "Amensalisme"],
    "b": 2,
    "bahas": "Simbiosis mutualisme menguntungkan kedua pihak: kupu-kupu mendapat nektar, bunga terbantu penyerbukannya."
  },
  {
    "q": "Contoh hubungan makhluk hidup yang merupakan simbiosis parasitisme adalah ....",
    "p": [
      "Ikan hiu dan ikan remora",
      "Tali putri yang menempel dan menyerap sari makanan dari tanaman pagar",
      "Burung jalak dan kerbau",
      "Anggrek yang menempel pada pohon mangga"
    ],
    "b": 1,
    "bahas": "Tali putri merugikan tumbuhan inangnya karena menyerap sari makanan langsung dari batang inang."
  },
  {
    "q": "Bagian magnet yang memiliki gaya tarik paling kuat terletak pada ....",
    "p": ["Bagian tengah magnet", "Kedua ujung (kutub) magnet", "Seluruh permukaan secara merata", "Sisi samping magnet"],
    "b": 1,
    "bahas": "Gaya magnet terkuat berada di kedua kutubnya, yaitu kutub Utara dan kutub Selatan."
  },
  {
    "q": "Cara membuat magnet sementara dengan cara melilitkan kawat berarus listrik pada paku besi disebut cara ....",
    "p": ["Menggosok", "Induksi", "Elektromagnetik", "Pemanasan"],
    "b": 2,
    "bahas": "Elektromagnet dibuat dengan mengalirkan arus listrik melalui kumparan kawat yang dililitkan pada inti besi."
  },
  {
    "q": "Rangkaian listrik di rumah-rumah yang disusun bercabang sehingga apabila satu lampu dimatikan maka lampu lainnya tetap menyala disebut rangkaian ....",
    "p": ["Seri", "Paralel", "Terbuka", "Campuran tertutup"],
    "b": 1,
    "bahas": "Rangkaian paralel memiliki jalur cabang sehingga setiap lampu mendapat tegangan penuh dan tidak saling memadamkan."
  },
  {
    "q": "Sumber energi alternatif yang ramah lingkungan dan dimanfaatkan oleh Pembangkit Listrik Tenaga Bayu (PLTB) adalah ....",
    "p": ["Aliran air sungai", "Angin", "Panas bumi", "Batu bara"],
    "b": 1,
    "bahas": "PLTB memanfaatkan tenaga angin (bayu) untuk memutar kincir angin raksasa penghasil listrik."
  },
  {
    "q": "Lapisan perairan yang menyelimuti permukaan Bumi seperti samudra, laut, sungai, dan danau disebut ....",
    "p": ["Litosfer", "Hidrosfer", "Atmosfer", "Biosfer"],
    "b": 1,
    "bahas": "Hidrosfer berasal dari kata 'hidro' yang berarti air, mencakup seluruh wilayah perairan di Bumi."
  },
  {
    "q": "Lapisan udara yang menyelimuti Bumi dan berfungsi melindungi makhluk hidup dari radiasi sinar ultraviolet matahari serta benda langit jatuh adalah ....",
    "p": ["Atmosfer", "Litosfer", "Hidrosfer", "Kerak bumi"],
    "b": 0,
    "bahas": "Atmosfer adalah selimut gas yang melindungi kehidupan di Bumi dan mengatur suhu planet."
  },
  {
    "svg": "<svg width='170' height='70' xmlns='http://w3.org'><rect x='15' y='15' width='45' height='35' rx='6' fill='#bae6fd' stroke='#0284c7'/><text x='37' y='36' font-size='8' text-anchor='middle'>Evaporasi</text><text x='66' y='36' font-size='10'>→</text><rect x='74' y='15' width='45' height='35' rx='6' fill='#e2e8f0' stroke='#475569'/><text x='96' y='36' font-size='8' text-anchor='middle'>Kondensasi</text><text x='125' y='36' font-size='10'>→</text><rect x='133' y='15' width='32' height='35' rx='6' fill='#dcfce7' stroke='#16a34a'/><text x='149' y='36' font-size='8' text-anchor='middle'>Hujan</text></svg>",
    "q": "Perhatikan bagan tahapan siklus air pada gambar di atas! Tahap penguapan air laut dan sungai akibat panas matahari disebut ....",
    "p": ["Kondensasi", "Evaporasi", "Presipitasi", "Infiltrasi"],
    "b": 1,
    "bahas": "Evaporasi adalah proses penguapan air dari permukaan Bumi menuju atmosfer akibat pemanasan matahari."
  },
  {
    "q": "Proses perubahan uap air di atmosfer menjadi titik-titik air yang berkumpul membentuk awan pada siklus air disebut ....",
    "p": ["Evaporasi", "Kondensasi", "Presipitasi", "Transpirasi"],
    "b": 1,
    "bahas": "Kondensasi (pengembunan) mengubah uap air dingin di langit menjadi awan."
  },
  {
    "q": "Bencana alam gempa bumi yang terjadi akibat pergeseran lempeng-lempeng kerak Bumi di dasar laut berpotensi menimbulkan gelombang besar yang disebut ....",
    "p": ["Angin topan", "Tsunami", "Tanah longsor", "Kekeringan"],
    "b": 1,
    "bahas": "Gempa tektonik kuat di dasar laut dapat memicu gelombang laut raksasa atau tsunami."
  },
  {
    "q": "Benda berikut yang dapat ditembus oleh cahaya dengan sangat jelas (benda bening) adalah ....",
    "p": ["Kaca jendela bening", "Papan kayu tebal", "Dinding tembok", "Kertas karton hitam"],
    "b": 0,
    "bahas": "Kaca bening dan air jernih meneruskan hampir seluruh cahaya yang datang."
  },
  {
    "q": "Cermin yang digunakan pada kaca spion kendaraan bermotor karena mampu memberikan bayangan tegak, diperkecil, dan jangkauan pandang luas adalah cermin ....",
    "p": ["Datar", "Cembung", "Cekung", "Rangkap"],
    "b": 1,
    "bahas": "Cermin cembung menghasilkan bayangan maya, tegak, dan diperkecil sehingga area belakang kendaraan terlihat luas."
  },
  {
    "q": "Alat musik tradisional gamelan dan gong dapat mengeluarkan bunyi apabila dimainkan dengan cara ....",
    "p": ["Dipetik", "Ditiup", "Dipukul", "Digesek"],
    "b": 2,
    "bahas": "Gamelan dan gong bergetar dan berbunyi ketika dipukul menggunakan alat pemukul khusus."
  },
  {
    "q": "Dalam sebuah jaring-jaring makanan, tumbuhan hijau selalu menempati kedudukan dasar sebagai produsen karena mampu ....",
    "p": [
      "Memangsa hewan-hewan kecil",
      "Membuat makanannya sendiri melalui fotosintesis",
      "Menguraikan bangkai hewan",
      "Hidup tanpa memerlukan air"
    ],
    "b": 1,
    "bahas": "Tumbuhan hijau berfotosintesis menghasilkan energi makanan bagi konsumen tingkat pertama."
  },
  {
    "q": "Kegiatan manusia yang dapat mengganggu keseimbangan ekosistem sungai dan menyebabkan kematian ikan adalah ....",
    "p": [
      "Menanam pohon di bantaran sungai",
      "Membuang limbah kimia pabrik dan sampah plastik ke sungai",
      "Melakukan tebang pilih di hutan",
      "Membuat taman kota di pinggir jalan"
    ],
    "b": 1,
    "bahas": "Limbah beracun dan sampah mencemari air sungai dan meracuni biota air."
  },
  {
    "q": "Komponen listrik yang berfungsi menyambung dan memutus aliran listrik pada suatu rangkaian secara aman adalah ....",
    "p": ["Baterai", "Sakelar", "Kabel tembaga", "Stopkontak"],
    "b": 1,
    "bahas": "Sakelar berfungsi memutus (off) dan menyambung (on) arus listrik."
  },
  {
    "q": "Permukaan Bumi yang menjulang tinggi ke atas dengan ketinggian lebih dari 600 meter di atas permukaan laut dan berhawa sejuk disebut ....",
    "p": ["Dataran rendah", "Dataran tinggi", "Lembah", "Pesisir pantai"],
    "b": 1,
    "bahas": "Dataran tinggi adalah wilayah daratan luas pada ketinggian di atas 600 mdpl, cocok untuk perkebunan teh dan sayuran."
  },
  {
    "q": "Tindakan nyata yang dapat dilakukan siswa untuk menjaga kelestarian air tanah agar siklus air tetap berjalan lancar adalah ....",
    "p": [
      "Menutup seluruh halaman rumah dengan beton",
      "Menanam pohon dan membuat lubang resapan biopori",
      "Membiarkan keran air terbuka saat menggosok gigi",
      "Membuang oli bekas ke tanah"
    ],
    "b": 1,
    "bahas": "Pohon dan lubang biopori membantu penyerapan air hujan ke dalam tanah (infiltrasi) sebagai cadangan air bersih."
  }
]);

window.tambahPaketUjian("5", "bindo", "UAS Semester 1", [
  {
    "q": "Kata sifat yang paling tepat untuk menggambarkan seseorang yang selalu berkata apa adanya dan tidak pernah berbohong adalah ....",
    "p": ["Ramah", "Jujur", "Cerdik", "Lincah"],
    "b": 1,
    "bahas": "Jujur merupakan kata sifat yang berarti lurus hati, tidak berbohong, dan tidak curang."
  },
  {
    "q": "Kata dasar 'maaf' apabila diberi imbuhan 'pe-' akan berubah bentuk menjadi ....",
    "p": ["Pemaaf", "Penmaaf", "Pema'af", "Pengmaaf"],
    "b": 0,
    "bahas": "Kata dasar berawalan huruf 'm' yang mendapat awalan 'pe-' tetap menggunakan awalan 'pe-' menjadi 'pemaaf'."
  },
  {
    "q": "Kata dasar 'sabar' jika diberi imbuhan 'pe-' yang benar adalah ....",
    "p": ["Pesabar", "Penyabar", "Pensabar", "Pengsabar"],
    "b": 1,
    "bahas": "Huruf awal 's' pada kata dasar 'sabar' luluh menjadi 'ny-' ketika bertemu awalan 'pe-', sehingga menjadi 'penyabar'."
  },
  {
    "q": "Sinonim dari kata 'angkuh' pada kalimat 'Anak yang angkuh biasanya dijauhi teman-temannya' adalah ....",
    "p": ["Rendah hati", "Sombong", "Dermawan", "Santun"],
    "b": 1,
    "bahas": "Kata 'angkuh' memiliki persamaan makna (sinonim) dengan 'sombong' atau 'congkak'."
  },
  {
    "q": "Antonim (lawan kata) dari kata 'optimis' adalah ....",
    "p": ["Percaya diri", "Pesimis", "Semangat", "Gembira"],
    "b": 1,
    "bahas": "Lawan kata dari 'optimis' (selalu berpengharapan baik) adalah 'pesimis' (mudah putus asa/berpandangan suram)."
  },
  {
    "q": "Perhatikan kalimat berikut: 'Rani anak yang rajin belajar, ... adiknya lebih suka bermain sepanjang hari.' Kata penghubung (konjungsi) yang tepat adalah ....",
    "p": ["dan", "sedangkan", "sehingga", "karena"],
    "b": 1,
    "bahas": "Konjungsi 'sedangkan' digunakan untuk menghubungkan dua kalimat setara yang menyatakan perbandingan atau perlawanan."
  },
  {
    "q": "Kalimat di bawah ini yang menggunakan majas hiperbola (melebih-lebihkan) adalah ....",
    "p": [
      "Ombak di pantai berlari-lari mengejar tepian pasir.",
      "Harga kebutuhan pokok di pasar meroket setinggi langit.",
      "Ia adalah tulang punggung bagi keluarganya.",
      "Pagi ini udara di desa terasa sangat sejuk."
    ],
    "b": 1,
    "bahas": "Frasa 'meroket setinggi langit' melebih-lebihkan kenaikan harga sehingga termasuk majas hiperbola."
  },
  {
    "q": "Perhatikan kalimat berikut: 'Ayah membanting tulang demi membiayai sekolah anak-anaknya.' Makna ungkapan 'membanting tulang' adalah ....",
    "p": ["Berolahraga setiap pagi", "Bekerja keras", "Mengalami kecelakaan", "Beristirahat di rumah"],
    "b": 1,
    "bahas": "Ungkapan 'membanting tulang' (majas metafora) memiliki makna bekerja keras dengan sekuat tenaga."
  },
  {
    "q": "Perubahan kalimat langsung berikut menjadi kalimat tidak langsung yang tepat adalah ....\nKalimat langsung: Guru berkata, 'Anak-anak, kumpulkan tugas gambar kalian sekarang!'",
    "p": [
      "Guru menyuruh anak-anak untuk mengumpulkan tugas gambar mereka saat itu.",
      "Anak-anak berkata kepada guru untuk mengumpulkan tugas gambar.",
      "Guru bertanya apakah tugas gambar sudah dikumpulkan.",
      "Guru mengatakan bahwa tugas gambar dikumpulkan besok."
    ],
    "b": 0,
    "bahas": "Kalimat perintah langsung diubah menjadi kalimat tidak langsung dengan kata kerja 'menyuruh/meminta' dan tanpa tanda petik."
  },
  {
    "q": "Bagian buku yang memuat daftar judul bab beserta nomor halamannya untuk memudahkan pembaca mencari materi disebut ....",
    "p": ["Kata pengantar", "Daftar isi", "Glosarium", "Daftar pustaka"],
    "b": 1,
    "bahas": "Daftar isi menyajikan urutan judul bab dan subbab beserta nomor halamannya."
  },
  {
    "q": "Buku yang berisi cerita rekaan atau khayalan pengarang seperti dongeng, fabel, dan cerpen termasuk jenis buku ....",
    "p": ["Nonfiksi", "Fiksi", "Ensiklopedia", "Kamus"],
    "b": 1,
    "bahas": "Buku fiksi berisi cerita imajinatif/rekaan pengarang, sedangkan buku nonfiksi berisi fakta dan ilmu pengetahuan."
  },
  {
    "q": "Cerita rakyat yang tokoh-tokohnya berupa hewan yang dapat berbicara dan berperilaku layaknya manusia disebut ....",
    "p": ["Legenda", "Fabel", "Mite", "Sage"],
    "b": 1,
    "bahas": "Fabel adalah cerita fiksi dengan tokoh binatang yang mengandung pesan moral bagi pembaca."
  },
  {
    "q": "Urutan tahapan jalannya peristiwa dalam sebuah cerita dari awal, konflik, hingga penyelesaian disebut ....",
    "p": ["Tema", "Alur (plot)", "Latar", "Amanat"],
    "b": 1,
    "bahas": "Alur atau plot adalah rangkaian peristiwa yang membentuk jalannya cerita."
  },
  {
    "svg": "<svg width='180' height='80' xmlns='http://w3.org'><rect x='15' y='10' width='150' height='60' rx='8' fill='#eff6ff' stroke='#2563eb' stroke-width='2'/><text x='90' y='30' font-size='10' font-weight='bold' text-anchor='middle' fill='#1e40af'>CARA MENCUCI TANGAN</text><text x='90' y='45' font-size='8' text-anchor='middle' fill='#0f172a'>1. Basahi tangan dengan air bersih</text><text x='90' y='58' font-size='8' text-anchor='middle' fill='#0f172a'>2. Gosok pakai sabun selama 20 detik</text></svg>",
    "q": "Perhatikan kutipan teks pada gambar di atas! Teks yang berisi langkah-langkah atau tahapan melakukan sesuatu secara urut disebut teks ....",
    "p": ["Deskripsi", "Prosedur", "Narasi", "Eksplanasi"],
    "b": 1,
    "bahas": "Teks prosedur memandu pembaca melakukan suatu kegiatan melalui langkah-langkah yang berurutan dan jelas."
  },
  {
    "q": "Jenis kata kerja yang sering digunakan dalam kalimat langkah-langkah teks prosedur seperti 'tuangkan', 'aduklah', dan 'potonglah' adalah kata kerja ....",
    "p": ["Tanya", "Perintah (imperatif)", "Pasif", "Sifat"],
    "b": 1,
    "bahas": "Teks prosedur banyak memakai kalimat perintah dengan kata kerja imperatif (akhiran -kan, -i, atau -lah)."
  },
  {
    "q": "Bagian akhir dari sebuah surat pribadi yang berisi ucapan terima kasih, harapan, serta salam penutup sebelum nama dan tanda tangan pengirim disebut ....",
    "p": ["Kepala surat", "Penutup surat", "Alamat tujuan", "Lampiran"],
    "b": 1,
    "bahas": "Penutup surat berisi ungkapan mengakhiri surat dan salam penutup sebelum tanda tangan pengirim."
  },
  {
    "q": "Contoh kalimat pembuka surat pribadi yang santun kepada nenek di kampung halaman adalah ....",
    "p": [
      "Dengan hormat, bersama surat ini kami mengundang Nenek untuk hadir.",
      "Halo Nenek tersayang, apa kabar Nenek di desa? Semoga Nenek selalu sehat.",
      "Kepada Yth. Nenek di tempat, harap segera membalas surat ini.",
      "Demikian surat pemberitahuan ini disampaikan kepada Nenek."
    ],
    "b": 1,
    "bahas": "Surat pribadi ditujukan kepada keluarga atau teman sehingga menggunakan sapaan akrab, hangat, dan penuh kasih sayang."
  },
  {
    "q": "Bacalah paragraf berikut!\nOlahraga bersepeda memiliki banyak manfaat bagi kesehatan tubuh. Bersepeda secara rutin dapat melatih kekuatan otot kaki dan menjaga kesehatan jantung. Selain itu, bersepeda juga membantu mengurangi polusi udara karena tidak menggunakan bahan bakar minyak.\n\nIde pokok paragraf tersebut adalah ....",
    "p": [
      "Cara merawat sepeda agar tidak berkarat",
      "Manfaat olahraga bersepeda bagi kesehatan dan lingkungan",
      "Jenis-jenis sepeda balap modern",
      "Penyebab polusi udara di perkotaan"
    ],
    "b": 1,
    "bahas": "Kalimat utama di awal paragraf menjelaskan berbagai manfaat olahraga bersepeda."
  },
  {
    "q": "Imbuhan 'me-kan' pada kalimat 'Ibu menghidangkan kue pisang di ruang tamu' memiliki makna ....",
    "p": [
      "Melakukan pekerjaan untuk orang lain",
      "Menjadikan sesuatu terhidang (tersedia)",
      "Mencari sesuatu",
      "Menuju ke suatu tempat"
    ],
    "b": 1,
    "bahas": "Kata 'menghidangkan' bermakna menyajikan atau membuat hidangan tersedia."
  },
  {
    "q": "Kata dasar 'tulis' jika mendapat awalan 'pe-' berubah menjadi kata benda yang berarti orang yang menulis, yaitu ....",
    "p": ["Petulis", "Penulis", "Pentulis", "Pengtulis"],
    "b": 1,
    "bahas": "Huruf awal 't' luluh menjadi 'n-' saat bertemu awalan 'pe-', sehingga menjadi 'penulis'."
  },
  {
    "q": "Orang yang memberikan modal usaha dan membimbing pelaku usaha kecil dalam kegiatan wirausaha disebut ....",
    "p": ["Konsumen", "Mentor / Investor", "Kurir", "Pelanggan"],
    "b": 1,
    "bahas": "Mentor adalah pembimbing usaha, sedangkan investor adalah pihak penanam modal usaha."
  },
  {
    "q": "Kegiatan tanya jawab dengan narasumber untuk menggali informasi usaha atau pengalaman hidup memerlukan daftar pertanyaan yang disusun menggunakan kata tanya ....",
    "p": [
      "ADIKSIMBA (Apa, Di mana, Kapan, Siapa, Mengapa, Bagaimana)",
      "ABCD saja",
      "Kata seru dan kata sandang",
      "Singkatan nama daerah"
    ],
    "b": 0,
    "bahas": "ADIKSIMBA (5W + 1H dalam bahasa Indonesia) membantu pewawancara menggali informasi secara lengkap."
  },
  {
    "q": "Idiom atau ungkapan 'naik daun' pada kalimat 'Usaha keripik singkong milik Pak Rudi sedang naik daun' memiliki arti ....",
    "p": [
      "Memanjat pohon tinggi",
      "Sedang terkenal dan mendapat banyak keberhasilan",
      "Mengalami kerugian besar",
      "Menutup toko sementara"
    ],
    "b": 1,
    "bahas": "Ungkapan 'naik daun' bermakna sedang populer, laris, atau menanjak kariernya."
  },
  {
    "q": "Makna ungkapan 'gulung tikar' dalam dunia perdagangan adalah ....",
    "p": [
      "Membersihkan lantai toko",
      "Bangkrut atau berhenti berjualan karena rugi",
      "Membuka cabang toko baru",
      "Menjual tikar di pasar"
    ],
    "b": 1,
    "bahas": "'Gulung tikar' adalah ungkapan yang berarti bangkrut atau tutup usaha."
  },
  {
    "svg": "<svg width='175' height='75' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='50' rx='8' fill='#fef9c3' stroke='#ca8a04' stroke-width='2'/><text x='87' y='33' font-size='10' font-weight='bold' text-anchor='middle' fill='#854d0e'>DISKON 50% BUKU CERITA</text><text x='87' y='49' font-size='8' text-anchor='middle' fill='#0f172a'>Khusus Hari Sabtu &amp; Minggu di Toko Ilmu</text></svg>",
    "q": "Perhatikan iklan penawaran pada gambar di atas! Informasi utama yang ditawarkan oleh Toko Ilmu adalah ....",
    "p": [
      "Gratis buku tulis setiap hari Senin",
      "Potongan harga sebesar 50% untuk pembelian buku cerita pada hari Sabtu dan Minggu",
      "Lomba membaca puisi tingkat kabupaten",
      "Penutupan toko selama akhir pekan"
    ],
    "b": 1,
    "bahas": "Iklan tersebut menawarkan diskon (potongan harga) 50% untuk buku cerita khusus akhir pekan."
  },
  {
    "q": "Penulisan huruf kapital yang tepat sesuai kaidah ejaan bahasa Indonesia terdapat pada kalimat ....",
    "p": [
      "Pada bulan agustus kami merayakan hari kemerdekaan indonesia.",
      "Pada bulan Agustus kami merayakan hari kemerdekaan Indonesia.",
      "pada Bulan Agustus kami merayakan Hari Kemerdekaan indonesia.",
      "Pada bulan Agustus kami merayakan hari kemerdekaan indonesia."
    ],
    "b": 1,
    "bahas": "Huruf kapital digunakan pada awal kalimat, nama bulan (Agustus), dan nama negara (Indonesia)."
  },
  {
    "q": "Tanda baca yang digunakan untuk mengakhiri kalimat berita atau pernyataan adalah tanda ....",
    "p": ["Tanya (?)", "Seru (!)", "Titik (.)", "Koma (,)"],
    "b": 2,
    "bahas": "Kalimat berita atau pernyataan selalu diakhiri dengan tanda titik (.)."
  },
  {
    "q": "Kalimat tanya yang tepat untuk menanyakan jumlah modal awal yang dibutuhkan seorang pedagang adalah ....",
    "p": [
      "Di mana Bapak membeli bahan baku kue?",
      "Berapa modal awal yang Bapak gunakan untuk memulai usaha ini?",
      "Kapan toko kue ini mulai dibuka?",
      "Siapa yang membantu Bapak membuat kue?"
    ],
    "b": 1,
    "bahas": "Kata tanya 'berapa' digunakan untuk menanyakan jumlah, bilangan, atau nilai uang."
  },
  {
    "q": "Singkatan dari kata 'dan lain-lain' yang ditulis di akhir perincian barang adalah ....",
    "p": ["dsb.", "dll.", "dst.", "yth."],
    "b": 1,
    "bahas": "Singkatan 'dll.' berarti dan lain-lain, sedangkan 'dsb.' berarti dan sebagainya."
  },
  {
    "q": "Manfaat gemar membaca buku cerita maupun buku pengetahuan sejak usia sekolah dasar adalah ....",
    "p": [
      "Menambah kosakata, memperluas wawasan, dan melatih daya imajinasi",
      "Membuat waktu bermain menjadi hilang",
      "Mengurangi kemampuan berbicara dengan teman",
      "Membuat mata cepat lelah tanpa manfaat"
    ],
    "b": 0,
    "bahas": "Membaca memperkaya kosakata, meningkatkan pemahaman bacaan, dan menambah ilmu pengetahuan."
  }
]);

window.tambahPaketUjian("5", "pai", "UAS Semester 1", [
  {
    "q": "Surah Al-Ma'un merupakan surah ke-107 dalam Al-Qur'an dan terdiri atas 7 ayat. Nama Al-Ma'un memiliki arti ....",
    "p": ["Nikmat yang banyak", "Barang-barang yang berguna", "Pertolongan", "Waktu subuh"],
    "b": 1,
    "bahas": "Kata Al-Ma'un secara bahasa memiliki arti barang-barang yang berguna."
  },
  {
    "q": "Menurut Q.S. Al-Ma'un ayat 1 sampai 3, orang yang disebut sebagai pendusta agama adalah orang yang menghardik anak yatim dan tidak menganjurkan memberi makan kepada ....",
    "p": ["Orang kaya", "Orang miskin", "Musafir", "Tetangga dekat"],
    "b": 1,
    "bahas": "Pendusta agama dalam Q.S. Al-Ma'un adalah orang yang menghardik anak yatim dan tidak peduli memberi makan orang miskin."
  },
  {
    "q": "Dalam Q.S. Al-Ma'un ayat 4 dan 5 dijelaskan bahwa celakalah bagi orang-orang yang salat, yaitu orang-orang yang ....",
    "p": [
      "Salat berjamaah di masjid",
      "Lalai terhadap salatnya",
      "Menunaikan zakat tepat waktu",
      "Membaca Al-Qur'an setiap hari"
    ],
    "b": 1,
    "bahas": "Ayat ke-5 berbunyi 'Allazina hum 'an salatihim sahun' yang artinya (yaitu) orang-orang yang lalai terhadap salatnya."
  },
  {
    "q": "Perbuatan melakukan ibadah atau amal kebaikan dengan tujuan agar dilihat dan dipuji oleh orang lain disebut ....",
    "p": ["Ikhlas", "Riya", "Tawadu", "Qanaah"],
    "b": 1,
    "bahas": "Riya adalah memperlihatkan amal ibadah supaya dipuji manusia, dan sifat ini tercela dalam Q.S. Al-Ma'un ayat 6."
  },
  {
    "q": "Hukum bacaan mim sukun (مْ) apabila bertemu dengan huruf mim (م) dengan disertai dengung disebut ....",
    "p": ["Izhar syafawi", "Idgham mimi (mutamasilain)", "Ikhfa syafawi", "Iqlab"],
    "b": 1,
    "bahas": "Mim sukun bertemu mim dibaca melebur dan berdengung, disebut Idgham Mimi."
  },
  {
    "q": "Asmaulhusna 'Al-Qawiyyu' memiliki arti bahwa Allah Swt. Maha ....",
    "p": ["Berdiri Sendiri", "Kuat", "Menghidupkan", "Membangkitkan"],
    "b": 1,
    "bahas": "Al-Qawiyyu berarti Allah Maha Kuat; kekuatan Allah Swt. tidak terbatas dan tidak tertandingi."
  },
  {
    "q": "Allah Swt. mengatur dan mengurus seluruh alam semesta secara mandiri tanpa membutuhkan bantuan siapa pun. Hal ini sesuai dengan Asmaulhusna ....",
    "p": ["Al-Qayyum", "Al-Mumit", "Al-Gaffar", "As-Salam"],
    "b": 0,
    "bahas": "Al-Qayyum artinya Allah Maha Berdiri Sendiri dan senantiasa mengurus makhluk-Nya."
  },
  {
    "q": "Asmaulhusna 'Al-Muhyi' mengandung arti bahwa Allah Swt. Maha ....",
    "p": ["Mematikan", "Menghidupkan", "Melihat", "Mendengar"],
    "b": 1,
    "bahas": "Al-Muhyi artinya Allah Maha Menghidupkan seluruh makhluk hidup di alam semesta."
  },
  {
    "q": "Setiap makhluk yang bernyawa pasti akan mengalami kematian atas kehendak Allah Swt. karena Allah memiliki Asmaulhusna ....",
    "p": ["Al-Muhyi", "Al-Mumit", "Al-Ba'is", "Al-Wahid"],
    "b": 1,
    "bahas": "Al-Mumit berarti Allah Maha Mematikan semua makhluk hidup apabila telah tiba ajalnya."
  },
  {
    "q": "Arti dari Asmaulhusna 'Al-Ba'is' adalah Allah Swt. Maha ....",
    "p": [
      "Membangkitkan manusia dari alam kubur pada hari kiamat",
      "Menutupi kesalahan hamba-Nya",
      "Memberi rezeki kepada hewan",
      "Menciptakan langit dan bumi"
    ],
    "b": 0,
    "bahas": "Al-Ba'is artinya Allah Maha Membangkitkan seluruh manusia dari kubur pada hari kebangkitan."
  },
  {
    "q": "Perilaku meneladani Asmaulhusna 'Al-Qayyum' dalam kehidupan pelajar sehari-hari ditunjukkan dengan sikap ....",
    "p": [
      "Mandiri menyiapkan perlengkapan sekolah dan mengerjakan tugas sendiri",
      "Selalu menyontek pekerjaan teman",
      "Bergantung sepenuhnya kepada orang tua untuk hal-hal kecil",
      "Malas merapikan kamar tidur"
    ],
    "b": 0,
    "bahas": "Meneladani Al-Qayyum dilakukan dengan membiasakan hidup mandiri dan bertanggung jawab."
  },
  {
    "q": "Manusia diciptakan oleh Allah Swt. sebagai khalifah di muka bumi. Tugas utama manusia sebagai khalifah adalah ....",
    "p": [
      "Menjaga, memakmurkan, dan melestarikan bumi sesuai perintah Allah Swt.",
      "Mengeksploitasi hutan dan sungai tanpa batas",
      "Mencari kekuasaan untuk menindas sesama",
      "Membiarkan lingkungan rusak dan kotor"
    ],
    "b": 0,
    "bahas": "Khalifah berarti pemimpin/pengelola bumi yang bertugas menjaga kelestarian alam dan menegakkan kebenaran."
  },
  {
    "q": "Zakat yang wajib dikeluarkan oleh setiap jiwa umat Islam pada bulan Ramadan hingga menjelang salat Idulfitri berupa makanan pokok disebut ....",
    "p": ["Zakat mal", "Zakat fitrah", "Zakat profesi", "Zakat perniagaan"],
    "b": 1,
    "bahas": "Zakat fitrah adalah zakat jiwa yang ditunaikan di bulan Ramadan untuk menyucikan diri dan membantu fakir miskin."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#92400e'>TAKARA ZAKAT FITRAH</text><text x='87' y='48' font-size='9' text-anchor='middle' fill='#0f172a'>1 Sha' = 2,5 kg / 3,5 liter Beras</text></svg>",
    "q": "Perhatikan informasi pada gambar di atas! Jika dalam satu keluarga terdiri atas 4 orang anggota keluarga, maka jumlah beras zakat fitrah yang harus dikeluarkan adalah ....",
    "p": ["5 kg", "7,5 kg", "10 kg", "12,5 kg"],
    "b": 2,
    "bahas": "4 orang × 2,5 kg beras = 10 kg beras."
  },
  {
    "q": "Pemberian sesuatu kepada seseorang secara cuma-cuma sebagai bentuk kasih sayang, penghargaan, atau kenang-kenangan disebut ....",
    "p": ["Zakat", "Hadiah", "Utang", "Pajak"],
    "b": 1,
    "bahas": "Hadiah diberikan sebagai tanda cinta kasih, penghormatan, atau apresiasi atas prestasi seseorang."
  },
  {
    "q": "Golongan orang yang berhak menerima zakat (mustahik) disebutkan dalam Al-Qur'an Surah At-Taubah ayat 60 berjumlah ....",
    "p": ["4 golongan", "6 golongan", "8 golongan", "10 golongan"],
    "b": 2,
    "bahas": "Terdapat 8 golongan (asnaf) penerima zakat: fakir, miskin, amil, mualaf, riqab, garimin, fisabilillah, dan ibnu sabil."
  },
  {
    "q": "Orang yang tidak memiliki harta dan tidak memiliki penghasilan sama sekali untuk memenuhi kebutuhan pokok sehari-hari disebut ....",
    "p": ["Fakir", "Amil", "Mualaf", "Garimin"],
    "b": 0,
    "bahas": "Fakir adalah orang yang amat sengsara hidupnya, tidak mempunyai harta dan tenaga untuk memenuhi penghidupannya."
  },
  {
    "q": "Panitia atau petugas yang dipercaya untuk mengumpulkan dan menyalurkan zakat kepada yang berhak menerimanya disebut ....",
    "p": ["Muzakki", "Amil", "Ibnu sabil", "Mustahik"],
    "b": 1,
    "bahas": "Amil zakat adalah pengurus atau panitia pengelola zakat."
  },
  {
    "q": "Peristiwa pembebasan Kota Makkah oleh Nabi Muhammad saw. bersama 10.000 pasukan kaum muslimin secara damai tanpa pertumpahan darah pada tahun 8 Hijriah disebut ....",
    "p": ["Perang Badar", "Fathu Makkah", "Perjanjian Hudaibiyah", "Haji Wada"],
    "b": 1,
    "bahas": "Fathu Makkah berarti pembebasan atau penaklukan Kota Makkah pada bulan Ramadan tahun 8 H."
  },
  {
    "q": "Penyebab utama terjadinya peristiwa Fathu Makkah adalah karena kaum kafir Quraisy telah melanggar isi ....",
    "p": [
      "Piagam Madinah",
      "Perjanjian Hudaibiyah",
      "Baiat Aqabah Pertama",
      "Baiat Ridwan"
    ],
    "b": 1,
    "bahas": "Kaum Quraisy membantu Bani Bakr menyerang Bani Khuza'ah yang bersekutu dengan Nabi Muhammad saw., sehingga melanggar Perjanjian Hudaibiyah."
  },
  {
    "q": "Sikap mulia Nabi Muhammad saw. terhadap penduduk Makkah yang dahulu pernah memusuhi beliau saat peristiwa Fathu Makkah adalah ....",
    "p": [
      "Membalas semua kejahatan mereka",
      "Memaafkan mereka dengan tulus dan memberikan jaminan keamanan",
      "Mengusir seluruh penduduk keluar dari Makkah",
      "Merampas seluruh harta penduduk Makkah"
    ],
    "b": 1,
    "bahas": "Rasulullah saw. memberikan amnesti umum dan memaafkan penduduk Makkah sehingga mereka berbondong-bondong masuk Islam."
  },
  {
    "q": "Setelah memasuki Masjidil Haram saat Fathu Makkah, Nabi Muhammad saw. membersihkan Ka'bah dari ....",
    "p": ["360 berhala", "Karpet sutra", "Air zamzam", "Tiang-tiang batu"],
    "b": 0,
    "bahas": "Rasulullah saw. menghancurkan sekitar 360 berhala yang berada di sekeliling Ka'bah dan mengembalikan kesucian Masjidil Haram."
  },
  {
    "q": "Sahabat yang diperintahkan oleh Nabi Muhammad saw. untuk naik ke atas atap Ka'bah dan mengumandangkan azan pertama kali saat Fathu Makkah adalah ....",
    "p": ["Abu Bakar As-Siddiq", "Bilal bin Rabah", "Umar bin Khattab", "Usman bin Affan"],
    "b": 1,
    "bahas": "Bilal bin Rabah adalah muazin pertama dalam Islam yang mengumandangkan azan dari atas Ka'bah pada peristiwa Fathu Makkah."
  },
  {
    "q": "Ibadah haji terakhir yang dilaksanakan oleh Nabi Muhammad saw. pada tahun 10 Hijriah bersama lebih dari 100.000 kaum muslimin disebut ....",
    "p": ["Haji Tamattu", "Haji Wada (Haji Perpisahan)", "Haji Qiran", "Umrah Akbar"],
    "b": 1,
    "bahas": "Haji Wada berarti haji perpisahan karena menjadi ibadah haji pertama sekaligus terakhir bagi Rasulullah saw."
  },
  {
    "q": "Pesan penting yang disampaikan Nabi Muhammad saw. dalam khotbah Haji Wada di Padang Arafah adalah ....",
    "p": [
      "Persamaan derajat manusia, larangan riba, dan perintah berpegang teguh pada Al-Qur'an dan Sunah",
      "Perintah untuk menaklukkan seluruh benua dengan kekerasan",
      "Larangan berdagang dengan suku lain",
      "Perintah membedakan manusia berdasarkan warna kulit"
    ],
    "b": 0,
    "bahas": "Dalam khotbah Haji Wada, Nabi saw. menegaskan kemuliaan manusia diukur dari takwanya serta berpesan agar umat berpegang pada Al-Qur'an dan Sunah."
  },
  {
    "q": "Surah terakhir yang turun saat Nabi Muhammad saw. melaksanakan wukuf di Padang Arafah pada peristiwa Haji Wada yang menyatakan kesempurnaan agama Islam adalah ....",
    "p": [
      "Q.S. Al-Alaq ayat 1-5",
      "Q.S. Al-Ma'idah ayat 3",
      "Q.S. Al-Fatihah ayat 1-7",
      "Q.S. An-Nasr ayat 1-3"
    ],
    "b": 1,
    "bahas": "Q.S. Al-Ma'idah ayat 3 turun di Arafah menegaskan bahwa hari ini telah disempurnakan agama Islam bagi umat manusia."
  },
  {
    "q": "Perbedaan antara sedekah dan hadiah terletak pada tujuan pemberiannya, yaitu sedekah diberikan dengan tujuan ....",
    "p": [
      "Membantu orang yang membutuhkan semata-mata mengharap rida Allah Swt.",
      "Merayakan ulang tahun teman sekolah",
      "Membalas jasa pejabat daerah",
      "Mengharapkan pujian di media sosial"
    ],
    "b": 0,
    "bahas": "Sedekah ditujukan untuk membantu fakir miskin atau kepentingan umum demi mengharap rida Allah Swt."
  },
  {
    "q": "Contoh tindakan menyayangi anak yatim di lingkungan sekolah yang sesuai dengan ajaran Q.S. Al-Ma'un adalah ....",
    "p": [
      "Berteman akrab, menghibur, dan membantu kebutuhan sekolahnya dengan santun",
      "Mengejek keadaan keluarganya di depan kelas",
      "Menjauhinya saat jam istirahat",
      "Mengambil alat tulis miliknya tanpa izin"
    ],
    "b": 0,
    "bahas": "Menyayangi anak yatim dilakukan dengan memuliakan, mengasihi, dan membantu mereka dengan tulus."
  },
  {
    "q": "Hikmah menunaikan zakat fitrah dan gemar bersedekah bagi orang yang memberi (muzakki) adalah ....",
    "p": [
      "Membersihkan harta dan jiwa dari sifat kikir serta menumbuhkan rasa empati",
      "Membuat harta kekayaan habis seluruhnya",
      "Menjadikan diri lebih tinggi derajatnya dari orang miskin",
      "Mengurangi rasa syukur kepada Allah Swt."
    ],
    "b": 0,
    "bahas": "Zakat dan sedekah menyucikan jiwa dari sifat kikir (bakhil) dan mempererat kepedulian sosial."
  },
  {
    "q": "Keteladanan Rasulullah saw. pada peristiwa Fathu Makkah yang dapat kita terapkan saat terjadi perselisihan di kelas adalah ....",
    "p": [
      "Mengutamakan perdamaian, saling memaafkan, dan menghindari permusuhan",
      "Membalas dendam kepada teman yang pernah berbuat salah",
      "Mengajak teman lain untuk bermusuhan",
      "Mempertahankan kemarahan selama bertahun-tahun"
    ],
    "b": 0,
    "bahas": "Rasulullah saw. memberikan teladan luar biasa dalam mengutamakan perdamaian dan memaafkan kesalahan orang lain."
  }
]);

window.tambahPaketUjian("5", "pancasila", "UAS Semester 1", [
  {
    "q": "Badan yang dibentuk oleh pemerintah Jepang pada tanggal 29 April 1945 untuk menyelidiki usaha-usaha persiapan kemerdekaan Indonesia adalah ....",
    "p": ["PPKI", "BPUPKI (Dokuritsu Junbi Cosakai)", "KNIP", "PETA"],
    "b": 1,
    "bahas": "BPUPKI dibentuk pada 29 April 1945 dengan ketua dr. K.R.T. Radjiman Wedyodiningrat untuk merumuskan dasar negara."
  },
  {
    "q": "Sidang pertama BPUPKI yang berlangsung pada tanggal 29 Mei sampai 1 Juni 1945 membahas secara khusus tentang ....",
    "p": [
      "Pemilihan presiden dan wakil presiden",
      "Rumusan dasar negara Indonesia merdeka",
      "Pembentukan tentara nasional",
      "Pembagian wilayah provinsi"
    ],
    "b": 1,
    "bahas": "Sidang pertama BPUPKI membahas rancangan dasar negara yang disampaikan oleh Mr. Moh. Yamin, Mr. Soepomo, dan Ir. Soekarno."
  },
  {
    "q": "Setiap tanggal 1 Juni bangsa Indonesia memperingati hari lahirnya Pancasila karena pada tanggal 1 Juni 1945 ....",
    "p": [
      "Teks proklamasi dibacakan di Pegangsaan Timur",
      "Ir. Soekarno menyampaikan pidato lima asas dasar negara yang dinamai Pancasila",
      "UUD 1945 disahkan oleh PPKI",
      "Sumpah Pemuda diikrarkan oleh para pemuda"
    ],
    "b": 1,
    "bahas": "Pada 1 Juni 1945, Ir. Soekarno mengemukakan lima prinsip dasar negara dan mengusulkan nama Pancasila."
  },
  {
    "q": "Panitia kecil beranggotakan sembilan tokoh nasional yang berhasil merumuskan Piagam Jakarta (Jakarta Charter) pada tanggal 22 Juni 1945 disebut ....",
    "p": ["Panitia Delapan", "Panitia Sembilan", "Panitia Persiapan", "Panitia Perancang UUD"],
    "b": 1,
    "bahas": "Panitia Sembilan diketuai Ir. Soekarno menghasilkan rancangan mukadimah hukum dasar yang dikenal sebagai Piagam Jakarta."
  },
  {
    "q": "Rumusan Pancasila yang sah dan resmi tercantum di dalam Pembukaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 pada alinea ke-....",
    "p": ["Kesatu", "Kedua", "Ketiga", "Keempat"],
    "b": 3,
    "bahas": "Rumusan resmi kelima sila Pancasila terdapat pada alinea keempat Pembukaan UUD NRI Tahun 1945."
  },
  {
    "q": "Perubahan rumusan sila pertama dari Piagam Jakarta menjadi 'Ketuhanan Yang Maha Esa' sebelum pengesahan UUD 1945 pada 18 Agustus 1945 menunjukkan sikap para pendiri bangsa yang mengutamakan ....",
    "p": [
      "Persatuan dan keutuhan bangsa Indonesia yang beragam",
      "Kepentingan kelompok tertentu saja",
      "Keinginan negara penjajah",
      "Perbedaan antarwilayah"
    ],
    "b": 0,
    "bahas": "Para tokoh bangsa berjiwa besar menyepakati perubahan tersebut demi menjaga persatuan seluruh rakyat Indonesia dari Sabang sampai Merauke."
  },
  {
    "q": "Sikap saling menghormati antarumat beragama serta tidak memaksakan suatu agama kepada orang lain merupakan pengamalan Pancasila sila ke-....",
    "p": ["Satu", "Dua", "Tiga", "Empat"],
    "b": 0,
    "bahas": "Kebebasan memeluk agama dan toleransi beribadah adalah nilai utama sila pertama, Ketuhanan Yang Maha Esa."
  },
  {
    "q": "Contoh perilaku yang sesuai dengan nilai sila kedua Pancasila di lingkungan masyarakat adalah ....",
    "p": [
      "Menggalang bantuan kemanusiaan bagi warga yang terkena musibah banjir",
      "Mengikuti kerja bakti membersihkan selokan desa",
      "Mengikuti rapat pemilihan ketua RW",
      "Melaksanakan ibadah tepat waktu"
    ],
    "b": 0,
    "bahas": "Membantu korban bencana dengan rasa empati dan kasih sayang mencerminkan sila kedua, Kemanusiaan yang adil dan beradab."
  },
  {
    "q": "Nilai persatuan dalam sila ketiga Pancasila dapat diwujudkan di lingkungan sekolah dengan cara ....",
    "p": [
      "Berteman akrab dengan semua siswa tanpa membeda-bedakan suku, agama, maupun daerah asal",
      "Hanya mau bermain dengan teman yang berasal dari daerah yang sama",
      "Mengejek logat bahasa daerah teman",
      "Membentuk kelompok yang saling bermusuhan"
    ],
    "b": 0,
    "bahas": "Menjaga kerukunan dalam keberagaman di sekolah memperkuat persatuan Indonesia."
  },
  {
    "q": "Dalam kegiatan musyawarah kelas untuk menentukan tujuan karya wisata, setiap siswa memiliki hak yang sama untuk ....",
    "p": [
      "Mengemukakan pendapat secara sopan dan menghargai pendapat teman lain",
      "Memaksakan pilihannya agar disetujui semua siswa",
      "Menolak hasil keputusan jika tidak sesuai keinginannya",
      "Membuat kegaduhan saat teman berbicara"
    ],
    "b": 0,
    "bahas": "Sila keempat menjamin kebebasan berpendapat yang bertanggung jawab dalam musyawarah."
  },
  {
    "svg": "<svg width='165' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='135' height='46' rx='10' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='82' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#15803d'>GOTONG ROYONG</text><text x='82' y='48' font-size='9' text-anchor='middle' fill='#0f172a'>Ciri Khas Budaya Bangsa</text></svg>",
    "q": "Perhatikan gambar di atas! Tradisi kerja sama saling membantu secara sukarela untuk kepentingan bersama di berbagai daerah Indonesia disebut ....",
    "p": ["Individualisme", "Gotong royong", "Persaingan bebas", "Kompetisi"],
    "b": 1,
    "bahas": "Gotong royong adalah kepribadian asli bangsa Indonesia yang mengutamakan kebersamaan dan tolong-menolong."
  },
  {
    "q": "Contoh kegiatan gotong royong yang sering dilakukan di lingkungan sekolah adalah ....",
    "p": [
      "Mengerjakan soal ulangan harian bersama-sama",
      "Membersihkan ruang kelas dan taman sekolah secara bersama-sama",
      "Menyontek pekerjaan rumah teman sebelum bel masuk",
      "Mengganggu teman yang sedang menyapu"
    ],
    "b": 1,
    "bahas": "Gotong royong dilakukan untuk hal-hal positif seperti menjaga kebersihan sekolah, bukan saat ulangan."
  },
  {
    "q": "Norma yang berisi petunjuk hidup dari Tuhan Yang Maha Esa yang disampaikan melalui para rasul dalam kitab suci adalah norma ....",
    "p": ["Agama", "Kesusilaan", "Kesopanan", "Hukum"],
    "b": 0,
    "bahas": "Norma agama bersumber dari wahyu Tuhan Yang Maha Esa."
  },
  {
    "q": "Ketika seorang siswa menemukan uang di halaman sekolah lalu menyerahkannya kepada guru untuk diumumkan, ia telah mematuhi norma ....",
    "p": ["Kesusilaan", "Hukum pidana", "Adat istiadat", "Kebiasaan makan"],
    "b": 0,
    "bahas": "Kejujuran yang lahir dari suara hati nurani merupakan perwujudan norma kesusilaan."
  },
  {
    "q": "Sanksi yang diterima seseorang apabila melanggar norma hukum seperti mencuri atau melanggar rambu lalu lintas adalah ....",
    "p": [
      "Rasa penyesalan dalam hati saja",
      "Hukuman denda atau penjara yang dijatuhkan oleh lembaga peradilan",
      "Teguran halus dari tetangga",
      "Tidak diajak bermain oleh teman"
    ],
    "b": 1,
    "bahas": "Norma hukum memiliki sanksi tegas dan nyata yang ditegakkan oleh aparat penegak hukum."
  },
  {
    "q": "Peraturan perundang-undangan yang dibuat oleh pemerintah bersama DPR untuk mengatur kehidupan bernegara merupakan contoh norma ....",
    "p": ["Kesopanan", "Hukum", "Kesusilaan", "Agama"],
    "b": 1,
    "bahas": "Undang-undang dan peraturan negara adalah bentuk norma hukum tertulis."
  },
  {
    "q": "Contoh pelaksanaan norma kesopanan ketika bertamu ke rumah teman atau tetangga adalah ....",
    "p": [
      "Langsung masuk ke dalam rumah tanpa mengetuk pintu",
      "Mengetuk pintu, mengucapkan salam, dan menunggu dipersilakan masuk",
      "Berteriak-teriak memanggil dari luar pagar",
      "Membuka lemari makanan tanpa izin tuan rumah"
    ],
    "b": 1,
    "bahas": "Mengucapkan salam dan meminta izin sebelum masuk rumah orang lain adalah tata krama norma kesopanan."
  },
  {
    "q": "Segala sesuatu yang harus dilaksanakan oleh setiap warga masyarakat dengan penuh tanggung jawab disebut ....",
    "p": ["Hak", "Kewajiban", "Kebebasan", "Keinginan"],
    "b": 1,
    "bahas": "Kewajiban adalah tugas atau tanggung jawab yang harus dijalankan."
  },
  {
    "q": "Salah satu kewajiban anak sebagai anggota keluarga di rumah adalah ....",
    "p": [
      "Mendapatkan kasih sayang dan perlindungan",
      "Menghormati orang tua serta membantu pekerjaan rumah sesuai kemampuan",
      "Mendapatkan uang saku dan pakaian",
      "Memperoleh pendidikan yang layak"
    ],
    "b": 1,
    "bahas": "Menghormati orang tua dan membantu meringankan pekerjaan di rumah adalah kewajiban anak."
  },
  {
    "q": "Hak seorang siswa ketika mengikuti kegiatan pembelajaran di dalam kelas adalah ....",
    "p": [
      "Mendapatkan bimbingan, penjelasan materi, dan penilaian yang adil dari guru",
      "Membuat kegaduhan saat guru menerangkan",
      "Mencoret-coret meja dan dinding kelas",
      "Datang terlambat ke sekolah setiap hari"
    ],
    "b": 0,
    "bahas": "Memperoleh pengajaran dan perlakuan yang adil dari guru adalah hak setiap peserta didik."
  },
  {
    "q": "Kewajiban warga masyarakat dalam menjaga keamanan dan ketertiban lingkungan tempat tinggal dapat diwujudkan melalui kegiatan ....",
    "p": ["Siskamling (ronda malam)", "Lomba balap liar", "Membakar sampah sembarangan", "Menutup jalan umum tanpa izin"],
    "b": 0,
    "bahas": "Sistem keamanan lingkungan (siskamling) adalah bentuk kerja sama warga menjaga keamanan kampung."
  },
  {
    "q": "Akibat yang akan timbul apabila warga masyarakat mengabaikan norma dan aturan yang berlaku adalah ....",
    "p": [
      "Kehidupan masyarakat menjadi harmonis dan damai",
      "Terjadi kekacauan, perselisihan, dan ketidaknyamanan bersama",
      "Lingkungan menjadi semakin bersih dan tertib",
      "Hubungan antarwarga semakin akrab"
    ],
    "b": 1,
    "bahas": "Tanpa kepatuhan terhadap norma, ketertiban masyarakat akan terganggu dan memicu konflik."
  },
  {
    "q": "Semangat persatuan dan kesatuan di Indonesia terikat dalam semboyan negara yang dicengkeram oleh kaki Garuda Pancasila, yaitu ....",
    "p": [
      "Tut Wuri Handayani",
      "Bhinneka Tunggal Ika",
      "Ing Ngarsa Sung Tuladha",
      "Merdeka atau Mati"
    ],
    "b": 1,
    "bahas": "Pita yang dicengkeram Garuda Pancasila bertuliskan Bhinneka Tunggal Ika (berbeda-beda tetapi tetap satu jua)."
  },
  {
    "q": "Penerapan nilai sila kelima Pancasila dalam kehidupan sehari-hari ditunjukkan dengan sikap ....",
    "p": [
      "Bersikap adil kepada semua teman dan tidak boros dalam menggunakan uang",
      "Mengutamakan kepentingan pribadi di atas kepentingan umum",
      "Memilih-milih teman berdasarkan kekayaan orang tuanya",
      "Menghambur-hamburkan makanan dan air"
    ],
    "b": 0,
    "bahas": "Sila kelima mengajarkan keadilan sosial, hidup hemat, kerja keras, dan menghormati hak orang lain."
  },
  {
    "q": "Tokoh nasional yang mengetuai BPUPKI pada masa persiapan kemerdekaan Indonesia adalah ....",
    "p": [
      "dr. K.R.T. Radjiman Wedyodiningrat",
      "Ir. Soekarno",
      "Drs. Moh. Hatta",
      "Mr. Ahmad Soebardjo"
    ],
    "b": 0,
    "bahas": "Ketua BPUPKI adalah dr. K.R.T. Radjiman Wedyodiningrat."
  },
  {
    "q": "Sikap yang harus kita tunjukkan ketika melihat perbedaan pendapat dalam diskusi kelompok di kelas adalah ....",
    "p": [
      "Menghargai setiap pendapat dan mencari jalan tengah terbaik secara musyawarah",
      "Menghentikan diskusi dan pulang ke rumah",
      "Menertawakan usulan teman yang dianggap kurang tepat",
      "Memaksa ketua kelompok mengikuti kemauan kita"
    ],
    "b": 0,
    "bahas": "Menghargai perbedaan pendapat adalah kunci keberhasilan musyawarah mufakat."
  },
  {
    "q": "Contoh tindakan menjaga kelestarian budaya gotong royong di tengah kemajuan teknologi modern saat ini adalah ....",
    "p": [
      "Ikut serta dalam kerja bakti lingkungan RT dan membantu tetangga yang menggelar acara",
      "Sibuk bermain ponsel sendiri saat warga sekitar sedang kerja bakti",
      "Menyerahkan semua kebersihan kampung kepada petugas kebersihan saja",
      "Menolak bertegur sapa dengan tetangga baru"
    ],
    "b": 0,
    "bahas": "Partisipasi aktif dalam kegiatan sosial kemasyarakatan melestarikan nilai gotong royong."
  },
  {
    "q": "Hubungan yang benar antara pelaksanaan kewajiban dan hak di jalan raya adalah ....",
    "p": [
      "Pengendara wajib mematuhi rambu lalu lintas agar semua pengguna jalan mendapatkan hak keselamatan",
      "Pejalan kaki boleh berjalan di tengah jalan tol",
      "Pengendara motor berhak melaju kencang di trotoar",
      "Aturan lalu lintas hanya berlaku saat ada polisi"
    ],
    "b": 0,
    "bahas": "Kepatuhan terhadap aturan lalu lintas menjamin hak keselamatan bersama di jalan raya."
  },
  {
    "q": "Sila keempat Pancasila dilambangkan dengan gambar kepala banteng karena banteng merupakan hewan sosial yang suka ....",
    "p": [
      "Hidup menyendiri di hutan",
      "Berkumpul dan bekerja sama dalam kelompoknya",
      "Berpindah-pindah tempat sendirian",
      "Menghindari kelompoknya"
    ],
    "b": 1,
    "bahas": "Banteng adalah hewan sosial yang suka berkumpul, melambangkan musyawarah dan kebersamaan dalam mengambil keputusan."
  },
  {
    "q": "Manfaat utama membiasakan hidup rukun dan saling tolong-menolong di sekolah adalah ....",
    "p": [
      "Terciptanya suasana belajar yang nyaman, aman, dan penuh persahabatan",
      "Berkurangnya waktu istirahat siswa",
      "Menimbulkan persaingan yang tidak sehat",
      "Membuat tugas sekolah menjadi lebih sulit"
    ],
    "b": 0,
    "bahas": "Kerukunan dan tolong-menolong menciptakan lingkungan sekolah yang damai dan menyenangkan untuk belajar."
  }
]);

window.tambahPaketUjian("5", "bing", "UAS Semester 1", [
  {
    "q": "Sugar, honey, and chocolate taste ....",
    "p": ["sour", "bitter", "sweet", "salty"],
    "b": 2,
    "bahas": "Gula (sugar), madu (honey), dan cokelat (chocolate) rasanya manis (sweet)."
  },
  {
    "q": "A lemon and unripe mango taste very ....",
    "p": ["sweet", "sour", "spicy", "salty"],
    "b": 1,
    "bahas": "Buah lemon dan mangga muda rasanya asam (sour)."
  },
  {
    "q": "Chili and sambal taste .... My father likes eating them.",
    "p": ["spicy", "sweet", "bitter", "sour"],
    "b": 0,
    "bahas": "Cabai (chili) dan sambal rasanya pedas (spicy)."
  },
  {
    "q": "Coffee without sugar and bitter melon (pare) taste ....",
    "p": ["salty", "sweet", "bitter", "sour"],
    "b": 2,
    "bahas": "Kopi tanpa gula dan pare rasanya pahit (bitter)."
  },
  {
    "q": "Sea water and salt taste ....",
    "p": ["sweet", "salty", "spicy", "bitter"],
    "b": 1,
    "bahas": "Air laut dan garam rasanya asin (salty)."
  },
  {
    "q": "Aisyah is hungry. She wants to eat a ... of meatballs (bakso).",
    "p": ["glass", "bowl", "cup", "bottle"],
    "b": 1,
    "bahas": "Bakso disajikan menggunakan mangkuk, sehingga satuannya adalah 'a bowl of meatballs'."
  },
  {
    "q": "Udin is thirsty after playing football. He drinks a ... of cold water.",
    "p": ["plate", "bowl", "glass", "slice"],
    "b": 2,
    "bahas": "Air minum disajikan dalam gelas: 'a glass of cold water'."
  },
  {
    "q": "Mother puts a ... of fried rice on the dining table for breakfast.",
    "p": ["plate", "cup", "bottle", "glass"],
    "b": 0,
    "bahas": "Nasi goreng disajikan di atas piring: 'a plate of fried rice'."
  },
  {
    "q": "Father drinks a ... of hot coffee every morning.",
    "p": ["plate", "cup", "bowl", "box"],
    "b": 1,
    "bahas": "Kopi panas biasanya disajikan dalam cangkir: 'a cup of hot coffee'."
  },
  {
    "q": "How much is a bowl of soto? It is 'fifteen thousand rupiahs'. The price is ....",
    "p": ["Rp5.000", "Rp15.000", "Rp50.000", "Rp150.000"],
    "b": 1,
    "bahas": "'Fifteen thousand rupiahs' berarti lima belas ribu rupiah (Rp15.000)."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#854d0e'>ICED TEA</text><text x='87' y='48' font-size='11' font-weight='bold' text-anchor='middle' fill='#0f172a'>Rp4.500</text></svg>",
    "q": "Look at the price tag above! How much is a glass of iced tea?",
    "p": [
      "Four thousand rupiahs",
      "Four thousand five hundred rupiahs",
      "Five thousand four hundred rupiahs",
      "Forty-five thousand rupiahs"
    ],
    "b": 1,
    "bahas": "Rp4.500 dalam bahasa Inggris dibaca 'four thousand five hundred rupiahs'."
  },
  {
    "q": "Cici buys a plate of gado-gado for Rp12.000 and a glass of orange juice for Rp5.000. How much does she pay in total?",
    "p": [
      "Fifteen thousand rupiahs",
      "Sixteen thousand rupiahs",
      "Seventeen thousand rupiahs",
      "Eighteen thousand rupiahs"
    ],
    "b": 2,
    "bahas": "Rp12.000 + Rp5.000 = Rp17.000 (seventeen thousand rupiahs)."
  },
  {
    "q": "Made ate too much spicy sambal yesterday. Now he has a ....",
    "p": ["toothache", "earache", "stomachache", "headache"],
    "b": 2,
    "bahas": "Makan terlalu banyak sambal pedas menyebabkan sakit perut (stomachache)."
  },
  {
    "q": "Rani eats too many sweet candies and forgets to brush her teeth. She has a ....",
    "p": ["toothache", "stomachache", "cough", "fever"],
    "b": 0,
    "bahas": "Terlalu banyak makan permen dan lupa menggosok gigi menyebabkan sakit gigi (toothache)."
  },
  {
    "q": "Budi's body temperature is very high (39°C). He has a ....",
    "p": ["fever", "toothache", "sore eyes", "backache"],
    "b": 0,
    "bahas": "Suhu tubuh tinggi (39°C) menandakan demam (fever)."
  },
  {
    "q": "Siti has a toothache. She should go to the ... to check her teeth.",
    "p": ["teacher", "dentist", "driver", "farmer"],
    "b": 1,
    "bahas": "Untuk memeriksakan sakit gigi, kita pergi ke dokter gigi (dentist)."
  },
  {
    "q": "Joshua feels dizzy and his head hurts. He has a ....",
    "p": ["headache", "stomachache", "toothache", "earache"],
    "b": 0,
    "bahas": "Kepala terasa pusing dan sakit dalam bahasa Inggris adalah 'headache'."
  },
  {
    "q": "What is the matter with Edo? He has a ... because he drank too much ice.",
    "p": ["cough", "toothache", "backache", "sore foot"],
    "b": 0,
    "bahas": "Minum terlalu banyak es dapat menyebabkan batuk (cough)."
  },
  {
    "q": "Elementary school students in Indonesia wear a white ... and red shorts or skirt on Monday.",
    "p": ["jacket", "shirt", "sweater", "raincoat"],
    "b": 1,
    "bahas": "Seragam sekolah SD adalah kemeja putih (white shirt) dan celana/rok merah."
  },
  {
    "q": "It is raining outside. You should wear a ... so your clothes do not get wet.",
    "p": ["T-shirt", "raincoat", "cap", "sandals"],
    "b": 1,
    "bahas": "Saat hujan turun, kita memakai jas hujan (raincoat) agar pakaian tidak basah."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><path d='M45,20 L62,15 L88,15 L105,20 L115,38 L100,43 L94,30 L94,62 L56,62 L56,30 L50,43 L35,38 Z' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/></svg>",
    "q": "Look at the picture above! What is it? It is a blue ....",
    "p": ["trousers", "T-shirt", "skirt", "shoes"],
    "b": 1,
    "bahas": "Gambar menunjukkan sebuah kaus lengan pendek berwarna biru (a blue T-shirt)."
  },
  {
    "q": "We wear ... on our feet before putting on our shoes.",
    "p": ["gloves", "socks", "hat", "belt"],
    "b": 1,
    "bahas": "Sebelum memakai sepatu (shoes), kita memakai kaus kaki (socks)."
  },
  {
    "q": "Father wears a ... around his waist so his trousers do not fall down.",
    "p": ["tie", "belt", "hat", "scarf"],
    "b": 1,
    "bahas": "Ikat pinggang dalam bahasa Inggris adalah 'belt'."
  },
  {
    "q": "It is very cold in the mountain. Lina is wearing a thick ... to keep her body warm.",
    "p": ["sweater", "shorts", "singlet", "sandals"],
    "b": 0,
    "bahas": "Di pegunungan yang dingin, kita memakai baju hangat tebal (sweater)."
  },
  {
    "q": "What are you wearing today? I ... wearing a red dress.",
    "p": ["is", "am", "are", "do"],
    "b": 1,
    "bahas": "Subjek 'I' berpasangan dengan to be 'am': 'I am wearing a red dress.'"
  },
  {
    "q": "Look! Made is wearing a ... on his head to protect himself from the hot sun.",
    "p": ["hat", "sock", "shoe", "glove"],
    "b": 0,
    "bahas": "Topi yang dipakai di kepala untuk melindungi dari panas matahari adalah 'hat'."
  },
  {
    "q": "Aisyah is wearing a white ... on her head when going to the mosque.",
    "p": ["veil / hijab", "tie", "trousers", "belt"],
    "b": 0,
    "bahas": "Kerudung atau jilbab dalam bahasa Inggris adalah 'veil' atau 'hijab'."
  },
  {
    "q": "Arrange these words into a good sentence: 'is - wearing - Cici - green - a - skirt'",
    "p": [
      "Cici is wearing a green skirt.",
      "Cici wearing is a green skirt.",
      "A green skirt wearing is Cici.",
      "Is Cici a green skirt wearing."
    ],
    "b": 0,
    "bahas": "Susunan kalimat yang tepat adalah 'Cici is wearing a green skirt.'"
  },
  {
    "q": "Which of the following is a healthy habit to avoid stomachache?",
    "p": [
      "Eating dirty food on the street",
      "Washing hands with soap before eating",
      "Eating too much spicy chili",
      "Drinking unboiled water"
    ],
    "b": 1,
    "bahas": "Mencuci tangan dengan sabun sebelum makan mencegah kuman penyebab sakit perut."
  },
  {
    "q": "'Harga sepiring nasi goreng adalah sepuluh ribu rupiah.' The English sentence is ....",
    "p": [
      "A bowl of noodles is ten thousand rupiahs.",
      "A plate of fried rice is ten thousand rupiahs.",
      "A glass of milk is ten thousand rupiahs.",
      "A plate of fried rice is twenty thousand rupiahs."
    ],
    "b": 1,
    "bahas": "Sepiring nasi goreng = a plate of fried rice, sepuluh ribu rupiah = ten thousand rupiahs."
  }
]);

window.tambahPaketUjian("5", "madura", "UAS Semester 1", [
  {
    "q": "Dâlem bhâsa Madhurâ, oca' 'ngakan' lamon èobâ dâ' bhâsa èngghi-bhunten (alos) ka'angghuy orèng towa èngghi panèka ....",
    "p": ["Sare", "Dhâ'âr", "Mèyos", "Ngombhi"],
    "b": 1,
    "bahas": "Bhâsa alosna ngakan ka'angghuy orèng towa èngghi panèka 'dhâ'âr'."
  },
  {
    "q": "Bhâsa èngghi-bhuntenna oca' 'nèngghu / ngabâs' (melihat) ka'angghuy orèng towa èngghi panèka ....",
    "p": ["Mèyos", "Ngoladhi / Mèrsanè", "Sare", "Palèman"],
    "b": 1,
    "bahas": "Nèngghu bhâsa alosna 'ngoladhi' otabâ 'mèrsanè'."
  },
  {
    "q": "Bhâsa èngghi-bhuntenna oca' 'ngèdingaghi' (mendengarkan) èngghi panèka ....",
    "p": ["Mèyarsa'aghi", "Ngoladhi", "Dhâ'âr", "Rabhu"],
    "b": 0,
    "bahas": "Ngèdingaghi bhâsa alosna 'mèyarsa'aghi'."
  },
  {
    "q": "Okara è bâbâ panèka sè aghuna'aghi bhâsa èngghi-bhunten sè teppa' èngghi panèka ....",
    "p": [
      "Bapak Guru ampon rabhu dâri sakola'an.",
      "Bapak Guru ampon dateng dâri sakola'an.",
      "Sèngko' rabhu ka romana kanca.",
      "Adhi' ghi' sare è kamar."
    ],
    "b": 0,
    "bahas": "Ka'angghuy Bapak Guru èghuna'aghi oca' alos 'rabhu' (datang)."
  },
  {
    "q": "Oca' lako (kata kerja) sè aghâdhuwi ter-ater (awalan) 'n-, m-, ng-, ny-' akadhi 'nolès', 'macol', bân 'nyapo' èsebbhut oca' ....",
    "p": ["Tanduk (aktif)", "Tanggap (pasif)", "Sèfat", "Bilângan"],
    "b": 0,
    "bahas": "Oca' tanduk èngghi panèka kata kerja aktif sè subjekka ngalakonè lalakon."
  },
  {
    "q": "Oca' asal 'sapo' lamon èberri' ter-ater (awalan) tanduk bhâkal dhâddhi oca' ....",
    "p": ["Nasapo", "Nyapo", "Ngasapo", "Masapo"],
    "b": 1,
    "bahas": "Oca' asal sè awwâlanna horop 's' luluh dhâddhi 'ny-' bilâ olle ter-ater tanduk, dhâddhi 'nyapo'."
  },
  {
    "q": "Oca' asal 'tolès' lamon èberri' ter-ater tanduk dhâddhi ....",
    "p": ["Nolès", "Molès", "Ngolès", "Nyolès"],
    "b": 0,
    "bahas": "Horop 't' è awwâl oca' 'tolès' luluh dhâddhi 'n-', saèngghâ dhâddhi 'nolès'."
  },
  {
    "q": "Obâ'ân okara tanduk 'Embu' nyapo tanèyan è bâkto lagghu' dhâddhi okara tanggap (pasif) sè teppa' èngghi panèka ....",
    "p": [
      "Tanèyan èsapo bi' Embu' è bâkto lagghu.",
      "Embu' èsapo tanèyan è bâkto lagghu.",
      "Tanèyan nyapo Embu' è bâkto lagghu.",
      "Bâkto lagghu èsapo Embu'."
    ],
    "b": 0,
    "bahas": "Dâlem okara tanggap, objek 'tanèyan' dhâddhi subjek bân ngangghuy ter-ater 'è-' ('èsapo')."
  },
  {
    "q": "Parèbhâsan Madhurâ 'Aèng sondhuk èbâbâna bârâ' artèna ....",
    "p": [
      "Orèng sè katon meneng tapè pènter bân bânnya' èlmona",
      "Orèng sè senneng acaca rammè",
      "Orèng sè males alako",
      "Orèng sè senneng ngombhi aèng"
    ],
    "b": 0,
    "bahas": "Parèbhâsan panèka ngaghâmbhâraghi orèng sè tenang bân ta' sombong sanajjân pènter."
  },
  {
    "q": "Parèbhâsan 'Nangghâ' bârâ è attas cèthak' artèna ....",
    "p": [
      "Ngalakonè lalakon sè cè' berrâ'na bân bânnya' rèsikona",
      "Ngalakonè lalakon sè ghâmpang",
      "Nolongè kanca sè sossa",
      "Nyèmpen bârâng è attas lemari"
    ],
    "b": 0,
    "bahas": "Nangghâ' bârâ (bara api) è attas cèthak artèna ngadhebbhi tangghungan sè sanget berrâ'."
  },
  {
    "svg": "<svg width='170' height='75' xmlns='http://w3.org'><rect x='15' y='12' width='140' height='50' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='85' y='34' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>BUPPA' BABU' GHURU RATO</text><text x='85' y='49' font-size='8' text-anchor='middle' fill='#0f172a'>Tatakrama Orèng Madhurâ</text></svg>",
    "q": "Abâs semboyan budhâjâ Madhurâ è ghâmbhâr attas! Urutan orèng sè kodhu èhormadhi dâlem budhâjâ Madhurâ 'Buppa', Babu', Ghuru, Rato' èngghi panèka ....",
    "p": [
      "Eppa', Embu', Ghuru, sareng Pamarenta (Pèmpènan)",
      "Kanca, Tatangghâ, Sodhâghâr, sareng Tamoy",
      "Nèni', Kaki', Paman, sareng Bibbi'",
      "Orèng soghi, Pèmpènan, Ghuru, sareng Kanca"
    ],
    "b": 0,
    "bahas": "Buppa' (Eppa'), Babu' (Embu'), Ghuru (Guru), sareng Rato (Pèmpènan/Pamarenta) èngghi panèka urutan kahormadhân dâlem budhâjâ Madhurâ."
  },
  {
    "q": "Dâlem carèta rakyat Madhurâ, nyama tokoh raksasa sè asalla dâri tana Madhurâ sè ngaghungè kasaktèyan rajâ èngghi panèka ....",
    "p": ["Kè' Lesap", "Bhindhârâ Saud", "Arya Wiraraja", "Radèn Segoro"],
    "b": 3,
    "bahas": "Radèn Segoro panèka tokoh legenda asal-usul polo Madhurâ dâlem carèta rakyat."
  },
  {
    "q": "Nyama bârâng khas Madhurâ sè èghâbây dâri aèng tasè' sè èpèjher è bâbâna panassa mata'arè èngghi panèka ....",
    "p": ["Ghulâ mèra", "Buja (garam)", "Mènnya' nyèyor", "Kopi"],
    "b": 1,
    "bahas": "Polo Madhurâ kasohor mènangka 'Polo Buja' (Pulau Garam) polana bânnya' ngasèllaghi buja."
  },
  {
    "q": "Kakanan khas Madhurâ sè èghâbây dâri ketan sè èghuring bân èberri' serundèng nyèyor èsebbhut ....",
    "p": ["Ketan Bintol / Lorjuk", "Klepon", "Onde-onde", "Serabi"],
    "b": 0,
    "bahas": "Ketan bintol panèka kakanan khas Madhurâ dâri ketan sè ècampor serundèng nyèyor."
  },
  {
    "q": "Okara è bâbâ panèka sè tamaso' okara pangarep (kalimat harapan) èngghi panèka ....",
    "p": [
      "Maloghâna bâ'na dhâddhi ana' sè pènter bân abhâktè dâ' orèng towa!",
      "Sapa sè nyapo tanèyan lagghu ghellâ'?",
      "Embu' mèyos ka pasar mellè jhuko'.",
      "Jâ' muwang bu-rombu è songay!"
    ],
    "b": 0,
    "bahas": "Okara pangarep ètandhâi oca' 'maloghâna' otabâ 'moghâ-moghâ' (semoga)."
  },
  {
    "q": "Okara sè èssèna larangan sopajâ orèng laèn ta' ngalakonè sèttong kalakoan èsebbhut okara ....",
    "p": ["Pètanya", "Carèta", "Larangan", "Pangarep"],
    "b": 2,
    "bahas": "Okara larangan biasana èawwâli oca' 'Jâ'' (jangan), akadhi: Jâ' muwang bu-rombu sambarangan!"
  },
  {
    "q": "Tabhâligghâ (antonim) dâri oca' 'bersè' èngghi panèka ....",
    "p": ["Raddhin", "Kotor / Kèmmès", "Bhâghus", "Pènter"],
    "b": 1,
    "bahas": "Bersè (bersih) tabhâligghâ kotor."
  },
  {
    "q": "Padhâna artè (sinonim) dâri oca' 'sossa' (sedih) èngghi panèka ....",
    "p": ["Senneng", "Seddhih / Pèrihatin", "Bhunga", "Gumbhirâ"],
    "b": 1,
    "bahas": "Sossa andi' artè sè padâ sareng seddhih."
  },
  {
    "q": "Oca' rangkep (kata ulang) 'lan-jhâlân' dâlem okara 'Sabbhân arè Minggu lagghu, Hasan lan-jhâlân è pèngghir tasè'' artèna ....",
    "p": [
      "Ajhâlân santai ka'angghuy nyarè angèn seggher",
      "Berka' ceppet",
      "Tèdung è pèngghir tasè'",
      "Alako berrâ'"
    ],
    "b": 0,
    "bahas": "Lan-jhâlân (jalan-jalan) artèna ajhâlân santai."
  },
  {
    "q": "Bâca teks è bâbâ panèka!\n'Bhâdhân sè sèhat panèka arta sè palèng larang. Ka'angghuy ajâgâ kasèhadhân, kita kodhu ngakan kakanan sè aghizi, rajin olahraga, bân ajâgâ kabersèyan lingkungan sakola'an.'\n\nEssè pokok dâri baca'an è attas èngghi panèka ....",
    "p": [
      "Carana ajâgâ kasèhadhân bhâdhân bân kabersèyan lingkungan",
      "Macemma olahraga è lapangan",
      "Arghâna kakanan è pasar",
      "Jadwal pelajaran è sakola'an"
    ],
    "b": 0,
    "bahas": "Teks è attas ajellasaghi carana ajâgâ kasèhadhân bhâdhân sareng lingkungan."
  },
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><circle cx='50' cy='35' r='20' fill='#fde047' stroke='#ca8a04' stroke-width='2'/><text x='50' y='39' font-size='10' font-weight='bold' text-anchor='middle'>35</text><text x='110' y='39' font-size='11' font-weight='bold' text-anchor='middle' fill='#0f172a'>= ...</text></svg>",
    "q": "Bilângan '35' akadhi è ghâmbhâr attas dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Tello polo lèma'", "Sèlaè'", "Sèket lèma'", "Lèma polo tello'"],
    "b": 0,
    "bahas": "35 dâlem bhâsa Madhurâ èbâca 'tello polo lèma''."
  },
  {
    "q": "Bilângan '100' dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Sapolo", "Satos", "Saèbu", "Sèket"],
    "b": 1,
    "bahas": "100 = satos, 1.000 = saèbu."
  },
  {
    "q": "Nyama kembhâng (bunga) sè bârnaèpon potè bân ro'om bâuèpon sè segghut èangghuy hiasan pangantèn Madhurâ èngghi panèka ....",
    "p": ["Kembhâng Melatè", "Kembhâng Mata'arè", "Kembhâng Kamboja", "Kembhâng Sepatu"],
    "b": 0,
    "bahas": "Kembhâng melatè (bunga melati) bârna potè bân ro'om bâuna."
  },
  {
    "q": "Oca' 'andhap asor' dâlem budhâjâ Madhurâ artèna ....",
    "p": [
      "Rendah hati, sopan santun, bân ta' sombong",
      "Sombong bân angkuh",
      "Males alako",
      "Ghâmpang pegghel"
    ],
    "b": 0,
    "bahas": "Andhap asor artèna rendah hati bân sopan santun dâ' orèng laèn."
  },
  {
    "q": "Lamon bâ'na èntar ka sakola'an, sabellunna mangkat bâ'na kodhu ....",
    "p": [
      "Pamètan bân nyèyom tanangnga Eppa' sareng Embu'",
      "Mangkat dhibi' ta' abâlâ",
      "Nyoro Embu' ngaterraghi ceppet",
      "Nangès mènta pèssè bânnya'"
    ],
    "b": 0,
    "bahas": "Pamètan sareng nyèyom tanangnga orèng towa sabellunna mangkat sakola'an panèka tatakrama sè moljâ."
  },
  {
    "q": "Pakakas musik tradisional Madhurâ sè ètabbhu (dipukul) ka'angghuy ngèrèngè tari topèng otabâ karapan sapè èngghi panèka ....",
    "p": ["Kendhâng bân Gong", "Gitar", "Biola", "Piano"],
    "b": 0,
    "bahas": "Kendhâng sareng gong tamaso' alat musik tabuh gamelan khas Madhurâ."
  },
  {
    "q": "Oca' 'tanèyan' dâlem bhâsa Indonesia artèna ....",
    "p": ["Halaman rumah", "Dapur", "Kamar tidur", "Atap rumah"],
    "b": 0,
    "bahas": "Tanèyan artèna halaman rumah."
  },
  {
    "q": "Oca' 'bâto' lamon èberri' panambâ (akhiran) '-an' dhâddhi 'bâto'an' sè artèna ....",
    "p": ["Kennengngan sè bânnya' bâtona", "Sèttong bâto kènè'", "Bâto sè celleng", "Bâto è tasè'"],
    "b": 0,
    "bahas": "Panambâ '-an' dâ' oca' 'bâto' nodhuwâghi kennengngan sè bânnya' bâtona."
  },
  {
    "q": "Carana ngormatè kanca sè bhèdhâ suku otabâ bhâsa daèrah è sakola'an èngghi panèka ....",
    "p": [
      "Aca'-kanca kalabân rokon bân ta' ngèjhek logat bhâsana",
      "Njhâuwi kanca sè bhèdhâ daèrah",
      "Maksa kanca ngangghuy bhâsana dhibi'",
      "Atokar è lapangan"
    ],
    "b": 0,
    "bahas": "Rokon bân salèng ngormatè bhèdhâna bhâsa daèrah nguwataghi persatuan."
  },
  {
    "q": "Tojjuwân otama ajhâr tatakrama bân ondhâgghâ bhâsa Madhurâ è sakola'an èngghi panèka ....",
    "p": [
      "Sopajâ bisa acaca kalabân sopan santun bân ngormadhi orèng laèn",
      "Sopajâ bisa ngapossè kanca",
      "Sopajâ dhâddhi orèng sè sombong",
      "Sopajâ ta' usa ajhâr bhâsa Indonesia"
    ],
    "b": 0,
    "bahas": "Ondhâgghâ bhâsa ngajhâraghi sopan santun bân pangormadhân dâ' sasama."
  }
]);

window.tambahPaketUjian("5", "kesenian", "UAS Semester 1", [
  {
    "q": "Unsur seni rupa yang terbentuk dari gabungan beberapa garis yang saling terhubung dan menutup suatu area datar disebut ....",
    "p": ["Titik", "Bidang", "Tekstur", "Gelap terang"],
    "b": 1,
    "bahas": "Bidang adalah unsur seni rupa dua dimensi yang terbentuk dari pertemuan beberapa garis seperti segitiga, lingkaran, dan persegi."
  },
  {
    "svg": "<svg width='175' height='60' xmlns='http://w3.org'><rect x='15' y='15' width='25' height='30' fill='#0284c7'/><polygon points='65,15 50,45 80,45' fill='#f59e0b'/><rect x='95' y='15' width='25' height='30' fill='#0284c7'/><polygon points='145,15 130,45 160,45' fill='#f59e0b'/></svg>",
    "q": "Perhatikan susunan bentuk bangun datar yang berulang secara teratur pada gambar di atas! Prinsip seni rupa yang tampak pada susunan tersebut adalah ....",
    "p": ["Perspektif", "Ritme (irama)", "Proporsi", "Tekstur nyata"],
    "b": 1,
    "bahas": "Pengulangan unsur bentuk dan warna secara teratur menghasilkan prinsip ritme atau irama dalam seni rupa."
  },
  {
    "q": "Prinsip seni rupa yang memadukan berbagai unsur seperti garis, bentuk, dan warna sehingga saling melengkapi dan enak dipandang disebut ....",
    "p": ["Keselarasan (harmoni)", "Kontras tajam", "Ketidakseimbangan", "Kerusakan pola"],
    "b": 0,
    "bahas": "Keselarasan atau harmoni menyatukan berbagai unsur seni rupa agar tampak serasi."
  },
  {
    "q": "Warna sekunder yang dihasilkan dari percampuran warna primer biru dan merah dengan perbandingan seimbang adalah ....",
    "p": ["Hijau", "Oranye", "Ungu", "Cokelat"],
    "b": 2,
    "bahas": "Campuran warna biru dan merah menghasilkan warna ungu."
  },
  {
    "q": "Warna yang dihasilkan dari percampuran antara satu warna primer dan satu warna sekunder (misalnya kuning kehijauan atau merah keunguan) disebut warna ....",
    "p": ["Primer", "Sekunder", "Tersier", "Netral"],
    "b": 2,
    "bahas": "Warna tersier merupakan campuran dari satu warna primer dan satu warna sekunder."
  },
  {
    "q": "Teknik menggambar dengan cara menggosokkan serbuk pensil atau krayon menggunakan jari, kapas, atau kertas gulung untuk menciptakan kesan halus dan gelap terang disebut ....",
    "p": ["Arsir", "Dussel (gosok)", "Pointilis", "Blok"],
    "b": 1,
    "bahas": "Teknik dussel menciptakan efek bayangan halus dengan cara menggosok goresan pensil."
  },
  {
    "q": "Gambar yang dibuat untuk menjelaskan atau memperindah isi sebuah cerita, buku pelajaran, atau artikel majalah disebut gambar ....",
    "p": ["Ilustrasi", "Dekoratif", "Perspektif", "Sketsa arsitek"],
    "b": 0,
    "bahas": "Gambar ilustrasi berfungsi menerangkan, memperjelas, atau menghiasi sebuah naskah cerita maupun informasi."
  },
  {
    "q": "Gambar ilustrasi yang bertujuan menyindir atau mengkritik suatu keadaan dengan melebih-lebihkan ciri khas tokohnya secara lucu disebut ....",
    "p": ["Kartun", "Karikatur", "Komik", "Vignette"],
    "b": 1,
    "bahas": "Karikatur menampilkan tokoh dengan bagian tubuh tertentu yang dilebih-lebihkan untuk tujuan humor atau kritik."
  },
  {
    "q": "Cerita bergambar yang disusun dalam kotak-kotak panel berurutan dan dilengkapi balon kata percakapan disebut ....",
    "p": ["Poster", "Komik", "Mozaik", "Relief"],
    "b": 1,
    "bahas": "Komik memadukan gambar berurutan dan teks dialog untuk menyampaikan sebuah cerita."
  },
  {
    "svg": "<svg width='160' height='65' xmlns='http://w3.org'><path d='M15,45 Q35,15 55,45 T95,45 T135,45' fill='none' stroke='#16a34a' stroke-width='4'/><circle cx='35' cy='25' r='5' fill='#f43f5e'/><circle cx='75' cy='25' r='5' fill='#f43f5e'/><circle cx='115' cy='25' r='5' fill='#f43f5e'/></svg>",
    "q": "Perhatikan motif sulur daun dan bunga pada gambar di atas! Motif ragam hias yang meniru keindahan bentuk tumbuh-tumbuhan disebut motif ....",
    "p": ["Fauna", "Flora", "Geometris", "Figuratif"],
    "b": 1,
    "bahas": "Motif flora mengambil bentuk dasar dari tanaman seperti daun, bunga, buah, dan sulur."
  },
  {
    "q": "Motif ragam hias Nusantara yang mengambil bentuk hewan seperti burung cenderawasih, kupu-kupu, gajah, atau ikan disebut motif ....",
    "p": ["Flora", "Fauna", "Geometris", "Abstrak"],
    "b": 1,
    "bahas": "Motif fauna terinspirasi dari berbagai jenis satwa yang digayakan (stilasi)."
  },
  {
    "q": "Teknik menggayakan atau menyederhanakan bentuk asli objek alam (seperti daun atau burung) menjadi motif hias yang lebih indah tanpa menghilangkan ciri khasnya disebut ....",
    "p": ["Stilasi", "Deformasi", "Distorsi", "Komposisi"],
    "b": 0,
    "bahas": "Stilasi adalah teknik menggayakan bentuk objek alam menjadi bentuk dekoratif pada ragam hias."
  },
  {
    "q": "Kerajinan tradisional yang dibuat dengan menyilangkan helai bahan pipih seperti daun pandan, janur, atau irisan bambu secara teratur disebut ....",
    "p": ["Anyaman", "Ukiran kayu", "Cor logam", "Tenun ikat"],
    "b": 0,
    "bahas": "Anyaman adalah seni kerajinan menyilangkan bahan lungsi dan pakan hingga membentuk pola rapi."
  },
  {
    "q": "Motif anyaman yang dibuat dengan menyilangkan dua helai pakan sekaligus secara bergantian (pola 2-2) disebut anyaman ....",
    "p": ["Tunggal", "Ganda (kepang / bilik)", "Tiga sumbu", "Lilit bebas"],
    "b": 1,
    "bahas": "Anyaman ganda menyilangkan dua bilah sekaligus sehingga menghasilkan pola zig-zag seperti kepang."
  },
  {
    "q": "Daun tanaman yang banyak tumbuh di pesisir pantai Indonesia dan sering dianyam menjadi tikar, topi, maupun tas cantik setelah dikeringkan adalah daun ....",
    "p": ["Pandan duri / pandan laut", "Pisang batu", "Jambu air", "Pepaya"],
    "b": 0,
    "bahas": "Daun pandan laut memiliki serat panjang, kuat, dan lentur setelah direbus dan dikeringkan untuk bahan anyaman."
  },
  {
    "q": "Seni merangkai dan menyimpul tali dengan tangan hingga menghasilkan benda fungsional seperti gantungan pot, gelang, atau tirai hias disebut ....",
    "p": ["Makrame", "Sulam pita", "Rajut jarum", "Batik jumputan"],
    "b": 0,
    "bahas": "Makrame merupakan kerajinan simpul-menyimpul tali menggunakan tangan."
  },
  {
    "q": "Simpul dalam kerajinan tali-temali yang mudah dilepaskan kembali apabila ditarik salah satu ujung talinya disebut simpul ....",
    "p": ["Mati", "Hidup (pita)", "Jangkar", "Pangkal"],
    "b": 1,
    "bahas": "Simpul hidup digunakan untuk ikatan sementara yang mudah dibuka kembali."
  },
  {
    "q": "Simpul yang sangat kuat, tidak mudah bergeser, dan digunakan untuk mengakhiri ikatan tali agar tidak terlepas disebut simpul ....",
    "p": ["Mati", "Hidup", "Rantai", "Gelung"],
    "b": 0,
    "bahas": "Simpul mati mengunci dua ujung tali secara kuat agar tidak mudah lepas."
  },
  {
    "q": "Daerah di Pulau Madura yang terkenal sebagai pusat kerajinan ukiran kayu halus dengan motif flora dan naga yang indah adalah ....",
    "p": ["Karduluk (Sumenep)", "Kamal (Bangkalan)", "Sampang Kota", "Tlanakan (Pamekasan)"],
    "b": 0,
    "bahas": "Desa Karduluk di Kecamatan Pragaan, Kabupaten Sumenep, terkenal sebagai sentra seni ukir kayu khas Madura."
  },
  {
    "q": "Bahan berikut yang termasuk bahan lunak buatan untuk membuat karya kerajinan tiga dimensi adalah ....",
    "p": [
      "Plastisin dan sabun batangan",
      "Tanah liat dan getah nyatu",
      "Batu kali dan kayu jati",
      "Bambu dan rotan"
    ],
    "b": 0,
    "bahas": "Plastisin, sabun batangan, dan lilin parafin adalah bahan lunak buatan pabrik yang mudah dibentuk atau diukir."
  },
  {
    "q": "Teknik pembuatan karya seni rupa tiga dimensi dengan cara mengurangi atau membuang bagian bahan yang tidak diperlukan menggunakan alat pahat atau pisau kecil disebut teknik ....",
    "p": ["Ukir / Pahat", "Butsir", "Cor / Tuang", "Anyam"],
    "b": 0,
    "bahas": "Teknik ukir atau pahat mengurangi sedikit demi sedikit bahan seperti kayu, batu, atau sabun hingga terbentuk pola."
  },
  {
    "q": "Alat yang berfungsi sebagai tempat mencampur dan menyiapkan berbagai warna cat sebelum disapukan ke kanvas atau kertas gambar adalah ....",
    "p": ["Palet", "Easel (penyangga kanvas)", "Canting", "Pahat"],
    "b": 0,
    "bahas": "Palet adalah wadah cekung kecil untuk meletakkan dan mencampur cat."
  },
  {
    "svg": "<svg width='150' height='65' xmlns='http://w3.org'><rect x='25' y='15' width='100' height='35' rx='6' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><text x='75' y='37' font-size='10' font-weight='bold' text-anchor='middle' fill='#1e40af'>IKAT CELUP</text></svg>",
    "q": "Teknik pewarnaan kain tradisional dengan cara mengikat sebagian kain menggunakan tali atau karet sebelum dicelupkan ke dalam larutan pewarna seperti pada label gambar di atas disebut ....",
    "p": ["Batik jumputan (tie dye)", "Batik cap tembaga", "Sablon layar", "Tenun songket"],
    "b": 0,
    "bahas": "Batik jumputan atau ikat celup menghasilkan motif lingkaran dan garis unik dari bagian kain yang diikat erat."
  },
  {
    "q": "Unsur ruang dalam gambar dua dimensi bersifat semu, yang dapat diciptakan melalui penerapan teknik ....",
    "p": [
      "Perspektif, gelap terang, dan ukuran benda jauh-dekat",
      "Membuat kertas menjadi sangat tebal",
      "Mewarnai seluruh bidang dengan satu warna datar",
      "Menghapus garis tepi gambar"
    ],
    "b": 0,
    "bahas": "Kesan ruang kedalaman pada gambar dua dimensi ditimbulkan oleh perspektif dan gradasi gelap terang."
  },
  {
    "q": "Karya seni rupa yang memiliki ukuran panjang, lebar, dan tinggi sehingga memiliki volume serta dapat dilihat dari berbagai sisi disebut karya seni rupa ....",
    "p": ["Dua dimensi", "Tiga dimensi", "Satu dimensi", "Grafis datar"],
    "b": 1,
    "bahas": "Karya tiga dimensi memiliki volume/ruang nyata, seperti patung, guci keramik, dan anyaman bakul."
  },
  {
    "q": "Fungsi utama pameran seni rupa yang diselenggarakan di lingkungan sekolah dasar adalah ....",
    "p": [
      "Wadah apresiasi karya siswa dan sarana melatih rasa percaya diri",
      "Ajang mencari kesalahan gambar teman",
      "Menggantikan seluruh jam pelajaran olahraga",
      "Menjual barang-barang bekas yang rusak"
    ],
    "b": 0,
    "bahas": "Pameran sekolah melatih siswa menghargai proses kreatif diri sendiri maupun teman sebaya."
  },
  {
    "q": "Bahan pewarna alami yang sering digunakan dalam kerajinan tekstil tradisional untuk menghasilkan warna kuning cerah adalah ....",
    "p": ["Rimpang kunyit", "Daun pandan suji", "Kulit kayu mahoni", "Arang tempurung kelapa"],
    "b": 0,
    "bahas": "Kunyit menghasilkan zat warna kuning alami yang aman dan ramah lingkungan."
  },
  {
    "q": "Ketika membuat kerajinan anyaman kertas warna di kelas, sikap kerja yang perlu dibiasakan agar hasil karya tampak rapi adalah ....",
    "p": [
      "Mengukur lebar irisan kertas sama besar, teliti, dan sabar saat menyilangkan",
      "Memotong kertas secara asal-asalan tanpa penggaris",
      "Menarik kertas terlalu kencang hingga robek",
      "Bekerja terburu-buru agar cepat selesai"
    ],
    "b": 0,
    "bahas": "Ketelitian dalam mengukur dan kesabaran saat menyilangkan bilah menghasilkan anyaman yang rapat dan rapi."
  },
  {
    "q": "Nilai estetika dalam sebuah karya seni rupa berkaitan erat dengan ....",
    "p": [
      "Keindahan, keharmonisan, dan daya tarik visual karya tersebut",
      "Berat timbangan bahan yang digunakan",
      "Mahalnya harga bingkai kayu",
      "Lamanya waktu penyimpanan di gudang"
    ],
    "b": 0,
    "bahas": "Nilai estetika adalah nilai keindahan yang dapat dirasakan melalui pengamatan terhadap unsur dan prinsip seni."
  },
  {
    "q": "Cara yang bijak untuk memanfaatkan barang bekas seperti kardus dan sedotan plastik dalam pelajaran seni rupa adalah ....",
    "p": [
      "Mengolahnya menjadi karya kerajinan hias atau alat peraga yang bermanfaat",
      "Membakarnya di halaman belakang sekolah",
      "Membuangnya ke saluran air",
      "Menumpuknya di sudut ruang kelas"
    ],
    "b": 0,
    "bahas": "Mendaur ulang barang bekas menjadi karya seni membantu mengurangi sampah sekaligus mengasah kreativitas."
  }
]);

window.tambahPaketUjian("5", "mtk", "UTS Semester 1", [
  {
    "q": "Bilangan 74.805 dibaca ....",
    "p": [
      "Tujuh puluh empat ribu delapan ratus lima puluh",
      "Tujuh puluh empat ribu delapan ratus lima",
      "Tujuh puluh empat ribu delapan puluh lima",
      "Tujuh ribu empat ratus delapan puluh lima"
    ],
    "b": 1,
    "bahas": "74.000 (tujuh puluh empat ribu) + 800 (delapan ratus) + 5 (lima) = tujuh puluh empat ribu delapan ratus lima."
  },
  {
    "q": "Lambang bilangan dari 'sembilan puluh dua ribu tiga ratus empat belas' adalah ....",
    "p": ["92.341", "92.314", "92.034", "90.234"],
    "b": 1,
    "bahas": "92.000 + 300 + 14 = 92.314."
  },
  {
    "q": "Pada bilangan 68.491, angka yang menempati nilai tempat ratusan adalah ....",
    "p": ["6", "8", "4", "9"],
    "b": 2,
    "bahas": "6 = puluhan ribu, 8 = ribuan, 4 = ratusan, 9 = puluhan, 1 = satuan."
  },
  {
    "q": "Selisih nilai angka 7 dan angka 3 pada bilangan 75.320 adalah ....",
    "p": ["69.700", "69.970", "67.000", "40.000"],
    "b": 0,
    "bahas": "Nilai angka 7 = 70.000 dan nilai angka 3 = 300. Selisih = 70.000 - 300 = 69.700."
  },
  {
    "svg": "<svg width='180' height='65' xmlns='http://w3.org'><rect x='12' y='14' width='58' height='36' rx='6' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='41' y='37' font-size='11' font-weight='bold' text-anchor='middle'>54.890</text><circle cx='90' cy='32' r='12' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><text x='90' y='37' font-size='12' font-weight='bold' text-anchor='middle'>?</text><rect x='110' y='14' width='58' height='36' rx='6' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='139' y='37' font-size='11' font-weight='bold' text-anchor='middle'>54.980</text></svg>",
    "q": "Tanda perbandingan yang tepat untuk mengganti tanda tanya (?) pada gambar di atas adalah ....",
    "p": ["<", ">", "=", "+"],
    "b": 0,
    "bahas": "54.890 lebih kecil daripada 54.980, sehingga tanda perbandingan yang benar adalah '<'."
  },
  {
    "q": "Urutan bilangan berikut dari yang terbesar ke terkecil yang benar adalah ....",
    "p": [
      "45.670; 45.760; 46.570; 46.750",
      "46.750; 46.570; 45.760; 45.670",
      "46.570; 46.750; 45.760; 45.670",
      "45.760; 45.670; 46.750; 46.570"
    ],
    "b": 1,
    "bahas": "Urutan dari nilai terbesar ke terkecil adalah 46.750; 46.570; 45.760; 45.670."
  },
  {
    "q": "Dekomposisi (uraian nilai tempat) yang benar dari bilangan 83.506 adalah ....",
    "p": [
      "80.000 + 3.000 + 500 + 6",
      "80.000 + 3.000 + 50 + 6",
      "80.000 + 300 + 50 + 6",
      "8.000 + 300 + 50 + 6"
    ],
    "b": 0,
    "bahas": "83.506 = 80.000 + 3.000 + 500 + 0 + 6."
  },
  {
    "q": "Hasil penjumlahan dari 47.850 + 26.475 adalah ....",
    "p": ["73.325", "74.225", "74.325", "75.325"],
    "b": 2,
    "bahas": "47.850 + 26.475 = 74.325."
  },
  {
    "q": "Hasil pengurangan dari 80.000 - 34.625 adalah ....",
    "p": ["45.375", "45.475", "46.375", "55.375"],
    "b": 0,
    "bahas": "80.000 - 34.625 = 45.375."
  },
  {
    "q": "Ayah memiliki uang Rp95.000,00. Uang tersebut dibelikan beras seharga Rp58.500,00 dan gula pasir seharga Rp17.500,00. Sisa uang Ayah sekarang adalah ....",
    "p": ["Rp18.000,00", "Rp19.000,00", "Rp20.000,00", "Rp21.000,00"],
    "b": 1,
    "bahas": "Total belanja = 58.500 + 17.500 = Rp76.000,00. Sisa uang = 95.000 - 76.000 = Rp19.000,00."
  },
  {
    "q": "Sebuah koperasi sekolah membeli 35 dus buku tulis. Setiap dus berisi 40 buku tulis. Jumlah seluruh buku tulis yang dibeli koperasi adalah ....",
    "p": ["1.200 buku", "1.300 buku", "1.400 buku", "1.500 buku"],
    "b": 2,
    "bahas": "35 × 40 = 1.400 buku tulis."
  },
  {
    "q": "Hasil pembagian dari 3.648 : 12 adalah ....",
    "p": ["34", "304", "340", "403"],
    "b": 1,
    "bahas": "3.648 : 12 = 304."
  },
  {
    "q": "Kelipatan persekutuan pertama (terkecil) dari bilangan 8 dan 12 adalah ....",
    "p": ["16", "24", "36", "48"],
    "b": 1,
    "bahas": "Kelipatan 8: 8, 16, 24... Kelipatan 12: 12, 24... Jadi KPK = 24."
  },
  {
    "q": "Semua faktor dari bilangan 28 adalah ....",
    "p": [
      "1, 2, 4, 7, 14, 28",
      "1, 2, 4, 6, 14, 28",
      "1, 2, 7, 14, 28",
      "2, 4, 7, 14, 28"
    ],
    "b": 0,
    "bahas": "28 = 1 × 28, 2 × 14, 4 × 7. Jadi faktornya adalah 1, 2, 4, 7, 14, 28."
  },
  {
    "q": "Bilangan prima yang terletak di antara 20 dan 30 adalah ....",
    "p": ["21 dan 27", "23 dan 29", "23 dan 27", "25 dan 29"],
    "b": 1,
    "bahas": "Bilangan prima di antara 20 dan 30 hanyalah 23 dan 29."
  },
  {
    "svg": "<svg width='150' height='85' xmlns='http://w3.org'><circle cx='75' cy='18' r='12' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='75' y='22' font-size='10' font-weight='bold' text-anchor='middle'>36</text><line x1='67' y1='28' x2='45' y2='45' stroke='#0f172a' stroke-width='1.5'/><line x1='83' y1='28' x2='105' y2='45' stroke='#0f172a' stroke-width='1.5'/><circle cx='45' cy='52' r='10' fill='#bae6fd' stroke='#0284c7'/><text x='45' y='55' font-size='9' text-anchor='middle'>2</text><circle cx='105' cy='52' r='10' fill='#bae6fd' stroke='#0284c7'/><text x='105' y='55' font-size='9' text-anchor='middle'>18</text></svg>",
    "q": "Perhatikan awal pohon faktor bilangan 36 pada gambar di atas! Faktorisasi prima lengkap dari bilangan 36 adalah ....",
    "p": ["2 × 3²", "2² × 3", "2² × 3²", "2³ × 3"],
    "b": 2,
    "bahas": "36 = 4 × 9 = 2² × 3²."
  },
  {
    "q": "Faktor Persekutuan Terbesar (FPB) dari 32 dan 48 adalah ....",
    "p": ["8", "12", "16", "24"],
    "b": 2,
    "bahas": "32 = 2⁵ dan 48 = 2⁴ × 3. FPB = 2⁴ = 16."
  },
  {
    "q": "Kelipatan Persekutuan Terkecil (KPK) dari 15 dan 20 adalah ....",
    "p": ["30", "45", "60", "90"],
    "b": 2,
    "bahas": "15 = 3 × 5 dan 20 = 2² × 5. KPK = 2² × 3 × 5 = 60."
  },
  {
    "q": "Pak Hasan ronda malam setiap 6 hari sekali, sedangkan Pak Rudi ronda malam setiap 8 hari sekali. Jika pada tanggal 2 September mereka ronda bersama, pada tanggal berapa mereka akan ronda bersama lagi?",
    "p": ["16 September", "24 September", "26 September", "30 September"],
    "b": 2,
    "bahas": "KPK dari 6 dan 8 adalah 24 hari. Tanggal bertemu lagi = 2 + 24 = 26 September."
  },
  {
    "q": "Siti memiliki 42 permen rasa jeruk dan 56 permen rasa stroberi. Permen tersebut akan dimasukkan ke dalam kantong plastik dengan isi setiap rasa sama banyak. Kantong plastik terbanyak yang dibutuhkan Siti adalah ....",
    "p": ["7 kantong", "14 kantong", "21 kantong", "28 kantong"],
    "b": 1,
    "bahas": "FPB dari 42 dan 56 adalah 14 kantong."
  },
  {
    "q": "Berdasarkan soal sebelumnya (42 permen jeruk dan 56 permen stroberi dibagi ke dalam 14 kantong), banyak permen rasa stroberi pada setiap kantong adalah ....",
    "p": ["3 permen", "4 permen", "6 permen", "7 permen"],
    "b": 1,
    "bahas": "56 permen stroberi : 14 kantong = 4 permen stroberi per kantong."
  },
  {
    "q": "Hasil dari 12.500 + 4.500 × 4 adalah ....",
    "p": ["30.500", "68.000", "28.500", "32.500"],
    "b": 0,
    "bahas": "Perkalian dikerjakan terlebih dahulu: 4.500 × 4 = 18.000. Lalu 12.500 + 18.000 = 30.500."
  },
  {
    "q": "Bilangan kelipatan 7 yang terletak di antara 30 dan 50 adalah ....",
    "p": ["35, 42, 49", "35, 40, 45", "32, 39, 46", "34, 41, 48"],
    "b": 0,
    "bahas": "7 × 5 = 35, 7 × 6 = 42, 7 × 7 = 49."
  },
  {
    "q": "FPB dari tiga bilangan sekaligus yaitu 18, 24, dan 30 adalah ....",
    "p": ["3", "6", "9", "12"],
    "b": 1,
    "bahas": "18 = 2 × 3², 24 = 2³ × 3, 30 = 2 × 3 × 5. FPB = 2 × 3 = 6."
  },
  {
    "q": "Seorang pedagang buah memiliki 1.250 buah apel. Sebanyak 475 buah terjual pada pagi hari dan 525 buah terjual pada sore hari. Sisa buah apel pedagang tersebut adalah ....",
    "p": ["200 buah", "250 buah", "300 buah", "350 buah"],
    "b": 1,
    "bahas": "Total terjual = 475 + 525 = 1.000 buah. Sisa = 1.250 - 1.000 = 250 buah."
  }
]);

window.tambahPaketUjian("5", "ipas", "UTS Semester 1", [
  {
    "q": "Sifat cahaya yang memungkinkan kita dapat melihat bayangan wajah kita sendiri saat berdiri di depan cermin adalah cahaya dapat ....",
    "p": ["Dibiaskan", "Dipantulkan", "Diuraikan", "Menembus benda gelap"],
    "b": 1,
    "bahas": "Cermin datar memantulkan cahaya secara teratur sehingga menghasilkan bayangan yang sama persis dengan bendanya."
  },
  {
    "q": "Benda-benda di bawah ini yang termasuk benda buram (translusen) yaitu hanya meneruskan sebagian cahaya dan menyebarkan sebagian lainnya adalah ....",
    "p": ["Kaca bening dan air jernih", "Kaca es (kaca buram) dan kertas kalkir", "Papan kayu dan tembok bata", "Besi dan buku tebal"],
    "b": 1,
    "bahas": "Kaca es dan kertas kalkir meneruskan cahaya secara baur/sebagian sehingga objek di baliknya tampak samar."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><polygon points='55,55 85,15 115,55' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><line x1='20' y1='38' x2='70' y2='38' stroke='#f8fafc' stroke-width='3'/><line x1='100' y1='32' x2='155' y2='22' stroke='#ef4444' stroke-width='2'/><line x1='102' y1='38' x2='155' y2='38' stroke='#22c55e' stroke-width='2'/><line x1='104' y1='44' x2='155' y2='54' stroke='#3b82f6' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar seberkas cahaya putih yang melewati prisma kaca di atas! Peristiwa terurainya cahaya putih menjadi berbagai warna spektrum cahaya disebut ....",
    "p": ["Refleksi", "Refraksi", "Dispersi cahaya", "Absorpsi"],
    "b": 2,
    "bahas": "Dispersi cahaya adalah penguraian cahaya polikromatik (putih) menjadi cahaya monokromatik (mejikuhibiniu)."
  },
  {
    "q": "Bagian mata bagian luar yang bening dan berfungsi melindungi bagian depan mata serta memfokuskan cahaya yang masuk pertama kali adalah ....",
    "p": ["Kornea", "Retina", "Lensa mata", "Saraf mata"],
    "b": 0,
    "bahas": "Kornea adalah selaput bening di bagian paling depan bola mata yang meneruskan cahaya menuju pupil."
  },
  {
    "q": "Layar tempat jatuhnya bayangan benda di bagian belakang dalam bola mata yang peka terhadap cahaya disebut ....",
    "p": ["Iris", "Pupil", "Retina (selaput jala)", "Sklera"],
    "b": 2,
    "bahas": "Retina menangkap bayangan benda dan mengubahnya menjadi sinyal saraf menuju otak."
  },
  {
    "q": "Gangguan kesehatan mata pada lansia yang tidak dapat melihat dengan jelas pada jarak dekat maupun jarak jauh akibat melemahnya daya akomodasi lensa mata disebut ....",
    "p": ["Miopi", "Hipermetropi", "Presbiopi (mata tua)", "Buta warna"],
    "b": 2,
    "bahas": "Presbiopi atau mata tua dibantu dengan kacamata berlensa rangkap (bifokal)."
  },
  {
    "q": "Bunyi yang memiliki frekuensi lebih dari 20.000 Hz sehingga tidak dapat didengar oleh telinga manusia namun dapat didengar oleh kelelawar dan lumba-lumba disebut bunyi ....",
    "p": ["Infrasonik", "Audiosonik", "Ultrasonik", "Supersonik"],
    "b": 2,
    "bahas": "Ultrasonik (>20.000 Hz) didengar kelelawar dan lumba-lumba; audiosonik (20–20.000 Hz) didengar manusia."
  },
  {
    "q": "Perambatan bunyi berlangsung paling cepat melalui medium zat ....",
    "p": ["Padat (seperti besi dan kayu)", "Cair (seperti air laut)", "Gas (seperti udara)", "Hampa udara"],
    "b": 0,
    "bahas": "Partikel zat padat tersusun sangat rapat sehingga gelombang bunyi merambat paling cepat melalui zat padat."
  },
  {
    "q": "Bahan-bahan lunak dan berpori yang dipasang pada dinding studio musik atau gedung bioskop untuk mencegah terjadinya gaung disebut bahan ....",
    "p": ["Pemantul bunyi", "Peredam bunyi (seperti karpet, busa, dan gabus)", "Penghantar listrik", "Pembias cahaya"],
    "b": 1,
    "bahas": "Karpet, busa, wol, dan gabus menyerap gelombang bunyi sehingga mencegah gaung."
  },
  {
    "q": "Tiga tulang pendengaran di telinga tengah yang berfungsi meneruskan getaran dari gendang telinga ke rumah siput (koklea) adalah ....",
    "p": [
      "Tulang martil, tulang landasan, dan tulang sanggurdi",
      "Tulang hasta, tulang pengumpil, dan tulang kering",
      "Tulang rusuk, tulang dada, dan tulang belikat",
      "Tulang dahi, tulang pipi, dan tulang rahang"
    ],
    "b": 0,
    "bahas": "Tulang martil, landasan, dan sanggurdi memperkuat serta meneruskan getaran suara ke telinga dalam."
  },
  {
    "q": "Saluran di telinga tengah yang menghubungkan rongga telinga dengan rongga mulut untuk menjaga keseimbangan tekanan udara pada gendang telinga disebut saluran ....",
    "p": ["Eustachius", "Setengah lingkaran", "Koklea", "Saraf pendengaran"],
    "b": 0,
    "bahas": "Saluran Eustachius menyeimbangkan tekanan udara di dalam dan di luar gendang telinga."
  },
  {
    "q": "Peristiwa makan dan dimakan antar-makhluk hidup dengan urutan tertentu di dalam suatu ekosistem disebut ....",
    "p": ["Rantai makanan", "Simbiosis", "Metamorfosis", "Fotosintesis"],
    "b": 0,
    "bahas": "Rantai makanan adalah perjalanan memakan dan dimakan dengan urutan tertentu antarmakhluk hidup."
  },
  {
    "svg": "<svg width='190' height='65' xmlns='http://w3.org'><rect x='5' y='18' width='38' height='28' rx='5' fill='#dcfce7' stroke='#16a34a'/><text x='24' y='35' font-size='8' text-anchor='middle'>Rumput</text><text x='49' y='35' font-size='10'>→</text><rect x='56' y='18' width='40' height='28' rx='5' fill='#fef08a' stroke='#ca8a04'/><text x='76' y='35' font-size='8' text-anchor='middle'>Belalang</text><text x='101' y='35' font-size='10'>→</text><rect x='108' y='18' width='34' height='28' rx='5' fill='#fed7aa' stroke='#ea580c'/><text x='125' y='35' font-size='8' text-anchor='middle'>Katak</text><text x='147' y='35' font-size='10'>→</text><rect x='154' y='18' width='32' height='28' rx='5' fill='#fecaca' stroke='#dc2626'/><text x='170' y='35' font-size='8' text-anchor='middle'>Ular</text></svg>",
    "q": "Perhatikan rantai makanan di ekosistem padang rumput pada gambar di atas! Makhluk hidup yang berperan sebagai konsumen tingkat I (konsumen primer) adalah ....",
    "p": ["Rumput", "Belalang", "Katak", "Ular"],
    "b": 1,
    "bahas": "Rumput adalah produsen, sedangkan belalang (pemakan tumbuhan langsung) adalah konsumen tingkat I."
  },
  {
    "q": "Kumpulan dari beberapa rantai makanan yang saling berhubungan dan tumpang tindih di dalam suatu ekosistem disebut ....",
    "p": ["Jaring-jaring makanan", "Piramida energi", "Populasi", "Habitat"],
    "b": 0,
    "bahas": "Jaring-jaring makanan adalah gabungan banyak rantai makanan yang saling terhubung dalam ekosistem."
  },
  {
    "q": "Dalam piramida makanan, kelompok makhluk hidup yang memiliki jumlah populasi dan energi paling besar sehingga berada di bagian paling dasar adalah ....",
    "p": ["Produsen (tumbuhan hijau)", "Konsumen tingkat I", "Konsumen tingkat II", "Konsumen puncak"],
    "b": 0,
    "bahas": "Produsen berada di dasar piramida makanan karena menangkap energi matahari secara langsung untuk menyokong kehidupan di atasnya."
  },
  {
    "q": "Aliran energi yang terjadi di dalam sebuah rantai makanan berpindah dari ....",
    "p": [
      "Matahari → produsen → konsumen → pengurai",
      "Konsumen puncak → produsen → matahari",
      "Pengurai → konsumen → produsen",
      "Batu dan air → konsumen tingkat II"
    ],
    "b": 0,
    "bahas": "Energi cahaya matahari diubah tumbuhan menjadi energi kimia lalu mengalir ke konsumen dan berakhir di pengurai."
  },
  {
    "q": "Di ekosistem kebun terdapat tanaman sawi, ulat, burung pipit, dan kucing. Jika petani menyemprotkan pestisida secara berlebihan hingga semua ulat mati, maka akibat yang langsung terjadi adalah ....",
    "p": [
      "Burung pipit kekurangan sumber makanan sehingga populasinya menurun",
      "Tanaman sawi ikut mati karena tidak ada ulat",
      "Populasi burung pipit bertambah sangat banyak",
      "Kucing berubah menjadi pemakan daun sawi"
    ],
    "b": 0,
    "bahas": "Karena ulat merupakan makanan burung pipit, hilangnya ulat menyebabkan burung pipit kehilangan makanannya."
  },
  {
    "q": "Benda di bawah ini yang dapat memantulkan cahaya paling baik untuk membuat alat periskop pada kapal selam adalah ....",
    "p": ["Cermin datar", "Kertas karton hitam", "Kain wol", "Kaca buram"],
    "b": 0,
    "bahas": "Periskop menggunakan dua buah cermin datar yang dipasang miring 45 derajat untuk memantulkan cahaya."
  },
  {
    "q": "Bayangan benda gelap akan terbentuk di belakang benda tersebut apabila cahaya mengenai benda yang bersifat ....",
    "p": ["Tidak tembus cahaya (opak)", "Bening dan transparan", "Tipis seperti plastik bening", "Cair seperti air jernih"],
    "b": 0,
    "bahas": "Cahaya merambat lurus dan tidak dapat menembus benda gelap (opak), sehingga terbentuk bayangan di belakangnya."
  },
  {
    "q": "Bunyi pantul yang terdengar jelas setelah bunyi asli selesai diucapkan, misalnya saat kita berteriak di tebing gunung yang tinggi, disebut ....",
    "p": ["Gema", "Gaung", "Desah", "Nada"],
    "b": 0,
    "bahas": "Gema terjadi bila jarak dinding pemantul sangat jauh sehingga bunyi pantul terdengar utuh sesudah bunyi asli."
  },
  {
    "q": "Hewan herbivora di bawah ini yang berperan sebagai konsumen tingkat I di ekosistem padang rumput adalah ....",
    "p": ["Zebra dan rusa", "Singa dan cheetah", "Burung elang dan ular", "Buaya dan ikan hiu"],
    "b": 0,
    "bahas": "Zebra dan rusa memakan rumput secara langsung sehingga berperan sebagai konsumen tingkat I."
  },
  {
    "q": "Faktor alam yang dapat menyebabkan perubahan dan kerusakan keseimbangan ekosistem secara tiba-tiba adalah ....",
    "p": [
      "Letusan gunung berapi, gempa bumi, dan tsunami",
      "Reboisasi hutan gundul",
      "Pembuatan taman kota",
      "Penanaman terumbu karang"
    ],
    "b": 0,
    "bahas": "Bencana alam seperti gunung meletus dan tsunami dapat merusak habitat makhluk hidup secara alami."
  },
  {
    "q": "Contoh tindakan manusia yang membantu menjaga keharmonisan dan keseimbangan ekosistem hutan adalah ....",
    "p": [
      "Melakukan sistem tebang pilih dan reboisasi (penanaman kembali)",
      "Membakar hutan untuk membuka lahan perkebunan",
      "Menangkap semua burung langka untuk dijual",
      "Membuang sampah beracun di pinggir hutan"
    ],
    "b": 0,
    "bahas": "Tebang pilih dan reboisasi menjaga kelestarian pohon dan habitat satwa di hutan."
  },
  {
    "q": "Cara merawat kesehatan indra pendengaran (telinga) agar tidak mengalami gangguan pendengaran adalah ....",
    "p": [
      "Menghindari mendengarkan musik dengan volume terlalu keras dan membersihkan daun telinga secara lembut",
      "Mengorek bagian dalam telinga menggunakan benda tajam atau peniti",
      "Mendengarkan earphone dengan suara maksimal sepanjang malam",
      "Membiarkan air kotor masuk ke dalam telinga"
    ],
    "b": 0,
    "bahas": "Suara terlalu keras dapat merusak gendang telinga, sedangkan benda tajam berisiko melukai saluran telinga."
  },
  {
    "q": "Mengapa kelestarian dekomposer (pengurai) seperti bakteri dan jamur tanah sangat penting bagi kesuburan tumbuhan?",
    "p": [
      "Karena pengurai mengembalikan zat hara dan mineral dari sisa makhluk hidup mati ke dalam tanah",
      "Karena pengurai memakan daun-daun tumbuhan yang masih hijau",
      "Karena pengurai menghalangi sinar matahari masuk ke bumi",
      "Karena pengurai membuat tanah menjadi keras seperti batu"
    ],
    "b": 0,
    "bahas": "Dekomposer mendaur ulang materi organik menjadi nutrisi mineral yang diserap kembali oleh akar tumbuhan."
  }
]);

window.tambahPaketUjian("5", "bindo", "UTS Semester 1", [
  {
    "q": "Kata sifat yang paling tepat untuk menggambarkan seseorang yang suka memberi bantuan dan berbagi kepada orang yang membutuhkan adalah ....",
    "p": ["Kikir", "Dermawan", "Angkuh", "Ceroboh"],
    "b": 1,
    "bahas": "Dermawan adalah kata sifat yang berarti pemurah hati dan suka beramal/berbagi kepada sesama."
  },
  {
    "q": "Kata dasar 'tolong' apabila diberi awalan 'pe-' akan berubah bentuk menjadi ....",
    "p": ["Petolong", "Penolong", "Pentolong", "Pengtolong"],
    "b": 1,
    "bahas": "Huruf awal 't' pada kata dasar 'tolong' luluh menjadi 'n-' saat bertemu awalan 'pe-', sehingga menjadi 'penolong'."
  },
  {
    "q": "Kata dasar 'bohong' jika mendapat imbuhan 'pe-' yang benar adalah ....",
    "p": ["Pebohong", "Pembohong", "Penbohong", "Pengbohong"],
    "b": 1,
    "bahas": "Kata dasar berawalan huruf 'b' yang mendapat awalan 'pe-' menjadi 'pem-', sehingga terbentuk kata 'pembohong'."
  },
  {
    "q": "Imbuhan 'pe-' pada kalimat 'Budi dikenal sebagai anak yang pendiam di kelasnya' menyatakan makna ....",
    "p": ["Alat untuk melakukan pekerjaan", "Sifat atau watak seseorang", "Pekerjaan atau profesi", "Penyebab sesuatu"],
    "b": 1,
    "bahas": "Kata 'pendiam' menunjukkan sifat atau karakter seseorang yang tidak banyak bicara."
  },
  {
    "q": "Sinonim (persamaan kata) dari kata 'cerdik' adalah ....",
    "p": ["Bodoh", "Pintar dan banyak akal", "Pemalas", "Penakut"],
    "b": 1,
    "bahas": "Cerdik bersinonim dengan pintar, pandai, dan cepat mengerti serta banyak akal."
  },
  {
    "q": "Antonim (lawan kata) dari kata 'dermawan' adalah ....",
    "p": ["Pemurah", "Kikir (pelit)", "Santun", "Ramah"],
    "b": 1,
    "bahas": "Lawan kata dari 'dermawan' (suka memberi) adalah 'kikir' atau 'pelit'."
  },
  {
    "q": "Perhatikan dua kalimat tunggal berikut:\nKalimat 1: Rina gemar membaca buku cerita.\nKalimat 2: Adiknya gemar menggambar pemandangan.\n\nPenggabungan kedua kalimat tersebut menjadi kalimat majemuk setara yang tepat adalah ....",
    "p": [
      "Rina gemar membaca buku cerita, sedangkan adiknya gemar menggambar pemandangan.",
      "Rina gemar membaca buku cerita karena adiknya gemar menggambar pemandangan.",
      "Rina gemar membaca buku cerita sehingga adiknya gemar menggambar pemandangan.",
      "Rina gemar membaca buku cerita agar adiknya gemar menggambar pemandangan."
    ],
    "b": 0,
    "bahas": "Konjungsi 'sedangkan' menggabungkan dua kalimat setara yang menyatakan perbedaan kegiatan."
  },
  {
    "q": "Kalimat berikut yang merupakan kalimat majemuk setara sebab-akibat adalah ....",
    "p": [
      "Dina belajar dengan tekun sehingga ia berhasil meraih juara kelas.",
      "Ayah membaca koran dan Ibu menyiram tanaman di halaman.",
      "Kamu ingin minum teh hangat atau jus jeruk dingin?",
      "Kakak rajin berolahraga, tetapi adiknya lebih suka bermain catur."
    ],
    "b": 0,
    "bahas": "Kata penghubung 'sehingga' menyatakan hubungan sebab-akibat."
  },
  {
    "q": "Keterangan waktu, tempat, dan suasana terjadinya peristiwa dalam sebuah cerita fiksi disebut ....",
    "p": ["Alur", "Latar (setting)", "Tema", "Amanat"],
    "b": 1,
    "bahas": "Latar meliputi tempat kejadian, waktu berlangsungnya peristiwa, dan suasana cerita."
  },
  {
    "q": "Pesan kebaikan atau nasihat yang ingin disampaikan pengarang kepada pembaca melalui sebuah cerita disebut ....",
    "p": ["Tokoh", "Amanat", "Watak", "Judul"],
    "b": 1,
    "bahas": "Amanat adalah pesan moral yang dapat dipetik dari cerita."
  },
  {
    "q": "Kalimat di bawah ini yang menggunakan majas PERSONIFIKASI adalah ....",
    "p": [
      "Suaranya menggelegar membelah angkasa saat bernyanyi.",
      "Pohon-pohon kelapa di tepi pantai menari-nari tertiup angin.",
      "Ia dikenal sebagai bintang kelas di sekolahnya.",
      "Tas sekolah ini beratnya berton-ton."
    ],
    "b": 1,
    "bahas": "Kata 'menari-nari' memberikan sifat manusia kepada benda mati (pohon kelapa)."
  },
  {
    "q": "Perhatikan kalimat berikut: 'Rani adalah bunga desa yang ramah kepada semua warga.' Kata 'bunga desa' dalam kalimat tersebut menggunakan majas ....",
    "p": ["Metafora", "Personifikasi", "Hiperbola", "Litotes"],
    "b": 0,
    "bahas": "Majas metafora membandingkan seseorang secara langsung dengan sesuatu yang memiliki sifat serupa ('bunga desa' = gadis cantik/kebanggaan desa)."
  },
  {
    "q": "Penulisan kalimat langsung yang benar sesuai aturan tanda baca bahasa Indonesia adalah ....",
    "p": [
      "Ibu bertanya, 'Apakah kamu sudah mengerjakan PR?'",
      "Ibu bertanya 'Apakah kamu sudah mengerjakan PR?'",
      "Ibu bertanya, Apakah kamu sudah mengerjakan PR?",
      "'Ibu bertanya', Apakah kamu sudah mengerjakan PR?"
    ],
    "b": 0,
    "bahas": "Kalimat langsung dipisahkan tanda koma (,) setelah pengiring dan diapit tanda petik dengan huruf kapital di awal kutipan."
  },
  {
    "q": "Ubahlah kalimat tidak langsung berikut menjadi kalimat langsung yang tepat!\nKalimat tidak langsung: Ayah mengatakan bahwa besok pagi kami akan berkunjung ke rumah nenek.",
    "p": [
      "Ayah berkata, 'Besok pagi kita akan berkunjung ke rumah nenek.'",
      "Ayah berkata, 'Besok pagi mereka akan berkunjung ke rumah nenek.'",
      "Saya berkata kepada Ayah, 'Besok pagi kita ke rumah nenek.'",
      "Ayah bertanya, 'Kapan kita berkunjung ke rumah nenek?'"
    ],
    "b": 0,
    "bahas": "Kata ganti 'kami' pada kalimat tidak langsung berubah menjadi 'kita' pada kalimat langsung yang diucapkan Ayah."
  },
  {
    "svg": "<svg width='175' height='75' xmlns='http://w3.org'><rect x='25' y='12' width='125' height='50' rx='6' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><line x1='45' y1='12' x2='45' y2='62' stroke='#1d4ed8' stroke-width='3'/><text x='95' y='34' font-size='9' font-weight='bold' text-anchor='middle' fill='#1e3a8a'>ENSIKLOPEDIA</text><text x='95' y='48' font-size='8' text-anchor='middle' fill='#0f172a'>Sains &amp; Alam Semesta</text></svg>",
    "q": "Perhatikan sampul buku pada gambar di atas! Buku ensiklopedia yang berisi fakta dan ilmu pengetahuan termasuk jenis buku ....",
    "p": ["Fiksi", "Nonfiksi", "Komik fantasi", "Dongeng rakyat"],
    "b": 1,
    "bahas": "Buku nonfiksi disusun berdasarkan data, fakta nyata, dan ilmu pengetahuan, seperti ensiklopedia dan buku pelajaran."
  },
  {
    "q": "Bagian depan sebuah buku yang berisi judul buku, nama penulis, nama penerbit, dan gambar ilustrasi utama disebut ....",
    "p": ["Sampul depan (kover)", "Daftar pustaka", "Indeks", "Glosarium"],
    "b": 0,
    "bahas": "Sampul depan memuat judul, penulis, ilustrasi menarik, dan identitas penerbit."
  },
  {
    "q": "Orang yang bertugas menggambar ilustrasi untuk memperindah isi sebuah buku cerita disebut ....",
    "p": ["Ilustrator", "Editor", "Penerbit", "Pencetak"],
    "b": 0,
    "bahas": "Ilustrator adalah seniman yang membuat gambar ilustrasi pada buku."
  },
  {
    "q": "Bacalah paragraf berikut!\nSetiap anak memiliki bakat dan keunikan yang berbeda-beda. Ada anak yang pandai berhitung, ada yang mahir melukis, dan ada pula yang berbakat di bidang olahraga. Semua keunikan tersebut harus disyukuri dan dikembangkan dengan latihan yang tekun.\n\nIde pokok paragraf di atas adalah ....",
    "p": [
      "Cara melatih kemampuan berhitung cepat",
      "Setiap anak memiliki bakat dan keunikan berbeda yang perlu dikembangkan",
      "Olahraga lebih penting daripada melukis",
      "Semua anak harus memiliki hobi yang sama"
    ],
    "b": 1,
    "bahas": "Kalimat utama di awal paragraf menjelaskan bahwa setiap anak memiliki bakat dan keunikan berbeda."
  },
  {
    "q": "Berdasarkan paragraf tentang keunikan anak di atas, bagaimana cara mengembangkan bakat yang kita miliki?",
    "p": [
      "Dengan bersyukur dan berlatih secara tekun",
      "Dengan membandingkan diri untuk merendahkan teman",
      "Dengan berdiam diri tanpa mencoba hal baru",
      "Dengan meniru semua hobi teman"
    ],
    "b": 0,
    "bahas": "Pada kalimat terakhir dijelaskan keunikan tersebut harus disyukuri dan dikembangkan dengan latihan yang tekun."
  },
  {
    "q": "Kata dasar 'pilih' apabila diberi awalan 'pe-' akan menjadi kata ....",
    "p": ["Pepilih", "Pemilih", "Penpilih", "Pengpilih"],
    "b": 1,
    "bahas": "Huruf awal 'p' luluh menjadi 'm-' saat bertemu awalan 'pe-', menjadi 'pemilih'."
  },
  {
    "q": "Sinonim dari kata 'mahir' dalam kalimat 'Rani sangat mahir memainkan alat musik biola' adalah ....",
    "p": ["Terampil / pandai", "Kaku", "Lambat", "Ragu-ragu"],
    "b": 0,
    "bahas": "Mahir berarti sangat terlatih, cakap, dan terampil mengerjakan sesuatu."
  },
  {
    "q": "Antonim (lawan kata) dari kata 'ramah' adalah ....",
    "p": ["Sopan", "Judas / ketus", "Santun", "Akrab"],
    "b": 1,
    "bahas": "Lawan kata dari 'ramah' (manis tutur kata dan sikapnya) adalah 'ketus' atau 'judes'."
  },
  {
    "q": "Urutan proses pembuatan sebuah buku cerita hingga sampai ke tangan pembaca yang benar adalah ....",
    "p": [
      "Penulis menulis naskah → editor menyunting naskah → ilustrator menggambar → penerbit mencetak buku",
      "Penerbit mencetak buku → penulis menulis naskah → toko menjual buku",
      "Toko menjual buku → ilustrator menggambar → editor menyunting",
      "Editor menyunting → pembaca membeli → penulis menulis naskah"
    ],
    "b": 0,
    "bahas": "Alur penerbitan buku dimulai dari penulisan naskah, penyuntingan oleh editor, pembuatan ilustrasi, pencetakan, lalu distribusi."
  },
  {
    "q": "Halaman pada bagian akhir buku nonfiksi yang memuat daftar sumber buku rujukan yang digunakan oleh penulis disebut ....",
    "p": ["Daftar pustaka", "Daftar isi", "Kata pengantar", "Biografi penulis"],
    "b": 0,
    "bahas": "Daftar pustaka mencantumkan sumber referensi yang dipakai penulis dalam menyusun buku."
  },
  {
    "q": "Sikap yang tepat terhadap perbedaan sifat dan hobi antarteman di kelas adalah ....",
    "p": [
      "Saling menghargai, mendukung bakat masing-masing, dan berteman dengan rukun",
      "Mengejek teman yang memiliki hobi berbeda",
      "Memaksa teman menyukai permainan yang kita sukai",
      "Hanya mau berteman dengan anak yang sama hobinya"
    ],
    "b": 0,
    "bahas": "Menghargai keunikan dan perbedaan setiap teman menciptakan persahabatan yang indah di kelas."
  }
]);

window.tambahPaketUjian("5", "pai", "UTS Semester 1", [
  {
    "q": "Surah Al-Ma'un merupakan surah ke-107 di dalam Al-Qur'an dan terdiri atas .... ayat.",
    "p": ["5", "6", "7", "8"],
    "b": 2,
    "bahas": "Surah Al-Ma'un berjumlah 7 ayat dan tergolong surah Makkiyah."
  },
  {
    "q": "Lafaz ayat pertama Surah Al-Ma'un berbunyi 'Ara'aital-lazi yukazzibu bid-din' yang memiliki arti ....",
    "p": [
      "Tahukah kamu (orang) yang mendustakan agama?",
      "Maka itulah orang yang menghardik anak yatim",
      "Maka celakalah orang yang salat",
      "Yang berbuat ria"
    ],
    "b": 0,
    "bahas": "'Ara'aital-lazi yukazzibu bid-din' artinya Tahukah kamu (orang) yang mendustakan agama?"
  },
  {
    "q": "Dalam Q.S. Al-Ma'un ayat 2 dijelaskan bahwa salah satu ciri orang yang mendustakan agama adalah orang yang .... anak yatim.",
    "p": ["Menyayangi", "Menghardik (membentak dan menyakiti)", "Memberi makan", "Mendoakan"],
    "b": 1,
    "bahas": "'Fazalikal-lazi yadu''ul-yatim' artinya Maka itulah orang yang menghardik anak yatim."
  },
  {
    "q": "Anak yang ditinggal wafat oleh ayah kandungnya sebelum ia mencapai usia balig disebut ....",
    "p": ["Anak yatim", "Anak piatu", "Ibnu sabil", "Mualaf"],
    "b": 0,
    "bahas": "Anak yatim adalah anak yang ayahnya telah meninggal dunia sebelum anak tersebut dewasa (balig)."
  },
  {
    "q": "Dalam Q.S. Al-Ma'un ayat 7 disebutkan bahwa orang-orang yang enggan memberikan bantuan berupa barang-barang yang berguna kepada sesama disebut ....",
    "p": ["Wayamna'unal-ma'un", "Allazina hum yura'un", "Fawailul lil-musallin", "Allazina hum 'an salatihim sahun"],
    "b": 0,
    "bahas": "'Wayamna'unal-ma'un' artinya dan enggan (memberikan) bantuan (barang-barang yang berguna)."
  },
  {
    "q": "Hukum bacaan mim sukun (مْ) apabila bertemu dengan huruf ba (ب) dibaca samar di bibir disertai dengung disebut ....",
    "p": ["Ikhfa syafawi", "Idgham mimi", "Izhar syafawi", "Iqlab"],
    "b": 0,
    "bahas": "Mim sukun bertemu huruf ba (ب) hukum bacaannya adalah Ikhfa Syafawi."
  },
  {
    "q": "Hukum bacaan mim sukun (مْ) apabila bertemu dengan huruf hijaiyah selain huruf mim (م) dan ba (ب) dibaca jelas di bibir tanpa dengung disebut ....",
    "p": ["Izhar syafawi", "Ikhfa syafawi", "Idgham mimi", "Gunnah"],
    "b": 0,
    "bahas": "Izhar syafawi berarti membaca mim sukun secara jelas tanpa dengung ketika bertemu huruf selain mim dan ba."
  },
  {
    "q": "Pada lafaz 'Allazina hum yura'un' (Q.S. Al-Ma'un ayat 6), terdapat mim sukun (مْ) bertemu huruf ya (ي). Hukum bacaan tajwidnya adalah ....",
    "p": ["Izhar syafawi", "Ikhfa syafawi", "Idgham mimi", "Qalqalah"],
    "b": 0,
    "bahas": "Mim sukun bertemu ya (bukan mim dan bukan ba) dibaca jelas tanpa dengung, yaitu Izhar Syafawi."
  },
  {
    "q": "Menurut hadis Nabi Muhammad saw., kedudukan orang yang menyayangi dan memelihara anak yatim dengan tulus di surga kelak adalah ....",
    "p": [
      "Sangat dekat dengan Nabi Muhammad saw. bagaikan jari telunjuk dan jari tengah",
      "Berada di luar pintu surga",
      "Sama seperti orang yang kikir",
      "Jauh dari para nabi"
    ],
    "b": 0,
    "bahas": "Rasulullah saw. bersabda bahwa beliau dan orang yang menanggung anak yatim di surga bagaikan dua jari (telunjuk dan jari tengah) yang berdekatan."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='11' font-weight='bold' text-anchor='middle' fill='#0369a1'>AL-QAWIYYU &amp; AL-QAYYUM</text><text x='87' y='48' font-size='9' text-anchor='middle' fill='#0f172a'>Maha Kuat &amp; Maha Berdiri Sendiri</text></svg>",
    "q": "Perhatikan kartu Asmaulhusna pada gambar di atas! Iman kepada Asmaulhusna 'Al-Qawiyyu' menyadarkan kita bahwa kekuatan yang dimiliki manusia bersifat ....",
    "p": [
      "Terbatas dan merupakan titipan dari Allah Swt.",
      "Kekal abadi selamanya",
      "Tidak membutuhkan pertolongan Allah Swt.",
      "Lebih besar daripada kekuatan alam semesta"
    ],
    "b": 0,
    "bahas": "Hanya Allah Swt. Yang Maha Kuat (Al-Qawiyyu) secara mutlak; kekuatan manusia terbatas sehingga tidak boleh sombong."
  },
  {
    "q": "Perilaku meneladani Asmaulhusna 'Al-Qawiyyu' yang terpuji di lingkungan sekolah adalah ....",
    "p": [
      "Menggunakan kekuatan fisik untuk melindungi teman yang lemah dan membantu kerja bakti",
      "Menindas dan memalak adik kelas yang bertubuh kecil",
      "Memamerkan otot untuk menakut-nakuti teman",
      "Menolak membantu guru mengangkat buku"
    ],
    "b": 0,
    "bahas": "Kekuatan yang Allah berikan wajib digunakan untuk menolong kebaikan, bukan untuk menindas."
  },
  {
    "q": "Asmaulhusna 'Al-Qayyum' memiliki arti bahwa Allah Swt. Maha ....",
    "p": [
      "Berdiri Sendiri dan mengurus seluruh makhluk-Nya tanpa bantuan siapa pun",
      "Mematikan setiap makhluk bernyawa",
      "Menghidupkan tanah yang tandus",
      "Membangkitkan manusia di hari akhir"
    ],
    "b": 0,
    "bahas": "Al-Qayyum berarti Allah Maha Berdiri Sendiri dan terus-menerus mengurus ciptaan-Nya."
  },
  {
    "q": "Contoh sikap mandiri yang mencerminkan meneladani Asmaulhusna 'Al-Qayyum' di rumah adalah ....",
    "p": [
      "Merapikan kamar tidur, mencuci sepatu sendiri, dan menyiapkan jadwal pelajaran",
      "Menyuruh ibu mengerjakan seluruh tugas sekolah kita",
      "Meminta kakak merapikan mainan yang kita pakai",
      "Menangis jika tidak disuapi saat makan"
    ],
    "b": 0,
    "bahas": "Membiasakan mandiri tidak bergantung pada orang lain adalah wujud meneladani Al-Qayyum."
  },
  {
    "q": "Turunnya air hujan yang menyuburkan kembali tanah kering dan menumbuhkan biji-bijian menjadi tanaman hijau merupakan bukti nyata dari Asmaulhusna Allah yaitu ....",
    "p": ["Al-Muhyi (Maha Menghidupkan)", "Al-Mumit (Maha Mematikan)", "Al-Gaffar", "Al-Hasib"],
    "b": 0,
    "bahas": "Al-Muhyi artinya Allah Maha Menghidupkan makhluk hidup maupun menyuburkan kembali bumi yang mati."
  },
  {
    "q": "Setiap makhluk yang bernyawa pasti akan merasakan kematian sesuai waktu yang telah ditetapkan Allah Swt. karena Allah memiliki Asmaulhusna ....",
    "p": ["Al-Muhyi", "Al-Mumit", "Al-Ba'is", "Al-Wahhab"],
    "b": 1,
    "bahas": "Al-Mumit berarti Allah Maha Mematikan seluruh makhluk hidup apabila ajalnya tiba."
  },
  {
    "q": "Keimanan kepada Asmaulhusna 'Al-Mumit' mendorong seorang muslim untuk selalu mempersiapkan bekal sebelum kematian dengan cara ....",
    "p": [
      "Rajin beribadah, berbakti kepada orang tua, dan memperbanyak amal saleh",
      "Menumpuk harta kekayaan tanpa mau bersedekah",
      "Menunda-nunda salat wajib hingga habis waktunya",
      "Bersenang-senang melupakan kewajiban agama"
    ],
    "b": 0,
    "bahas": "Mengingat kematian (Al-Mumit) memotivasi kita memperbanyak amal kebaikan sebagai bekal akhirat."
  },
  {
    "q": "Peristiwa dibangkitkannya seluruh umat manusia dari alam kubur pada hari kiamat untuk mempertanggungjawabkan amal perbuatannya membuktikan bahwa Allah memiliki Asmaulhusna ....",
    "p": ["Al-Ba'is", "Al-Qawiyyu", "Al-Qayyum", "As-Salam"],
    "b": 0,
    "bahas": "Al-Ba'is artinya Allah Maha Membangkitkan manusia dari kubur pada hari kebangkitan (Yaumul Ba'as)."
  },
  {
    "q": "Lawan dari sifat ria (pamer amal ibadah) yang harus dimiliki setiap muslim dalam beribadah dan bersedekah adalah ....",
    "p": ["Ikhlas", "Takabur", "Hasad", "Bakhil"],
    "b": 0,
    "bahas": "Ikhlas berarti mengerjakan ibadah dan kebaikan semata-mata mengharap rida Allah Swt."
  },
  {
    "q": "Orang yang lalai dalam salatnya sebagaimana diperingatkan dalam Q.S. Al-Ma'un ayat 5 adalah orang yang ....",
    "p": [
      "Sengaja menunda-nunda waktu salat dan tidak khusyuk saat mengerjakannya",
      "Selalu datang ke masjid sebelum azan berkumandang",
      "Mengerjakan salat sunah rawatib",
      "Membaca doa setelah selesai salat"
    ],
    "b": 0,
    "bahas": "Lalai terhadap salat mencakup melalaikan waktunya, tidak khusyuk, dan tidak menghayati bacaannya."
  },
  {
    "q": "Bentuk kepedulian sosial yang dapat dilakukan siswa kelas 5 SD terhadap fakir miskin di sekitar lingkungan tempat tinggal adalah ....",
    "p": [
      "Menyisihkan sebagian uang saku untuk kotak infak dan berbagi makanan kepada tetangga yang membutuhkan",
      "Mengejek pakaian tetangga yang sudah lusuh",
      "Membuang makanan sisa yang masih layak makan",
      "Menolak ikut kegiatan bakti sosial di sekolah"
    ],
    "b": 0,
    "bahas": "Berinfak dan berbagi makanan merupakan wujud nyata kepedulian kepada fakir miskin sesuai ajaran Q.S. Al-Ma'un."
  },
  {
    "q": "Lafaz 'Fawailul lil-musallin' dalam Surah Al-Ma'un ayat 4 memiliki arti ....",
    "p": [
      "Maka celakalah orang yang salat",
      "Yang berbuat ria",
      "Dan tidak menganjurkan memberi makan orang miskin",
      "Tahukah kamu orang yang mendustakan agama"
    ],
    "b": 0,
    "bahas": "'Fawailul lil-musallin' artinya Maka celakalah orang yang salat (yaitu yang lalai dan ria dalam salatnya)."
  },
  {
    "q": "Perbuatan meminjamkan alat tulis seperti penghapus atau penggaris kepada teman sekelas yang lupa membawa merupakan contoh pengamalan Q.S. Al-Ma'un ayat ke-7 tentang ....",
    "p": [
      "Memberikan bantuan barang-barang yang berguna (al-ma'un)",
      "Menghardik anak yatim",
      "Melalaikan waktu salat",
      "Berbuat ria di depan guru"
    ],
    "b": 0,
    "bahas": "Al-Ma'un mencakup segala barang bermanfaat sehari-hari yang dipinjamkan atau diberikan kepada orang yang membutuhkan."
  },
  {
    "q": "Cara meneladani Asmaulhusna 'Al-Muhyi' dalam menjaga kelestarian lingkungan sekitar sekolah adalah ....",
    "p": [
      "Menanam dan menyiram tanaman hijau serta merawat hewan peliharaan dengan kasih sayang",
      "Memetik daun dan bunga di taman sekolah hingga layu",
      "Membuang sampah plastik di pot tanaman",
      "Menginjak-injak rumput taman sekolah"
    ],
    "b": 0,
    "bahas": "Merawat tanaman dan menyayangi makhluk hidup mencerminkan meneladani sifat Allah Yang Maha Menghidupkan."
  },
  {
    "q": "Ketika seorang teman bersedih karena kehilangan salah satu orang tuanya, sikap empati yang paling tepat kita lakukan adalah ....",
    "p": [
      "Menghiburnya dengan lembut, mendoakan almarhum, dan terus menjadi sahabat yang baik baginya",
      "Menjauhinya agar tidak ikut merasa sedih",
      "Membicarakan kesedihannya sebagai bahan candaan",
      "Memintanya segera melupakan orang tuanya dengan nada kasar"
    ],
    "b": 0,
    "bahas": "Menghibur, mendoakan, dan menyayangi anak yatim adalah perintah utama dalam Islam."
  },
  {
    "q": "Hikmah utama mengimani dan menghafal Asmaulhusna dalam kehidupan sehari-hari adalah ....",
    "p": [
      "Menambah keimanan kepada Allah Swt. dan mendorong kita meneladani sifat-sifat mulia-Nya",
      "Membuat kita merasa lebih hebat dari teman lain",
      "Mengurangi kewajiban belajar pelajaran umum",
      "Membuat kita sombong atas hafalan kita"
    ],
    "b": 0,
    "bahas": "Mengimani Asmaulhusna memperkuat tauhid dan membentuk akhlak mulia dalam kehidupan sehari-hari."
  }
]);

window.tambahPaketUjian("5", "pancasila", "UTS Semester 1", [
  {
    "q": "Nama lain dalam bahasa Jepang untuk Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia (BPUPKI) adalah ....",
    "p": [
      "Dokuritsu Junbi Cosakai",
      "Dokuritsu Junbi Inkai",
      "Seinendan",
      "Keibodan"
    ],
    "b": 0,
    "bahas": "BPUPKI dalam bahasa Jepang disebut Dokuritsu Junbi Cosakai, sedangkan PPKI disebut Dokuritsu Junbi Inkai."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#991b1b'>SIDANG PERTAMA BPUPKI</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>29 Mei – 1 Juni 1945</text></svg>",
    "q": "Perhatikan informasi peristiwa sejarah pada gambar di atas! Tiga tokoh nasional yang menyampaikan usulan rumusan dasar negara secara berurutan pada sidang pertama BPUPKI adalah ....",
    "p": [
      "Mr. Moh. Yamin, Mr. Soepomo, dan Ir. Soekarno",
      "Ir. Soekarno, Drs. Moh. Hatta, dan Ki Hajar Dewantara",
      "Mr. Ahmad Soebardjo, Sayuti Melik, dan Sukarni",
      "dr. Radjiman Wedyodiningrat, Bung Tomo, dan Sudirman"
    ],
    "b": 0,
    "bahas": "Pada sidang pertama BPUPKI, Mr. Moh. Yamin berpidato 29 Mei, Mr. Soepomo 31 Mei, dan Ir. Soekarno 1 Juni 1945."
  },
  {
    "q": "Dalam pidatonya pada tanggal 1 Juni 1945, Ir. Soekarno mengusulkan nama 'Pancasila' untuk lima asas dasar negara atas saran seorang ahli bahasa yang bernama ....",
    "p": ["Mr. Moh. Yamin", "Drs. Moh. Hatta", "Mr. Soepomo", "H. Agus Salim"],
    "b": 0,
    "bahas": "Ir. Soekarno menyampaikan bahwa nama Pancasila diperolehnya atas petunjuk seorang teman ahli bahasa, yaitu Mr. Moh. Yamin."
  },
  {
    "q": "Lima asas dasar negara yang diusulkan oleh Mr. Soepomo pada tanggal 31 Mei 1945 antara lain meliputi ....",
    "p": [
      "Persatuan, Kekeluargaan, Keseimbangan lahir dan batin, Musyawarah, dan Keadilan rakyat",
      "Ketuhanan, Internasionalisme, Mufakat, Kesejahteraan sosial, dan Kebangsaan",
      "Peri Kebangsaan, Peri Kemanusiaan, Peri Ketuhanan, Peri Kerakyatan, dan Kesejahteraan Rakyat",
      "Bhinneka Tunggal Ika, Gotong royong, dan Kemerdekaan"
    ],
    "b": 0,
    "bahas": "Usulan Mr. Soepomo menekankan paham negara integralistik: Persatuan, Kekeluargaan, Keseimbangan lahir batin, Musyawarah, dan Keadilan rakyat."
  },
  {
    "q": "Setelah sidang pertama BPUPKI berakhir, dibentuk panitia kecil beranggotakan 9 tokoh untuk merumuskan dasar negara yang diketuai oleh ....",
    "p": [
      "Ir. Soekarno",
      "dr. K.R.T. Radjiman Wedyodiningrat",
      "Mr. Soepomo",
      "R.P. Soeroso"
    ],
    "b": 0,
    "bahas": "Panitia Sembilan diketuai oleh Ir. Soekarno dengan wakil ketua Drs. Moh. Hatta."
  },
  {
    "q": "Rancangan Pembukaan Hukum Dasar yang berhasil disepakati oleh Panitia Sembilan pada tanggal 22 Juni 1945 diberi nama ....",
    "p": [
      "Piagam Jakarta (Jakarta Charter)",
      "Piagam Madinah",
      "Teks Proklamasi",
      "Sumpah Pemuda"
    ],
    "b": 0,
    "bahas": "Piagam Jakarta disusun Panitia Sembilan pada 22 Juni 1945 yang memuat rumusan awal Pancasila."
  },
  {
    "q": "Tokoh wakil ketua Panitia Sembilan sekaligus Wakil Presiden pertama RI yang berperan besar mengajak tokoh Islam menyepakati perubahan sila pertama demi persatuan bangsa pada 18 Agustus 1945 adalah ....",
    "p": ["Drs. Moh. Hatta", "Mr. Ahmad Soebardjo", "Abikoesno Tjokrosoejoso", "A.A. Maramis"],
    "b": 0,
    "bahas": "Drs. Moh. Hatta bermusyawarah dengan tokoh-tokoh Islam sehingga sila pertama disepakati menjadi 'Ketuhanan Yang Maha Esa'."
  },
  {
    "q": "Nilai keteladanan utama yang dapat kita pelajari dari para tokoh perumus Pancasila dalam sidang BPUPKI dan PPKI adalah ....",
    "p": [
      "Mengutamakan persatuan bangsa di atas kepentingan pribadi maupun golongan",
      "Memaksakan pendapat sendiri agar diterima semua anggota sidang",
      "Menolak bermusyawarah dengan kelompok yang berbeda pandangan",
      "Mengutamakan kepentingan daerah asal masing-masing"
    ],
    "b": 0,
    "bahas": "Para pendiri bangsa menunjukkan jiwa besar, toleransi, musyawarah, dan mengutamakan persatuan Indonesia."
  },
  {
    "q": "Kedudukan Pancasila sebagai pandangan hidup bangsa Indonesia mengandung makna bahwa nilai-nilai Pancasila dijadikan sebagai ....",
    "p": [
      "Pedoman dan petunjuk arah dalam bersikap serta bertingkah laku sehari-hari",
      "Hiasan dinding di ruang kelas dan kantor",
      "Hafalan saat upacara hari Senin saja",
      "Aturan khusus bagi pegawai negeri"
    ],
    "b": 0,
    "bahas": "Sebagai pandangan hidup bangsa, Pancasila diamalkan dalam sikap dan perilaku sehari-hari setiap warga negara."
  },
  {
    "q": "Contoh perilaku yang mencerminkan pengamalan sila pertama Pancasila di lingkungan tempat tinggal adalah ....",
    "p": [
      "Menjaga ketenangan saat tetangga yang berbeda agama sedang merayakan hari raya keagamaannya",
      "Ikut kerja bakti memperbaiki jembatan desa",
      "Membantu korban banjir di kabupaten tetangga",
      "Mengikuti rapat pemilihan ketua karang taruna"
    ],
    "b": 0,
    "bahas": "Menghormati tetangga yang berbeda keyakinan menjalankan ibadahnya adalah wujud nyata sila pertama."
  },
  {
    "q": "Sikap menghargai harkat dan martabat sesama manusia, gemar melakukan kegiatan kemanusiaan, dan berani membela kebenaran merupakan pengamalan sila ke-....",
    "p": ["Satu", "Dua", "Tiga", "Empat"],
    "b": 1,
    "bahas": "Nilai kemanusiaan dan keadilan antarsesama manusia terkandung dalam sila kedua Pancasila."
  },
  {
    "q": "Perilaku di sekolah yang dapat merusak nilai persatuan dan kesatuan (sila ketiga Pancasila) adalah ....",
    "p": [
      "Mengejek teman yang memiliki warna kulit atau logat bahasa daerah berbeda",
      "Bekerja sama membersihkan ruang kelas bersama regu piket",
      "Menyanyikan lagu-lagu daerah Nusantara dengan penuh semangat",
      "Berteman akrab dengan seluruh siswa tanpa pilih-pilih"
    ],
    "b": 0,
    "bahas": "Mengejek perbedaan suku, fisik, atau bahasa daerah memicu perpecahan dan bertentangan dengan sila ketiga."
  },
  {
    "q": "Apabila dalam musyawarah kelas untuk memilih ketua kelas tidak tercapai kata mufakat melalui diskusi, maka cara pengambilan keputusan demokratis yang dapat ditempuh adalah ....",
    "p": [
      "Pemungutan suara terbanyak (voting)",
      "Menyerahkan keputusan kepada siswa yang paling kuat",
      "Membubarkan kelas tanpa memilih ketua",
      "Mengundi menggunakan koin"
    ],
    "b": 0,
    "bahas": "Sesuai nilai demokrasi Pancasila (sila keempat), jika mufakat belum tercapai maka keputusan diambil melalui suara terbanyak (voting)."
  },
  {
    "q": "Contoh pengamalan sila kelima Pancasila dalam lingkungan keluarga adalah ....",
    "p": [
      "Orang tua membagi tugas rumah dan perhatian secara adil kepada semua anak serta membiasakan hidup hemat",
      "Anak menghabiskan seluruh uang tabungan untuk membeli mainan setiap hari",
      "Kakak menyuruh adik mengerjakan semua pekerjaan rumah sendirian",
      "Anggota keluarga membuang makanan yang tidak habis"
    ],
    "b": 0,
    "bahas": "Bersikap adil kepada anggota keluarga, menghargai hak masing-masing, dan hidup hemat sesuai sila kelima."
  },
  {
    "q": "Tradisi gotong royong membantu tetangga membangun rumah atau membersihkan saluran air desa mencerminkan pengamalan Pancasila terutama sila ke-....",
    "p": ["Kesatu", "Ketiga", "Keempat", "Kesatu dan kedua saja"],
    "b": 1,
    "bahas": "Gotong royong mempererat kebersamaan, kekompakan, dan persatuan warga sesuai sila ketiga Pancasila."
  },
  {
    "q": "Di daerah Madura dan Jawa Timur dikenal tradisi kerja sama saling membantu warga desa saat ada hajatan atau perbaikan jalan kampung yang disebut ....",
    "p": ["Gugur gunung / song-osong lombhung", "Subak", "Ngayah", "Mapalus"],
    "b": 0,
    "bahas": "Song-osong lombhung di Madura dan gugur gunung di Jawa merupakan wujud kearifan lokal gotong royong masyarakat."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>MUSYAWARAH MUFAKAT</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Sila Keempat Pancasila</text></svg>",
    "q": "Perhatikan gambar di atas! Sikap yang harus dihindari saat mengikuti kegiatan musyawarah di sekolah adalah ....",
    "p": [
      "Memaksakan kehendak pribadi dan memotong pembicaraan teman",
      "Menyampaikan pendapat dengan bahasa yang santun",
      "Mendengarkan usulan teman dengan tenang",
      "Menerima hasil keputusan musyawarah dengan ikhlas"
    ],
    "b": 0,
    "bahas": "Memaksakan kehendak dan tidak menghargai pembicara bertentangan dengan semangat musyawarah sila keempat."
  },
  {
    "q": "Pancasila menjadi pemersatu bangsa Indonesia yang majemuk. Arti kata 'majemuk' adalah ....",
    "p": [
      "Terdiri atas berbagai ragam suku, agama, bahasa, dan budaya yang berbeda-beda",
      "Hanya memiliki satu jenis kebudayaan",
      "Tinggal di satu pulau kecil yang sama",
      "Memiliki bahasa daerah yang seragam"
    ],
    "b": 0,
    "bahas": "Masyarakat majemuk berarti masyarakat yang beragam latar belakang suku, agama, adat, dan budayanya."
  },
  {
    "q": "Ketika seorang siswa melihat teman sekelasnya kesulitan memahami materi pelajaran Matematika, sikap terpuji yang sesuai nilai kemanusiaan dan gotong royong adalah ....",
    "p": [
      "Membantu menjelaskan cara mengerjakannya dengan sabar saat jam istirahat",
      "Mengejeknya karena dianggap lambat belajar",
      "Menyembunyikan buku catatan agar tidak dipinjam",
      "Membiarkannya kebingungan sendirian"
    ],
    "b": 0,
    "bahas": "Saling membantu dalam kebaikan mempererat persahabatan dan mengamalkan nilai Pancasila."
  },
  {
    "q": "Simbol rantai emas pada perisai Garuda Pancasila memiliki mata rantai berbentuk persegi dan lingkaran yang saling berkaitan. Mata rantai berbentuk persegi melambangkan ....",
    "p": ["Laki-laki", "Perempuan", "Anak-anak", "Orang tua"],
    "b": 0,
    "bahas": "Mata rantai persegi melambangkan laki-laki dan mata rantai lingkaran melambangkan perempuan yang saling bahu-membahu."
  },
  {
    "q": "Simbol pohon beringin pada sila ketiga Pancasila memiliki akar tunjang yang menghujam dalam ke tanah dan akar gantung yang menjulur. Akar-akar tersebut melambangkan ....",
    "p": [
      "Keberagaman suku bangsa Indonesia yang menyatu di bawah naungan Negara Indonesia",
      "Kekayaan hasil hutan kayu jati",
      "Keindahan taman kota di ibu kota",
      "Persaingan antardaerah di Indonesia"
    ],
    "b": 0,
    "bahas": "Akar gantung pohon beringin melambangkan berbagai suku, budaya, dan agama yang bersatu padu dalam NKRI."
  },
  {
    "q": "Contoh perilaku hidup hemat sebagai pengamalan sila kelima Pancasila di sekolah adalah ....",
    "p": [
      "Mematikan lampu dan kipas angin kelas saat jam istirahat atau setelah pelajaran selesai",
      "Menghabiskan seluruh uang jajan untuk membeli mainan",
      "Membuang kertas buku tulis yang masih kosong",
      "Menyalakan keran air tempat cuci tangan terus-menerus"
    ],
    "b": 0,
    "bahas": "Menghemat energi listrik dan air serta tidak boros adalah wujud pengamalan sila kelima."
  },
  {
    "q": "Tokoh anggota Panitia Sembilan yang juga dikenal sebagai Bapak Koperasi Indonesia adalah ....",
    "p": ["Drs. Moh. Hatta", "Mr. Ahmad Soebardjo", "K.H. Wahid Hasyim", "H. Agus Salim"],
    "b": 0,
    "bahas": "Drs. Moh. Hatta merupakan Wakil Presiden pertama RI, anggota Panitia Sembilan, dan Bapak Koperasi Indonesia."
  },
  {
    "q": "Sikap yang mencerminkan cinta tanah air dan bangga sebagai bangsa Indonesia di lingkungan sekolah adalah ....",
    "p": [
      "Mengikuti upacara bendera hari Senin dengan tertib dan memakai seragam batik pada hari yang ditentukan",
      "Mengobrol saat lagu kebangsaan Indonesia Raya dinyanyikan",
      "Mencoret-coret dinding bangunan sekolah",
      "Malas mempelajari sejarah perjuangan bangsa"
    ],
    "b": 0,
    "bahas": "Khidmat saat upacara bendera dan bangga mengenakan batik merupakan wujud cinta tanah air."
  },
  {
    "q": "Apabila setiap warga negara Indonesia mengamalkan nilai-nilai Pancasila dalam kehidupan sehari-hari, maka dampak positif yang tercipta bagi negara adalah ....",
    "p": [
      "Terwujudnya kehidupan berbangsa dan bernegara yang aman, rukun, adil, dan sejahtera",
      "Meningkatnya perselisihan antarkelompok masyarakat",
      "Hilangnya tradisi gotong royong di desa",
      "Melemahnya persatuan dan kesatuan bangsa"
    ],
    "b": 0,
    "bahas": "Pengamalan Pancasila menciptakan keharmonisan, persatuan, dan keadilan sosial bagi seluruh rakyat Indonesia."
  }
]);

window.tambahPaketUjian("5", "bing", "UTS Semester 1", [
  {
    "q": "The taste of pure honey and ripe mango is ....",
    "p": ["sour", "sweet", "bitter", "salty"],
    "b": 1,
    "bahas": "Madu murni (pure honey) dan mangga matang (ripe mango) rasanya manis (sweet)."
  },
  {
    "q": "A lime (jeruk nipis) and tamarind (asam jawa) taste ....",
    "p": ["sour", "sweet", "spicy", "salty"],
    "b": 0,
    "bahas": "Jeruk nipis dan asam jawa rasanya asam (sour)."
  },
  {
    "q": "Salted fish (ikan asin) and sea water taste ....",
    "p": ["sweet", "bitter", "salty", "sour"],
    "b": 2,
    "bahas": "Ikan asin dan air laut rasanya asin (salty)."
  },
  {
    "q": "Mother puts too much chili in the soup. Now the soup tastes very ....",
    "p": ["sweet", "spicy", "sour", "bitter"],
    "b": 1,
    "bahas": "Terlalu banyak cabai (chili) membuat sup terasa sangat pedas (spicy)."
  },
  {
    "q": "Dark chocolate without sugar and pare (bitter melon) taste ....",
    "p": ["salty", "bitter", "sweet", "spicy"],
    "b": 1,
    "bahas": "Cokelat hitam tanpa gula dan pare rasanya pahit (bitter)."
  },
  {
    "svg": "<svg width='160' height='75' xmlns='http://w3.org'><path d='M40,35 Q40,60 80,60 Q120,60 120,35 Z' fill='#38bdf8' stroke='#0284c7' stroke-width='2'/><ellipse cx='80' cy='35' rx='40' ry='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><circle cx='70' cy='35' r='5' fill='#92400e'/><circle cx='90' cy='35' r='5' fill='#92400e'/></svg>",
    "q": "Look at the picture above! Made is eating a ... of bakso in the canteen.",
    "p": ["glass", "bowl", "plate", "bottle"],
    "b": 1,
    "bahas": "Bakso disajikan dalam mangkuk: 'a bowl of bakso'."
  },
  {
    "q": "Aisyah is very thirsty. She wants to drink a ... of orange juice.",
    "p": ["plate", "bowl", "glass", "slice"],
    "b": 2,
    "bahas": "Jus jeruk disajikan dalam gelas: 'a glass of orange juice'."
  },
  {
    "q": "Cici wants to eat a ... of pizza for lunch.",
    "p": ["slice", "cup", "bottle", "bowl"],
    "b": 0,
    "bahas": "Potongan pizza menggunakan satuan 'a slice of pizza' (sepotong pizza)."
  },
  {
    "q": "My grandfather drinks a ... of hot tea every afternoon.",
    "p": ["plate", "cup", "bowl", "slice"],
    "b": 1,
    "bahas": "Teh panas disajikan dalam cangkir: 'a cup of hot tea'."
  },
  {
    "q": "Udin brings a ... of mineral water in his bag when going to school.",
    "p": ["bottle", "plate", "bowl", "slice"],
    "b": 0,
    "bahas": "Air mineral kemasan dibawa dalam botol: 'a bottle of mineral water'."
  },
  {
    "q": "Mother serves a ... of fried noodles on the dining table.",
    "p": ["plate", "cup", "glass", "bottle"],
    "b": 0,
    "bahas": "Mie goreng disajikan di atas piring: 'a plate of fried noodles'."
  },
  {
    "q": "Joshua likes eating a ... of bread with chocolate jam for breakfast.",
    "p": ["slice", "glass", "bottle", "cup"],
    "b": 0,
    "bahas": "Selembar/sepotong roti tawar disebut 'a slice of bread'."
  },
  {
    "q": "What does an ice cream cone taste like? It tastes ....",
    "p": ["sweet and cold", "spicy and hot", "salty and bitter", "sour and spicy"],
    "b": 0,
    "bahas": "Es krim rasanya manis dan dingin (sweet and cold)."
  },
  {
    "q": "Does Siti like sour mango? Yes, she ....",
    "p": ["do", "does", "is", "am"],
    "b": 1,
    "bahas": "Pertanyaan yang diawali 'Does Siti...?' dijawab singkat dengan 'Yes, she does.'"
  },
  {
    "q": "Do Budi and Edo like spicy food? No, they ....",
    "p": ["do not", "does not", "are not", "is not"],
    "b": 0,
    "bahas": "Pertanyaan dengan subjek jamak 'Budi and Edo' (they) yang diawali 'Do' dijawab negatif dengan 'No, they do not.'"
  },
  {
    "q": "Rani ... want a bowl of soto because she is full.",
    "p": ["do not", "does not", "is not", "are not"],
    "b": 1,
    "bahas": "Subjek tunggal orang ketiga 'Rani' (she) dalam kalimat negatif Simple Present menggunakan 'does not'."
  },
  {
    "q": "I ... two glasses of water every morning after waking up.",
    "p": ["drink", "drinks", "drinking", "drank"],
    "b": 0,
    "bahas": "Subjek 'I' pada kebiasaan sehari-hari (Simple Present) menggunakan kata kerja dasar 'drink'."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><polygon points='62,40 88,40 75,68' fill='#d97706' stroke='#92400e' stroke-width='2'/><circle cx='75' cy='30' r='14' fill='#f43f5e' stroke='#be123c' stroke-width='2'/></svg>",
    "q": "Look at the picture above! Lina wants an ... cone.",
    "p": ["ice cream", "orange juice", "iced tea", "apple pie"],
    "b": 0,
    "bahas": "Gambar menunjukkan es krim cone (ice cream cone)."
  },
  {
    "q": "What is 'semangkuk bubur ayam' in English?",
    "p": [
      "A plate of fried rice",
      "A bowl of chicken porridge",
      "A glass of milk",
      "A cup of coffee"
    ],
    "b": 1,
    "bahas": "Semangkuk = a bowl of, bubur ayam = chicken porridge."
  },
  {
    "q": "What is 'sepiring nasi goreng' in English?",
    "p": [
      "A plate of fried rice",
      "A bowl of meatballs",
      "A slice of cake",
      "A bottle of water"
    ],
    "b": 0,
    "bahas": "Sepiring = a plate of, nasi goreng = fried rice."
  },
  {
    "q": "Sugar makes tea taste ....",
    "p": ["bitter", "salty", "sweet", "sour"],
    "b": 2,
    "bahas": "Gula (sugar) membuat teh terasa manis (sweet)."
  },
  {
    "q": "Salt makes soup taste ....",
    "p": ["sweet", "salty", "sour", "bitter"],
    "b": 1,
    "bahas": "Garam (salt) membuat sup terasa gurih/asin (salty)."
  },
  {
    "q": "Arrange these words into a good sentence: 'wants - Made - a - of - glass - milk'",
    "p": [
      "Made wants a glass of milk.",
      "A glass of milk wants Made.",
      "Made a glass wants of milk.",
      "Wants Made a milk of glass."
    ],
    "b": 0,
    "bahas": "Susunan kalimat yang benar adalah 'Made wants a glass of milk.'"
  },
  {
    "q": "Which food tastes sour?",
    "p": ["Green mango and lemon", "Cake and candy", "Fried chicken and chips", "Chili and pepper"],
    "b": 0,
    "bahas": "Mangga muda (green mango) dan lemon rasanya asam (sour)."
  },
  {
    "q": "'Ayah minum secangkir kopi pahit setiap pagi.' The English translation is ....",
    "p": [
      "Father drinks a cup of bitter coffee every morning.",
      "Father drinks a glass of sweet tea every morning.",
      "Father eats a bowl of soup every morning.",
      "Father drinks a bottle of cold water every morning."
    ],
    "b": 0,
    "bahas": "Secangkir kopi pahit = a cup of bitter coffee."
  }
]);

window.tambahPaketUjian("5", "madura", "UTS Semester 1", [
  {
    "q": "Dâlem ondhâgghâ bhâsa Madhurâ, bhâsa èngghi-bhunten (alos) dâri oca' 'molè' (pulang) ka'angghuy Bapak otabâ Ibu Guru èngghi panèka ....",
    "p": ["Kondhur / Palèman", "Mèyos", "Rabhu", "Sare"],
    "b": 0,
    "bahas": "Molè (pulang) bhâsa alosna 'kondhur' otabâ 'palèman'."
  },
  {
    "q": "Bhâsa èngghi-bhuntenna oca' 'soko' (kaki) ka'angghuy orèng towa èngghi panèka ....",
    "p": ["Asta", "Padâ", "Soca", "Mustaka"],
    "b": 1,
    "bahas": "Soko bhâsa alosna 'padâ', tanang = 'asta', mata = 'soca'."
  },
  {
    "q": "Bhâsa èngghi-bhuntenna oca' 'acaca / ngoca'' (berbicara) ka'angghuy orèng sè èhormadhi èngghi panèka ....",
    "p": ["Adhâbu", "Mèyarsa'aghi", "Ngoladhi", "Dhâ'âr"],
    "b": 0,
    "bahas": "Acaca / ngoca' bhâsa alosna 'adhâbu'."
  },
  {
    "q": "Okara è bâbâ panèka sè aghuna'aghi bhâsa èngghi-bhunten sè teppa' èngghi panèka ....",
    "p": [
      "Kaki ghi' adhâbu sareng tamoy è roma.",
      "Sèngko' ghi' adhâbu sareng adhi'.",
      "Bapak Guru ampon tèdung è kantor.",
      "Embu' ampon ngakan nasè' ghuring."
    ],
    "b": 0,
    "bahas": "Ka'angghuy Kaki (kakek) èghuna'aghi oca' alos 'adhâbu' (berbicara)."
  },
  {
    "q": "Oca' asal 'pèkkèr' lamon èberri' ter-ater (awalan) tanduk bhâkal dhâddhi ....",
    "p": ["Nèkkèr", "Mèkkèr", "Ngèkkèr", "Nyèkkèr"],
    "b": 1,
    "bahas": "Horop awal 'p' luluh dhâddhi 'm-' bilâ olle ter-ater tanduk, dhâddhi 'mèkkèr'."
  },
  {
    "q": "Oca' asal 'jhuwâl' lamon èberri' ter-ater tanduk 'a-' dhâddhi ....",
    "p": ["Ajhuwâl", "Njhuwâl", "Majhuwâl", "Ngajhuwâl"],
    "b": 0,
    "bahas": "Ter-ater 'a-' + 'jhuwâl' dhâddhi 'ajhuwâl' (menjual)."
  },
  {
    "q": "Obâ'ân okara tanduk 'Hasan maca buku carèta è perpustakaan' dhâddhi okara tanggap (pasif) sè teppa' èngghi panèka ....",
    "p": [
      "Buku carèta èbâca bi' Hasan è perpustakaan.",
      "Hasan èbâca buku carèta è perpustakaan.",
      "Buku carèta maca Hasan è perpustakaan.",
      "È perpustakaan èbâca Hasan."
    ],
    "b": 0,
    "bahas": "Dâlem okara tanggap, objek 'buku carèta' dhâddhi subjek bân ngangghuy ter-ater 'è-' ('èbâca')."
  },
  {
    "q": "Parèbhâsan Madhurâ 'Nangghâ' bârâ è attas cèthak' artèna ....",
    "p": [
      "Ngalakonè lalakon sè berrâ' bân bânnya' rèsikona",
      "Orèng sè senneng amaèn apoy",
      "Orèng sè soghi arta",
      "Lalakon sè cè' ghâmpangnga"
    ],
    "b": 0,
    "bahas": "Nangghâ' bârâ (menyangga bara api) è attas cèthak ngaghâmbhâraghi tangghungan sè sanget berrâ'."
  },
  {
    "q": "Parèbhâsan 'Abhântal ombâ' asapo' angèn' ngaghâmbhâraghi kaoḍi'ânna orèng Madhurâ sè alako dhâddhi ....",
    "p": ["Majâng / Nalayan (pelaut)", "Ghuru sakola'an", "Sodhâghâr èmas", "Tokang kaju"],
    "b": 0,
    "bahas": "Abhântal ombâ' asapo' angèn (berbantal ombak berselimut angin) panèka semboyan kabângalan para nalayan Madhurâ è tasè'."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#854d0e'>KARAPAN SAPÈ</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Kabhudhâjân Khas Polo Madhurâ</text></svg>",
    "q": "Abâs informasi kabhudhâjân khas Madhurâ è ghâmbhâr attas! Orèng sè nompa'è kalèlèng ka'angghuy ngendhâliyâghi sapè dâlem lomba Karapan Sapè èsebbhut ....",
    "p": ["Tokang tongko'", "Dâlâng", "Sèndhèn", "Nayaga"],
    "b": 0,
    "bahas": "Joki otabâ pengendali pasangan sapè dâlem Karapan Sapè èsebbhut 'tokang tongko''."
  },
  {
    "q": "Tokoh bangsawan Madhurâ dâri Sumenep sè abhânto Radèn Wijaya maddek Karaja'an Majapahit èngghi panèka ....",
    "p": ["Arya Wiraraja", "Kè' Lesap", "Joko Tole", "Trunojoyo"],
    "b": 0,
    "bahas": "Arya Wiraraja panèka Adipati Songennep (Sumenep) sè abhânto Radèn Wijaya maddek Majapahit."
  },
  {
    "q": "Kakanan khas Madhurâ sè èghâbây dâri dhâghing ajâm otabâ embik sè èsundukè bân èobbhâr kalabân bumbu kacang èngghi panèka ....",
    "p": ["Satè Madhurâ", "Soto Lamongan", "Rawon", "Gudeg"],
    "b": 0,
    "bahas": "Satè Madhurâ kasohor è sabbhân Nusantara polana bumbu kacangga sè seddhâ'."
  },
  {
    "q": "Okara è bâbâ panèka sè tamaso' okara pètanya (kalimat tanya) èngghi panèka ....",
    "p": [
      "Bila bâ'na sè èntara ka Songennep?",
      "Tolong tutup labângnga jârèya!",
      "Maloghâna bâ'na lekkas bârâs!",
      "Embu' mellè jhuko' è pasar."
    ],
    "b": 0,
    "bahas": "Okara pètanya ngangghuy oca' tanya 'bila' (kapan) bân èakhiri tandhâ tanya (?)."
  },
  {
    "q": "Okara è bâbâ panèka sè tamaso' okara parènta (kalimat perintah) èngghi panèka ....",
    "p": [
      "Sapoè tanèyan jârèya sopajâ bhersè!",
      "Sapa nyamana kancana bâ'na?",
      "Adhi' ghi' ajhâr è kamar.",
      "Arèya roma sè bhâghus."
    ],
    "b": 0,
    "bahas": "Oca' 'Sapoè' (sapulah) nodhuwâghi okara parènta."
  },
  {
    "q": "Tabhâligghâ (antonim) dâri oca' 'bângal' (berani) èngghi panèka ....",
    "p": ["Takok / Kèco'", "Kowat", "Pènter", "Rajin"],
    "b": 0,
    "bahas": "Bângal (berani) tabhâligghâ takok (penakut)."
  },
  {
    "q": "Padhâna artè (sinonim) dâri oca' 'lekkas' (cepat) èngghi panèka ....",
    "p": ["Ceppet / Dhuli", "Laon", "Bit-abit", "Suwè"],
    "b": 0,
    "bahas": "Lekkas andi' artè sè padâ sareng ceppet otabâ dhuli."
  },
  {
    "q": "Bilângan '45' dâlem bhâsa Madhurâ èbâca ....",
    "p": ["Empa' polo lèma'", "Lèma polo empa'", "Tello polo lèma'", "Sèket lèma'"],
    "b": 0,
    "bahas": "45 dâlem bhâsa Madhurâ èbâca 'empa' polo lèma''."
  },
  {
    "q": "Bilângan '60' dâlem bhâsa Madhurâ andi' sebbhutân khusus èngghi panèka ....",
    "p": ["Sèlaè'", "Sèket", "Sabidhâk", "Satos"],
    "b": 2,
    "bahas": "60 dâlem bhâsa Madhurâ èsebbhut 'sabidhâk'."
  },
  {
    "q": "Oca' 'kasèhadhân' asalla dâri oca' asal 'sèhat' sè olle rangkè'an (imbuhan) ....",
    "p": ["ka- bân -an", "pa- bân -an", "sa- bân -na", "è- bân -aghi"],
    "b": 0,
    "bahas": "ka- + sèhat + -an dhâddhi 'kasèhadhân'."
  },
  {
    "q": "Oca' 'ajhâr' lamon èberri' ter-ater 'pang-' dhâddhi oca' bhârâng (kata benda) sè artèna ilmu pengetahuan, èngghi panèka ....",
    "p": ["Pangajhârân", "Ngajhâr", "Èajhâr", "Ajhârân"],
    "b": 0,
    "bahas": "Pangajhârân artèna pelajaran / ilmu."
  },
  {
    "q": "Bâca teks è bâbâ panèka!\n'Polo Madhurâ èkennal mènangka Polo Buja polana sabâgiyân masyarakat pèngghir tasè' alako aghâbây buja. Buja èghâbây dâri aèng tasè' sè èpèjher è bâbâna panassa mata'arè.'\n\nArapa Polo Madhurâ èsebbhut Polo Buja?",
    "p": [
      "Polana bânnya' ngasèllaghi buja dâri aèng tasè'",
      "Polana bânnya' ghunong apoy",
      "Polana ta' andi' tasè'",
      "Polana sabbhân arè toron ojhân"
    ],
    "b": 0,
    "bahas": "Teks ajellasaghi Polo Madhurâ kasohor ngasèllaghi buja (garam) dâri aèng tasè'."
  },
  {
    "q": "Tatakrama sè bhâghus bilâ tamoy dateng ka roma èngghi panèka ....",
    "p": [
      "Nyambhut kalabân raddhin, ngocap salam, bân nyoro toju' kalabân sopan",
      "Notop labâng roma ceppet-ceppet",
      "Neng-neng è dhâlem kamar ta' kalowar",
      "Acaca kalabân sowara kasar"
    ],
    "b": 0,
    "bahas": "Nyambhut tamoy kalabân ramah bân sopan panèka tatakrama moljâ masyarakat Madhurâ."
  },
  {
    "q": "Pakakas musik tradisional Madhurâ sè ètèyop bân monyèna melengking ngèrèngè Karapan Sapè èngghi panèka ....",
    "p": ["Saronèn", "Kendhâng", "Gong", "Gambang"],
    "b": 0,
    "bahas": "Saronèn panèka alat musik tiup khas Madhurâ."
  },
  {
    "q": "Oca' 'andhap asor' kodhu èbiasa'aghi na'-kana' è sakola'an sopajâ ....",
    "p": [
      "Èkasennengngè ghuru sareng kanca sarta ngormadhi sasama",
      "Dhâddhi orèng sè sombong",
      "Ta' usa ajhâr",
      "Ghâmpang atokar sareng kanca"
    ],
    "b": 0,
    "bahas": "Sikap andhap asor (rendah hati) mabâdâ karokonan sareng sasama."
  },
  {
    "q": "Oca' 'sakalangkong' dâlem bhâsa Indonesia artèna ....",
    "p": ["Terima kasih", "Permisi", "Maaf", "Selamat pagi"],
    "b": 0,
    "bahas": "Mator sakalangkong artèna terima kasih."
  }
]);

window.tambahPaketUjian("5", "kesenian", "UTS Semester 1", [
  {
    "q": "Unsur seni rupa yang paling dasar dan menjadi awal mula terbentuknya garis maupun bidang disebut ....",
    "p": ["Titik (bintik)", "Ruang", "Tekstur", "Proporsi"],
    "b": 0,
    "bahas": "Titik adalah unsur seni rupa paling sederhana yang jika dijajarkan memanjang akan membentuk garis."
  },
  {
    "q": "Gabungan beberapa garis yang ujungnya saling bertemu sehingga membentuk area datar tertutup seperti lingkaran, segitiga, dan trapesium disebut ....",
    "p": ["Bidang", "Titik", "Gelap terang", "Volume"],
    "b": 0,
    "bahas": "Bidang merupakan area dua dimensi yang dibatasi oleh garis."
  },
  {
    "q": "Bentuk-bentuk bebas yang menyerupai objek di alam seperti bentuk daun, awan, batu sungai, dan kelopak bunga termasuk kelompok bentuk ....",
    "p": ["Organis / nongeometris", "Geometris kaku", "Kubistis", "Silindris"],
    "b": 0,
    "bahas": "Bentuk organis memiliki garis lengkung bebas yang banyak dijumpai pada alam."
  },
  {
    "q": "Warna sekunder yang dihasilkan apabila warna primer kuning dicampur dengan warna primer biru dalam perbandingan seimbang adalah ....",
    "p": ["Oranye", "Hijau", "Ungu", "Cokelat"],
    "b": 1,
    "bahas": "Campuran warna kuning dan biru menghasilkan warna sekunder hijau."
  },
  {
    "q": "Warna-warna yang tidak termasuk kelompok warna pelangi dan sering dipakai untuk mengatur tingkat kecerahan atau bayangan (yaitu hitam dan putih) disebut warna ....",
    "p": ["Netral", "Primer", "Sekunder", "Tersier"],
    "b": 0,
    "bahas": "Hitam dan putih termasuk warna netral yang berguna menciptakan gradasi terang dan gelap."
  },
  {
    "q": "Unsur seni rupa yang menunjukkan kualitas permukaan suatu benda apakah terasa halus, licin, kasar, atau berbulu disebut ....",
    "p": ["Tekstur", "Garis", "Bidang", "Ritme"],
    "b": 0,
    "bahas": "Tekstur adalah sifat permukaan benda yang dapat dirasakan melalui indra peraba maupun penglihatan."
  },
  {
    "q": "Benda di sekitar lingkungan sekolah berikut yang memiliki tekstur nyata terasa kasar apabila diraba adalah ....",
    "p": [
      "Kulit batang pohon mangga dan dinding batako",
      "Kaca jendela kelas",
      "Permukaan papan tulis putih (whiteboard)",
      "Sampul plastik buku tulis"
    ],
    "b": 0,
    "bahas": "Kulit batang pohon dan batako memiliki permukaan tidak rata yang terasa kasar saat diraba."
  },
  {
    "svg": "<svg width='180' height='60' xmlns='http://w3.org'><polygon points='25,45 15,20 35,20' fill='#0284c7'/><polygon points='60,45 50,20 70,20' fill='#0284c7'/><polygon points='95,45 85,20 105,20' fill='#0284c7'/><polygon points='130,45 120,20 140,20' fill='#0284c7'/></svg>",
    "q": "Perhatikan deretan bentuk segitiga terbalik yang berulang dengan ukuran dan jarak sama pada gambar di atas! Prinsip seni rupa yang ditunjukkan pada susunan tersebut adalah ....",
    "p": ["Ritme (irama) repetisi", "Perspektif", "Kontras acak", "Tekstur semu"],
    "b": 0,
    "bahas": "Pengulangan bentuk yang sama secara teratur dan berjarak sama menghasilkan ritme repetisi."
  },
  {
    "q": "Prinsip seni rupa yang mengatur susunan unsur gambar agar tidak berat sebelah antara sisi kiri dan sisi kanan disebut ....",
    "p": ["Keseimbangan (balance)", "Penekanan", "Gradasi", "Proporsi"],
    "b": 0,
    "bahas": "Keseimbangan (balance) membuat susunan objek gambar tampak stabil dan nyaman dipandang."
  },
  {
    "q": "Keseimbangan di mana objek di bagian kiri dan kanan memiliki bentuk, ukuran, dan jarak yang sama persis seperti bayangan cermin disebut keseimbangan ....",
    "p": ["Simetris", "Asimetris", "Bebas", "Acak"],
    "b": 0,
    "bahas": "Keseimbangan simetris membagi bidang menjadi dua bagian yang identik sama."
  },
  {
    "q": "Cara menggambar ritme dengan teknik transisi (perubahan bertahap) dapat dilakukan dengan membuat objek lingkaran yang ....",
    "p": [
      "Ukurannya berubah secara bertahap dari sangat kecil hingga besar",
      "Letaknya bertumpuk berantakan di satu sudut kertas",
      "Dihapus setengah bagiannya",
      "Hanya digambar satu buah di tengah kertas"
    ],
    "b": 0,
    "bahas": "Perubahan ukuran atau warna secara bertahap menciptakan ritme transisi yang dinamis."
  },
  {
    "q": "Garis lengkung yang berputar melingkar secara terus-menerus dari titik pusat ke arah luar seperti cangkang keong disebut garis ....",
    "p": ["Spiral", "Horizontal", "Vertikal", "Zig-zag"],
    "b": 0,
    "bahas": "Garis spiral berputar melingkar menyerupai obat nyamuk bakar atau cangkang siput."
  },
  {
    "q": "Kesan yang ditimbulkan oleh garis mendatar (horizontal) seperti garis cakrawala air laut yang tenang adalah kesan ....",
    "p": ["Tenang, damai, dan luas", "Kacau dan berbahaya", "Bergerak cepat", "Tinggi menjulang"],
    "b": 0,
    "bahas": "Garis horizontal memberikan kesan ketenangan, kestabilan, dan keluasan."
  },
  {
    "q": "Teknik menggambar dengan cara membuat titik-titik kecil secara rapat pada bagian gelap dan titik-titik renggang pada bagian terang disebut teknik ....",
    "p": ["Pointilis", "Dussel", "Blok", "Aquarel"],
    "b": 0,
    "bahas": "Pointilis adalah teknik menggambar atau melukis menggunakan susunan titik-titik."
  },
  {
    "q": "Teknik melukis menggunakan cat air dengan sapuan warna yang tipis dan transparan sehingga serat kertas masih sedikit terlihat disebut teknik ....",
    "p": ["Aquarel", "Plakat", "Arsir", "Kolase"],
    "b": 0,
    "bahas": "Aquarel menggunakan banyak air sehingga menghasilkan sapuan warna tipis transparan, sedangkan plakat menghasilkan sapuan tebal menutup."
  },
  {
    "q": "Contoh objek di lingkungan sekitar rumah atau sekolah yang menunjukkan penerapan prinsip ritme secara alami adalah ....",
    "p": [
      "Susunan daun kelapa pada pelepahnya dan deretan genteng di atap rumah",
      "Tumpukan sampah plastik di sudut halaman",
      "Air yang tumpah di lantai kelas",
      "Coretan acak di papan tulis"
    ],
    "b": 0,
    "bahas": "Susunan anak daun kelapa dan barisan genteng atap rumah memperlihatkan pengulangan teratur (ritme)."
  },
  {
    "svg": "<svg width='165' height='65' xmlns='http://w3.org'><rect x='20' y='15' width='125' height='35' rx='6' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><text x='82' y='37' font-size='10' font-weight='bold' text-anchor='middle' fill='#92400e'>PRINSIP PROPORSI</text></svg>",
    "q": "Perhatikan label prinsip seni rupa pada gambar di atas! Penerapan prinsip proporsi yang benar saat menggambar wajah manusia adalah ....",
    "p": [
      "Ukuran mata, hidung, dan mulut digambar sebanding dengan ukuran kepala",
      "Ukuran hidung digambar lebih besar daripada seluruh wajah",
      "Satu mata digambar sangat besar dan mata lainnya sangat kecil",
      "Telinga digambar di atas ubun-ubun kepala"
    ],
    "b": 0,
    "bahas": "Proporsi mengatur perbandingan ukuran antarbagian objek agar terlihat wajar dan harmonis."
  },
  {
    "q": "Pusat perhatian (center of interest) dalam sebuah gambar pemandangan dapat diciptakan dengan cara ....",
    "p": [
      "Memberikan warna paling cerah atau detail paling menonjol pada objek utama",
      "Mewarnai seluruh bagian gambar dengan warna abu-abu yang sama",
      "Menyembunyikan objek utama di balik garis tepi",
      "Mengosongkan bagian tengah kertas gambar"
    ],
    "b": 0,
    "bahas": "Warna kontras yang cerah dan detail tajam menarik pandangan mata pengamat langsung ke objek utama."
  },
  {
    "q": "Pensil gambar yang memiliki kode huruf 'H' (seperti 2H) memiliki sifat goresan yang ....",
    "p": [
      "Keras dan tipis sehingga cocok untuk membuat sketsa garis bantu awal",
      "Sangat hitam pekat dan lunak",
      "Berwarna merah dan biru",
      "Mudah patah saat diraut"
    ],
    "b": 0,
    "bahas": "Kode H (Hard) berarti keras dan menghasilkan garis tipis, sedangkan B (Black) berarti lunak dan hitam pekat."
  },
  {
    "q": "Karya seni rupa terapan yang dibuat untuk memenuhi fungsi pakai dalam kehidupan sehari-hari sekaligus memiliki nilai keindahan adalah ....",
    "p": [
      "Guci keramik hias, tas anyaman pandan, dan kain batik tulis",
      "Lukisan pemandangan di museum saja",
      "Patung monumen di taman kota",
      "Sketsa pensil di buku gambar"
    ],
    "b": 0,
    "bahas": "Seni rupa terapan memadukan kegunaan praktis sehari-hari dengan estetika keindahan."
  },
  {
    "q": "Warna oranye, merah, dan kuning dalam seni rupa digolongkan ke dalam kelompok warna panas karena memberikan kesan ....",
    "p": [
      "Hangat, bersemangat, ceria, dan penuh energi",
      "Dingin, sejuk, dan sedih",
      "Gelap dan suram",
      "Kaku dan membosankan"
    ],
    "b": 0,
    "bahas": "Warna panas (merah, jingga, kuning) membangkitkan suasana hangat, cerah, dan penuh semangat."
  },
  {
    "q": "Kelompok warna dingin yang memberikan kesan sejuk, tenang, dan damai seperti suasana pegunungan atau lautan adalah ....",
    "p": [
      "Biru, hijau, dan ungu",
      "Merah, oranye, dan kuning",
      "Merah tua dan cokelat",
      "Hitam dan merah menyala"
    ],
    "b": 0,
    "bahas": "Biru, hijau, dan ungu termasuk spektrum warna dingin yang menyejukkan mata."
  },
  {
    "q": "Agar hasil gambar pola ritme pada kertas gambar tampak rapi dan bersih, sikap yang perlu diterapkan siswa saat menggambar adalah ....",
    "p": [
      "Mengukur jarak pola dengan teliti, tidak menekan pensil terlalu keras saat membuat sketsa, dan menjaga kebersihan tangan",
      "Menggambar dengan terburu-buru tanpa garis bantu",
      "Menghapus berkali-kali dengan tangan yang kotor",
      "Mencoret bagian yang salah dengan spidol hitam"
    ],
    "b": 0,
    "bahas": "Sketsa tipis dan ketelitian mengukur jarak membuat hasil akhir gambar ritme bersih dan presisi."
  },
  {
    "q": "Setelah selesai berkarya seni rupa di dalam kelas, hal yang wajib dilakukan oleh seluruh siswa adalah ....",
    "p": [
      "Membersihkan meja dari sisa serutan pensil atau potongan kertas serta merapikan alat gambar",
      "Meninggalkan sampah kertas di bawah bangku",
      "Membiarkan tutup spidol terbuka hingga kering",
      "Mengotori baju teman dengan sisa pewarna"
    ],
    "b": 0,
    "bahas": "Menjaga kebersihan ruang kelas setelah berkarya melatih kedisiplinan dan tanggung jawab."
  },
  {
    "q": "Manfaat mengamati unsur dan prinsip seni rupa pada benda-benda di lingkungan sekitar bagi siswa kelas 5 SD adalah ....",
    "p": [
      "Menumbuhkan rasa syukur atas keindahan ciptaan Tuhan dan mengasah kepekaan estetika",
      "Membuat siswa lupa mengerjakan tugas rumah",
      "Menjadikan siswa suka merusak tanaman hias",
      "Mengurangi kreativitas dalam menggambar"
    ],
    "b": 0,
    "bahas": "Pengamatan visual terhadap lingkungan melatih kepekaan seni dan rasa syukur."
  }
]);

