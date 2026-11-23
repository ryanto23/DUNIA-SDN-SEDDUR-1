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

window.tambahPaketUjian("5", "mtk", "UTS Semester 2", [
  {
    "svg": "<svg width='160' height='70' xmlns='http://w3.org'><polyline points='55,15 55,55 105,55' fill='none' stroke='#dc2626' stroke-width='3'/><rect x='55' y='43' width='12' height='12' fill='none' stroke='#0284c7' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar sudut siku-siku di atas! Besar sudut siku-siku adalah ....",
    "p": ["45°", "90°", "180°", "360°"],
    "b": 1,
    "bahas": "Sudut siku-siku memiliki besar tepat 90°."
  },
  {
    "q": "Sudut yang besarnya antara 0° dan 90° (lebih kecil dari 90°) disebut sudut ....",
    "p": ["Lancip", "Siku-siku", "Tumpul", "Lurus"],
    "b": 0,
    "bahas": "Sudut lancip besarnya kurang dari 90° (0° < x < 90°)."
  },
  {
    "q": "Sudut yang besarnya antara 90° dan 180° (lebih besar dari 90° tetapi kurang dari 180°) disebut sudut ....",
    "p": ["Lancip", "Siku-siku", "Tumpul", "Refleks"],
    "b": 2,
    "bahas": "Sudut tumpul besarnya lebih dari 90° dan kurang dari 180° (90° < x < 180°)."
  },
  {
    "q": "Sebuah sudut memiliki besar 135°. Sudut tersebut termasuk jenis sudut ....",
    "p": ["Lancip", "Siku-siku", "Tumpul", "Lurus"],
    "b": 2,
    "bahas": "Karena 135° berada di antara 90° dan 180°, sudut tersebut adalah sudut tumpul."
  },
  {
    "q": "Alat ukur baku yang digunakan untuk mengukur besar suatu sudut dalam satuan derajat adalah ....",
    "p": ["Busur derajat", "Penggaris lurus", "Jangka", "Timbangan neraca"],
    "b": 0,
    "bahas": "Busur derajat adalah alat baku untuk mengukur dan menggambar besar sudut."
  },
  {
    "svg": "<svg width='150' height='75' xmlns='http://w3.org'><circle cx='75' cy='38' r='26' fill='#ffffff' stroke='#0f172a' stroke-width='2.5'/><line x1='75' y1='38' x2='75' y2='18' stroke='#0284c7' stroke-width='2.5'/><line x1='75' y1='38' x2='93' y2='38' stroke='#dc2626' stroke-width='3'/><circle cx='75' cy='38' r='3' fill='#0f172a'/></svg>",
    "q": "Perhatikan gambar jam dinding yang menunjukkan pukul 03.00 di atas! Besar sudut terkecil yang dibentuk oleh jarum pendek dan jarum panjang pada pukul 03.00 adalah ....",
    "p": ["60°", "90°", "120°", "180°"],
    "b": 1,
    "bahas": "Setiap selisih 1 jam pada jam dinding bernilai 30° (360° : 12). Pukul 03.00 = 3 × 30° = 90° (siku-siku)."
  },
  {
    "q": "Besar sudut terkecil yang dibentuk oleh kedua jarum jam pada pukul 04.00 tepat adalah ....",
    "p": ["90°", "120°", "150°", "180°"],
    "b": 1,
    "bahas": "Pukul 04.00 jaraknya 4 angka jam = 4 × 30° = 120°."
  },
  {
    "q": "Pada pukul 06.00 tepat, jarum pendek menunjuk angka 6 dan jarum panjang menunjuk angka 12. Sudut yang terbentuk pada pukul 06.00 adalah sudut lurus yang besarnya ....",
    "p": ["90°", "120°", "150°", "180°"],
    "b": 3,
    "bahas": "6 × 30° = 180° (sudut lurus)."
  },
  {
    "q": "Besar sudut satu putaran penuh pada lingkaran adalah ....",
    "p": ["90°", "180°", "270°", "360°"],
    "b": 3,
    "bahas": "Satu putaran penuh lingkaran besarnya 360°."
  },
  {
    "q": "Jumlah besar ketiga sudut dalam pada setiap bangun segitiga adalah ....",
    "p": ["90°", "180°", "270°", "360°"],
    "b": 1,
    "bahas": "Jumlah seluruh sudut dalam pada segitiga selalu 180°."
  },
  {
    "q": "Besar masing-masing sudut pada bangun segitiga sama sisi adalah ....",
    "p": ["45°", "60°", "90°", "120°"],
    "b": 1,
    "bahas": "180° : 3 = 60° untuk setiap sudut pada segitiga sama sisi."
  },
  {
    "q": "Sebuah segitiga siku-siku memiliki salah satu sudut lancip sebesar 35°. Besar sudut lancip lainnya pada segitiga tersebut adalah ....",
    "p": ["45°", "55°", "65°", "145°"],
    "b": 1,
    "bahas": "180° - (90° + 35°) = 180° - 125° = 55°."
  },
  {
    "q": "Sebuah segitiga sama kaki memiliki besar sudut puncak 40°. Besar masing-masing sudut alasnya adalah ....",
    "p": ["50°", "60°", "70°", "80°"],
    "b": 2,
    "bahas": "(180° - 40°) : 2 = 140° : 2 = 70°."
  },
  {
    "q": "Jumlah besar keempat sudut dalam pada setiap bangun segi empat adalah ....",
    "p": ["180°", "270°", "360°", "540°"],
    "b": 2,
    "bahas": "Jumlah keempat sudut dalam segi empat selalu 360°."
  },
  {
    "q": "Sebuah trapesium siku-siku memiliki dua sudut siku-siku (masing-masing 90°) dan satu sudut tumpul sebesar 125°. Besar sudut lancip keempat pada trapesium tersebut adalah ....",
    "p": ["45°", "55°", "65°", "75°"],
    "b": 1,
    "bahas": "360° - (90° + 90° + 125°) = 360° - 305° = 55°."
  },
  {
    "q": "Perhatikan ciri-ciri bangun datar berikut:\n(1) Memiliki empat sisi sama panjang.\n(2) Sudut-sudut yang berhadapan sama besar (bukan 90°).\n(3) Kedua diagonalnya berpotongan tegak lurus dan saling membagi dua sama panjang.\nBangun datar yang dimaksud adalah ....",
    "p": ["Belah ketupat", "Persegi panjang", "Trapesium sama kaki", "Layang-layang"],
    "b": 0,
    "bahas": "Belah ketupat memiliki 4 sisi sama panjang, sudut berhadapan sama besar, dan diagonal berpotongan tegak lurus."
  },
  {
    "q": "Bangun segi empat yang memiliki dua pasang sisi berdekatan sama panjang dan kedua diagonalnya berpotongan tegak lurus (salah satu diagonalnya membagi dua diagonal lainnya sama panjang) adalah ....",
    "p": ["Layang-layang", "Jajargenjang", "Persegi", "Trapesium siku-siku"],
    "b": 0,
    "bahas": "Layang-layang memiliki dua pasang sisi yang berdekatan sama panjang dan diagonal saling tegak lurus."
  },
  {
    "q": "Perbedaan utama antara persegi dan belah ketupat terletak pada ....",
    "p": [
      "Besar keempat sudutnya (persegi keempat sudutnya 90°, sedangkan belah ketupat tidak harus 90°)",
      "Jumlah sisinya",
      "Ketegaklurusan kedua diagonalnya",
      "Kesamaan panjang keempat sisinya"
    ],
    "b": 0,
    "bahas": "Persegi dan belah ketupat sama-sama memiliki 4 sisi sama panjang dan diagonal tegak lurus, namun keempat sudut persegi wajib 90°."
  },
  {
    "svg": "<svg width='165' height='70' xmlns='http://w3.org'><polygon points='45,18 115,18 135,54 25,54' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/></svg>",
    "q": "Perhatikan gambar bangun datar di atas! Bangun segi empat yang memiliki sepasang sisi sejajar sama panjang dan sepasang sisi miring sama panjang disebut ....",
    "p": ["Trapesium sama kaki", "Trapesium siku-siku", "Jajargenjang", "Belah ketupat"],
    "b": 0,
    "bahas": "Trapesium sama kaki memiliki sepasang sisi sejajar dan dua kaki miring yang sama panjang."
  },
  {
    "q": "Bangun segi empat yang memiliki dua pasang sisi berhadapan sejajar dan sama panjang, serta sudut-sudut yang berhadapan sama besar (bukan 90°) adalah ....",
    "p": ["Jajargenjang", "Trapesium sembarang", "Persegi panjang", "Layang-layang"],
    "b": 0,
    "bahas": "Jajargenjang memiliki dua pasang sisi sejajar sama panjang dan sudut berhadapan sama besar."
  },
  {
    "q": "Banyak sumbu simetri pada bangun datar persegi adalah ....",
    "p": ["2 sumbu simetri", "3 sumbu simetri", "4 sumbu simetri", "Tak terhingga"],
    "b": 2,
    "bahas": "Persegi memiliki 4 sumbu simetri lipat."
  },
  {
    "q": "Banyak sumbu simetri lipat pada bangun persegi panjang (bukan persegi) adalah ....",
    "p": ["1 sumbu simetri", "2 sumbu simetri", "4 sumbu simetri", "0 sumbu simetri"],
    "b": 1,
    "bahas": "Persegi panjang memiliki 2 sumbu simetri lipat (vertikal dan horizontal)."
  },
  {
    "q": "Segitiga yang ketiga sisinya berbeda panjang dan ketiga sudutnya juga berbeda besar disebut segitiga ....",
    "p": ["Sembarang", "Sama kaki", "Sama sisi", "Siku-siku sama kaki"],
    "b": 0,
    "bahas": "Segitiga sembarang memiliki tiga sisi dengan panjang yang berbeda-beda."
  },
  {
    "q": "Arah mata angin Utara dan Timur membentuk sudut sebesar ....",
    "p": ["45°", "90°", "135°", "180°"],
    "b": 1,
    "bahas": "Arah Utara dan Timur saling tegak lurus membentuk sudut siku-siku 90°."
  },
  {
    "q": "Jika Andi menghadap ke arah Barat lalu berputar searah jarum jam sebesar 180°, maka Andi sekarang menghadap ke arah ....",
    "p": ["Timur", "Utara", "Selatan", "Barat Laut"],
    "b": 0,
    "bahas": "Berputar 180° berbalik arah lurus ke arah berlawanan; lawan dari Barat adalah Timur."
  }
]);

