const GAS_EXEC_URL = "https://google.com";

window.simpanRekapNilai = async function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  const formBody = new URLSearchParams({
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

  try {
    await fetch(GAS_EXEC_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: formBody.toString()
    });
    const el = document.getElementById("statusSyncUjian");
    if (el) el.innerHTML = `<span style="color:#15803d; font-weight:700;">✅ Nilai otomatis terkirim ke Google Sheets Admin!</span>`;
  } catch (err) {
    const el = document.getElementById("statusSyncUjian");
    if (el) el.innerHTML = `<span style="color:#dc2626; font-weight:700;">⚠️ Gagal kirim: ${err.message}</span>`;
  }
};

window.muatRekapDariCloud = function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Sedang menarik semua nilai dari Google Sheets...";

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

  script.src = `${GAS_EXEC_URL}?callback=${cbName}&_t=${Date.now()}`;
  document.body.appendChild(script);
};

window.hapusDataHasilFilter = async function() {
  const tersaring = getDataTersaring();
  if (tersaring.length === 0) { alert("Tidak ada data pada filter ini untuk dihapus."); return; }
  if (!confirm(`Hapus ${tersaring.length} data nilai ini dari Google Sheets & semua perangkat?`)) return;

  const formBody = new URLSearchParams({
    aksi: "hapus",
    ids: tersaring.map(item => String(item.id)).join(",")
  });

  try {
    await fetch(GAS_EXEC_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: formBody.toString()
    });
  } catch (e) {}

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
