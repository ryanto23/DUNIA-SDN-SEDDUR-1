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

  const img = new Image();
  img.onload = img.onerror = function() {
    const infoEl = document.getElementById("statusSyncUjian");
    if (infoEl) infoEl.innerHTML = `<span style="color:#15803d; font-weight:700;">✅ Nilai 100% terkirim ke Rekap Admin &amp; Google Sheets!</span>`;
  };
  img.src = `${GAS_URL}?${params.toString()}&_t=${Date.now()}`;
};

window.muatRekapDariCloud = function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Menarik seluruh nilai siswa dari Google Sheets...";

  const cbName = "cb_seddur_" + Date.now();
  const script = document.createElement("script");

  window[cbName] = function(data) {
    delete window[cbName];
    if (script.parentNode) script.parentNode.removeChild(script);
    if (Array.isArray(data)) {
      cacheRekapCloud = data;
      try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(data)); } catch (e) {}
    }
    if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
    if (typeof perbaruiOpsiBabRekap === "function") perbaruiOpsiBabRekap();
    if (typeof renderTabelNilai === "function") renderTabelNilai();
  };

  script.onerror = function() {
    delete window[cbName];
    if (script.parentNode) script.parentNode.removeChild(script);
    try { cacheRekapCloud = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) { cacheRekapCloud = []; }
    if (typeof renderTabelNilai === "function") renderTabelNilai();
  };

  script.src = `${GAS_URL}?callback=${cbName}&_t=${Date.now()}`;
  document.body.appendChild(script);
};

window.hapusDataHasilFilter = function() {
  const tersaring = getDataTersaring();
  if (tersaring.length === 0) { alert("Tidak ada data pada filter ini untuk dihapus."); return; }
  if (!confirm(`Hapus ${tersaring.length} data nilai ini dari Google Sheets & semua perangkat?`)) return;

  const ids = tersaring.map(item => String(item.id)).join(",");
  const img = new Image();
  img.src = `${GAS_URL}?aksi=hapus&ids=${encodeURIComponent(ids)}&_t=${Date.now()}`;

  let semua = [];
  try { semua = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) {}
  const setHapus = new Set(tersaring.map(item => String(item.id)));
  const sisa = semua.filter(item => !setHapus.has(String(item.id)));
  try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(sisa)); } catch (e) {}
  cacheRekapCloud = sisa;

  if (typeof mainkanEfek === "function") mainkanEfek('salah');
  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
  alert("✅ Data berhasil dihapus dari Google Sheets & semua perangkat!");
};