window.tambahPaketUjian("5", "ipas", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>SISTEM PERNAPASAN</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Hidung ➔ Tenggorokan ➔ Paru-Paru</text></svg>",
    "q": "Perhatikan bagan saluran pernapasan pada gambar di atas! Urutan jalannya udara pernapasan dari luar masuk ke dalam tubuh manusia yang benar adalah ....",
    "p": [
      "Rongga hidung → faring → laring → trakea → bronkus → bronkiolus → alveolus",
      "Rongga hidung → kerongkongan → lambung → usus halus → paru-paru",
      "Mulut → trakea → alveolus → bronkus → rongga hidung",
      "Rongga hidung → bronkus → trakea → faring → alveolus"
    ],
    "b": 0,
    "bahas": "Udara masuk melalui hidung, melewati tenggorokan (faring, laring, trakea), bronkus, bronkiolus, dan berakhir di alveolus."
  },
  {
    "q": "Bagian di dalam paru-paru yang berbentuk gelembung-gelembung halus berdinding tipis sebagai tempat terjadinya pertukaran gas oksigen (O₂) dan karbon dioksida (CO₂) disebut ....",
    "p": ["Alveolus", "Bronkus", "Trakea", "Diafragma"],
    "b": 0,
    "bahas": "Alveolus dikelilingi pembuluh kapiler darah sebagai tempat difusi pertukaran O₂ dan CO₂."
  },
  {
    "q": "Sekat otot yang membatasi rongga dada dan rongga perut serta berperan penting membantu proses pernapasan perut manusia disebut ....",
    "p": ["Diafragma", "Epiglotis", "Kerongkongan", "Usus buntu"],
    "b": 0,
    "bahas": "Kontraksi dan relaksasi otot diafragma mengatur volume rongga dada saat bernapas."
  },
  {
    "q": "Gangguan sistem pernapasan berupa penyempitan saluran pernapasan akibat alergi debu, udara dingin, atau bulu hewan yang menyebabkan penderitanya sesak napas adalah ....",
    "p": ["Asma", "Influenza", "Tuberkulosis (TBC)", "Pneumonia"],
    "b": 0,
    "bahas": "Asma dipicu reaksi alergi yang menyebabkan penyempitan saluran bronkus."
  },
  {
    "q": "Urutan saluran pencernaan makanan pada manusia yang benar dari awal hingga akhir adalah ....",
    "p": [
      "Mulut → kerongkongan → lambung → usus halus → usus besar → anus",
      "Mulut → tenggorokan → lambung → usus besar → usus halus → anus",
      "Mulut → lambung → kerongkongan → usus halus → anus",
      "Mulut → kerongkongan → usus halus → lambung → usus besar → anus"
    ],
    "b": 0,
    "bahas": "Makanan dicerna melalui mulut, kerongkongan (esofagus), lambung, usus halus, usus besar, dan dikeluarkan lewat anus."
  },
  {
    "q": "Gerakan meremas-remas dan mendorong makanan oleh dinding kerongkongan menuju ke lambung disebut gerak ....",
    "p": ["Peristaltik", "Refleks", "Rotasi", "Respirasi"],
    "b": 0,
    "bahas": "Gerak peristaltik mendorong gumpalan makanan (bolus) dari kerongkongan masuk ke lambung."
  },
  {
    "q": "Organ pencernaan yang berfungsi menyerap sari-sari makanan (nutrisi) untuk diedarkan oleh darah ke seluruh tubuh adalah ....",
    "p": ["Usus halus", "Usus besar", "Kerongkongan", "Lambung"],
    "b": 0,
    "bahas": "Usus halus (terdiri atas usus dua belas jari, usus kosong, dan usus penyerapan) menyerap sari makanan."
  },
  {
    "q": "Fungsi utama usus besar dalam sistem pencernaan manusia adalah ....",
    "p": [
      "Menyerap kembali air dan garam mineral dari sisa makanan serta membusukkan sisa makanan dengan bantuan bakteri E. coli",
      "Menghancurkan makanan menggunakan gigi geraham",
      "Menghasilkan enzim amilase untuk mengubah zat tepung menjadi gula",
      "Menukar oksigen dengan karbon dioksida"
    ],
    "b": 0,
    "bahas": "Usus besar mengatur kadar air pada feses sebelum dikeluarkan melalui rektum dan anus."
  },
  {
    "q": "Zat gizi makanan yang berfungsi utama sebagai sumber tenaga (energi) utama bagi tubuh manusia dan banyak terdapat pada nasi, jagung, dan roti adalah ....",
    "p": ["Karbohidrat", "Protein", "Vitamin", "Mineral"],
    "b": 0,
    "bahas": "Karbohidrat merupakan sumber energi utama untuk beraktivitas."
  },
  {
    "q": "Zat gizi yang berfungsi sebagai zat pembangun untuk pertumbuhan sel dan mengganti sel-sel tubuh yang rusak (terdapat pada ikan, telur, tempe, dan tahu) adalah ....",
    "p": ["Protein", "Karbohidrat", "Lemak jenuh", "Serat"],
    "b": 0,
    "bahas": "Protein hewani dan nabati sangat dibutuhkan pada masa pertumbuhan anak-anak."
  },
  {
    "q": "Tahap perkembangan manusia di mana terjadi perubahan fisik yang pesat menuju kedewasaan (seperti suara memberat pada laki-laki dan menstruasi pada perempuan) disebut masa ....",
    "p": ["Pubertas (remaja)", "Balita", "Lansia", "Bayi"],
    "b": 0,
    "bahas": "Masa pubertas merupakan masa peralihan dari anak-anak menuju remaja dewasa."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#854d0e'>LETAK GEOGRAFIS</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>2 Benua &amp; 2 Samudra</text></svg>",
    "q": "Perhatikan kartu geografi pada gambar di atas! Secara geografis, wilayah negara Indonesia terletak di posisi silang yang sangat strategis, yaitu di antara dua benua dan dua samudra yaitu ....",
    "p": [
      "Benua Asia dan Benua Australia serta Samudra Hindia dan Samudra Pasifik",
      "Benua Eropa dan Benua Afrika serta Samudra Atlantik dan Samudra Arktik",
      "Benua Amerika dan Benua Asia serta Samudra Pasifik dan Samudra Atlantik",
      "Benua Australia dan Benua Antartika serta Samudra Hindia dan Samudra Arktik"
    ],
    "b": 0,
    "bahas": "Indonesia diapit Benua Asia dan Benua Australia, serta Samudra Hindia dan Samudra Pasifik."
  },
  {
    "q": "Indonesia disebut sebagai negara MARITIM karena sebagian besar wilayahnya berupa ....",
    "p": [
      "Perairan laut yang luas dengan ribuan pulau yang saling terhubung",
      "Padang pasir yang sangat kering",
      "Pegunungan es abadi",
      "Daratan tertutup tanpa pantai"
    ],
    "b": 0,
    "bahas": "Dua pertiga wilayah Indonesia berupa lautan yang kaya akan sumber daya perikanan dan jalur pelayaran."
  },
  {
    "q": "Indonesia juga dijuluki sebagai negara AGRARIS karena sebagian besar penduduknya bermata pencaharian di bidang ....",
    "p": [
      "Pertanian dan perkebunan dengan tanah yang subur",
      "Pertambangan emas dan perak",
      "Perakitan pesawat terbang",
      "Perbankan internasional"
    ],
    "b": 0,
    "bahas": "Tanah vulkanik yang subur dan iklim tropis menjadikan sektor pertanian sebagai tulang punggung pangan Indonesia."
  },
  {
    "q": "Garis khayal di permukaan bumi yang membelah bumi menjadi belahan utara dan selatan serta melintasi Kota Pontianak (Kalimantan Barat) adalah garis ....",
    "p": ["Khatulistiwa (Ekuator / 0° Lintang)", "Bujur Timur", "Bujur Barat", "Lingkar Kutub"],
    "b": 0,
    "bahas": "Indonesia dilalui garis khatulistiwa sehingga beriklim tropis dengan dua musim (hujan dan kemarau)."
  },
  {
    "q": "Garis khayal yang membagi wilayah persebaran fauna Indonesia menjadi tipe Asiatis (Indonesia Barat) dan tipe Peralihan (Indonesia Tengah) adalah garis ....",
    "p": ["Wallace", "Weber", "Khatulistiwa", "Meridian"],
    "b": 0,
    "bahas": "Garis Wallace memisahkan fauna tipe Asiatis dan Peralihan, sedangkan Garis Weber memisahkan tipe Peralihan dan Australis."
  },
  {
    "q": "Contoh hewan endemik khas Indonesia bagian timur (tipe Australis) yang memiliki bulu sangat indah sehingga dijuluki 'Burung Surga' dari Papua adalah ....",
    "p": ["Burung Cenderawasih", "Orangutan", "Harimau Sumatera", "Badak Bercula Satu"],
    "b": 0,
    "bahas": "Burung Cenderawasih adalah fauna khas Papua (tipe Australis)."
  },
  {
    "q": "Komodo merupakan kadal purba terbesar di dunia yang menjadi hewan endemik tipe Peralihan yang hidup alami di Pulau ....",
    "p": ["Komodo, Nusa Tenggara Timur", "Sumatera", "Kalimantan", "Madura"],
    "b": 0,
    "bahas": "Komodo merupakan satwa langka endemik di Taman Nasional Komodo, NTT."
  },
  {
    "q": "Sumber daya alam yang dapat diperbarui (tidak akan habis jika dikelola dengan bijaksana) di bawah ini adalah ....",
    "p": [
      "Air, tanah, sinar matahari, tumbuhan, dan hewan",
      "Minyak bumi, batu bara, dan gas alam",
      "Emas, perak, dan tembaga",
      "Nikel, timah, dan bauksit"
    ],
    "b": 0,
    "bahas": "Air, matahari, tumbuhan, dan hewan dapat pulih atau berkembang biak kembali secara alami."
  },
  {
    "q": "Bahan bakar fosil yang terbentuk dari sisa-sisa tumbuhan dan hewan purba selama jutaan tahun sehingga termasuk sumber daya alam yang TIDAK dapat diperbarui adalah ....",
    "p": ["Minyak bumi dan batu bara", "Air sungai dan angin", "Hutan bakau dan terumbu karang", "Ikan laut dan rumput laut"],
    "b": 0,
    "bahas": "Minyak bumi dan batu bara membutuhkan waktu jutaan tahun untuk terbentuk sehingga penggunaannya harus dihemat."
  },
  {
    "q": "Hutan bakau (mangrove) yang tumbuh di pesisir pantai memiliki fungsi ekologis yang sangat penting bagi lingkungan yaitu ....",
    "p": [
      "Mencegah abrasi (pengikisan pantai oleh ombak) dan menjadi tempat berlindung biota laut",
      "Menghasilkan kayu jati untuk bahan mebel",
      "Mengeringkan air laut menjadi garam",
      "Menghalangi perahu nelayan melaut"
    ],
    "b": 0,
    "bahas": "Akar pohon mangrove menahan gelombang laut sehingga mencegah abrasi pantai."
  },
  {
    "q": "Upaya pelestarian satwa langka di habitat aslinya (pelestarian in situ) dilakukan pemerintah dengan cara mendirikan ....",
    "p": [
      "Taman Nasional, Cagar Alam, dan Suaka Margasatwa",
      "Kebun binatang di tengah kota besar",
      "Pasar hewan peliharaan",
      "Museum sejarah perjuangan"
    ],
    "b": 0,
    "bahas": "Taman Nasional dan Suaka Margasatwa melindungi tumbuhan dan hewan langka langsung di habitat alaminya."
  },
  {
    "q": "Cara menjaga kesehatan organ pernapasan dan pencernaan dalam kehidupan sehari-hari adalah ....",
    "p": [
      "Makan makanan bergizi seimbang, minum air putih cukup, berolahraga teratur, dan menghindari asap rokok",
      "Sering jajan makanan pedas sembarangan dan jarang mencuci tangan",
      "Membakar sampah plastik di halaman rumah",
      "Begadang setiap malam tanpa berolahraga"
    ],
    "b": 0,
    "bahas": "Pola hidup bersih dan sehat menjaga fungsi paru-paru dan saluran pencernaan tetap optimal."
  },
  {
    "q": "Dampak negatif penangkapan ikan di laut menggunakan bahan peledak (bom ikan) atau pukat harimau adalah ....",
    "p": [
      "Merusak terumbu karang dan membunuh benih-benih ikan kecil sehingga mengancam kelestarian laut",
      "Membuat ikan berkembang biak lebih cepat",
      "Menyuburkan terumbu karang di dasar laut",
      "Menambah jumlah nelayan tradisional"
    ],
    "b": 0,
    "bahas": "Bom ikan dan pukat harimau menghancurkan ekosistem terumbu karang yang menjadi rumah ikan."
  },
  {
    "q": "Kesimpulan yang tepat tentang kekayaan alam dan posisi geografis Indonesia adalah ....",
    "p": [
      "Letak strategis dan kekayaan alam Indonesia merupakan anugerah Tuhan yang wajib dikelola secara bijak dan lestari",
      "Kekayaan alam Indonesia boleh dieksploitasi habis-habisan tanpa reboisasi",
      "Indonesia hanya memiliki kekayaan di daratan saja tanpa potensi laut",
      "Pelestarian alam hanya menjadi tugas pemerintah tanpa peran masyarakat"
    ],
    "b": 0,
    "bahas": "Seluruh warga negara bertanggung jawab menjaga kelestarian kekayaan alam maritim dan agraris Indonesia."
  }
]);

window.tambahPaketUjian("5", "bindo", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>SINGKATAN &amp; AKRONIM</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>NKRI • SD • Puskesmas • Daring</text></svg>",
    "q": "Perhatikan kartu kebahasaan pada gambar di atas! Kepanjangan yang tepat dari singkatan 'NKRI' adalah ....",
    "p": [
      "Negara Kesatuan Republik Indonesia",
      "Nasional Kesatuan Rakyat Indonesia",
      "Negara Keadilan Republik Indonesia",
      "Nusantara Kesatuan Republik Indonesia"
    ],
    "b": 0,
    "bahas": "NKRI adalah singkatan dari Negara Kesatuan Republik Indonesia."
  },
  {
    "q": "Gabungan huruf awal atau suku kata dari beberapa kata yang ditulis dan dilafalkan seperti kata biasa (contohnya 'Puskesmas' dan 'Posyandu') disebut ....",
    "p": ["Akronim", "Singkatan gelar", "Kalimat majemuk", "Sinonim"],
    "b": 0,
    "bahas": "Akronim adalah kependekan yang berupa gabungan huruf atau suku kata yang dilafalkan sebagai kata wajar (Puskesmas = Pusat Kesehatan Masyarakat)."
  },
  {
    "q": "Akronim 'daring' yang sering digunakan dalam pembelajaran berbasis internet memiliki kepanjangan ....",
    "p": ["Dalam jaringan", "Dari rumah", "Data internet", "Daftar ringkasan"],
    "b": 0,
    "bahas": "Daring = dalam jaringan (online), sedangkan luring = luar jaringan (offline)."
  },
  {
    "q": "Penulisan singkatan gelar akademik di belakang nama orang yang paling tepat sesuai EYD V adalah ....",
    "p": [
      "Ahmad Fauzi, S.Pd.",
      "Ahmad Fauzi S.pd",
      "Ahmad Fauzi, SPd",
      "Ahmad Fauzi. S.Pd,"
    ],
    "b": 0,
    "bahas": "Gelar di belakang nama dipisahkan tanda koma (,) dan setiap huruf singkatan gelar diikuti tanda titik (S.Pd.)."
  },
  {
    "q": "Kalimat di bawah ini yang merupakan FAKTA (pernyataan yang terbukti kebenarannya) adalah ....",
    "p": [
      "Jembatan Suramadu menghubungkan Pulau Jawa dan Pulau Madura melintasi Selat Madura.",
      "Menurut saya, berwisata ke museum jauh lebih menyenangkan daripada ke pantai.",
      "Sebaiknya seluruh siswa membaca tiga buku cerita setiap minggu.",
      "Kue tradisional itu rasanya paling lezat di seluruh dunia."
    ],
    "b": 0,
    "bahas": "Keberadaan Jembatan Suramadu yang menghubungkan Jawa dan Madura adalah fakta geografis yang nyata."
  },
  {
    "q": "Kalimat di bawah ini yang merupakan OPINI (pendapat atau penilaian subjektif) adalah ....",
    "p": [
      "Pemandangan matahari terbenam di pantai itu tampak sangat memukau menurutku.",
      "Indonesia memproklamasikan kemerdekaannya pada tanggal 17 Agustus 1945.",
      "Satu tahun terdiri atas dua belas bulan.",
      "Air membeku pada suhu nol derajat Celsius."
    ],
    "b": 0,
    "bahas": "Kata 'sangat memukau menurutku' adalah penilaian subjektif pembicara (opini)."
  },
  {
    "q": "Pesan surat elektronik yang dikirimkan secara cepat melalui jaringan internet dari satu alamat email ke alamat email lainnya disebut ....",
    "p": ["Surel (surat elektronik)", "Wesel pos", "Telegram", "Prangko"],
    "b": 0,
    "bahas": "Surel (surat elektronik / email) dikirimkan secara digital melalui internet."
  },
  {
    "q": "Bagian dalam surat elektronik (surel) yang berfungsi untuk menuliskan judul singkat isi pesan sebelum surat dibuka oleh penerima adalah kolom ....",
    "p": ["Subjek (Subject)", "Lampiran (Attachment)", "Penerima (To)", "Salam penutup"],
    "b": 0,
    "bahas": "Kolom Subjek diisi judul/inti surat agar penerima langsung mengetahui topik pesan."
  },
  {
    "q": "Teknik membaca cepat untuk menemukan informasi tertentu secara langsung (seperti mencari jadwal keberangkatan kereta api atau nomor telepon pada daftar) tanpa membaca seluruh kata disebut membaca ....",
    "p": ["Memindai (scanning)", "Nyaring", "Indah puisi", "Mengeja huruf"],
    "b": 0,
    "bahas": "Membaca memindai (scanning) digunakan untuk menemukan data spesifik secara cepat."
  },
  {
    "q": "Sikap bijak dan aman saat menggunakan internet bagi siswa kelas 5 SD adalah ....",
    "p": [
      "Menggunakan internet di bawah bimbingan orang tua dan tidak membagikan data pribadi kepada orang asing",
      "Membagikan alamat rumah dan nomor telepon orang tua di media sosial umum",
      "Membuka situs sembarangan tanpa izin orang tua",
      "Menulis komentar kasar kepada teman di internet"
    ],
    "b": 0,
    "bahas": "Literasi digital yang aman melindungi data pribadi anak dari kejahatan siber."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#854d0e'>HURUF KAPITAL</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Nama Geografis &amp; Peristiwa Sejarah</text></svg>",
    "q": "Perhatikan kartu ejaan pada gambar di atas! Penulisan huruf kapital untuk nama geografis yang benar terdapat pada kalimat ....",
    "p": [
      "Kapal feri itu berlayar menyeberangi Selat Madura menuju Pelabuhan Kamal.",
      "Kapal feri itu berlayar menyeberangi selat Madura menuju pelabuhan Kamal.",
      "Kapal feri itu berlayar menyeberangi Selat madura menuju Pelabuhan kamal.",
      "Kapal feri itu berlayar menyeberangi selat madura menuju pelabuhan kamal."
    ],
    "b": 0,
    "bahas": "Nama jenis geografis yang diikuti nama diri ditulis kapital di setiap awal unsurnya (Selat Madura, Pelabuhan Kamal)."
  },
  {
    "q": "Penulisan kata 'gula jawa' atau 'garam madura' yang menyatakan jenis produk (bukan letak geografis) yang benar sesuai EYD V adalah ....",
    "p": [
      "Ibu membeli garam madura dan gula jawa di pasar tradisional.",
      "Ibu membeli Garam Madura dan Gula Jawa di pasar tradisional.",
      "Ibu membeli garam Madura dan gula Jawa di pasar tradisional.",
      "Ibu membeli Garam madura dan Gula jawa di pasar tradisional."
    ],
    "b": 0,
    "bahas": "Nama geografis yang dipakai sebagai nama jenis produk ditulis dengan huruf kecil (garam madura, gula jawa)."
  },
  {
    "q": "Penulisan nama peristiwa sejarah yang tepat dengan huruf kapital terdapat pada kalimat ....",
    "p": [
      "Peristiwa Proklamasi Kemerdekaan Indonesia terjadi pada tanggal 17 Agustus 1945.",
      "Peristiwa proklamasi kemerdekaan Indonesia terjadi pada tanggal 17 Agustus 1945.",
      "Peristiwa Proklamasi kemerdekaan indonesia terjadi pada tanggal 17 agustus 1945.",
      "Peristiwa proklamasi Kemerdekaan indonesia terjadi pada tanggal 17 Agustus 1945."
    ],
    "b": 0,
    "bahas": "Setiap awal kata pada nama peristiwa sejarah resmi ditulis dengan huruf kapital (Proklamasi Kemerdekaan Indonesia)."
  },
  {
    "q": "Penulisan angka dan bilangan dalam kalimat yang benar sesuai aturan ejaan bahasa Indonesia adalah ....",
    "p": [
      "Sebanyak 25 siswa kelas lima berkunjung ke Museum Sumenep.",
      "Sebanyak dua puluh lima siswa kelas 5 berkunjung ke Museum Sumenep.",
      "25 siswa kelas lima berkunjung ke Museum Sumenep.",
      "Sebanyak 2 siswa kelas lima berkunjung ke Museum Sumenep."
    ],
    "b": 0,
    "bahas": "Bilangan yang dapat dinyatakan dengan satu atau dua kata ditulis dengan huruf (lima), sedangkan bilangan lebih dari dua kata ditulis dengan angka (25), dan angka tidak boleh diletakkan di awal kalimat."
  },
  {
    "q": "Perbaikan penulisan angka di awal kalimat '15 orang peserta lomba telah hadir di aula sekolah' yang benar adalah ....",
    "p": [
      "Lima belas orang peserta lomba telah hadir di aula sekolah.",
      "15 (lima belas) orang peserta lomba telah hadir di aula sekolah.",
      "Sebanyak lima belas orang peserta lomba telah hadir di aula sekolah.",
      "Telah hadir 15 orang peserta lomba di aula sekolah."
    ],
    "b": 0,
    "bahas": "Bilangan pada awal kalimat harus ditulis dengan huruf (Lima belas)."
  },
  {
    "q": "Kalimat di bawah ini yang merupakan kalimat LARANGAN yang sering dipasang di ruang museum atau perpustakaan adalah ....",
    "p": [
      "Dilarang menyentuh benda-benda koleksi bersejarah di dalam lemari kaca!",
      "Silakan mengisi buku tamu sebelum memasuki ruang pameran!",
      "Museum dibuka mulai pukul 08.00 hingga 15.00 WIB.",
      "Apakah Anda sudah membeli tiket masuk museum?"
    ],
    "b": 0,
    "bahas": "Kata 'Dilarang' menyatakan larangan atau aturan agar pengunjung tidak merusak koleksi museum."
  },
  {
    "q": "Kalimat perintah berikut yang disampaikan secara halus dan santun (kalimat permintaan/persilakan) adalah ....",
    "p": [
      "Mohon matikan nada dering ponsel Anda selama berada di dalam ruang pameran.",
      "Cepat matikan ponselmu sekarang juga!",
      "Jangan berisik di sini!",
      "Tutup pintu itu keras-keras!"
    ],
    "b": 0,
    "bahas": "Kata 'Mohon' atau 'Silakan' menjadikan kalimat perintah terasa sopan dan menghargai pengunjung."
  },
  {
    "q": "Teks pengumuman yang dipasang di papan informasi sekolah bertujuan untuk ....",
    "p": [
      "Menyampaikan informasi penting secara resmi kepada banyak orang agar diketahui bersama",
      "Menceritakan dongeng sebelum tidur",
      "Menjual barang dagangan secara paksa",
      "Menyembunyikan jadwal kegiatan sekolah"
    ],
    "b": 0,
    "bahas": "Pengumuman berisi pemberitahuan resmi yang ditujukan kepada khalayak ramai."
  },
  {
    "q": "Unsur penting yang wajib tercantum di dalam sebuah surat pengumuman kegiatan wisata edukasi sekolah adalah ....",
    "p": [
      "Judul pengumuman, ditujukan kepada siapa, isi informasi (hari, tanggal, waktu, tempat), dan pembuat pengumuman",
      "Daftar nilai ulangan seluruh siswa",
      "Resep cara memasak nasi goreng",
      "Pantun jenaka empat bait"
    ],
    "b": 0,
    "bahas": "Pengumuman yang lengkap memuat tujuan, waktu, tempat, isi kegiatan, dan penanggung jawab."
  },
  {
    "q": "Bacalah kutipan pengumuman berikut!\n'Diberitahukan kepada seluruh siswa kelas V SD Negeri Seddur 1 bahwa kegiatan kunjungan edukasi ke Museum Keraton Sumenep akan dilaksanakan pada hari Sabtu, 14 Maret 2026, pukul 07.30 WIB. Siswa diharapkan memakai seragam batik sekolah dengan rapi.'\n\nSiapakah sasaran pembaca pengumuman di atas?",
    "p": [
      "Seluruh siswa kelas V SD Negeri Seddur 1",
      "Seluruh wali murid kelas I",
      "Masyarakat umum di sekitar pasar",
      "Pengurus perpustakaan daerah"
    ],
    "b": 0,
    "bahas": "Pada kalimat pertama jelas tertulis ditujukan kepada seluruh siswa kelas V SD Negeri Seddur 1."
  },
  {
    "q": "Pakaian yang wajib dikenakan siswa saat mengikuti kegiatan kunjungan edukasi berdasarkan pengumuman di atas adalah ....",
    "p": ["Seragam batik sekolah", "Pakaian olahraga", "Seragam pramuka", "Pakaian bebas sehari-hari"],
    "b": 0,
    "bahas": "Pada kalimat terakhir disebutkan siswa diharapkan memakai seragam batik sekolah."
  },
  {
    "q": "Sinonim (persamaan kata) dari kata 'edukasi' pada frasa 'kunjungan edukasi' adalah ....",
    "p": ["Pendidikan / pembelajaran", "Permainan", "Perdagangan", "Olahraga"],
    "b": 0,
    "bahas": "Edukasi bermakna pendidikan atau kegiatan belajar."
  },
  {
    "q": "Antonim (lawan kata) dari kata 'modern' pada kalimat 'Teknologi komunikasi modern memudahkan manusia bertukar kabar' adalah ....",
    "p": ["Tradisional / kuno", "Canggih", "Maju", "Baru"],
    "b": 0,
    "bahas": "Lawan kata dari modern adalah tradisional atau kuno."
  },
  {
    "q": "Imbuhan 'ter-' pada kalimat 'Pintu gerbang museum itu terbuka lebar sejak pukul delapan pagi' bermakna ....",
    "p": [
      "Menyatakan keadaan yang sudah terjadi",
      "Menyatakan paling atau superlatif",
      "Menyatakan perbuatan tidak sengaja",
      "Menyatakan kemampuan"
    ],
    "b": 0,
    "bahas": "Kata 'terbuka' menyatakan keadaan pintu yang sudah dalam kondisi buka."
  },
  {
    "q": "Manfaat mempelajari cara membaca iklan, pengumuman, dan informasi digital secara kritis bagi siswa kelas 5 SD adalah ....",
    "p": [
      "Agar dapat membedakan informasi fakta yang benar dengan berita bohong (hoaks) serta tidak mudah tertipu",
      "Agar selalu membeli semua barang yang diiklankan di internet",
      "Agar bisa menyebarkan berita tanpa memeriksa kebenarannya",
      "Agar menghabiskan waktu bermain ponsel sepanjang hari"
    ],
    "b": 0,
    "bahas": "Kemampuan literasi informasi melindungi pembaca dari hoaks dan iklan menyesatkan."
  }
]);

