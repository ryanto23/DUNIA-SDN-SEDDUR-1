const SUPABASE_URL = "https://supabase.co";
const SUPABASE_KEY = "sb_publishable_Ch9_hptl9bI7wU9_0NhJUg_JAIBIYYG";

const SB_HEADERS = {
  "apikey": SUPABASE_KEY,
  "Authorization": "Bearer " + SUPABASE_KEY,
  "Content-Type": "application/json"
};

window.simpanRekapNilai = function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  const payload = {
    id: String(record.id),
    tanggal: String(record.tanggal),
    nama: String(record.nama),
    kode_unik: String(record.kodeUnik || "-"),
    kelas: String(record.kelas),
    mapel: String(record.mapel),
    kategori: String(record.kategori),
    benar: String(record.benar),
    nilai: Number(record.nilai) || 0
  };

  fetch(`${SUPABASE_URL}/rest/v1/rekap_nilai`, {
    method: "POST",
    headers: { ...SB_HEADERS, "Prefer": "return=minimal" },
    body: JSON.stringify(payload)
  })
  .then(res => {
    const el = document.getElementById("statusSyncUjian");
    if (res.ok) {
      if (el) el.innerHTML = `<span style="color:#15803d; font-weight:700;">✅ Nilai 100% terkirim &amp; tersinkron ke Cloud!</span>`;
    } else {
      res.text().then(txt => {
        if (el) el.innerHTML = `<span style="color:#dc2626; font-weight:700;">⚠️ Gagal simpan (${res.status}): ${txt}</span>`;
      });
    }
  })
  .catch(err => {
    const el = document.getElementById("statusSyncUjian");
    if (el) el.innerHTML = `<span style="color:#dc2626; font-weight:700;">⚠️ Gagal koneksi: ${err.message}</span>`;
  });
};

window.muatRekapDariCloud = async function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Sedang menarik nilai terbaru dari Cloud...";

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rekap_nilai?select=*&order=id.desc`, {
      method: "GET",
      headers: SB_HEADERS
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const rows = await res.json();
    if (Array.isArray(rows)) {
      const hasil = rows.map(r => ({
        id: r.id,
        tanggal: r.tanggal,
        nama: r.nama,
        kodeUnik: r.kode_unik || "-",
        kelas: String(r.kelas),
        mapel: r.mapel,
        kategori: r.kategori,
        benar: r.benar,
        nilai: Number(r.nilai) || 0
      }));
      cacheRekapCloud = hasil;
      try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(hasil)); } catch (e) {}
    }
  } catch (err) {
    if (infoBox) infoBox.textContent = "⚠️ Gagal tarik Cloud (" + err.message + "), memuat data lokal.";
    try { cacheRekapCloud = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) { cacheRekapCloud = []; }
  }

  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof perbaruiOpsiBabRekap === "function") perbaruiOpsiBabRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
};

window.getDataTersaring = function() {
  let semua = (typeof cacheRekapCloud !== "undefined" && cacheRekapCloud.length) ? cacheRekapCloud : [];
  if (!semua.length) {
    try { semua = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) {}
  }
  const fKelas = String(document.getElementById("filterKelas").value);
  const mapelSplit = document.getElementById("filterMapel").value.split("|");
  const fMapelKode = mapelSplit.shift() || "ALL";
  const fMapelNama = mapelSplit.pop() || "";
  const fTipe = document.getElementById("filterTipeUjian").value;
  const fBab = document.getElementById("filterBabSpesifik") ? document.getElementById("filterBabSpesifik").value : "__ALL_BAB__";
  const fUnik = document.getElementById("filterKodeUnik").value;

  return semua.filter(item => {
    const cocokKelas = (fKelas === "ALL") || (String(item.kelas) === fKelas);
    const itemMapelLow = (item.mapel || "").trim().toLowerCase();
    const filterMapelLow = fMapelNama.trim().toLowerCase();
    const cocokMapel = (fMapelKode === "ALL") || (itemMapelLow === filterMapelLow) || itemMapelLow.includes(filterMapelLow);
    const unikItem = (item.kodeUnik || "-").toUpperCase();
    const cocokUnik = (fUnik === "ALL") || (unikItem === fUnik);

    const katLow = (item.kategori || "").trim().toLowerCase();
    const isUTS_UAS = ["uts semester 1", "uas semester 1", "uts semester 2", "uas semester 2"].includes(katLow);

    let cocokUjian = false;
    if (fTipe === "ALL") cocokUjian = true;
    else if (fTipe === "UAS_ALL") cocokUjian = katLow.includes("uas");
    else if (fTipe === "UTS_ALL") cocokUjian = katLow.includes("uts");
    else if (fTipe === "BAB") cocokUjian = (fBab === "__ALL_BAB__") ? !isUTS_UAS : (katLow === fBab.trim().toLowerCase());
    else cocokUjian = katLow === fTipe.trim().toLowerCase();

    return cocokKelas && cocokMapel && cocokUjian && cocokUnik;
  });
};

window.hapusDataHasilFilter = async function() {
  const tersaring = getDataTersaring();
  if (tersaring.length === 0) { alert("Tidak ada data pada filter ini untuk dihapus."); return; }
  if (!confirm(`Hapus ${tersaring.length} data nilai ini dari Cloud & semua perangkat?`)) return;

  for (const item of tersaring) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/rekap_nilai?id=eq.${encodeURIComponent(String(item.id))}`, {
        method: "DELETE",
        headers: SB_HEADERS
      });
    } catch (e) {}
  }

  let semua = [];
  try { semua = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) {}
  const setHapus = new Set(tersaring.map(item => String(item.id)));
  try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(semua.filter(item => !setHapus.has(String(item.id))))); } catch (e) {}
  cacheRekapCloud = (cacheRekapCloud || []).filter(item => !setHapus.has(String(item.id)));

  if (typeof mainkanEfek === "function") mainkanEfek('salah');
  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
  alert("✅ Data berhasil dihapus dari Cloud & semua perangkat!");
};
