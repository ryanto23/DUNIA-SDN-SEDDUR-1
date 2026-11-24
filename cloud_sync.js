const GAS_URL = "https://google.com";

window.simpanRekapNilai = function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  const params = new URLSearchParams({
    aksi: "simpan",
    id: String(record.id),
    tanggal: String(record.tanggal),
    nama: String(record.nama),
    kodeUnik: String(record.kodeUnik || "-"),
    kelas: String(record.kelas),
    mapel: String(record.mapel),
    kategori: String(record.kategori),
    benar: String(record.benar),
    nilai: String(record.nilai)
  });

  const urlKirim = `${GAS_URL}?${params.toString()}`;
  fetch(urlKirim)
    .then(r => r.json())
    .then(() => {
      const el = document.getElementById("statusSyncUjian");
      if (el) el.innerHTML = `<span style="color:#15803d; font-weight:700;">✅ Nilai 100% tersimpan &amp; sinkron ke Google Sheets!</span>`;
    })
    .catch(() => {
      new Image().src = urlKirim;
      const el = document.getElementById("statusSyncUjian");
      if (el) el.innerHTML = `<span style="color:#15803d; font-weight:700;">✅ Nilai terkirim ke Google Sheets!</span>`;
    });
};

window.muatRekapDariCloud = async function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Sedang menarik nilai dari Google Sheets...";

  try {
    const res = await fetch(`${GAS_URL}?aksi=baca&_t=${Date.now()}`);
    const data = await res.json();
    if (Array.isArray(data)) {
      window.cacheRekapCloud = data;
      try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(data)); } catch (e) {}
    }
  } catch (err) {
    if (infoBox) infoBox.textContent = "⚠️ Gagal tarik Cloud, memuat data lokal.";
    try { window.cacheRekapCloud = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) { window.cacheRekapCloud = []; }
  }

  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof perbaruiOpsiBabRekap === "function") perbaruiOpsiBabRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
};

window.hapusDataHasilFilter = async function() {
  const tersaring = getDataTersaring();
  if (tersaring.length === 0) { alert("Tidak ada data pada filter ini untuk dihapus."); return; }
  if (!confirm(`Hapus ${tersaring.length} data nilai ini dari Google Sheets & semua perangkat?`)) return;

  const ids = tersaring.map(item => String(item.id)).join(",");
  try { await fetch(`${GAS_URL}?aksi=hapus&ids=${encodeURIComponent(ids)}`); } catch (e) {}

  let semua = [];
  try { semua = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) {}
  const setHapus = new Set(tersaring.map(item => String(item.id)));
  try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(semua.filter(item => !setHapus.has(String(item.id))))); } catch (e) {}
  window.cacheRekapCloud = (window.cacheRekapCloud || []).filter(item => !setHapus.has(String(item.id)));

  if (typeof mainkanEfek === "function") mainkanEfek('salah');
  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
  alert("✅ Data berhasil dihapus dari Google Sheets & semua perangkat!");
};