window.tambahPaketUjian("5", "pai", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#15803d'>TOLERANSI DALAM ISLAM</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Q.S. Ali Imran: 64 &amp; Al-Baqarah: 256</text></svg>",
    "q": "Perhatikan kartu ayat Al-Qur'an pada gambar di atas! Makna utama ungkapan 'kalimatun sawa' dalam Surah Ali Imran ayat 64 adalah mengajak umat manusia untuk mencari ....",
    "p": [
      "Titik temu (kalimat kesepakatan bersama) dalam menyembah Allah Yang Maha Esa tanpa menyekutukan-Nya",
      "Perbedaan pendapat agar diperdebatkan terus-menerus",
      "Keuntungan perdagangan antarnegara",
      "Pemenang dalam perlombaan"
    ],
    "b": 0,
    "bahas": "Kalimatun sawa berarti kalimat kesepakatan atau titik temu untuk hidup rukun dan bertauhid hanya kepada Allah Swt."
  },
  {
    "q": "Dalam Surah Al-Baqarah ayat 256 terdapat potongan ayat terkenal 'La ikraha fid-din' yang memiliki arti ....",
    "p": [
      "Tidak ada paksaan dalam (menganut) agama",
      "Bagi kalian agama kalian dan bagiku agamaku",
      "Sesungguhnya orang-orang mukmin itu bersaudara",
      "Bertolong-tolonganlah kamu dalam kebaikan"
    ],
    "b": 0,
    "bahas": "'La ikraha fid-din' menegaskan bahwa Islam menjunjung tinggi kebebasan beragama tanpa paksaan."
  },
  {
    "q": "Menurut Q.S. Al-Baqarah ayat 256, barang siapa yang ingkar kepada tagut (sesembahan selain Allah) dan beriman kepada Allah Swt., maka sesungguhnya ia telah berpegang pada ....",
    "p": [
      "Buhul tali yang amat kuat yang tidak akan putus (al-'urwatil-wusqa)",
      "Harta benda yang melimpah ruah",
      "Jabatan tinggi di dunia",
      "Kekuatan fisik semata"
    ],
    "b": 0,
    "bahas": "Keimanan kepada Allah Swt. diibaratkan berpegang pada tali yang sangat kokoh dan tidak akan putus."
  },
  {
    "q": "Hukum bacaan tajwid pada lafaz 'fid-din' atau 'ar-rusydu' di mana huruf alif lam (ال) bertemu huruf syamsiah sehingga dibaca melebur ke dalam huruf berikutnya disebut ....",
    "p": ["Alif lam syamsiah (idgham syamsi)", "Alif lam qamariah (izhar qamari)", "Iqlab", "Izhar halqi"],
    "b": 0,
    "bahas": "Alif lam syamsiah meleburkan bunyi lam ke dalam 14 huruf syamsiah seperti dal (د) dan ra (ر)."
  },
  {
    "q": "Contoh penerapan ajaran Surah Ali Imran ayat 64 dan Surah Al-Baqarah ayat 256 dalam kehidupan bermasyarakat di Indonesia adalah ....",
    "p": [
      "Bekerja sama dalam kerja bakti sosial kemasyarakatan bersama tetangga berbeda agama tanpa mencampuri urusan ibadah masing-masing",
      "Memaksa teman berbeda agama mengikuti ibadah kita",
      "Menolak membantu tetangga yang terkena musibah karena berbeda keyakinan",
      "Mengejek tata cara ibadah pemeluk agama lain"
    ],
    "b": 0,
    "bahas": "Toleransi berarti bekerja sama dalam urusan sosial kemanusiaan serta saling menghormati kebebasan beribadah."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>IMAN KEPADA HARI AKHIR</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Rukun Iman ke-5 • Kiamat Sugra &amp; Kubra</text></svg>",
    "q": "Perhatikan kartu rukun iman pada gambar di atas! Meyakini dengan sepenuh hati bahwa seluruh alam semesta beserta isinya akan hancur binasa dan berganti dengan kehidupan akhirat yang kekal merupakan rukun iman ke-....",
    "p": ["Empat", "Lima", "Enam", "Tiga"],
    "b": 1,
    "bahas": "Iman kepada Hari Akhir (Hari Kiamat) adalah rukun iman yang kelima."
  },
  {
    "q": "Peristiwa berakhirnya kehidupan sebagian makhluk di bumi yang sering terjadi di sekitar kita seperti meninggalnya seseorang, gempa bumi, banjir bandang, dan gunung meletus disebut ....",
    "p": ["Kiamat sugra (kiamat kecil)", "Kiamat kubra (kiamat besar)", "Yaumul Ba'ats", "Yaumul Mizan"],
    "b": 0,
    "bahas": "Kiamat sugra adalah kehancuran kecil yang terjadi setiap saat sebagai peringatan agar manusia selalu ingat kepada Allah Swt."
  },
  {
    "q": "Peristiwa hancurnya seluruh alam semesta secara total setelah Malaikat Israfil meniup sangkakala yang pertama disebut ....",
    "p": ["Kiamat kubra (kiamat besar)", "Kiamat sugra (kiamat kecil)", "Alam barzakh", "Nuzulul Qur'an"],
    "b": 0,
    "bahas": "Kiamat kubra adalah kehancuran menyeluruh seluruh jagat raya yang waktunya hanya diketahui oleh Allah Swt."
  },
  {
    "q": "Alam penantian yang membatasi antara kehidupan dunia dan kehidupan akhirat setelah manusia meninggal dunia disebut alam ....",
    "p": ["Barzakh (alam kubur)", "Mahsyar", "Arham", "Dunia"],
    "b": 0,
    "bahas": "Alam barzakh adalah alam kubur tempat manusia menanti datangnya hari kebangkitan."
  },
  {
    "q": "Hari dibangkitkannya seluruh manusia dari alam kubur setelah Malaikat Israfil meniup sangkakala yang kedua disebut ....",
    "p": ["Yaumul Ba'ats", "Yaumul Mahsyar", "Yaumul Hisab", "Yaumul Mizan"],
    "b": 0,
    "bahas": "Yaumul Ba'ats artinya hari kebangkitan seluruh manusia dari kubur."
  },
  {
    "q": "Padang luas tempat dikumpulkannya seluruh umat manusia sejak zaman Nabi Adam a.s. hingga manusia terakhir setelah dibangkitkan dari kubur disebut ....",
    "p": ["Padang Mahsyar (Yaumul Mahsyar)", "Bukit Sinai", "Gua Hira", "Lembah Mina"],
    "b": 0,
    "bahas": "Yaumul Mahsyar adalah hari berkumpulnya seluruh manusia di Padang Mahsyar untuk menerima catatan amal."
  },
  {
    "q": "Hari diperhitungkannya seluruh amal perbuatan manusia selama hidup di dunia secara teliti dan adil oleh Allah Swt. disebut ....",
    "p": ["Yaumul Hisab", "Yaumul Ba'ats", "Yaumul Qiyamah", "Yaumul Milad"],
    "b": 0,
    "bahas": "Yaumul Hisab adalah hari perhitungan amal baik dan buruk manusia."
  },
  {
    "q": "Hari ditimbangnya seluruh amal kebaikan dan amal keburukan manusia dengan timbangan keadilan Allah Swt. disebut ....",
    "p": ["Yaumul Mizan", "Yaumul Mahsyar", "Yaumul Ba'ats", "Yaumul Fath"],
    "b": 0,
    "bahas": "Yaumul Mizan adalah hari penimbangan amal; barang siapa berat timbangan kebaikannya maka ia akan masuk surga."
  },
  {
    "q": "Surah dalam Al-Qur'an yang secara khusus menggambarkan dahsyatnya peristiwa hari kiamat ketika bumi diguncangkan dengan guncangan yang dahsyat adalah Surah ....",
    "p": ["Az-Zalzalah", "Al-Kautsar", "Al-Ikhlas", "Al-Fil"],
    "b": 0,
    "bahas": "Surah Az-Zalzalah (artinya Keguncangan) menjelaskan peristiwa guncangan bumi pada hari kiamat serta balasan amal sekecil apa pun."
  },
  {
    "q": "Dalam Q.S. Az-Zalzalah ayat 7–8 dijelaskan bahwa barang siapa mengerjakan kebaikan seberat zarrah (biji sawi yang sangat kecil) niscaya dia akan melihat balasannya, dan barang siapa mengerjakan kejahatan seberat zarrah pun niscaya dia akan ....",
    "p": [
      "Melihat balasannya pula",
      "Diabaikan begitu saja",
      "Tidak dicatat oleh malaikat",
      "Langsung dihapus tanpa hisab"
    ],
    "b": 0,
    "bahas": "Setiap amal perbuatan sekecil apa pun akan mendapatkan balasan yang setimpal dari Allah Swt."
  },
  {
    "q": "Gambaran keadaan gunung-gunung pada hari kiamat menurut Surah Al-Qari'ah ayat 5 adalah seperti ....",
    "p": [
      "Bulu-bulu yang dihambur-hamburkan (kal-'ihnil-manfusy)",
      "Batu karang yang kokoh berdiri",
      "Pohon-pohon yang rimbun berbuah",
      "Air laut yang tenang membeku"
    ],
    "b": 0,
    "bahas": "'Wa takunul-jibalu kal-'ihnil-manfusy' artinya dan gunung-gunung adalah seperti bulu yang dihambur-hamburkan."
  },
  {
    "q": "Siapakah yang mengetahui secara pasti kapan terjadinya Hari Kiamat Kubra?",
    "p": [
      "Hanya Allah Swt. semata yang mengetahuinya",
      "Para ilmuwan dan ahli astronomi",
      "Malaikat Jibril dan Israfil",
      "Para nabi dan rasul"
    ],
    "b": 0,
    "bahas": "Kapan datangnya hari kiamat adalah rahasia mutlak Allah Swt. yang tidak diberitahukan kepada malaikat maupun nabi."
  },
  {
    "q": "Salah satu tanda kecil semakin dekatnya hari kiamat yang dapat kita saksikan dalam kehidupan manusia adalah ....",
    "p": [
      "Ilmu agama banyak diabaikan, banyak terjadi bencana alam, dan amanah sering disia-siakan",
      "Terbitnya matahari dari arah barat",
      "Turunnya Nabi Isa a.s. ke bumi",
      "Munculnya Dajjal"
    ],
    "b": 0,
    "bahas": "Tanda-tanda kecil kiamat antara lain berkurangnya ilmu agama, merebaknya kemaksiatan, dan banyaknya bencana."
  },
  {
    "q": "Perilaku sehari-hari yang mencerminkan keimanan kepada Hari Akhir bagi siswa kelas 5 SD adalah ....",
    "p": [
      "Rajin mengerjakan salat lima waktu, berbakti kepada orang tua, jujur, dan gemar bersedekah",
      "Menunda-nunda salat hingga habis waktunya",
      "Hanya memikirkan kesenangan bermain tanpa belajar dan beribadah",
      "Suka menyakiti perasaan teman di sekolah"
    ],
    "b": 0,
    "bahas": "Iman kepada hari akhir memotivasi seorang muslim untuk mengumpulkan bekal amal saleh sebanyak mungkin."
  },
  {
    "q": "Ketika mendengar berita duka ada tetangga atau kerabat yang meninggal dunia (kiamat sugra), ucapan istirja yang disunahkan untuk dibaca umat Islam adalah ....",
    "p": [
      "Inna lillahi wa inna ilaihi raji'un",
      "Alhamdulillahi rabbil 'alamin",
      "Subhanallah walhamdulillah",
      "Allahu akbar kabira"
    ],
    "b": 0,
    "bahas": "'Inna lillahi wa inna ilaihi raji'un' artinya Sesungguhnya kami milik Allah dan kepada-Nyalah kami kembali."
  },
  {
    "q": "Amal perbuatan manusia yang pahalanya terus mengalir meskipun orang tersebut sudah meninggal dunia disebut ....",
    "p": [
      "Amal jariyah (sedekah jariyah, ilmu yang bermanfaat, dan doa anak saleh)",
      "Amal musiman",
      "Amal rahasia",
      "Amal harian saja"
    ],
    "b": 0,
    "bahas": "Sedekah jariyah, ilmu yang bermanfaat, dan anak saleh yang mendoakan orang tuanya tidak terputus pahalanya."
  },
  {
    "q": "Tempat pembalasan terakhir di akhirat yang penuh kenikmatan abadi bagi orang-orang yang beriman dan bertakwa kepada Allah Swt. adalah ....",
    "p": ["Surga (Jannah)", "Neraka (Jahannam)", "Alam Barzakh", "Padang Mahsyar"],
    "b": 0,
    "bahas": "Surga disediakan Allah Swt. sebagai balasan bagi hamba-Nya yang beriman dan beramal saleh."
  },
  {
    "q": "Dalam Q.S. Ali Imran ayat 64, umat Islam diperintahkan untuk mengajak Ahli Kitab agar tidak menjadikan sesama manusia sebagai ....",
    "p": [
      "Tuhan selain Allah Swt.",
      "Tetangga yang saling membantu",
      "Teman dalam berdagang",
      "Saudara sebangsa"
    ],
    "b": 0,
    "bahas": "'Wa la yattakhiza ba'duna ba'dan arbabam min dunillah' (dan tidak pula sebagian kita menjadikan sebagian yang lain sebagai tuhan selain Allah)."
  },
  {
    "q": "Sikap yang paling tepat ketika kita melihat berita bencana alam (seperti banjir atau gempa bumi) menimpa saudara kita di daerah lain adalah ....",
    "p": [
      "Mendoakan keselamatan mereka dan menyisihkan sebagian uang jajan untuk membantu korban bencana",
      "Menjadikan berita musibah sebagai bahan bercandaan",
      "Bersikap acuh tak acuh karena jauh dari rumah kita",
      "Menyebarkan berita bohong yang menakut-nakuti warga"
    ],
    "b": 0,
    "bahas": "Kepedulian sosial dan membantu korban bencana merupakan wujud iman dan kasih sayang sesama manusia."
  },
  {
    "q": "Hikmah terbesar beriman kepada Hari Akhir bagi kehidupan manusia di dunia adalah ....",
    "p": [
      "Menumbuhkan rasa tanggung jawab atas setiap perbuatan sehingga hati-hati agar tidak berbuat dosa",
      "Membuat manusia takut bekerja dan belajar",
      "Menjadikan manusia malas menolong sesama",
      "Membuat hidup menjadi putus asa"
    ],
    "b": 0,
    "bahas": "Keyakinan akan adanya pembalasan di akhirat mendorong manusia disiplin beribadah, jujur, dan berbuat baik."
  }
]);

