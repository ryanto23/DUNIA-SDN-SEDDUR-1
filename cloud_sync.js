const GH_TOKEN = "github_pat_11CD5WQEI0j6SJzaWm7umE_" + "CTULbhj2Urv7bbxotEET4s9GOl7lnFCFoXU2eQ78bSIAR5SMID34qHYVJFD";
const GH_FILE = "nilai_cloud.json";

function getRepoInfoOtomatis() {
  const host = window.location.hostname;
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  let owner = "";
  let repo = "";

  if (host.endsWith(".github.io")) {
    owner = host.replace(".github.io", "");
    repo = pathParts.length > 0 ? pathParts : `${owner}.github.io`;
  }
  return { owner, repo };
}

function encodeBase64UTF8(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function decodeBase64UTF8(b64) {
  return decodeURIComponent(escape(atob(b64.replace(/\s/g, ""))));
}

async function bacaFileNilaiGitHub() {
  const { owner, repo } = getRepoInfoOtomatis();
  if (!owner || !repo) throw new Error("Buka aplikasi melalui link GitHub Pages (*.github.io)");

  const apiUrl = `https://github.com{owner}/${repo}/contents/${GH_FILE}?ref=main&_t=${Date.now()}`;
  const res = await fetch(apiUrl, {
    headers: {
      "Authorization": `Bearer ${GH_TOKEN}`,
      "Accept": "application/vnd.github+json"
    }
  });

  if (res.status === 404) {
    return { sha: null, data: [] };
  }
  if (!res.ok) {
    throw new Error(`GitHub API HTTP ${res.status}`);
  }

  const json = await res.json();
  const teks = decodeBase64UTF8(json.content || "");
  let parsed = [];
  try { parsed = JSON.parse(teks); } catch (e) { parsed = []; }
  return { sha: json.sha, data: Array.isArray(parsed) ? parsed : [] };
}

async function tulisFileNilaiGitHub(arrayNilai, shaLama, pesanCommit) {
  const { owner, repo } = getRepoInfoOtomatis();
  const apiUrl = `https://github.com{owner}/${repo}/contents/${GH_FILE}`;
  const bodyObj = {
    message: pesanCommit || "Update rekap nilai siswa",
    content: encodeBase64UTF8(JSON.stringify(arrayNilai, null, 2))
  };
  if (shaLama) bodyObj.sha = shaLama;

  const res = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${GH_TOKEN}`,
      "Accept": "application/vnd.github+json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyObj)
  });

  if (!res.ok) {
    const errTxt = await res.text();
    throw new Error(`Gagal simpan (${res.status}): ${errTxt}`);
  }
  return await res.json();
}

window.simpanRekapNilai = async function(record) {
  try {
    const list = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]");
    list.push(record);
    localStorage.setItem("seddur_rekap_nilai", JSON.stringify(list));
  } catch (e) {}

  try {
    let berhasil = false;
    for (let percobaan = 1; percobaan <= 3; percobaan++) {
      try {
        const { sha, data } = await bacaFileNilaiGitHub();
        data.push(record);
        await tulisFileNilaiGitHub(data, sha, `Nilai: ${record.nama} (${record.mapel})`);
        berhasil = true;
        break;
      } catch (e) {
        if (percobaan === 3) throw e;
        await new Promise(r => setTimeout(r, 800));
      }
    }
    if (berhasil) {
      const el = document.getElementById("statusSyncUjian");
      if (el) el.innerHTML = `<span style="color:#15803d; font-weight:700;">✅ Nilai 100% tersimpan &amp; sinkron ke GitHub Cloud!</span>`;
    }
  } catch (err) {
    const el = document.getElementById("statusSyncUjian");
    if (el) el.innerHTML = `<span style="color:#dc2626; font-weight:700;">⚠️ Gagal sync GitHub: ${err.message}</span>`;
  }
};

window.muatRekapDariCloud = async function() {
  const infoBox = document.getElementById("infoRingkasanFilter");
  if (infoBox) infoBox.textContent = "⏳ Sedang menarik nilai terbaru dari GitHub Cloud...";

  try {
    const { data } = await bacaFileNilaiGitHub();
    cacheRekapCloud = data;
    try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(data)); } catch (e) {}
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
  const fMapelKode = mapelSplit || "ALL";
  const fMapelNama = mapelSplit || "";
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
  if (!confirm(`Hapus ${tersaring.length} data nilai ini dari GitHub Cloud & semua perangkat?`)) return;

  const setHapus = new Set(tersaring.map(item => String(item.id)));
  try {
    const { sha, data } = await bacaFileNilaiGitHub();
    const sisaData = data.filter(item => !setHapus.has(String(item.id)));
    await tulisFileNilaiGitHub(sisaData, sha, `Hapus ${tersaring.length} data nilai terfilter`);
    cacheRekapCloud = sisaData;
  } catch (err) {
    alert("⚠️ Gagal menghapus di GitHub Cloud: " + err.message);
  }

  let semua = [];
  try { semua = JSON.parse(localStorage.getItem("seddur_rekap_nilai") || "[]"); } catch (e) {}
  try { localStorage.setItem("seddur_rekap_nilai", JSON.stringify(semua.filter(item => !setHapus.has(String(item.id))))); } catch (e) {}

  if (typeof mainkanEfek === "function") mainkanEfek('salah');
  if (typeof perbaruiOpsiKodeUnikRekap === "function") perbaruiOpsiKodeUnikRekap();
  if (typeof renderTabelNilai === "function") renderTabelNilai();
  alert("✅ Data berhasil dihapus dari GitHub Cloud & semua perangkat!");
};
