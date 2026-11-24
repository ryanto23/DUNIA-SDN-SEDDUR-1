const SB_URL = "https://supabase.co";
const SB_KEY = "sb_publishable_Ch9_hptl9bI7wU9_0NhJUg_JAIBIYYG";

function kirimSupabaseXHR(method, url, bodyObj, onDone) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader("apikey", SB_KEY);
  xhr.setRequestHeader("Authorization", "Bearer " + SB_KEY);
  xhr.setRequestHeader("Content-Type", "application/json");
  if (method === "POST") xhr.setRequestHeader("Prefer", "return=minimal");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && onDone) onDone(xhr.status, xhr.responseText);
  };
  xhr.send(bodyObj ? JSON.stringify(bodyObj) : null);
}

window.simpanRekapNilai = function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  kirimSupabaseXHR("POST", SB_URL, {
    id: String(record.id),
    tanggal: String(record.tanggal),
    nama: String(record.nama),
    kode_unik: String(record.kodeUnik || "-"),
    kelas: String(record.kelas),
    mapel: String(record.mapel),
    kategori: String(record.kategori),
    benar: String(record.benar),
    nilai: Number(record.nilai) || 0
  }, function(status) {
    const el = document.getElementById("statusSyncUjian");
    if (status >= 200 && status < 300) {
      if (el) el.innerHTML = `<span style="color:#15803d; font-weight:700;">✅ Nilai 100% tersimpan &amp; sinkron ke semua perangkat!</span>`;
    } else {
      if (el) el.innerHTML = `<span style="color:#d97706; font-weight:700;">⚠️ Tersimpan lokal (Kode: ${status})</span>`;
    }
  });
};

window.muatRekapDariCloud = function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Menarik rekap nilai dari Cloud...";

  kirimSupabaseXHR("GET", `${SB_URL}?select=*&order=id.desc`, null, function(status, respText) {
    if (status >= 200 && status < 300) {
      try {
        const rows = JSON.parse(respText);
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
          localStorage.setItem("seddur_rekap_nilai", JSON.stringify(cacheRekapCloud));
        }
      } catch (e) {}
    } else {
      try { cacheRekapCloud = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) { cacheRekapCloud = []; }
    }
    if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
    if (typeof perbaruiOpsiBabRekap === "function") perbaruiOpsiBabRekap();
    if (typeof renderTabelNilai === "function") renderTabelNilai();
  });
};

window.hapusDataHasilFilter = function() {
  const tersaring = getDataTersaring();
  if (tersaring.length === 0) { alert("Tidak ada data pada filter ini untuk dihapus."); return; }
  if (!confirm(`Hapus ${tersaring.length} data nilai ini dari Cloud & semua perangkat?`)) return;

  tersaring.forEach(item => {
    kirimSupabaseXHR("DELETE", `${SB_URL}?id=eq.${encodeURIComponent(String(item.id))}`, null);
  });

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