window.tambahPaketUjian("5", "pancasila", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>KERAGAMAN BUDAYA</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Kekayaan Bangsa Indonesia</text></svg>",
    "q": "Perhatikan kartu informasi pada gambar di atas! Indonesia memiliki ribuan suku bangsa dan ratusan bahasa daerah yang tersebar dari Sabang sampai Merauke. Semboyan pemersatu bangsa Indonesia di tengah keberagaman tersebut adalah ....",
    "p": [
      "Bhinneka Tunggal Ika",
      "Tut Wuri Handayani",
      "Ing Madya Mangun Karsa",
      "Satyaku Kudarmakan"
    ],
    "b": 0,
    "bahas": "Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu jua."
  },
  {
    "q": "Faktor utama yang menyebabkan terjadinya keberagaman suku bangsa dan budaya di Indonesia adalah ....",
    "p": [
      "Kondisi geografis negara kepulauan, perbedaan kondisi alam (pesisir dan pegunungan), serta sejarah perkembangan masyarakat",
      "Seluruh penduduk tinggal di satu dataran yang sama persis",
      "Indonesia tidak memiliki wilayah lautan",
      "Semua daerah memiliki mata pencaharian yang seragam"
    ],
    "b": 0,
    "bahas": "Wilayah Indonesia yang berbentuk kepulauan dengan kondisi alam beragam melahirkan adaptasi budaya yang unik di tiap daerah."
  },
  {
    "q": "Tradisi perlombaan pacuan sapi khas Pulau Madura yang diiringi musik saronèn dan digelar setiap tahun sebagai ungkapan syukur serta hiburan rakyat disebut ....",
    "p": ["Karapan Sapi", "Kasada Bromo", "Ngaben", "Sekaten"],
    "b": 0,
    "bahas": "Karapan Sapi adalah tradisi pacuan sapi ikonik masyarakat Pulau Madura."
  },
  {
    "q": "Upacara adat masyarakat Suku Tengger di kawasan Gunung Bromo, Jawa Timur, dengan melarung hasil bumi ke kawah gunung sebagai wujud syukur kepada Tuhan disebut upacara ....",
    "p": ["Yadnya Kasada", "Rambu Solo", "Tabuik", "Lompat Batu"],
    "b": 0,
    "bahas": "Yadnya Kasada adalah upacara adat tahunan masyarakat Tengger di Gunung Bromo."
  },
  {
    "q": "Tradisi Lompat Batu (Fahombo) yang menguji ketangkasan dan kedewasaan pemuda dengan melompati susunan batu setinggi dua meter berasal dari Pulau ....",
    "p": ["Nias, Sumatera Utara", "Bali", "Lombok", "Madura"],
    "b": 0,
    "bahas": "Tradisi Lompat Batu (Fahombo) berasal dari Pulau Nias, Sumatera Utara."
  },
  {
    "q": "Kesenian pertunjukan rakyat khas Jawa Timur yang menampilkan cerita sejarah atau legenda dengan iringan gamelan dan diawali tarian Remo serta lawakan jenaka disebut ....",
    "p": ["Ludruk", "Lenong", "Wayang Golek", "Mamanda"],
    "b": 0,
    "bahas": "Ludruk adalah seni teater tradisional khas Jawa Timur, sedangkan Lenong berasal dari Betawi (DKI Jakarta)."
  },
  {
    "q": "Kesenian Reog yang terkenal dengan topeng kepala singa berhiaskan bulu merak raksasa (Dadak Merak) berasal dari kabupaten di Jawa Timur yaitu ....",
    "p": ["Ponorogo", "Banyuwangi", "Pamekasan", "Malang"],
    "b": 0,
    "bahas": "Reog Ponorogo berasal dari Kabupaten Ponorogo, Jawa Timur."
  },
  {
    "q": "Rumah adat tradisional khas Suku Banjar di Kalimantan Selatan yang memiliki atap menjulang tinggi menyerupai tanduk atau perahu disebut Rumah ....",
    "p": ["Bubungan Tinggi", "Gadang", "Honai", "Joglo"],
    "b": 0,
    "bahas": "Rumah Bubungan Tinggi adalah rumah adat tradisional masyarakat Banjar, Kalimantan Selatan."
  },
  {
    "q": "Pakaian adat tradisional dari Provinsi Sumatera Utara yang berupa kain tenun khas dengan motif garis-garis dan memiliki makna kasih sayang serta doa restu disebut kain ....",
    "p": ["Ulos", "Songket", "Batik", "Tenun Ikat"],
    "b": 0,
    "bahas": "Kain Ulos merupakan kain tenun adat khas masyarakat Batak, Sumatera Utara."
  },
  {
    "q": "Alat musik tradisional dari Provinsi Papua dan Maluku yang berbentuk tabung kayu berukir dengan salah satu ujung tertutup kulit hewan dan dimainkan dengan cara dipukul adalah ....",
    "p": ["Tifa", "Angklung", "Sasando", "Gamelan"],
    "b": 0,
    "bahas": "Tifa adalah alat musik pukul tradisional khas Papua dan Maluku."
  },
  {
    "q": "Makanan pokok tradisional masyarakat Maluku dan Papua yang terbuat dari olahan tepung sagu berbentuk bubur kental dan disajikan bersama ikan kuah kuning adalah ....",
    "p": ["Papeda", "Rendang", "Gudeg", "Kerak Telor"],
    "b": 0,
    "bahas": "Papeda adalah makanan khas Papua dan Maluku yang berbahan dasar sagu."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='10' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#854d0e'>WARISAN BUDAYA DUNIA</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Batik • Wayang • Angklung • Gamelan</text></svg>",
    "q": "Perhatikan kartu informasi pada gambar di atas! Salah satu warisan budaya asli Indonesia yang telah diakui oleh UNESCO sebagai Warisan Budaya Takbenda Dunia dan diperingati setiap tanggal 2 Oktober adalah ....",
    "p": ["Batik Indonesia", "Sepatu kulit", "Kertas koran", "Jaket jeans"],
    "b": 0,
    "bahas": "Batik Indonesia ditetapkan UNESCO sebagai Warisan Budaya Takbenda pada 2 Oktober 2009 sehingga diperingati sebagai Hari Batik Nasional."
  },
  {
    "q": "Sikap yang paling tepat untuk melestarikan budaya daerah di tengah arus globalisasi dan masuknya budaya asing saat ini adalah ....",
    "p": [
      "Mempelajari budaya lokal, menyaring budaya asing yang masuk sesuai nilai Pancasila, dan bangga terhadap karya anak bangsa",
      "Menolak semua kemajuan ilmu pengetahuan dan teknologi modern",
      "Meninggalkan kesenian daerah karena dianggap kuno",
      "Meniru seluruh gaya hidup asing tanpa menyaringnya"
    ],
    "b": 0,
    "bahas": "Kita harus terbuka terhadap kemajuan ilmu pengetahuan namun tetap teguh melestarikan jati diri budaya Nusantara."
  },
  {
    "q": "Ketika di kelas terdapat siswa yang berasal dari berbagai suku bangsa dan agama, perilaku yang mencerminkan sila ketiga Pancasila (Persatuan Indonesia) adalah ....",
    "p": [
      "Menjalin persahabatan tanpa membeda-bedakan latar belakang suku maupun daerah asal",
      "Membentuk kelompok bermain khusus satu suku saja",
      "Mengejek logat bahasa daerah teman yang baru pindah",
      "Merendahkan makanan khas daerah teman"
    ],
    "b": 0,
    "bahas": "Mengutamakan persatuan dan persahabatan di atas perbedaan suku merupakan pengamalan sila ketiga Pancasila."
  },
  {
    "q": "Contoh tindakan nyata siswa kelas 5 SD dalam melestarikan bahasa daerah agar tidak mengalami kepunahan adalah ....",
    "p": [
      "Menggunakan bahasa daerah dengan tata krama (ondhâgghâ bhâsa) yang baik di lingkungan keluarga dan mengikuti pelajaran muatan lokal di sekolah",
      "Hanya mau berbicara menggunakan bahasa asing di rumah",
      "Malu mengucapkan sapaan sopan dalam bahasa daerah",
      "Mengejek teman yang fasih berbahasa daerah"
    ],
    "b": 0,
    "bahas": "Membiasakan penggunaan bahasa daerah yang santun menjaga kelestarian bahasa ibu."
  },
  {
    "q": "Keragaman mata pencaharian penduduk di Indonesia (seperti petani di dataran rendah, nelayan di pesisir, dan pekebun teh di pegunungan) menunjukkan bahwa antardaerah saling ....",
    "p": [
      "Membutuhkan dan melengkapi kebutuhan hidup satu sama lain",
      "Bersaing untuk saling menjatuhkan",
      "Dapat hidup sendiri tanpa bantuan daerah lain",
      "Memiliki hasil bumi yang sama persis"
    ],
    "b": 0,
    "bahas": "Perbedaan hasil sumber daya alam membuat masyarakat pesisir dan pegunungan saling bekerja sama memenuhi kebutuhan pangan."
  },
  {
    "q": "Tradisi gotong royong masyarakat Indonesia yang masih lestari di berbagai daerah (seperti sambatan di Jawa, mapalus di Minahasa, dan ngayah di Bali) memiliki nilai luhur berupa ....",
    "p": [
      "Kebersamaan, tolong-menolong tanpa pamrih, dan kepedulian sosial",
      "Mengharapkan imbalan uang yang besar",
      "Persaingan antarwarga kampung",
      "Sikap mementingkan diri sendiri"
    ],
    "b": 0,
    "bahas": "Gotong royong adalah kepribadian asli bangsa Indonesia yang mengutamakan kepentingan bersama."
  },
  {
    "q": "Apabila sekolah mengadakan kegiatan Festival Budaya Nusantara, sikap yang sebaiknya ditunjukkan oleh seluruh siswa adalah ....",
    "p": [
      "Berpartisipasi aktif dengan gembira, saling mendukung penampilan antarkelas, dan menjaga ketertiban acara",
      "Menolak tampil jika tidak mendapatkan kostum paling mahal",
      "Mengejek penampilan tarian daerah kelas lain",
      "Membuat kegaduhan saat teman sedang tampil di panggung"
    ],
    "b": 0,
    "bahas": "Antusiasme dan saling menghargai menyukseskan pelestarian budaya di sekolah."
  },
  {
    "q": "Dampak negatif apabila masyarakat tidak memiliki sikap toleransi terhadap keberagaman budaya dan agama di Indonesia adalah ....",
    "p": [
      "Munculnya prasangka, perselisihan, dan perpecahan yang mengancam keutuhan NKRI",
      "Terciptanya kedamaian dan kerukunan nasional",
      "Pembangunan negara berjalan semakin cepat",
      "Persatuan bangsa menjadi semakin kokoh"
    ],
    "b": 0,
    "bahas": "Intoleransi memicu konflik sosial dan melemahkan persatuan bangsa."
  },
  {
    "q": "Salah satu cara mengenalkan kekayaan budaya Indonesia kepada wisatawan atau teman dari luar negeri adalah ....",
    "p": [
      "Mempromosikan keindahan batik, kuliner tradisional, dan keramahan masyarakat Indonesia dengan bangga",
      "Menyembunyikan kesenian daerah agar tidak dilihat orang lain",
      "Mengakui budaya negara lain sebagai budaya Indonesia",
      "Bersikap tidak ramah terhadap pengunjung museum"
    ],
    "b": 0,
    "bahas": "Memperkenalkan budaya asli Nusantara dengan santun meningkatkan kebanggaan nasional."
  },
  {
    "q": "Dalam musyawarah kelas untuk memilih tarian daerah yang akan ditampilkan pada acara perpisahan sekolah, keputusan akhir diambil berdasarkan ....",
    "p": [
      "Mufakat bersama seluruh anggota kelas dengan lapang dada",
      "Keinginan satu anak yang paling keras suaranya",
      "Keputusan sepihak tanpa diskusi",
      "Pertengkaran antarkelompok"
    ],
    "b": 0,
    "bahas": "Musyawarah mufakat (sila keempat) menjamin keputusan diterima dengan ikhlas oleh semua pihak."
  },
  {
    "q": "Semboyan 'Bhinneka Tunggal Ika' berasal dari kutipan kitab Sutasoma yang ditulis pada masa Kerajaan Majapahit oleh ....",
    "p": ["Mpu Tantular", "Mpu Prapanca", "Mpu Gandring", "Mpu Sedah"],
    "b": 0,
    "bahas": "Mpu Tantular menuliskan kalimat 'Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa' dalam kitab Sutasoma."
  },
  {
    "q": "Perilaku adil terhadap teman di sekolah tanpa memandang latar belakang suku, agama, maupun status ekonomi sesuai dengan pengamalan Pancasila sila ke-....",
    "p": ["Kelima", "Kesatu", "Ketiga", "Keempat"],
    "b": 0,
    "bahas": "Bersikap adil dan menghormati hak setiap orang merupakan pengamalan sila kelima Pancasila."
  },
  {
    "q": "Kesimpulan yang tepat mengenai posisi keragaman budaya bagi Negara Kesatuan Republik Indonesia adalah ....",
    "p": [
      "Keragaman budaya daerah merupakan modal sosial dan identitas luhur bangsa yang harus dijaga bersama",
      "Keragaman budaya harus diseragamkan menjadi satu budaya tunggal",
      "Budaya daerah hanya penting bagi masyarakat desa",
      "Pelestarian budaya hanya menjadi tugas seniman saja"
    ],
    "b": 0,
    "bahas": "Seluruh warga negara Indonesia berkewajiban menjaga dan melestarikan keberagaman budaya Nusantara."
  },
  {
    "q": "Wujud rasa syukur kepada Tuhan Yang Maha Esa atas keberagaman bangsa Indonesia yang rukun dan damai adalah ....",
    "p": [
      "Menjaga persaudaraan antarsesama anak bangsa dan rajin belajar untuk memajukan Indonesia",
      "Merusak fasilitas umum di taman kota",
      "Menyebarkan ujaran kebencian terhadap suku lain",
      "Malas mengikuti upacara bendera di sekolah"
    ],
    "b": 0,
    "bahas": "Menjaga persatuan dan berkontribusi positif bagi bangsa adalah wujud syukur atas nikmat kemerdekaan dan keberagaman."
  }
]);

