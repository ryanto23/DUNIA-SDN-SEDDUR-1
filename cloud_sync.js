const GAS_FORM_URL = "https://google.com";

function kirimViaFormTersembunyi(dataObj) {
  let iframe = document.getElementById("iframeKirimNilai");
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = "iframeKirimNilai";
    iframe.name = "iframeKirimNilai";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }

  const form = document.createElement("form");
  form.method = "POST";
  form.action = GAS_FORM_URL;
  form.target = "iframeKirimNilai";
  form.style.display = "none";

  Object.keys(dataObj).forEach(k => {
    const inp = document.createElement("input");
    inp.type = "hidden";
    inp.name = k;
    inp.value = String(dataObj[k]);
    form.appendChild(inp);
  });

  document.body.appendChild(form);
  form.submit();
  setTimeout(() => {
    if (form.parentNode) form.parentNode.removeChild(form);
  }, 3000);
}

window.simpanRekapNilai = function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  kirimViaFormTersembunyi({
    aksi: "simpan",
    id: record.id,
    tanggal: record.tanggal,
    nama: record.nama,
    kodeUnik: record.kodeUnik || "-",
    kelas: record.kelas,
    mapel: record.mapel,
    kategori: record.kategori,
    benar: record.benar,
    nilai: record.nilai
  });
};

window.muatRekapDariCloud = function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Menarik data nilai dari Google Sheets...";

  const cbName = "cb_rekap_" + Date.now();
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

  script.src = `${GAS_FORM_URL}?callback=${cbName}&_t=${Date.now()}`;
  document.body.appendChild(script);
};

window.hapusDataHasilFilter = function() {
  const tersaring = getDataTersaring();
  if (tersaring.length === 0) { alert("Tidak ada data pada filter ini untuk dihapus."); return; }
  if (!confirm(`Hapus ${tersaring.length} data nilai ini dari Google Sheets & semua perangkat?`)) return;

  const ids = tersaring.map(item => String(item.id)).join(",");
  kirimViaFormTersembunyi({ aksi: "hapus", ids: ids });

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
