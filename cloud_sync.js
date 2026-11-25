const SB_ENDPOINT = "https://supabase.co";
const SB_ANON_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhdHVoeHR6dWV5Y2FsZXRpcmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0ODQ5OTgsImV4cCI6MjExMTA2MDk5OH0.SxxmxzjW3DekEyOUoISYXVVkuPm4hebtN1xmhbPHwUU";

const SB_REQ_HEADERS = {
  "apikey": SB_ANON_JWT,
  "Authorization": "Bearer " + SB_ANON_JWT,
  "Content-Type": "application/json"
};

window.simpanRekapNilai = async function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  const dataKirim = {
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

  try {
    const res = await fetch(SB_ENDPOINT, {
      method: "POST",
      keepalive: true,
      headers: { ...SB_REQ_HEADERS, "Prefer": "return=minimal" },
      body: JSON.stringify(dataKirim)
    });

    setTimeout(async () => {
      const el = document.getElementById("statusSyncUjian");
      if (res.ok) {
        if (el) el.innerHTML = `<span style="color:#15803d; font-weight:700;">✅ Nilai 100% tersimpan &amp; masuk ke Rekap Admin!</span>`;
      } else {
        const errText = await res.text().catch(() => "");
        if (el) el.innerHTML = `<span style="color:#dc2626; font-weight:700;">⚠️ Server menolak (${res.status}): ${errText}</span>`;
      }
    }, 300);
  } catch (err) {
    setTimeout(() => {
      const el = document.getElementById("statusSyncUjian");
      if (el) el.innerHTML = `<span style="color:#dc2626; font-weight:700;">⚠️ Gagal jaringan: ${err.message}</span>`;
    }, 300);
  }
};

window.muatRekapDariCloud = async function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Menarik seluruh nilai siswa dari Cloud...";

  try {
    const res = await fetch(`${SB_ENDPOINT}?select=*&order=id.desc`, {
      method: "GET",
      headers: SB_REQ_HEADERS
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
    if (infoBox) infoBox.textContent = "⚠️ Gagal tarik Cloud (" + err.message + "), tampil data perangkat ini.";
    try { cacheRekapCloud = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) { cacheRekapCloud = []; }
  }

  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof perbaruiOpsiBabRekap === "function") perbaruiOpsiBabRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
};

window.hapusDataHasilFilter = async function() {
  const tersaring = getDataTersaring();
  if (tersaring.length === 0) { alert("Tidak ada data pada filter ini untuk dihapus."); return; }
  if (!confirm(`Hapus ${tersaring.length} data nilai ini dari Cloud & semua perangkat?`)) return;

  for (const item of tersaring) {
    try {
      await fetch(`${SB_ENDPOINT}?id=eq.${encodeURIComponent(String(item.id))}`, {
        method: "DELETE",
        headers: SB_REQ_HEADERS
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
  alert("✅ Data berhasil dihapus dari Cloud & semua perangkat!");
};
