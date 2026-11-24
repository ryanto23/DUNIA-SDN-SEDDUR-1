window.simpanRekapNilai = function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  const bagian = [
    "SEDDUR",
    record.id,
    record.tanggal,
    String(record.nama).replace(/#/g, ""),
    String(record.kodeUnik || "-").replace(/#/g, ""),
    record.kelas,
    String(record.mapel).replace(/#/g, ""),
    String(record.kategori).replace(/#/g, ""),
    record.benar,
    record.nilai
  ];
  const kodeRekap = bagian.join("#");

  const pesanWA =
    `📋 *HASIL UJIAN SDN SEDDUR 1*\n` +
    `• Nama: ${record.nama}\n` +
    `• Kode/Absen: ${record.kodeUnik}\n` +
    `• Kelas: ${record.kelas}\n` +
    `• Mapel: ${record.mapel}\n` +
    `• Ujian: ${record.kategori}\n` +
    `• Benar: ${record.benar}\n` +
    `• *NILAI: ${record.nilai}*\n\n` +
    `Kode Rekap Admin:\n${kodeRekap}`;

  const el = document.getElementById("statusSyncUjian");
  if (el) {
    el.innerHTML = `
      <div style="background:#dcfce7; border:2px solid #22c55e; border-radius:12px; padding:10px; margin-top:6px;">
        <div style="color:#15803d; font-weight:700; margin-bottom:6px;">✅ Nilai tersimpan! Kirim hasil ke Guru:</div>
        <a href="https://wa.me{encodeURIComponent(pesanWA)}" target="_blank"
           style="display:block; background:#16a34a; color:#fff; text-decoration:none; padding:10px 12px; border-radius:10px; font-weight:700; font-size:0.9rem;">
          📲 Kirim Nilai ke WhatsApp Guru
        </a>
      </div>`;
  }
};

window.muatRekapDariCloud = function() {
  try {
    cacheRekapCloud = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
  } catch (e) {
    cacheRekapCloud = [];
  }

  const wadahTabel = document.getElementById("wadahTabelNilai");
  if (wadahTabel && !document.getElementById("kotakImporWA")) {
    const kotak = document.createElement("div");
    kotak.id = "kotakImporWA";
    kotak.className = "no-print";
    kotak.style.cssText = "background:#f0f9ff; border:2px dashed #0284c7; border-radius:12px; padding:10px; margin-top:12px; text-align:left;";
    kotak.innerHTML = `
      <div style="font-size:0.84rem; font-weight:700; color:#0369a1; margin-bottom:4px;">📥 Impor Nilai dari WhatsApp Siswa:</div>
      <textarea id="inputKodeWA" class="input-form" style="min-height:70px; font-size:0.8rem; margin:4px 0;" placeholder="Tempel pesan/kode SEDDUR#... dari WhatsApp siswa di sini..."></textarea>
      <button type="button" class="btn-aksi btn-sukses" style="width:100%; margin-top:4px; padding:9px;" onclick="imporDariTeksWA()">➕ Masukkan ke Tabel Rekap</button>
    `;
    wadahTabel.parentNode.insertBefore(kotak, wadahTabel);
  }

  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof perbaruiOpsiBabRekap === "function") perbaruiOpsiBabRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
};

window.imporDariTeksWA = function() {
  const teks = (document.getElementById("inputKodeWA").value || "").trim();
  if (!teks) { alert("Tempelkan terlebih dahulu pesan dari WhatsApp siswa!"); return; }

  let semua = [];
  try { semua = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) {}
  const idSudahAda = new Set(semua.map(x => String(x.id)));

  const baris = teks.split(/\r?\n/);
  let jumlahMasuk = 0;

  baris.forEach(b => {
    const idx = b.indexOf("SEDDUR#");
    if (idx !== -1) {
      const p = b.slice(idx).trim().split("#");
      if (p.length >= 10) {
        p.shift();
        const idRec = String(p.shift());
        if (!idSudahAda.has(idRec)) {
          semua.push({
            id: idRec,
            tanggal: p.shift(),
            nama: p.shift(),
            kodeUnik: p.shift(),
            kelas: String(p.shift()),
            mapel: p.shift(),
            kategori: p.shift(),
            benar: p.shift(),
            nilai: Number(p.shift()) || 0
          });
          idSudahAda.add(idRec);
          jumlahMasuk++;
        }
      }
    }
  });

  try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(semua)); } catch (e) {}
  cacheRekapCloud = semua;
  document.getElementById("inputKodeWA").value = "";
  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof perbaruiOpsiBabRekap === "function") perbaruiOpsiBabRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
  alert(`✅ Berhasil memasukkan ${jumlahMasuk} nilai baru ke tabel rekap!`);
};

window.hapusDataHasilFilter = function() {
  const tersaring = getDataTersaring();
  if (tersaring.length === 0) { alert("Tidak ada data pada filter ini untuk dihapus."); return; }
  if (!confirm(`Hapus ${tersaring.length} data nilai ini?`)) return;

  let semua = [];
  try { semua = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) {}
  const setHapus = new Set(tersaring.map(item => String(item.id)));
  const sisa = semua.filter(item => !setHapus.has(String(item.id)));
  try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(sisa)); } catch (e) {}
  cacheRekapCloud = sisa;

  if (typeof mainkanEfek === "function") mainkanEfek('salah');
  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
  alert("✅ Data berhasil dihapus!");
};