window.tambahPaketUjian("5", "bing", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>PARTS OF OUR BODY</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Eyes • Ears • Nose • Hands • Legs</text></svg>",
    "q": "Look at the body parts card above! We use our ... to see beautiful scenery and read books.",
    "p": ["eyes", "ears", "nose", "mouth"],
    "b": 0,
    "bahas": "Mata (eyes) berfungsi untuk melihat (to see)."
  },
  {
    "q": "Aisyah uses her ... to listen to the teacher's explanation in the classroom.",
    "p": ["ears", "eyes", "legs", "fingers"],
    "b": 0,
    "bahas": "Telinga (ears) digunakan untuk mendengarkan (to listen)."
  },
  {
    "q": "We use our ... to smell the fragrant flowers in the garden.",
    "p": ["nose", "mouth", "hair", "knee"],
    "b": 0,
    "bahas": "Hidung (nose) berfungsi untuk mencium bau (to smell)."
  },
  {
    "q": "Made uses his ... to kick the ball and run fast on the field.",
    "p": ["legs and feet", "hands and fingers", "ears and eyes", "neck and shoulders"],
    "b": 0,
    "bahas": "Kaki (legs and feet) digunakan untuk menendang bola dan berlari."
  },
  {
    "q": "What do we use to hold a pencil and write in our notebook?",
    "p": ["Our hand and fingers", "Our knees", "Our elbows", "Our toes"],
    "b": 0,
    "bahas": "Tangan dan jari-jari (hand and fingers) digunakan untuk memegang pensil dan menulis."
  },
  {
    "q": "We chew (mengunyah) our food using our ... before swallowing it.",
    "p": ["teeth", "nose", "ears", "eyebrows"],
    "b": 0,
    "bahas": "Gigi (teeth) berfungsi untuk mengunyah makanan."
  },
  {
    "q": "What is 'lutut dan siku' in English?",
    "p": [
      "Knee and elbow",
      "Shoulder and neck",
      "Cheek and chin",
      "Forehead and hair"
    ],
    "b": 0,
    "bahas": "Lutut = knee, siku = elbow."
  },
  {
    "q": "What is 'bahu dan leher' in English?",
    "p": [
      "Shoulder and neck",
      "Stomach and chest",
      "Finger and thumb",
      "Foot and toe"
    ],
    "b": 0,
    "bahas": "Bahu = shoulder, leher = neck."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#854d0e'>COMPARATIVE DEGREE</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Adjective + -er + than (Lebih ... daripada)</text></svg>",
    "q": "Look at the grammar rule above! Joshua is 145 cm tall, and Udin is 138 cm tall. Joshua is ... than Udin.",
    "p": ["taller", "shorter", "smaller", "younger"],
    "b": 0,
    "bahas": "145 cm lebih tinggi daripada 138 cm, sehingga menggunakan bentuk komparatif 'taller than'."
  },
  {
    "q": "An elephant is ... than a rabbit.",
    "p": ["bigger", "smaller", "thinner", "shorter"],
    "b": 0,
    "bahas": "Gajah lebih besar daripada kelinci: 'bigger than'."
  },
  {
    "q": "A turtle walks ... than a horse.",
    "p": ["slower", "faster", "taller", "longer"],
    "b": 0,
    "bahas": "Kura-kura berjalan lebih lambat daripada kuda: 'slower than'."
  },
  {
    "q": "A train is ... than a bicycle.",
    "p": ["longer and faster", "shorter and slower", "smaller", "lighter"],
    "b": 0,
    "bahas": "Kereta api lebih panjang dan lebih cepat daripada sepeda: 'longer and faster'."
  },
  {
    "q": "My grandmother is 70 years old, and my mother is 38 years old. My grandmother is ... than my mother.",
    "p": ["older", "younger", "newer", "smaller"],
    "b": 0,
    "bahas": "Nenek lebih tua daripada ibu: 'older than'."
  },
  {
    "q": "Cici is 10 years old, and her little brother is 4 years old. Her little brother is ... than Cici.",
    "p": ["younger", "older", "taller", "bigger"],
    "b": 0,
    "bahas": "Adik laki-laki berusia 4 tahun lebih muda daripada Cici (10 tahun): 'younger than'."
  },
  {
    "q": "A ruler (30 cm) is ... than a pencil (15 cm).",
    "p": ["longer", "shorter", "fatter", "older"],
    "b": 0,
    "bahas": "30 cm lebih panjang daripada 15 cm: 'longer than'."
  },
  {
    "q": "The giraffe is the ... animal in the zoo. It has a very long neck.",
    "p": ["tallest", "taller", "shortest", "smallest"],
    "b": 0,
    "bahas": "Bentuk superlatif (paling tinggi) diawali 'the' dan diakhiri '-est': 'the tallest'."
  },
  {
    "q": "The blue whale is the ... animal in the ocean.",
    "p": ["biggest", "bigger", "smallest", "thinnest"],
    "b": 0,
    "bahas": "Paus biru adalah hewan paling besar di lautan: 'the biggest'."
  },
  {
    "q": "A cheetah can run up to 110 km/hour. It is the ... land animal in the world.",
    "p": ["fastest", "faster", "slowest", "heaviest"],
    "b": 0,
    "bahas": "Cheetah adalah hewan darat tercepat di dunia: 'the fastest'."
  },
  {
    "q": "What is the comparative form of 'heavy' (berat)?",
    "p": ["Heavier", "Heavyer", "More heavy", "Heaviest"],
    "b": 0,
    "bahas": "Kata sifat berakhiran huruf konsonan + y (heavy) berubah menjadi '-ier' (heavier)."
  },
  {
    "q": "A stone (5 kg) is ... than a feather (5 grams).",
    "p": ["heavier", "lighter", "softer", "smaller"],
    "b": 0,
    "bahas": "Batu lebih berat daripada bulu ayam: 'heavier than'."
  },
  {
    "q": "How tall is Budi? He is 140 centimeters ....",
    "p": ["tall", "long", "heavy", "old"],
    "b": 0,
    "bahas": "Untuk menyatakan tinggi badan seseorang digunakan '140 centimeters tall'."
  },
  {
    "q": "Which sentence is grammatically CORRECT?",
    "p": [
      "A horse is faster than a goat.",
      "A horse is fast than a goat.",
      "A horse is fastest than a goat.",
      "A horse is more fast than a goat."
    ],
    "b": 0,
    "bahas": "Perbandingan dua hal menggunakan bentuk comparative '-er + than' (faster than)."
  },
  {
    "q": "Arrange these words into a good sentence: 'than - is - A - bigger - cat - mouse - a'",
    "p": [
      "A cat is bigger than a mouse.",
      "A mouse is bigger than a cat.",
      "Bigger than a mouse is a cat.",
      "Is a cat bigger than a mouse."
    ],
    "b": 0,
    "bahas": "Susunan kalimat perbandingan yang logis dan tepat adalah 'A cat is bigger than a mouse.'"
  },
  {
    "q": "Arrange these words into a good sentence: 'nose - smell - our - We - with'",
    "p": [
      "We smell with our nose.",
      "Our nose smell with we.",
      "Smell we with our nose.",
      "With our nose smell we."
    ],
    "b": 0,
    "bahas": "Susunan kalimat yang tepat adalah 'We smell with our nose.'"
  },
  {
    "q": "'Jerapah lebih tinggi daripada kuda.' The English translation is ....",
    "p": [
      "A giraffe is taller than a horse.",
      "A horse is taller than a giraffe.",
      "A giraffe is shorter than a horse.",
      "A giraffe is smaller than a horse."
    ],
    "b": 0,
    "bahas": "Jerapah lebih tinggi daripada kuda = A giraffe is taller than a horse."
  }
]);

window.tambahPaketUjian("5", "madura", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>CARAKAN MADHURÂ</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Aksara Ghâjâng &amp; Sandhângan</text></svg>",
    "q": "Abâs informasi aksara daerah è ghâmbhâr attas! Bânnya'na aksara legena (aksara ghâjâng) pokok dâlem Carakan Madhurâ (ha na ca ra ka ... nga) bâdâ .... aksara.",
    "p": ["18 aksara", "20 aksara", "22 aksara", "26 aksara"],
    "b": 1,
    "bahas": "Aksara ghâjâng pokok dâlem Carakan Madhurâ bâdâ 20 aksara."
  },
  {
    "q": "Sandhângan sowara dâlem Carakan Madhurâ sè ngobâ monyè vokal 'a' dhâddhi 'i' (èbâdâ'aghi è attas aksara) èsebbhut ....",
    "p": ["Cèthak / Wulu", "Soko", "Talèng", "Pèpèt"],
    "b": 0,
    "bahas": "Cèthak ngobâ monyè 'a' dhâddhi 'i', soko ngobâ dhâddhi 'u', talèng ngobâ dhâddhi 'è'."
  },
  {
    "q": "Sandhângan sowara dâlem Carakan Madhurâ sè ngobâ monyè vokal 'a' dhâddhi 'u' (èbâdâ'aghi è bâbâna aksara) èsebbhut ....",
    "p": ["Soko", "Layar", "Cecak", "Wignyan"],
    "b": 0,
    "bahas": "Soko ètolès è bâbâna aksara ka'angghuy ngobâ monyè dhâddhi 'u'."
  },
  {
    "q": "Parèbhâsan Madhurâ 'Kèngèng bhâi ngakan nangkana, tapè jhâ' kèngèng ghettana' ngandung nasèhat sopajâ kita ....",
    "p": [
      "Tanggung jawab dâ' akibat dâri sabbhân kalakoan bân jhâ' ngalakonè parkara sè marogi dhibi'",
      "Senneng ngakan buwâ nangka sabbhân arè",
      "Ta' ollè nyèram buwâ è kebbhun",
      "Senneng akompol sareng tatangghâ"
    ],
    "b": 0,
    "bahas": "Parèbhâsan panèka ngèmodhi sopajâ ngastètè è dâlem ngalakonè kalakoan."
  },
  {
    "q": "Parèbhâsan Madhurâ 'Abhântal ombâ' asapo' angèn' nodhuwâghi bâtek orèng Madhurâ sè ....",
    "p": [
      "Gagah bângal, tekun, bân pantang nyerah ngadhebbhi rintangan è tasè' maupun è perantauan",
      "Senneng tèdung è pèngghir pantai",
      "Takok ka ombâ' tasè'",
      "Malas alako è sabâ"
    ],
    "b": 0,
    "bahas": "Parèbhâsan panèka ngaghâmbhâraghi kabângalan nelayan sareng perantau Madhurâ."
  },
  {
    "q": "Saloka Madhurâ 'Jhâ' ngokor bâjhâna orèng laèn ngangghuy bhâjâna dhibi'' artèna ....",
    "p": [
      "Jhâ' ghâmpang nyala'aghi otabâ abhândhingaghi kabâdâ'ânna orèng laèn kalabân okoran dhibi'",
      "Kodhu mellè kalambhi anyar sabbhân bulan",
      "Ngokor lanjhângnga mèjâ ngangghuy pangghâris",
      "Senneng abhânto tatangghâ sè sossa"
    ],
    "b": 0,
    "bahas": "Saloka panèka ngajhâri sikap bijaksana bân ngormadhi kabâdâ'ânna orèng laèn."
  },
  {
    "q": "Bhâsa èngghi-bhunten (alos) dâri oca' 'nyaman / ènak' ka'angghuy orèng sè èhormadhi èngghi panèka ....",
    "p": ["Sèdâ / Èca", "Dhâ'âr", "Ngunjuk", "Mèyos"],
    "b": 0,
    "bahas": "Nyaman/ènak bhâsa èngghi-bhuntenna 'èca' (akadhi: Dhâ'âranna cè' ècana)."
  },
  {
    "q": "Bhâsa èngghi-bhuntenna oca' 'sakè'' (sakit) ka'angghuy Bapak/Ibu Guru otabâ orèng towa èngghi panèka ....",
    "p": ["Songkan", "Sare", "Rabhu", "Kondhur"],
    "b": 0,
    "bahas": "Sakè' bhâsa èngghi-bhuntenna 'songkan' (akadhi: Kaki' ampon tello arè songkan)."
  },
  {
    "q": "Okara è bâbâ panèka sè aghuna'aghi ondhâgghâ bhâsa èngghi-bhunten sè teppa' èngghi panèka ....",
    "p": [
      "Embu' ghi' ngunjuk èrèngan tèh anga' è teras.",
      "Sèngko' ghi' ngunjuk ès jeruk è kantin.",
      "Kocèngnga ampon songkan tello arè.",
      "Adhi' ampon kondhur dâri lapangan."
    ],
    "b": 0,
    "bahas": "Oca' 'ngunjuk' (minum) teppa' èghuna'aghi ka'angghuy Embu' (orèng towa)."
  },
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='8' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#854d0e'>PANTUN MADHURÂ</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Sampiran (1-2) &amp; Èssè (3-4)</text></svg>",
    "q": "Abâs strukturna pantun Madhurâ è ghâmbhâr attas! Bâris kapèng 3 bân kapèng 4 dâlem pantun èsebbhut ....",
    "p": ["Èssè (isi / maksud pantun)", "Sampiran", "Judul pantun", "Oca' tanya"],
    "b": 0,
    "bahas": "Bâris 1–2 pantun èsebbhut sampiran, dhinèng bâris 3–4 èsebbhut èssè (isi)."
  },
  {
    "q": "Bâca pantun Madhurâ è bâbâ panèka!\nMellè jhuko' ka Pasar Kolpajung,\nJhuko' tongkol èghuring kerrèng.\nDhâddhi morèd kodhu sregep ajhâr,\nSopajâ pènter bân èkasennengngè orèng.\n\nApa nasèhat sè bâdâ è dâlem èssèna pantun attas?",
    "p": [
      "Dhâddhi morèd kodhu sregep ajhâr sopajâ pènter bân èkasennengngè orèng",
      "Sabbhân arè kodhu mellè jhuko' ka pasar",
      "Jhuko' tongkol cè' nyamanna èghuring kerrèng",
      "Morèd kodhu senneng amaèn è pasar"
    ],
    "b": 0,
    "bahas": "Èssè pantun bâdâ è bâris kapèng 3 bân 4, ngajhâri sopajâ morèd sregep ajhâr."
  },
  {
    "q": "Sastra lisan Madhurâ sè aropa'aghi syi'ir otabâ puisi tradisional sè èbâca kalabân lagu tembhâng (akadhi Artatè, Pucung, Kasmaran) èsebbhut ....",
    "p": ["Mamaca / Tembhâng Macapat", "Karapan Sapè", "Ludruk", "Topèng Dâlâng"],
    "b": 0,
    "bahas": "Mamaca panèka tradisi maca naskah tembhâng Macapat Madhurâ kalabân irama lagu."
  },
  {
    "q": "Kesenian teater tradisional khas Madhurâ sè para pemaènna ngangghuy topèng kaju bân acarèta kisah Mahabarata otabâ Ramayana èsebbhut ....",
    "p": ["Topèng Dâlâng", "Saronèn", "Tari Muang Sangkal", "Ojhung"],
    "b": 0,
    "bahas": "Topèng Dâlâng panèka kesenian drama tari topèng klasik khas Madhurâ (khusussa Sumenep sareng Pamekasan)."
  },
  {
    "q": "Oca' rangkep (kata ulang) dâlem bhâsa Madhurâ 'bârna-bârna' andi' artè ....",
    "p": ["Bermacam-macam warna", "Sèttong bârna", "Ta' andi' bârna", "Bârna celleng"],
    "b": 0,
    "bahas": "Oca' rangkep 'bârna-bârna' nodhuwâghi bânnya' macemma bârna."
  },
  {
    "q": "Oca' asal 'bhersè' lamon èberri' ter-ater 'a-' sareng panotèng '-an' dhâddhi 'abhersèyan' sè artèna ....",
    "p": [
      "Ngalakonè kalakoan abhersè'è kennengngan",
      "Ngotorè lantai",
      "Mellè pakakas bhersè",
      "Nèngghu orèng nyapo"
    ],
    "b": 0,
    "bahas": "Abhersèyan artèna membersihkan atau bergotong royong bersih-bersih."
  },
  {
    "q": "Tabhâligghâ (antonim) dâri oca' 'jujur' èngghi panèka ....",
    "p": ["Lècèk (bohong / curang)", "Bhâghus", "Pènter", "Bângal"],
    "b": 0,
    "bahas": "Jujur tabhâligghâ lècèk (bohong/curang)."
  },
  {
    "q": "Padhâna artè (sinonim) dâri oca' 'sregep' (rajin) èngghi panèka ....",
    "p": ["Tekun / bhâjheng", "Malas", "Loppah", "Kendor"],
    "b": 0,
    "bahas": "Sregep andi' artè padâ sareng bhâjheng otabâ tekun."
  },
  {
    "q": "Bâca teks è bâbâ panèka!\n'Bhâthèk toles Madhurâ (akadhi dâri Tanjung Bumi Bhângkalan sareng Pamekasan) kasohor polana motifna sè unik bân bârnana sè cerrah akadhi mèra, konèng, bhiru, bân bhuru. Prosès aghâbây bhâthèk toles ngangghuy canting bân malem.'\n\nPakakas utama sè èghuna'aghi ka'angghuy nolès motif bhâthèk è kaèn miturut teks attas èngghi panèka ....",
    "p": ["Canting bân malem", "Potlot bân setip", "Gunting bân lem", "Sapo bân èmbèr"],
    "b": 0,
    "bahas": "Dâlem teks èsebbhutaghi aghâbây bhâthèk toles ngangghuy canting sareng malem."
  },
  {
    "q": "Bârna-bârna khas bhâthèk toles Madhurâ miturut teks attas èngghi panèka ....",
    "p": [
      "Mèra, konèng, bhiru, bân bhuru",
      "Potè polos sadhâjâ",
      "Celleng bân abu-abu",
      "Cokelat petteng sadhâjâ"
    ],
    "b": 0,
    "bahas": "Bhâthèk Madhurâ kasohor ngangghuy bârna cerrah mèra, konèng, bhiru, bân bhuru."
  },
  {
    "q": "Oca' 'jhâjhân' dâlem bhâsa Indonesia artèna ....",
    "p": ["Kue / jajanan", "Nasi putih", "Sayur bayam", "Air mineral"],
    "b": 0,
    "bahas": "Jhâjhân artèna kue atau makanan ringan."
  },
  {
    "q": "Oca' 'tanèyan' dâlem bhâsa Indonesia artèna ....",
    "p": ["Halaman rumah", "Atap rumah", "Dapur", "Kamar tidur"],
    "b": 0,
    "bahas": "Tanèyan artèna halaman rumah (akadhi Tanèyan Lanjhâng)."
  },
  {
    "q": "Okara pètanya (kalimat tanya) è bâbâ panèka sè nanya'aghi sabâb otabâ alasan èngghi panèka ....",
    "p": [
      "Arapa bâ'na ma' ta' maso' sakola'an bâri'?",
      "Sapa nyamana kancana bâ'na?",
      "È dimma kennengnganna Museum Sumenep?",
      "Bârâmpa arghâna buku toles rèya?"
    ],
    "b": 0,
    "bahas": "Oca' tanya 'arapa' artèna mengapa (nanya'aghi sabâb)."
  },
  {
    "q": "Oca' tanya 'bârâmpa' èghuna'aghi ka'angghuy nanya'aghi ....",
    "p": ["Bânnya'na otabâ arghâ (jumlah / harga)", "Kennengngan (tempat)", "Bâkto (waktu)", "Nyama orèng"],
    "b": 0,
    "bahas": "Bârâmpa artèna berapa."
  },
  {
    "q": "Lamon kita nyambhângè (menjenguk) tatangghâ sè songkan, tatakrama sè bhâghus èngghi panèka ....",
    "p": [
      "Acaca kalabân sowara alos, ma'èmodhi sopajâ sabbhâr, bân adu'a'aghi sopajâ lekkas bârâs",
      "Acaca rammè bân aghellâ' keras è kamar orèng sakè'",
      "Ngabâsaghi rupa sè sossa",
      "Mènta kakanan bânnya'"
    ],
    "b": 0,
    "bahas": "Nyambhângè orèng songkan kodhu ajâgâ katenangan bân adu'a'aghi kasèhatanna."
  },
  {
    "q": "Falsafah odhi' masyarakat Madhurâ sè ngajhâri sopajâ salèng abhânto bân rukun è dâlem kalowarga maupun tatangghâ èngghi panèka ....",
    "p": [
      "Rokon, ghutong royong, bân salèng ngormadhi",
      "Atokar bân salèng nyala'aghi",
      "Sombong dâ' kanca",
      "Malas alako bân ajhâr"
    ],
    "b": 0,
    "bahas": "Karokonan sareng ghutong royong panèka nilai luhur masyarakat Madhurâ."
  }
]);

