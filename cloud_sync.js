const FORM_VIEW_URL = "https://google.com";
const FORM_POST_URL = "https://google.com";
const SHEET_ID = "1oW6zS4n-BR2niRf3fDWTb3qIEWrBxalnSZN_REyym8Y";

let cacheEntryIds = null;

async function ambilEntryOtomatis() {
  if (cacheEntryIds && cacheEntryIds.length >= 9) return cacheEntryIds;
  try {
    const res = await fetch(FORM_VIEW_URL);
    const html = await res.text();
    const m = html.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(\[[\s\S]*?\]);/);
    if (m && m) {
      const parsed = JSON.parse(m);
      const daftarSoal = parsed;
      const ids = [];
      daftarSoal.forEach(item => {
        if (item && item && item && item) {
          ids.push("entry." + item);
        }
      });
      if (ids.length >= 9) {
        cacheEntryIds = ids;
        return ids;
      }
    }
  } catch (e) {}
  return null;
}

function kirimViaFormGoogle(entryIds, nilaiArray) {
  let iframe = document.getElementById("iframeGForm");
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = "iframeGForm";
    iframe.name = "iframeGForm";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }

  const form = document.createElement("form");
  form.method = "POST";
  form.action = FORM_POST_URL;
  form.target = "iframeGForm";
  form.style.display = "none";

  for (let i = 0; i < 9; i++) {
    const inp = document.createElement("input");
    inp.type = "hidden";
    inp.name = entryIds[i];
    inp.value = String(nilaiArray[i] !== undefined ? nilaiArray[i] : "-");
    form.appendChild(inp);
  }

  document.body.appendChild(form);
  form.submit();
  setTimeout(() => {
    if (form.parentNode) form.parentNode.removeChild(form);
  }, 3000);
}

window.simpanRekapNilai = async function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  const ids = await ambilEntryOtomatis();
  if (ids && ids.length >= 9) {
    kirimViaFormGoogle(ids, [
      record.id,
      record.tanggal,
      record.nama,
      record.kodeUnik || "-",
      record.kelas,
      record.mapel,
      record.kategori,
      record.benar,
      record.nilai
    ]);
  }
};

window.muatRekapDariCloud = function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Menarik rekap nilai dari Google Sheets...";

  const cbName = "cb_gsheet_" + Date.now();
  const script = document.createElement("script");

  window[cbName] = function(resp) {
    delete window[cbName];
    if (script.parentNode) script.parentNode.removeChild(script);
    try {
      const rows = (resp && resp.table && resp.table.rows) ? resp.table.rows : [];
      const hasil = [];
      rows.forEach(r => {
        const c = r.c || [];
        const val = (idx) => (c[idx] && c[idx].v !== null && c[idx].v !== undefined) ? String(c[idx].v) : "";
        const namaSiswa = val(3);
        if (namaSiswa && namaSiswa !== "nama siswa" && namaSiswa !== "222") {
          hasil.push({
            id: val(1) || String(Date.now() + Math.random()),
            tanggal: val(2) || "-",
            nama: namaSiswa,
            kodeUnik: val(4) || "-",
            kelas: val(5) || "-",
            mapel: val(6) || "-",
            kategori: val(7) || "-",
            benar: val(8) || "-",
            nilai: Number(val(9)) || 0
          });
        }
      });
      cacheRekapCloud = hasil;
      try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(hasil)); } catch (e) {}
    } catch (e) {}

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

  script.src = `https://google.com{SHEET_ID}/gviz/tq?tqx=responseHandler:${cbName}&_t=${Date.now()}`;
  document.body.appendChild(script);
};
