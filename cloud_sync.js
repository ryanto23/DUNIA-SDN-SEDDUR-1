const SB_URL = "https://supabase.co";
const SB_KEY = "sb_publishable_Ch9_hptl9bI7wU9_0NhJUg_JAIBIYYG";

window.simpanRekapNilai = function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  fetch(SB_URL, {
    method: "POST",
    headers: {
      "apikey": SB_KEY,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify({
      id: String(record.id),
      tanggal: String(record.tanggal),
      nama: String(record.nama),
      kode_unik: String(record.kodeUnik || "-"),
      kelas: String(record.kelas),
      mapel: String(record.mapel),
      kategori: String(record.kategori),
      benar: String(record.benar),
      nilai: Number(record.nilai) || 0
    })
  })
  .then(res => {
    const el = document.getElementById("statusSyncUjian");
    if (res.ok) {
      if (el) el.innerHTML = `<span style="color:#15803d; font-weight:700;">✅ Nilai otomatis masuk ke Rekap Admin!</span>`;
    } else {
      res.text().then(t => {
        if (el) el.innerHTML = `<span style="color:#dc2626; font-weight:700;">⚠️ Error ${res.status}: ${t}</span>`;
      });
    }
  })
  .catch(err => {
    const el = document.getElementById("statusSyncUjian");
    if (el) el.innerHTML = `<span style="color:#dc2626; font-weight:700;">⚠️ Gagal jaringan: ${err.message}</span>`;
  });
};

window.muatRekapDariCloud = async function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Sedang menarik semua nilai siswa...";

  try {
    const res = await fetch(`${SB_URL}?select=*&order=id.desc`, {
      method: "GET",
      headers: {
        "apikey": SB_KEY
      }
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const rows = await res.json();
    if (Array.isArray(rows)) {
      cacheRekapCloud = rows.map(r => ({
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
      try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(cacheRekapCloud)); } catch (e) {}
    }
  } catch (err) {
    if (infoBox) infoBox.textContent = "⚠️ Gagal tarik server (" + err.message + "), tampil data perangkat ini.";
    try { cacheRekapCloud = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) { cacheRekapCloud = []; }
  }

  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof perbaruiOpsiBabRekap === "function") perbaruiOpsiBabRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
};

window.hapusDataHasilFilter = async function() {
  const tersaring = getDataTersaring();
  if (tersaring.length === 0) { alert("Tidak ada data pada filter ini untuk dihapus."); return; }
  if (!confirm(`Hapus ${tersaring.length} data nilai ini dari semua perangkat?`)) return;

  for (const item of tersaring) {
    try {
      await fetch(`${SB_URL}?id=eq.${encodeURIComponent(String(item.id))}`, {
        method: "DELETE",
        headers: { "apikey": SB_KEY }
      });
    } catch (e) {}
  }

  let semua = [];
  try { semua = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) {}
  const setHapus = new Set(tersaring.map(item => String(item.id)));
  const sisa = semua.filter(item => !setHapus.has(String(item.id)));
  try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(sisa)); } catch (e) {}
  cacheRekapCloud = sisa;

  if (typeof mainkanEfek === "function") mainkanEfek('salah');
  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
  alert("✅ Data berhasil dihapus dari semua perangkat!");
};