window.tambahPaketUjian("5", "kesenian", "UTS Semester 2", [
  {
    "svg": "<svg width='175' height='70' xmlns='http://w3.org'><rect x='15' y='12' width='145' height='46' rx='8' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='87' y='32' font-size='10' font-weight='bold' text-anchor='middle' fill='#0369a1'>PRINSIP SENI RUPA</text><text x='87' y='47' font-size='8' text-anchor='middle' fill='#0f172a'>Keseimbangan • Proporsi • Kesatuan</text></svg>",
    "q": "Perhatikan kartu prinsip seni rupa pada gambar di atas! Perbandingan ukuran yang serasi dan masuk akal antara bagian satu dengan bagian lainnya dalam sebuah gambar (misalnya ukuran kepala manusia dibandingkan badannya) disebut prinsip ....",
    "p": ["Proporsi", "Tekstur", "Ritme", "Gradasi"],
    "b": 0,
    "bahas": "Proporsi mengatur kesebandingan ukuran antarbagian objek gambar agar tampak wajar dan harmonis."
  },
  {
    "q": "Susunan objek gambar yang bagian kiri dan bagian kanannya memiliki bentuk, ukuran, serta letak yang sama persis seperti bayangan cermin disebut keseimbangan ....",
    "p": ["Simetris", "Asimetris", "Radial", "Acak"],
    "b": 0,
    "bahas": "Keseimbangan simetris menempatkan unsur yang sama secara seimbang di sisi kiri dan kanan sumbu tengah."
  },
  {
    "q": "Karya seni rupa yang menonjolkan kebebasan pengungkapan perasaan, emosi, dan imajinasi pembuatnya melalui goresan garis dan warna disebut menggambar ....",
    "p": ["Ekspresif", "Teknik arsitektur", "Peta topografi", "Grafik batang"],
    "b": 0,
    "bahas": "Gambar ekspresif menekankan curahan perasaan dan kreativitas pribadi seniman."
  },
  {
    "q": "Teknik mewarnai gambar dengan cara menyapukan warna dari tua ke muda secara halus sehingga menciptakan kesan kedalaman dan cahaya disebut teknik ....",
    "p": ["Gradasi warna", "Blok polos", "Pointilis titik", "Cetak saring"],
    "b": 0,
    "bahas": "Gradasi adalah peralihan tingkat warna secara bertahap dari gelap ke terang atau sebaliknya."
  },
  {
    "q": "Objek gambar yang letaknya paling dekat dengan pandangan mata pengamat pada gambar pemandangan alam sebaiknya digambar dengan ukuran yang ....",
    "p": [
      "Lebih besar dan detailnya lebih jelas dibandingkan objek yang jauh",
      "Sangat kecil dan samar",
      "Sama persis ukurannya dengan gunung di kejauhan",
      "Terbalik posisinya"
    ],
    "b": 0,
    "bahas": "Dalam hukum perspektif, benda yang dekat tampak lebih besar dan jelas, sedangkan benda jauh tampak lebih kecil."
  },
  {
    "svg": "<svg width='165' height='70' xmlns='http://w3.org'><rect x='25' y='12' width='115' height='46' rx='6' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><line x1='53' y1='12' x2='53' y2='58' stroke='#ca8a04' stroke-width='2'/><line x1='82' y1='12' x2='82' y2='58' stroke='#ca8a04' stroke-width='2'/><line x1='111' y1='12' x2='111' y2='58' stroke='#ca8a04' stroke-width='2'/><line x1='25' y1='27' x2='140' y2='27' stroke='#92400e' stroke-width='2'/><line x1='25' y1='43' x2='140' y2='43' stroke='#92400e' stroke-width='2'/></svg>",
    "q": "Perhatikan pola silang-menyilang pada gambar di atas! Kerajinan tradisional Nusantara yang dibuat dengan cara menyilangkan bahan pipih secara teratur antara lungsi dan pakan disebut ....",
    "p": ["Anyaman", "Ukiran kayu", "Batik cap", "Patung pahat"],
    "b": 0,
    "bahas": "Anyaman adalah seni menyilangkan bilah bahan secara tumpang-tindih beraturan."
  },
  {
    "q": "Dalam seni kerajinan menganyam, helaian bahan anyaman yang disusun membujur memanjang (tegak) sebagai dasar anyaman disebut ....",
    "p": ["Lungsi", "Pakan", "Canting", "Palet"],
    "b": 0,
    "bahas": "Lungsi adalah helaian dasar arah membujur, sedangkan pakan adalah helaian yang diselipkan melintang."
  },
  {
    "q": "Helaian bahan anyaman yang disusupkan atau diselipkan secara melintang di antara helaian lungsi disebut ....",
    "p": ["Pakan", "Lungsi", "Bingkai", "Sketsa"],
    "b": 0,
    "bahas": "Pakan diselipkan secara bergantian di atas dan di bawah helaian lungsi."
  },
  {
    "q": "Bahan alam di lingkungan sekitar yang sering dimanfaatkan pengrajin tradisional untuk membuat tikar, kipas, dan keranjang anyaman adalah ....",
    "p": [
      "Bambu, rotan, daun pandan duri, dan pelepah pisang kering",
      "Kaca jendela dan besi baja",
      "Batu granit dan semen",
      "Kawat tembaga tebal"
    ],
    "b": 0,
    "bahas": "Bambu, rotan, daun pandan, dan mendong memiliki serat lentur dan kuat untuk dianyam."
  },
  {
    "q": "Motif anyaman dasar yang dibuat dengan pola menyilangkan satu lungsi dan satu pakan secara bergantian (1-1) disebut anyaman ....",
    "p": ["Tunggal (sasag / kepang sederhana)", "Ganda tiga", "Bintang segi delapan", "Lingkaran spiral"],
    "b": 0,
    "bahas": "Anyaman tunggal (bilik/sasag) menyilangkan satu helai pakan di atas satu lungsi dan di bawah satu lungsi berikutnya."
  },
  {
    "q": "Hasil kerajinan anyaman tradisional dari daun pandan atau bambu yang sering digunakan dalam kehidupan sehari-hari di rumah adalah ....",
    "p": [
      "Tikar pandan, bakul nasi, tampah, dan kipas sate",
      "Panci aluminium dan wajan besi",
      "Gelas kaca dan piring keramik",
      "Televisi dan radio"
    ],
    "b": 0,
    "bahas": "Tikar, bakul, tampah, dan kipas tradisional adalah produk anyaman fungsional Nusantara."
  },
  {
    "q": "Bahan buatan yang sangat mudah dan aman digunakan siswa kelas 5 SD untuk berlatih membuat karya anyaman di sekolah adalah ....",
    "p": [
      "Kertas bufalo / kertas origami warna-warni yang dipotong memanjang sama lebar",
      "Seng atap rumah yang tajam",
      "Pecahan keramik lantai",
      "Kawat berduri"
    ],
    "b": 0,
    "bahas": "Potongan kertas warna melatih ketelitian pola lungsi dan pakan dengan aman dan menarik."
  },
  {
    "q": "Prinsip '3R' dalam pembuatan karya seni rupa daur ulang ramah lingkungan merupakan singkatan dari ....",
    "p": [
      "Reduce (mengurangi), Reuse (menggunakan kembali), dan Recycle (mendaur ulang)",
      "Read, Run, and Rest",
      "Red, Royal, and Rose",
      "Ringkas, Rapi, dan Resik"
    ],
    "b": 0,
    "bahas": "Reduce, Reuse, dan Recycle adalah gerakan peduli lingkungan melalui pengelolaan sampah menjadi karya berguna."
  },
  {
    "q": "Contoh pemanfaatan limbah plastik sedotan minuman atau botol plastik bekas menjadi karya seni rupa terapan adalah ....",
    "p": [
      "Merangkai bunga hias dari sedotan plastik bekas dan membuat pot tanaman gantung dari botol plastik",
      "Membakar sampah plastik di halaman sekolah",
      "Membuang botol plastik ke sungai agar hanyut ke laut",
      "Menimbun plastik di dalam tanah kebun"
    ],
    "b": 0,
    "bahas": "Mendaur ulang botol dan sedotan plastik mengurangi pencemaran sampah plastik sekaligus menghasilkan hiasan indah."
  },
  {
    "q": "Karya seni rupa yang dibuat tidak hanya untuk dinikmati keindahannya saja, tetapi juga memiliki fungsi kegunaan praktis dalam kehidupan sehari-hari (seperti tempat pensil, tas anyaman, dan pot bunga) disebut seni rupa ....",
    "p": ["Terapan", "Murni", "Abstrak", "Kaligrafi"],
    "b": 0,
    "bahas": "Seni rupa terapan mengutamakan fungsi pakai di samping nilai estetika (keindahan)."
  },
  {
    "q": "Karya seni rupa yang diciptakan semata-mata untuk dinikmati nilai keindahannya sebagai hiasan (seperti lukisan pemandangan di dinding dan patung hias) disebut seni rupa ....",
    "p": ["Murni", "Terapan", "Industri", "Arsitektur"],
    "b": 0,
    "bahas": "Seni rupa murni berfokus pada ekspresi keindahan tanpa fungsi pakai praktis."
  },
  {
    "q": "Langkah pertama yang harus dilakukan sebelum mengolah botol plastik atau kaleng bekas menjadi karya kerajinan adalah ....",
    "p": [
      "Mencuci bersih wadah bekas tersebut dan mengeringkannya agar higienis serta mudah ditempeli hiasan",
      "Langsung mengecat bagian yang masih kotor dan basah",
      "Meremas botol hingga hancur tak berbentuk",
      "Membuang tutup botol ke selokan"
    ],
    "b": 0,
    "bahas": "Membersihkan dan mengeringkan bahan bekas membuat lem dan cat menempel sempurna serta bebas bau."
  },
  {
    "q": "Untuk memotong helaian kertas anyaman agar memiliki lebar yang sama rata dan rapi, alat bantu ukur yang sebaiknya digunakan sebelum menggunting adalah ....",
    "p": ["Penggaris dan pensil", "Kuas cat air", "Jangka sorong", "Palet warna"],
    "b": 0,
    "bahas": "Mengukur dengan penggaris dan memberi garis tipis pensil menghasilkan potongan pita kertas yang seragam."
  },
  {
    "q": "Kesan visual yang ditimbulkan oleh karya anyaman kertas yang memadukan dua warna kontras (misalnya kuning cerah dan biru tua) adalah ....",
    "p": [
      "Motif silang anyaman terlihat sangat jelas, hidup, dan menarik perhatian",
      "Motif anyaman tampak kabur dan tidak terlihat",
      "Kertas anyaman menjadi mudah robek",
      "Warna tampak pucat dan membosankan"
    ],
    "b": 0,
    "bahas": "Perpaduan warna kontras menonjolkan pola geometris anyaman."
  },
  {
    "q": "Sentra kerajinan anyaman bambu dan daun pandan di Indonesia banyak dilestarikan oleh para pengrajin lokal sebagai bagian dari ....",
    "p": [
      "Warisan budaya kriya Nusantara dan sumber ekonomi kreatif masyarakat",
      "Mainan sekali pakai yang langsung dibuang",
      "Limbah pabrik berbahaya",
      "Barang impor dari luar negeri"
    ],
    "b": 0,
    "bahas": "Seni kriya anyaman merupakan warisan budaya yang bernilai ekonomi tinggi."
  },
  {
    "q": "Ketika menggunakan pisau cutter atau gunting untuk melubangi botol plastik dalam proyek daur ulang di kelas, sikap keselamatan kerja yang wajib dipatuhi siswa adalah ....",
    "p": [
      "Menggunakan alat tajam secara hati-hati, mengarahkan mata pisau menjauhi tubuh, dan meminta bimbingan guru",
      "Menggunakan cutter sambil bercanda dengan teman sebangku",
      "Meletakkan cutter terbuka di tepi meja",
      "Memotong botol di atas pangkuan paha"
    ],
    "b": 0,
    "bahas": "Prosedur keselamatan kerja mencegah cedera saat menggunakan alat pemotong."
  },
  {
    "q": "Agar karya anyaman kertas tidak mudah terlepas di bagian pinggirnya setelah selesai dianyam, langkah penyelesaian akhir (finishing) yang tepat adalah ....",
    "p": [
      "Menempelkan lem pada ujung-ujung helaian kertas dan memberi bingkai kertas di sekeliling tepinya",
      "Menarik kuat-kuat semua ujung kertas hingga sobek",
      "Merendam anyaman di dalam air",
      "Melipat anyaman menjadi bola kecil"
    ],
    "b": 0,
    "bahas": "Pengeleman bagian tepi dan pemasangan bingkai mengunci susunan anyaman agar kuat dan rapi."
  },
  {
    "q": "Nilai karakter positif yang dilatih saat siswa mengerjakan proyek menganyam dan mendaur ulang limbah di sekolah adalah ....",
    "p": [
      "Ketelitian, kesabaran, kreativitas, dan kepedulian terhadap kelestarian lingkungan",
      "Sikap terburu-buru dan ceroboh",
      "Kebiasaan membuang sampah sembarangan",
      "Sikap menyerah saat menemui kesulitan"
    ],
    "b": 0,
    "bahas": "Menganyam membutuhkan kesabaran dan ketelitian tinggi, sedangkan daur ulang menumbuhkan cinta lingkungan."
  },
  {
    "q": "Pameran karya seni siswa di ruang kelas pada akhir tema pembelajaran bertujuan untuk ....",
    "p": [
      "Menampilkan hasil karya siswa agar saling mengapresiasi, bertukar ide kreatif, dan menumbuhkan rasa percaya diri",
      "Mencari-cari kekurangan karya teman untuk diejek",
      "Membandingkan siapa yang membeli bahan paling mahal",
      "Mengotori dinding ruang kelas"
    ],
    "b": 0,
    "bahas": "Pameran kelas melatih budaya apresiasi seni yang sehat dan positif antarsiswa."
  },
  {
    "q": "Setelah seluruh kegiatan praktik seni rupa selesai dilaksanakan, tanggung jawab bersama seluruh siswa di kelas adalah ....",
    "p": [
      "Membersihkan meja, menyapu sisa potongan kertas, mengembalikan alat pinjaman, dan mencuci tangan hingga bersih",
      "Meninggalkan sampah potongan kertas di lantai untuk petugas kebersihan",
      "Membawa pulang gunting dan penggaris milik sekolah tanpa izin",
      "Mencoret meja kelas dengan sisa cat"
    ],
    "b": 0,
    "bahas": "Tanggung jawab menjaga kebersihan ruang kelas adalah bagian penting dari pendidikan karakter."
  }
]);

window.daftarMapelBaru("pjok", "PJOK (Olahraga)");
window.tambahPaketUjian("5", "pjok", "UAS Semester 2", [
  {
    "svg": "<svg width='185' height='82' xmlns='http://w3.org'><rect x='10' y='10' width='165' height='62' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><rect x='25' y='52' width='135' height='10' rx='4' fill='#38bdf8'/><rect x='72' y='34' width='40' height='18' rx='3' fill='#f59e0b' stroke='#b45309' stroke-width='1.5'/><path d='M42 50 Q92 14 142 50' stroke='#0369a1' fill='none' stroke-width='2.5' stroke-dasharray='4,2'/><text x='92' y='24' font-size='9' font-weight='bold' text-anchor='middle' fill='#0369a1'>LOMPAT KANGKANG PETI LOMPAT</text></svg>",
    "q": "Perhatikan ilustrasi senam ketangkasan di atas! Saat melakukan lompat kangkang melewati peti lompat, posisi kedua tungkai ketika melayang di atas peti adalah ....",
    "p": [
      "Dibuka lebar ke samping kiri dan kanan sambil menolakkan kedua tangan pada peti lompat",
      "Dirapatkan lurus ke depan seperti duduk bersila",
      "Ditekuk menyilang di bawah perut",
      "Diangkat satu kaki saja ke belakang"
    ],
    "b": 0,
    "bahas": "Pada lompat kangkang, kedua kaki dibuka lebar ke samping saat melewati peti lompat dan mendarat dengan dua kaki mengeper."
  },
  {
    "svg": "<svg width='185' height='82' xmlns='http://w3.org'><rect x='10' y='10' width='165' height='62' rx='10' fill='#dbeafe' stroke='#2563eb' stroke-width='2'/><path d='M20 46 Q45 38 70 46 T120 46 T165 46' stroke='#2563eb' fill='none' stroke-width='3'/><line x1='45' y1='34' x2='118' y2='34' stroke='#1e3a8a' stroke-width='4'/><path d='M75 34 Q88 20 104 34' stroke='#f59e0b' fill='none' stroke-width='2.5'/><text x='92' y='62' font-size='8' font-weight='bold' text-anchor='middle' fill='#1e3a8a'>RENANG GAYA BEBAS (CRAWL)</text></svg>",
    "q": "Perhatikan ilustrasi di atas! Gerakan kaki yang benar pada renang gaya bebas (front crawl) adalah ....",
    "p": [
      "Digerakkan naik turun secara bergantian dan cepat dengan sumber gerakan dari pangkal paha",
      "Ditarik ke samping lalu didorong seperti kaki katak",
      "Ditekuk diam menyilang di belakang",
      "Hanya menggerakkan ujung jari kaki tanpa menggerakkan tungkai"
    ],
    "b": 0,
    "bahas": "Tendangan kaki renang gaya bebas dilakukan naik-turun bergantian dari pangkal paha (flutter kick)."
  },
  {
    "svg": "<svg width='185' height='82' xmlns='http://w3.org'><rect x='10' y='10' width='165' height='62' rx='10' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/><circle cx='52' cy='41' r='18' fill='#fff' stroke='#dc2626' stroke-width='3'/><line x1='40' y1='29' x2='64' y2='53' stroke='#dc2626' stroke-width='3'/><text x='52' y='44' font-size='8' font-weight='bold' text-anchor='middle' fill='#991b1b'>ROKOK</text><text x='124' y='34' font-size='9' font-weight='bold' text-anchor='middle' fill='#991b1b'>BAHAYA ZAT</text><text x='124' y='46' font-size='9' font-weight='bold' text-anchor='middle' fill='#991b1b'>ADIKTIF</text><text x='124' y='58' font-size='7.5' text-anchor='middle' fill='#7f1d1d'>Nikotin • Tar • Karbon Monoksida</text></svg>",
    "q": "Perhatikan poster kesehatan di atas! Zat beracun dalam asap rokok yang menyebabkan kecanduan (ketagihan) dan merusak kerja jantung serta pembuluh darah adalah ....",
    "p": ["Nikotin", "Oksigen murni", "Vitamin D", "Zat besi"],
    "b": 0,
    "bahas": "Nikotin adalah zat adiktif dalam tembakau rokok yang memicu kecanduan dan menyempitkan pembuluh darah."
  },
  {
    "q": "Dalam permainan sepak bola, kombinasi gerak menggiring bola (dribbling) yang dilanjutkan dengan menendang bola keras ke arah gawang lawan disebut ....",
    "p": ["Dribbling dan shooting", "Passing dan heading", "Throw-in dan corner kick", "Offside dan penalti"],
    "b": 0,
    "bahas": "Shooting adalah tendangan terarah dan bertenaga ke gawang untuk mencetak gol."
  },
  {
    "q": "Dalam permainan bola voli, pukulan keras dan menukik tajam ke daerah lapangan lawan untuk mematikan permainan lawan dan memperoleh poin disebut ....",
    "p": ["Smash (spike)", "Passing bawah", "Servis bawah", "Blocking"],
    "b": 0,
    "bahas": "Smash adalah serangan utama dalam bola voli dengan memukul bola secara keras dari atas net."
  },
  {
    "q": "Dalam permainan bola basket, tembakan yang dilakukan sambil melayang dekat ring basket setelah melangkah dua langkah disebut ....",
    "p": ["Lay-up shoot", "Free throw", "Three point shoot", "Chest pass"],
    "b": 0,
    "bahas": "Lay-up shoot diawali dribel, dua langkah mendekati ring, lalu melompat memasukkan bola ke keranjang."
  },
  {
    "q": "Dalam permainan rounders atau kasti, pukulan bola yang arahnya mendatar dan cepat ke depan bertujuan agar ....",
    "p": ["Bola sulit ditangkap regu penjaga dan pelari memiliki waktu menuju tiang hinggap (base)", "Bola langsung jatuh di depan pemukul", "Bola melambung keluar garis belakang", "Wasit menghentikan pertandingan"],
    "b": 0,
    "bahas": "Pukulan mendatar dan kencang membuat bola melesat cepat melewati penjaga."
  },
  {
    "q": "Pada cabang atletik lari estafet (lari sambung) 4 x 100 meter, alat yang dipindahkan dari pelari pertama hingga pelari keempat adalah ....",
    "p": ["Tongkat estafet", "Bola kasti", "Bendera start", "Pita garis finis"],
    "b": 0,
    "bahas": "Lari estafet menggunakan tongkat estafet yang diserahkan di zona pergantian (wissel zone)."
  },
  {
    "q": "Dalam pencak silat, gerakan membela diri dengan cara mengadakan kontak langsung dengan serangan lawan menggunakan lengan atau tungkai untuk mengalihkan serangan disebut ....",
    "p": ["Tangkisan", "Elakan", "Pukulan lurus", "Tendangan sabit"],
    "b": 0,
    "bahas": "Tangkisan menahan atau mengalihkan arah serangan lawan menggunakan lengan, siku, atau kaki."
  },
  {
    "q": "Gerakan menghindari serangan lawan dalam pencak silat tanpa memindahkan posisi telapak kaki dari tempat semula (misalnya memiringkan atau merendahkan badan) disebut ....",
    "p": ["Elakan", "Tangkisan", "Tendangan T", "Langkah lompat"],
    "b": 0,
    "bahas": "Elakan dilakukan dengan memindahkan sasaran tubuh tanpa berpindah tempat."
  },
  {
    "q": "Latihan lari cepat jarak 30–40 meter (sprint) bertujuan utama untuk meningkatkan komponen kebugaran jasmani berupa ....",
    "p": ["Kecepatan (speed)", "Kelenturan pinggang", "Keseimbangan statis", "Kekuatan otot perut"],
    "b": 0,
    "bahas": "Sprint jarak pendek melatih kecepatan gerak maksimal otot tungkai."
  },
  {
    "q": "Bentuk latihan kebugaran jasmani untuk mengukur dan melatih daya tahan jantung dan paru-paru pada siswa kelas 5 SD adalah ....",
    "p": ["Lari jarak sedang (600–800 meter) atau jogging teratur", "Berdiri satu kaki selama 10 detik", "Duduk mencium lutut", "Melempar bola kasti satu kali"],
    "b": 0,
    "bahas": "Daya tahan kardiorespirasi (jantung-paru) dilatih dengan aktivitas aerobik berdurasi cukup lama."
  },
  {
    "q": "Dalam aktivitas gerak berirama (senam irama), kombinasi gerak langkah kaki dan ayunan lengan yang dilakukan secara terus-menerus tanpa terputus mencerminkan unsur ....",
    "p": ["Kontinuitas gerakan", "Kekakuan otot", "Kecepatan maksimal", "Kekuatan angkat beban"],
    "b": 0,
    "bahas": "Kontinuitas adalah rangkaian gerak senam irama yang mengalir sambung-menyambung sesuai irama."
  },
  {
    "q": "Pada renang gaya bebas, cara pengambilan napas yang benar adalah dengan cara ....",
    "p": [
      "Memiringkan kepala ke satu sisi (kanan atau kiri) saat lengan sejajar tubuh untuk menghirup udara lewat mulut",
      "Mengangkat kepala tegak lurus ke depan tinggi-tinggi",
      "Menghirup air melalui hidung saat wajah di dalam air",
      "Berhenti berenang setiap dua kayuhan tangan"
    ],
    "b": 0,
    "bahas": "Memiringkan kepala ke samping menjaga posisi tubuh tetap streamline saat mengambil napas."
  },
  {
    "q": "Gerakan lengan pada renang gaya bebas dilakukan dengan cara ....",
    "p": [
      "Mengayunkan kedua lengan ke depan secara bergantian seperti kincir angin lalu menarik air ke belakang",
      "Mendorong kedua lengan bersamaan ke samping kanan dan kiri",
      "Menekuk kedua lengan rapat di dada tanpa bergerak",
      "Memutar kedua lengan ke belakang secara bersamaan"
    ],
    "b": 0,
    "bahas": "Kayuhan lengan gaya bebas bergantian antara tangan kanan dan kiri secara berkesinambungan."
  },
  {
    "q": "Gas beracun tidak berwarna dan tidak berbau dalam asap rokok yang mengikat hemoglobin darah sehingga tubuh kekurangan oksigen adalah ....",
    "p": ["Karbon monoksida (CO)", "Oksigen (O2)", "Uap air", "Nitrogen murni"],
    "b": 0,
    "bahas": "Karbon monoksida mengurangi kadar oksigen dalam darah dan membuat tubuh cepat lelah."
  },
  {
    "q": "Zat karsinogenik berwarna cokelat kehitaman dalam asap rokok yang menempel di paru-paru dan memicu kanker paru-paru adalah ....",
    "p": ["Tar", "Glukosa", "Kalsium", "Protein"],
    "b": 0,
    "bahas": "Tar adalah residu partikel asap rokok yang merusak jaringan paru-paru."
  },
  {
    "q": "Minuman keras (alkohol) dan narkotika berbahaya bagi pelajar karena dapat merusak fungsi .... dan masa depan.",
    "p": ["Sistem saraf pusat (otak), hati, dan konsentrasi belajar", "Sepatu olahraga saja", "Buku tulis di tas", "Seragam sekolah"],
    "b": 0,
    "bahas": "Alkohol dan narkoba merusak sel otak, organ hati, dan menurunkan kesadaran serta prestasi belajar."
  },
  {
    "q": "Penyakit menular yang menyerang saluran pencernaan dengan gejala buang air besar cair berulang kali akibat mengonsumsi makanan/minuman tercemar kuman adalah ....",
    "p": ["Diare", "Influenza", "Rabun dekat", "Keseleo"],
    "b": 0,
    "bahas": "Diare disebabkan infeksi bakteri/virus akibat makanan kotor atau tidak mencuci tangan pakai sabun."
  },
  {
    "q": "Penyakit tidak menular yang sering disebabkan pola makan tinggi gula berlebihan, kurang gerak fisik, dan faktor keturunan adalah ....",
    "p": ["Diabetes melitus (penyakit gula)", "Demam berdarah", "Influenza", "Cacar air"],
    "b": 0,
    "bahas": "Diabetes melitus adalah penyakit tidak menular akibat gangguan kadar gula darah."
  },
  {
    "q": "Cara paling efektif untuk mencegah penyakit tidak menular seperti obesitas (kegemukan) dan penyakit jantung sejak usia sekolah adalah menerapkan pola hidup sehat berupa ....",
    "p": [
      "Olahraga teratur minimal 30–60 menit sehari, makan gizi seimbang, dan membatasi gula/garam/lemak berlebih",
      "Menonton televisi sambil makan camilan manis sepanjang hari",
      "Tidur larut malam dan melewatkan sarapan pagi",
      "Menghindari pelajaran olahraga di sekolah"
    ],
    "b": 0,
    "bahas": "Aktivitas fisik rutin dan gizi seimbang menjaga berat badan ideal dan kesehatan pembuluh darah."
  },
  {
    "q": "Denyut nadi normal seseorang saat sedang beristirahat akan meningkat ketika melakukan olahraga karena ....",
    "p": ["Jantung memompa darah lebih cepat untuk mengalirkan oksigen dan energi ke otot yang bekerja", "Jantung berhenti berdetak sementara", "Paru-paru tidak membutuhkan oksigen", "Tubuh sedang tidur nyenyak"],
    "b": 0,
    "bahas": "Saat berolahraga, kebutuhan oksigen otot meningkat sehingga jantung memompa darah lebih cepat."
  },
  {
    "q": "Dalam senam lantai, gerakan guling lenting (neckspring) memadukan gerakan guling depan dengan lecutan kuat dari .... agar tubuh melenting mendarat berdiri.",
    "p": ["Kedua kaki dan tolakan kedua tangan", "Satu telinga saja", "Ujung hidung", "Lutut yang disilangkan"],
    "b": 0,
    "bahas": "Guling lenting membutuhkan lecutan kedua tungkai ke depan-atas disertai tolakan kedua tangan."
  },
  {
    "q": "Tujuan utama melakukan pendinginan (cooling down) setelah latihan kebugaran jasmani intensitas tinggi adalah ....",
    "p": [
      "Menurunkan frekuensi denyut nadi secara bertahap dan mencegah penumpukan asam laktat penyebab nyeri otot",
      "Meningkatkan detak jantung ke batas maksimal",
      "Membuat otot menjadi kram mendadak",
      "Menguras seluruh sisa energi tubuh"
    ],
    "b": 0,
    "bahas": "Pendinginan membantu pemulihan otot dan menormalkan sirkulasi darah secara aman."
  },
  {
    "q": "Apabila terjadi perbedaan pendapat mengenai keputusan poin dalam pertandingan olahraga antarkelas, sikap pelajar Pancasila yang sportif adalah ....",
    "p": [
      "Menghormati keputusan wasit sebagai pemimpin pertandingan dan tetap menjaga persahabatan antarteman",
      "Mengajak teman satu tim meninggalkan lapangan dengan marah",
      "Mendorong wasit dan pemain lawan",
      "Menghentikan pertandingan secara sepihak"
    ],
    "b": 0,
    "bahas": "Menghormati wasit dan menjaga sportivitas adalah nilai utama pendidikan jasmani."
  }
]);

window.daftarMapelBaru("pjok", "PJOK (Olahraga)");
window.tambahPaketUjian("5", "pjok", "UAS Semester 1", [
  {
    "svg": "<svg width='185' height='82' xmlns='http://w3.org'><rect x='10' y='10' width='165' height='62' rx='10' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><rect x='25' y='46' width='135' height='3' fill='#0369a1'/><line x1='92' y1='25' x2='92' y2='62' stroke='#0f172a' stroke-width='2.5'/><circle cx='55' cy='48' r='8' fill='#facc15' stroke='#ca8a04' stroke-width='1.5'/><path d='M65 44 Q92 16 122 44' stroke='#0284c7' fill='none' stroke-width='2.5' stroke-dasharray='4,2'/><text x='92' y='20' font-size='8.5' font-weight='bold' text-anchor='middle' fill='#0369a1'>SERVIS BAWAH BOLA VOLI</text></svg>",
    "q": "Perhatikan ilustrasi di atas! Dalam permainan bola voli, perkenaan bola yang benar pada teknik servis bawah agar bola melambung melewati net adalah pada bagian ....",
    "p": ["Lengan bawah bagian dalam (dekat pergelangan tangan) dengan tangan mengepal", "Ujung jari kelingking", "Siku lengan atas", "Telapak kaki"],
    "b": 0,
    "bahas": "Pada servis bawah, lengan diayunkan lurus dari bawah dengan perkenaan pada lengan bawah bagian dalam."
  },
  {
    "svg": "<svg width='185' height='82' xmlns='http://w3.org'><rect x='10' y='10' width='165' height='62' rx='10' fill='#fef3c7' stroke='#d97706' stroke-width='2'/><circle cx='50' cy='38' r='14' fill='#f97316' stroke='#9a3412' stroke-width='2'/><path d='M68 40 L92 56 L124 38' stroke='#d97706' fill='none' stroke-width='3'/><polygon points='121,35 130,36 124,43' fill='#d97706'/><line x1='30' y1='58' x2='155' y2='58' stroke='#92400e' stroke-width='2'/><text x='115' y='24' font-size='8.5' font-weight='bold' text-anchor='middle' fill='#92400e'>BOUNCE PASS BASKET</text></svg>",
    "q": "Perhatikan diagram lintasan bola basket di atas! Teknik mengoper bola dengan memantulkannya sekitar dua pertiga jarak menuju teman disebut ....",
    "p": ["Bounce pass (operan pantul)", "Chest pass (operan dada)", "Overhead pass (operan atas kepala)", "Lay-up shoot"],
    "b": 0,
    "bahas": "Bounce pass dipantulkan di dua pertiga jarak agar bola memantul tepat setinggi pinggang penerima."
  },
  {
    "svg": "<svg width='185' height='82' xmlns='http://w3.org'><rect x='10' y='10' width='165' height='62' rx='10' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><circle cx='48' cy='28' r='6' fill='#f59e0b'/><line x1='48' y1='34' x2='48' y2='48' stroke='#15803d' stroke-width='3'/><line x1='48' y1='40' x2='72' y2='38' stroke='#15803d' stroke-width='3'/><line x1='48' y1='48' x2='40' y2='60' stroke='#15803d' stroke-width='3'/><line x1='48' y1='48' x2='58' y2='60' stroke='#15803d' stroke-width='3'/><text x='122' y='35' font-size='9' font-weight='bold' text-anchor='middle' fill='#15803d'>TANGKISAN</text><text x='122' y='48' font-size='8.5' text-anchor='middle' fill='#0f172a'>Bela Diri Pencak Silat</text></svg>",
    "q": "Perhatikan ilustrasi bela diri pencak silat di atas! Teknik pembelaan dengan mengadakan kontak langsung menggunakan lengan atau tungkai untuk menahan serangan lawan disebut ....",
    "p": ["Tangkisan", "Elakan", "Hindaran", "Pukulan bandul"],
    "b": 0,
    "bahas": "Tangkisan mengalihkan atau menahan arah serangan lawan melalui kontak lengan atau tungkai."
  },
  {
    "q": "Dalam permainan sepak bola, kombinasi gerak menendang bola jarak pendek mendatar (passing) yang dilanjutkan dengan berlari mencari ruang kosong (support) bertujuan untuk ....",
    "p": ["Memudahkan teman mengoper kembali bola dan mematahkan penjagaan lawan", "Membuat permainan berhenti", "Menghindari kerja sama dengan teman", "Mengulur waktu di luar lapangan"],
    "b": 0,
    "bahas": "Permainan umpan dan bergerak (give and go / wall pass) sangat efektif menembus pertahanan lawan."
  },
  {
    "q": "Dalam permainan bola voli, kombinasi passing bawah dan passing atas secara berpasangan di tempat maupun bergerak melatih ....",
    "p": ["Kontrol arah pantulan bola, ketepatan umpan, dan kerja sama", "Kekuatan menendang bola", "Kecepatan lari 100 meter", "Keseimbangan berdiri satu kaki"],
    "b": 0,
    "bahas": "Latihan kombinasi passing bawah dan atas melatih akurasi kontrol bola voli."
  },
  {
    "q": "Dalam permainan rounders, jumlah tiang hinggap (base) yang harus dilewati pelari setelah memukul bola sebelum kembali ke ruang bebas (home base) adalah ....",
    "p": ["4 base (Base I, II, III, IV, lalu kembali ke V / home base)", "1 base saja", "10 base", "Tidak ada base"],
    "b": 0,
    "bahas": "Lapangan rounders berbentuk segilima dengan 4 base hinggap dan 1 tempat pemukul/home base."
  },
  {
    "q": "Dalam permainan bulu tangkis, pukulan tinggi jauh ke arah garis belakang lapangan lawan untuk mengembalikan posisi bertahan disebut pukulan ....",
    "p": ["Lob (clear)", "Smash", "Dropshot", "Netting"],
    "b": 0,
    "bahas": "Pukulan lob melambungkan kok tinggi ke bagian belakang lapangan lawan."
  },
  {
    "q": "Pada cabang atletik nomor lari jarak pendek (sprint), posisi badan yang benar saat memasuki garis finis agar lebih cepat menyentuh pita finis adalah ....",
    "p": ["Mencondongkan dada ke depan tanpa mengurangi kecepatan lari", "Melompat tinggi lalu berhenti mendadak sebelum garis", "Menoleh ke belakang sambil memperlambat lari", "Menurunkan kecepatan sejak 10 meter sebelum garis"],
    "b": 0,
    "bahas": "Mencondongkan dada (torso) ke depan mempercepat bagian tubuh sah menyentuh bidang vertikal garis finis."
  },
  {
    "q": "Pada cabang atletik lempar roket atau lempar turbo (modifikasi lempar lembing untuk anak SD), kombinasi gerak yang dilakukan sebelum melempar adalah ....",
    "p": ["Awalan jalan dan lari berirama, menarik lengan ke belakang, lalu melempar kuat ke depan atas", "Duduk bersila lalu melempar ke belakang", "Melompat mundur lalu menjatuhkan alat", "Berdiri diam tanpa awalan"],
    "b": 0,
    "bahas": "Lempar turbo menggabungkan lari awalan, sikap melempar (power position), dan gerak lanjutan."
  },
  {
    "q": "Dalam pencak silat, serangan menggunakan tungkai dengan lintasan melengkung dari samping seperti sabit yang mengarah ke perut atau rusuk lawan disebut tendangan ....",
    "p": ["Tendangan sabit", "Tendangan lurus depan", "Tendangan T", "Tendangan belakang"],
    "b": 0,
    "bahas": "Tendangan sabit memiliki lintasan melengkung dari samping ke dalam dengan perkenaan punggung kaki."
  },
  {
    "q": "Komponen kebugaran jasmani yang berkaitan dengan kemampuan seseorang mengubah posisi dan arah gerak tubuh dengan cepat tanpa kehilangan keseimbangan disebut ....",
    "p": ["Kelincahan (agility)", "Kekuatan (strength)", "Kelenturan (flexibility)", "Daya tahan otot"],
    "b": 0,
    "bahas": "Kelincahan dilatih melalui lari zig-zag, shuttle run, dan lari rintangan."
  },
  {
    "q": "Bentuk latihan lari bolak-balik (shuttle run) dan lari berbelok-belok melewati rintangan kerucut merupakan latihan untuk meningkatkan komponen ....",
    "p": ["Kelincahan", "Kekuatan otot lengan", "Kelenturan punggung", "Daya apung di air"],
    "b": 0,
    "bahas": "Shuttle run menuntut perubahan arah cepat sehingga melatih kelincahan."
  },
  {
    "q": "Latihan naik-turun bangku (bench step) selama 3–5 menit secara teratur melatih daya tahan otot tungkai serta daya tahan ....",
    "p": ["Jantung dan paru-paru", "Gigi dan gusi", "Leher dan telinga", "Jari tangan"],
    "b": 0,
    "bahas": "Naik-turun bangku adalah latihan kardiovaskular untuk daya tahan jantung-paru."
  },
  {
    "q": "Dalam senam lantai, gerakan mengguling ke depan yang diakhiri dengan tolakan kedua tangan dan lecutan kedua kaki sehingga tubuh melenting mendarat berdiri disebut ....",
    "p": ["Guling lenting (neckspring)", "Sikap lilin", "Kayang", "Handstand"],
    "b": 0,
    "bahas": "Guling lenting memadukan gerak guling depan dengan lecutan tungkai dan tolakan tangan."
  },
  {
    "q": "Dalam senam ketangkasan menggunakan peti lompat, tahapan gerakan yang benar pada lompat jongkok atau lompat kangkang adalah ....",
    "p": [
      "Awalan lari cepat – tolakan dua kaki – bertumpu tangan di peti – melayang – mendarat dua kaki mengeper",
      "Berjalan mundur – duduk di peti – berguling ke samping",
      "Melompat satu kaki – mendarat dengan lutut kaku",
      "Berlari pelan – berhenti di depan peti – berjalan memutar"
    ],
    "b": 0,
    "bahas": "Rangkaian lompat kangkang meliputi awalan, tolakan, tumpuan tangan, melayang, dan mendarat mengeper."
  },
  {
    "q": "Dalam aktivitas gerak berirama (senam irama), tiga hal pokok yang harus diperhatikan agar gerakan selaras dan indah adalah ....",
    "p": ["Irama, kelentukan tubuh (fleksibilitas), dan kontinuitas gerakan", "Kecepatan lari maksimal, tenaga angkat beban, dan teriakan", "Kekakuan otot, gerakan terputus-putus, dan tanpa irama", "Diam di tempat, duduk, dan berbaring"],
    "b": 0,
    "bahas": "Tiga unsur utama senam irama adalah irama, kelentukan tubuh, dan kontinuitas."
  },
  {
    "q": "Gerakan mengayun satu lengan ke depan dan ke belakang secara bergantian sambil melangkahkan kaki ke depan dalam senam irama melatih ....",
    "p": ["Koordinasi gerak tangan dan kaki serta keluwesan tubuh", "Kekuatan otot rahang", "Kecepatan berenang gaya dada", "Kekuatan genggaman raket"],
    "b": 0,
    "bahas": "Senam irama melatih koordinasi anggota gerak atas dan bawah mengikuti ketukan."
  },
  {
    "q": "Penyakit menular yang dapat dicegah dengan membiasakan mencuci tangan pakai sabun sebelum makan, menutup makanan dari lalat, dan minum air matang adalah ....",
    "p": ["Diare dan tifus (tipes)", "Rabun jauh", "Keseleo lutut", "Kram otot"],
    "b": 0,
    "bahas": "Diare dan tifus menular melalui makanan atau minuman yang terkontaminasi bakteri."
  },
  {
    "q": "Penyakit tidak menular seperti hipertensi (tekanan darah tinggi), diabetes melitus, dan penyakit jantung koroner memiliki ciri utama yaitu ....",
    "p": [
      "Tidak menular dari orang ke orang, tetapi dipicu pola hidup tidak sehat seperti kurang gerak dan pola makan tidak seimbang",
      "Menular melalui jabat tangan atau udara pernapasan",
      "Disebabkan oleh gigitan nyamuk Aedes aegypti",
      "Hanya menyerang anak-anak yang rajin berolahraga"
    ],
    "b": 0,
    "bahas": "Penyakit tidak menular (PTM) berkaitan erat dengan gaya hidup, pola makan, dan faktor genetik."
  },
  {
    "q": "Program CERDIK dari Kementerian Kesehatan untuk mencegah penyakit tidak menular sejak dini salah satunya huruf 'R' yang berarti ....",
    "p": ["Rajin aktivitas fisik (olahraga teratur minimal 30 menit setiap hari)", "Rebahan sepanjang hari", "Rokok dikonsumsi setiap pagi", "Rutin makan makanan manis berlebihan"],
    "b": 0,
    "bahas": "CERDIK: Cek kesehatan berkala, Enyahkan asap rokok, Rajin aktivitas fisik, Diet seimbang, Istirahat cukup, Kelola stres."
  },
  {
    "q": "Perokok pasif adalah orang yang tidak merokok tetapi ikut menghirup asap rokok dari perokok di sekitarnya. Bahaya bagi perokok pasif adalah ....",
    "p": ["Tetap berisiko tinggi mengalami gangguan pernapasan, asma, dan penyakit paru-paru", "Tubuhnya menjadi kebal terhadap asap", "Paru-parunya menjadi lebih sehat", "Tidak terkena dampak apa pun"],
    "b": 0,
    "bahas": "Asap rokok sampingan mengandung zat beracun berbahaya bagi siapa saja yang menghirupnya."
  },
  {
    "q": "Kandungan alkohol dalam minuman keras berbahaya bagi remaja dan pelajar karena bersifat memabukkan dan merusak ....",
    "p": ["Sel-sel otak, fungsi hati (liver), serta menurunkan kesadaran dan kendali diri", "Warna sepatu olahraga", "Kebersihan lapangan", "Kekuatan tali rafia"],
    "b": 0,
    "bahas": "Alkohol merusak sistem saraf pusat dan organ hati serta memicu perilaku berisiko."
  },
  {
    "q": "Mengapa pemanasan sebelum berolahraga selalu meningkatkan suhu tubuh dan denyut jantung secara bertahap?",
    "p": [
      "Agar aliran darah dan oksigen ke otot meningkat sehingga otot lebih elastis dan siap bekerja maksimal",
      "Agar tubuh kehabisan tenaga sebelum bertanding",
      "Agar pembuluh darah menyempit dan kaku",
      "Agar pernapasan menjadi terhenti"
    ],
    "b": 0,
    "bahas": "Peningkatan suhu otot menurunkan kekakuan otot dan mencegah cedera robekan serabut otot."
  },
  {
    "q": "Saat melakukan latihan kebugaran jasmani di bawah terik matahari, cara mencegah dehidrasi dan kelelahan panas (heat exhaustion) adalah ....",
    "p": ["Minum air putih yang cukup sebelum, selama jeda istirahat, dan sesudah olahraga serta memakai pakaian yang menyerap keringat", "Menahan haus sampai pelajaran selesai", "Memakai jaket tebal berlapis-lapis", "Minum minuman bersoda panas"],
    "b": 0,
    "bahas": "Hidrasi yang cukup menjaga keseimbangan cairan dan pengaturan suhu tubuh."
  },
  {
    "q": "Nilai sportivitas dan kepemimpinan yang dapat dipelajari siswa kelas 5 SD melalui permainan olahraga beregu adalah ....",
    "p": [
      "Mampu bekerja sama dalam tim, berkomunikasi dengan santun, menghargai peran setiap teman, dan menerima hasil pertandingan secara sportif",
      "Menonjolkan diri sendiri tanpa memedulikan teman seregu",
      "Mencari-cari kesalahan teman ketika tim mengalami kekalahan",
      "Melanggar peraturan permainan agar tim cepat menang"
    ],
    "b": 0,
    "bahas": "Olahraga beregu melatih kolaborasi, empati, kepemimpinan, dan sikap sportif."
  }
]);

