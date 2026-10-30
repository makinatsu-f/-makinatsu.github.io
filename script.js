// ==== データ定義 ===================================================

// バッグ一覧（/assets/bags/）
const bags = [
  // 単色
  { id: "bag-egg-yellow",       label: "エッグ（単色）",          file: "bag-egg-yellow.png" },
  { id: "bag-deep-bordeaux",    label: "ボルドー（単色）",        file: "bag-deep-bordeaux.png" },
  { id: "bag-soft-pink",        label: "ライトピンク（単色）",    file: "bag-soft-pink.png" },
  { id: "bag-true-blue",        label: "ブルー（単色）",          file: "bag-true-blue.png" },
  { id: "bag-sax-blue",         label: "サックス（単色）",        file: "bag-sax-blue.png" },
  { id: "bag-ash-gray",         label: "グレー（単色）",          file: "bag-ash-gray.png" },
  { id: "bag-deep-navy",        label: "ネイビー（単色）",        file: "bag-deep-navy.png" },
  { id: "bag-night-black",      label: "ブラック（単色）",        file: "bag-night-black.png" },
  { id: "bag-sage-khaki",       label: "カーキ（単色）",          file: "bag-sage-khaki.png" },
  { id: "bag-forest-green",     label: "フォレストグリーン（単色）", file: "bag-forest-green.png" },
  { id: "bag-cocoa-brown",      label: "ココアブラウン（単色）",  file: "bag-cocoa-brown.png" },

  // ツートン
  { id: "bag-blue-navy",        label: "ブルー × ネイビー",       file: "bag-blue-navy.png" },
  { id: "bag-sax-navy",         label: "サックス × ネイビー",     file: "bag-sax-navy.png" },
  { id: "bag-gray-navy",        label: "グレー × ネイビー",       file: "bag-gray-navy.png" },
  { id: "bag-brown-navy",       label: "ブラウン × ネイビー",     file: "bag-brown-navy.png" },
  { id: "bag-sax-brown",        label: "サックス × ブラウン",     file: "bag-sax-brown.png" },
  { id: "bag-khaki-brown",      label: "カーキ × ブラウン",       file: "bag-khaki-brown.png" },
  { id: "bag-pink-brown",       label: "ピンク × ブラウン",       file: "bag-pink-brown.png" },
  { id: "bag-egg-brown",        label: "エッグ × ブラウン",       file: "bag-egg-brown.png" },
  { id: "bag-green-navy",       label: "グリーン × ネイビー",     file: "bag-green-navy.png" }
];

// アップリケ一覧（/assets/appliques/）
// category: "恐竜" | "海" | "その他"
const appliques = [
  // ---- 恐竜のなかま ----
  { id: "trex-red",          label: "ティラノサウルス（赤）",         file: "trex-red.png",            category: "恐竜" },
  { id: "trex-ochre",        label: "ティラノサウルス（オーカー）",   file: "trex-ochre.png",          category: "恐竜" },
  { id: "spinosaurus",       label: "スピノサウルス",                  file: "spinosaurus.png",         category: "恐竜" },
  { id: "stegosaurus",       label: "ステゴサウルス",                  file: "stegosaurus.png",         category: "恐竜" },
  { id: "diplodocus",        label: "ディプロドクス",                  file: "diplodocus.png",          category: "恐竜" },
  { id: "triceratops",       label: "トリケラトプス",                  file: "triceratops.png",         category: "恐竜" },
  { id: "velociraptor",      label: "ヴェロキラプトル",                file: "velociraptor.png",        category: "恐竜" },
  { id: "mosasaurus",        label: "モササウルス",                    file: "mosasaurus.png",          category: "恐竜" },
  { id: "dunkleosteus",      label: "ダンクルオステウス",              file: "dunkleosteus.png",        category: "恐竜" },
  { id: "trex-green",        label: "ティラノサウルス（緑）",          file: "trex-green.png",          category: "恐竜" },
  { id: "anomalocaris",      label: "アノマロカリス",                  file: "anomalocaris.png",        category: "恐竜" },
  { id: "dunkleosteus-02",   label: "ダンクルオステウス（大）",       file: "dunkleosteus-02.png",     category: "恐竜" },

  // ---- 海の生き物 ----
  { id: "greatwhite-shark",  label: "ホホジロザメ",                    file: "greatwhite-shark.png",    category: "海" },
  { id: "catshark",          label: "ネコザメ",                        file: "catshark.png",            category: "海" },
  { id: "whale-shark",       label: "ジンベエザメ",                    file: "whale-shark.png",         category: "海" },
  { id: "sand-tiger-shark",  label: "シロワニ",                        file: "sand-tiger-shark.png",    category: "海" },
  { id: "zebra-shark",       label: "トラフザメ",                      file: "zebra-shark.png",         category: "海" },
  { id: "hammerhead-shark",  label: "シュモクザメ",                    file: "syumoku-shark.png",    category: "海" },
  { id: "goblin-shark",      label: "ゴブリンシャーク",                file: "goblin-shark.png",        category: "海" },

  { id: "tai",               label: "タイ",                            file: "tai.png",                 category: "海" },
  { id: "saba",              label: "サバ",                            file: "saba.png",                category: "海" },
  { id: "maguro",            label: "マグロ",                          file: "maguro.png",              category: "海" },

  { id: "manta",             label: "マンタ",                          file: "manta.png",               category: "海" },
  { id: "anglerfish",        label: "チョウチンアンコウ",              file: "anglerfish.png",          category: "海" },

  { id: "aori-ika",          label: "アオリイカ",                      file: "aori-ika.png",            category: "海" },
  { id: "mendako-orange",    label: "メンダコ（オレンジ）",            file: "mendako-orange.png",      category: "海" },

  { id: "blue-whale",        label: "シロナガスクジラ",                file: "blue-whale.png",          category: "海" },
  { id: "orca",              label: "シャチ",                          file: "orca.png",                category: "海" },
  { id: "orca-pink",         label: "シャチ（ピンク）",                file: "orca-pink.png",           category: "海" },
  { id: "bottlenose-blue",   label: "バンドウイルカ（ブルー）",        file: "bottlenose-blue.png",     category: "海" },
  { id: "manatee",           label: "マナティー",                      file: "manatee.png",             category: "海" },
  { id: "humpback-whale",    label: "ザトウクジラ",                    file: "humpback-whale.png",      category: "海" },

  { id: "sunfish",           label: "マンボウ",                        file: "sunfish.png",             category: "海" },
  { id: "houlai-eso",        label: "ホウライエソ",                    file: "houlai-eso.png",          category: "海" },
  { id: "megalodon",         label: "メガロドン",                      file: "megalodon.png",           category: "海" },
  { id: "sailfish",          label: "バショウカジキ",                  file: "sailfish.png",            category: "海" },

  { id: "sea-turtle",        label: "ウミガメ",                        file: "sea-turtle.png",          category: "海" },

  // ---- その他の生き物 ----
  { id: "ranchu",                    label: "ランチュウ",              file: "ranchu.png",                  category: "その他" },
  { id: "ranchu-02",                 label: "ランチュウ（2匹）",       file: "ranchu-02.png",               category: "その他" },

  { id: "crocodile-gray",            label: "クロコダイル（グレー）",  file: "crocodile-gray.png",          category: "その他" },
  { id: "crocodile-green",           label: "クロコダイル（グリーン）",file: "crocodile-green.png",         category: "その他" },

  { id: "hercules-beetle",           label: "ヘラクレスオオカブト",    file: "hercules-beetle.png",         category: "その他" },
  { id: "beetle",                    label: "カブトムシ",              file: "beetle.png",                  category: "その他" },
  { id: "giraffa-stagbeetle",        label: "ギラファノコギリクワガタ",file: "giraffa-stagbeetle.png",      category: "その他" },
  { id: "ookuwagata",                label: "オオクワガタ",            file: "oo_kuwagata.png",              category: "その他" },

  { id: "chameleon",                 label: "カメレオン",              file: "chameleon.png",               category: "その他" },
  { id: "axolotl",                   label: "ウーパールーパー",        file: "axolotl.png",                 category: "その他" },
  { id: "lobster",                   label: "ロブスター",              file: "lobster.png",                 category: "その他" },

  { id: "emperor-penguin-family",    label: "エンペラーペンギン親子",  file: "emperor-penguin-family.png",  category: "その他" },
  { id: "chick-penguin",             label: "ひなペンギン",            file: "chick-penguin.png",           category: "その他" },
  { id: "parent-penguin",            label: "親ペンギン",              file: "parent-penguin.png",          category: "その他" },

  { id: "african-spurred-tortoise",  label: "ケヅメリクガメ",          file: "african-spurred-tortoise.png",category: "その他" },

  { id: "horse",                     label: "ウマ",                    file: "uma_brown.png",                   category: "その他" },
  { id: "panda",                     label: "パンダ",                  file: "panda.png",                   category: "その他" },
  { id: "jellyfish-vinyl", label: "クラゲ（ビニール）", file: "jellyfish-vinyl.png", category: "その他" },
];

const basicSizes = {
  "trex-red": 103.4,
  "trex-ochre": 103.4,
  "spinosaurus": 96.2,
  "stegosaurus": 100.6,
  "diplodocus": 102.9,
  "triceratops": 105.7,
  "velociraptor": 87.3,
  "mosasaurus": 80,
  "dunkleosteus": 83.4,
  "trex-green": 75.6,
  "anomalocaris": 79.5,
  "dunkleosteus-02": 94.5,
  "greatwhite-shark": 94.5,
  "catshark": 92.8,
  "whale-shark": 105.1,
  "sand-tiger-shark": 90.6,
  "zebra-shark": 97.9,
  "hammerhead-shark": 104.5,
  "goblin-shark": 90.1,
  "tai": 72.8,
  "saba": 85.6,
  "maguro": 90.6,
  "manta": 96.2,
  "anglerfish": 85.1,
  "aori-ika": 88.4,
  "mendako-orange": 72.8,
  "blue-whale": 105.1,
  "orca": 94,
  "orca-pink": 87.3,
  "bottlenose-blue": 99.5,
  "manatee": 108.4,
  "humpback-whale": 109.6,
  "sunfish": 85.6,
  "houlai-eso": 94,
  "megalodon": 87.8,
  "sailfish": 107.9,
  "sea-turtle": 119.6,
  "ranchu": 60,
  "ranchu-02": 94.5,
  "crocodile-gray": 92.8,
  "crocodile-green": 134.6,
  "hercules-beetle": 89,
  "beetle": 81.2,
  "giraffa-stagbeetle": 99,
  "ookuwagata": 77.3,
  "chameleon": 94.5,
  "axolotl": 71.1,
  "lobster": 101.2,
  "emperor-penguin-family": 82.3,
  "chick-penguin": 60,
  "parent-penguin": 83.4,
  "african-spurred-tortoise": 81.7,
  "horse": 85.6,
  "panda": 73.4,
  "jellyfish-vinyl": 71.1
};

// ==== 要素取得 =====================================================

const bagSelect = document.getElementById("bagSelect");
const appliqueSelect = document.getElementById("appliqueSelect");

const bagImage = document.getElementById("bagImage");
const appliqueImage = document.getElementById("appliqueImage");

const bagNameLabel = document.getElementById("bagNameLabel");
const appliqueNameLabel = document.getElementById("appliqueNameLabel");

const bagNameIcon = document.getElementById("bagNameIcon");
const appliqueNameIcon = document.getElementById("appliqueNameIcon");

const flipButton = document.getElementById("flipButton");

const snapshotBagImage = document.getElementById("snapshotBagImage");
const snapshotAppliqueImage = document.getElementById("snapshotAppliqueImage");
const snapshotBagLabel = document.getElementById("snapshotBagLabel");
const snapshotAppliqueLabel = document.getElementById("snapshotAppliqueLabel");
const snapshotBagIcon = document.getElementById("snapshotBagIcon");
const snapshotAppliqueIcon = document.getElementById("snapshotAppliqueIcon");

const modeTabs = document.querySelectorAll(".mode-tab");
const mainCustom = document.getElementById("mode-custom");
const mainSnapshot = document.getElementById("mode-snapshot");
const toSnapshotButton = document.getElementById("toSnapshot");
const backToCustomButton = document.getElementById("backToCustom");

const appliqueSearch = document.getElementById("appliqueSearch");
const appliqueGallery = document.getElementById("appliqueGallery");

const categoryButtons = document.querySelectorAll(".category-btn");
let currentCategory = "恐竜";

// ==== 初期化 =======================================================

function init() {
  // バッグセレクトに全部追加
  bags.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = b.label;
    bagSelect.appendChild(opt);
  });

  // アップリケ（初期カテゴリ）を投入
  populateAppliques();

  // 初期選択
  bagSelect.value = bags[0].id;
  const firstApplique = appliques.find((a) => a.category === currentCategory);
  if (firstApplique) {
    appliqueSelect.value = firstApplique.id;
  }

  updateBag();
  updateApplique();

  renderGallery();
  appliqueSearch.addEventListener("input", renderGallery);

  // イベント
  bagSelect.addEventListener("change", updateBag);
  appliqueSelect.addEventListener("change", () => {
    resetAppliqueTransform();
    updateApplique();
  });
  flipButton.addEventListener("click", toggleFlip);

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      appliqueSearch.value = "";
      populateAppliques();
      const first = appliques.find((a) => a.category === currentCategory);
      if (first) {
        appliqueSelect.value = first.id;
        resetAppliqueTransform();
        updateApplique();
      }
    });
  });

  // モード切り替え
  modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => switchMode(tab.dataset.mode));
  });
  toSnapshotButton.addEventListener("click", () => {
    copyToSnapshot();
    switchMode("snapshot");
  });
  backToCustomButton.addEventListener("click", () => switchMode("custom"));

  // ドラッグ
  setupDrag();
  setupComparison();
}

function populateAppliques() {
  appliqueSelect.innerHTML = "";
  appliques
    .filter((a) => a.category === currentCategory)
    .forEach((a) => {
      const opt = document.createElement("option");
      opt.value = a.id;
      opt.textContent = a.label;
      appliqueSelect.appendChild(opt);
    });
}

// ==== 更新処理 =====================================================

function updateBag() {
  const bag = bags.find((b) => b.id === bagSelect.value) || bags[0];
  const src = `./assets/bags/${bag.file}`;
  bagImage.src = src;
  snapshotBagImage.src = src;

  bagNameLabel.textContent = bag.label;
  snapshotBagLabel.textContent = bag.label;

  bagNameIcon.src = src;
  snapshotBagIcon.src = src;
}

function updateApplique() {
  const app = appliques.find((a) => a.id === appliqueSelect.value);
  if (!app) return;

  const src = `./assets/appliques/${app.file}`;
  appliqueImage.src = src;
  snapshotAppliqueImage.src = src;

  appliqueNameLabel.textContent = app.label;
  snapshotAppliqueLabel.textContent = app.label;

  renderGallery();
  appliqueNameIcon.src = src;
  snapshotAppliqueIcon.src = src;
}

function updateAppliqueScale() {
  const scale = getBasicSize() / 150;
  const flip = isFlipped ? " scaleX(-1)" : "";
  appliqueImage.style.transform = `translate(-50%, -50%) scale(${scale})${flip}`;
}

// ==== フリップ & ドラッグ =========================================

let isFlipped = false;

function toggleFlip() {
  isFlipped = !isFlipped;
  updateAppliqueScale();
}

function resetAppliqueTransform() {
  isFlipped = false;
  appliqueImage.style.left = "60%";
  appliqueImage.style.top = "55%";
  updateAppliqueScale();
}

function setupDrag() {
  const surface = document.getElementById("bagPreview");
  let activePointer = null;
  let baseline = null;
  function down(e) {
    if (activePointer !== null || (e.pointerType === "mouse" && e.button !== 0)) return;
    e.preventDefault();
    activePointer = e.pointerId;
    baseline = {x:e.clientX, y:e.clientY,
      left:parseFloat(appliqueImage.style.left || "60"),
      top:parseFloat(appliqueImage.style.top || "55")};
    surface.setPointerCapture(e.pointerId);
  }
  function move(e) {
    if (e.pointerId !== activePointer) return;
    e.preventDefault();
    const rect = surface.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    appliqueImage.style.left = Math.min(90, Math.max(10, baseline.left + (e.clientX - baseline.x) / rect.width * 100)) + "%";
    appliqueImage.style.top = Math.min(80, Math.max(20, baseline.top + (e.clientY - baseline.y) / rect.height * 100)) + "%";
  }
  function up(e) {
    if (e.pointerId !== activePointer) return;
    activePointer = null;
    baseline = null;
    if (surface.hasPointerCapture(e.pointerId)) surface.releasePointerCapture(e.pointerId);
  }
  resetAppliqueTransform();
  surface.addEventListener("pointerdown", down);
  surface.addEventListener("pointermove", move);
  surface.addEventListener("pointerup", up);
  surface.addEventListener("pointercancel", up);
  surface.addEventListener("lostpointercapture", up);
  window.addEventListener("blur", () => { activePointer = null; baseline = null; });
}

// ==== モード切り替え & スクショ用コピー ===========================

function switchMode(mode) {
  document.getElementById("comparison").classList.toggle("hidden", mode !== "custom");
  if (mode === "snapshot") copyToSnapshot();
  modeTabs.forEach((t) =>
    t.classList.toggle("active", t.dataset.mode === mode)
  );
  if (mode === "custom") {
    mainCustom.classList.remove("hidden");
    mainSnapshot.classList.add("hidden");
  } else {
    mainCustom.classList.add("hidden");
    mainSnapshot.classList.remove("hidden");
  }
}

function copyToSnapshot() {
  // ラベルとアイコンは updateBag / updateApplique の中で
  // すでに snapshot 用にも反映しているので、ここでは位置だけコピー
  snapshotAppliqueImage.style.transform = appliqueImage.style.transform;
  snapshotAppliqueImage.style.left = appliqueImage.style.left;
  snapshotAppliqueImage.style.top = appliqueImage.style.top;
}
// 使い方モーダル関連
const howtoButton = document.getElementById('howtoButton');
const howtoModal = document.getElementById('howtoModal');
const howtoClose = document.querySelector('.howto-close');
const howtoCloseBottom = document.querySelector('.howto-close-bottom');



// ※ カタログページだけで動くように保険をかける
if (howtoButton && howtoModal && howtoClose) {

  // 「使い方」ボタンを押したら開く
  howtoButton.addEventListener('click', () => {
    howtoModal.classList.add('show');
  });

  // ×ボタンで閉じる
  howtoClose.addEventListener('click', () => {
    howtoModal.classList.remove('show');
  });

  // ★ 下の「× 閉じる」でも閉じる
 if (howtoCloseBottom) {
  howtoCloseBottom.addEventListener('click', () => {
    howtoModal.classList.remove('show');
  });
}
  // グレーの背景をタップしても閉じる
  howtoModal.addEventListener('click', (event) => {
    if (event.target === howtoModal) {
      howtoModal.classList.remove('show');
    }
  });

  // 説明は「使い方」ボタンを押したときだけ表示する。
}

// ==== スタート =====================================================

document.addEventListener("DOMContentLoaded", init);


// 写真から選ぶ。検索時はすべてのカテゴリーを対象にする。
function renderGallery() {
  const query = appliqueSearch.value.trim().normalize("NFKC").toLowerCase();
  const matches = appliques.filter(a => query
    ? a.label.normalize("NFKC").toLowerCase().includes(query)
    : a.category === currentCategory);
  document.getElementById("appliqueCount").textContent = matches.length
    ? matches.length + "種類から選べます"
    : "見つかりませんでした。別の名前で探してみてください。";
  appliqueGallery.replaceChildren();
  matches.forEach(a => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "applique-card";
    button.setAttribute("aria-pressed", String(a.id === appliqueSelect.value));
    const img = document.createElement("img");
    img.src = "./assets/appliques/" + a.file;
    img.alt = "";
    img.loading = "lazy";
    const label = document.createElement("span");
    label.textContent = a.label;
    button.append(img, label);
    button.addEventListener("click", () => {
      if (currentCategory !== a.category) {
        currentCategory = a.category;
        categoryButtons.forEach(b => b.classList.toggle("active", b.dataset.category === currentCategory));
        populateAppliques();
      }
      appliqueSelect.value = a.id;
      resetAppliqueTransform();
      updateApplique();
    });
    appliqueGallery.append(button);
  });
}

// 保存・比較。保存データはこのブラウザーだけに保持する。
function setupComparison() {
  const key = "makinatsu-catalog-saved-v1";
  const list = document.getElementById("savedCombinations");
  const status = document.getElementById("saveStatus");
  const mini = document.getElementById("miniPreview");
  const preview = document.querySelector(".preview-section");
  let saved = [];
  function valid(s) {
    return s && bags.some(b => b.id === s.bag) && appliques.some(a => a.id === s.applique)
      && Number.isFinite(s.left) && s.left >= 10 && s.left <= 90
      && Number.isFinite(s.top) && s.top >= 20 && s.top <= 80
      && typeof s.flipped === "boolean";
  }
  try {
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    if (Array.isArray(data)) saved = data.filter(valid).slice(0, 3).map(s => ({...s, size:basicSizes[s.applique] ?? 130}));
  } catch (_) {}
  function state() {
    return {bag:bagSelect.value, applique:appliqueSelect.value,
      size:getBasicSize(), flipped:isFlipped,
      left:parseFloat(appliqueImage.style.left || "60"),
      top:parseFloat(appliqueImage.style.top || "55")};
  }
  function persist() {
    try { localStorage.setItem(key, JSON.stringify(saved)); return true; }
    catch (_) { return false; }
  }
  function picture(s) {
    const frame = document.createElement("div");
    frame.className = "bag-preview saved-bag";
    const bag = document.createElement("img");
    bag.className = "bag-image";
    bag.alt = "";
    bag.src = "./assets/bags/" + bags.find(b => b.id === s.bag).file;
    const app = document.createElement("img");
    app.className = "applique-image";
    app.alt = "";
    app.src = "./assets/appliques/" + appliques.find(a => a.id === s.applique).file;
    app.style.left = s.left + "%";
    app.style.top = s.top + "%";
    app.style.transform = "translate(-50%, -50%) scale(" + (basicSizes[s.applique] ?? 130) / 150 + ")" + (s.flipped ? " scaleX(-1)" : "");
    frame.append(bag, app);
    return frame;
  }
  function render() {
    list.replaceChildren();
    document.getElementById("savedCount").textContent = saved.length + " / 3";
    if (!saved.length) {
      const empty = document.createElement("p");
      empty.className = "compare-note";
      empty.textContent = "気になる組み合わせを、バッグの下のボタンから保存してね。";
      list.append(empty);
    }
    saved.forEach((s, i) => {
      const card = document.createElement("article");
      card.className = "saved-card";
      const title = document.createElement("h3");
      title.textContent = "候補 " + (i + 1);
      const label = document.createElement("p");
      label.textContent = bags.find(b => b.id === s.bag).label + "／" + appliques.find(a => a.id === s.applique).label;
      const restore = document.createElement("button");
      restore.type = "button";
      restore.textContent = "このバッグに戻す";
      restore.addEventListener("click", () => {
        const a = appliques.find(a => a.id === s.applique);
        bagSelect.value = s.bag;
        currentCategory = a.category;
        appliqueSearch.value = "";
        categoryButtons.forEach(b => b.classList.toggle("active", b.dataset.category === currentCategory));
        populateAppliques();
        appliqueSelect.value = s.applique;
        isFlipped = s.flipped;
        appliqueImage.style.left = s.left + "%";
        appliqueImage.style.top = s.top + "%";
        updateBag(); updateApplique(); updateAppliqueScale();
        switchMode("custom");
        preview.scrollIntoView({behavior:"smooth", block:"start"});
      });
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove-saved";
      remove.textContent = "削除";
      remove.setAttribute("aria-label", "候補" + (i + 1) + "を削除");
      remove.addEventListener("click", () => {
        saved.splice(i, 1);
        const persisted = persist(); render();
        status.textContent = persisted ? "候補を削除しました。" : "候補を削除しました。この画面を閉じると変更が残らない場合があります。";
      });
      card.append(title, picture(s), label, restore, remove);
      list.append(card);
    });
  }
  document.getElementById("saveCombination").addEventListener("click", () => {
    const s = state();
    if (saved.some(x => JSON.stringify(x) === JSON.stringify(s))) {
      status.textContent = "この組み合わせは保存済みです。"; return;
    }
    if (saved.length >= 3) {
      status.textContent = "３点保存済みです。比較欄で不要な候補を削除すると追加できます。";
      document.getElementById("comparison").scrollIntoView({behavior:"smooth", block:"start"});
      return;
    }
    saved.push(s);
    const persisted = persist(); render();
    status.textContent = persisted ? "候補" + saved.length + "に保存しました。下の比較欄で見られます。" : "この画面では保存できました。ブラウザーの設定により、閉じると消える場合があります。";
  });
  document.getElementById("returnToPreview").addEventListener("click", () => preview.scrollIntoView({behavior:"smooth", block:"start"}));
  document.getElementById("jumpToComparison").addEventListener("click", () => document.getElementById("comparison").scrollIntoView({behavior:"smooth", block:"start"}));
  let queued = false;
  function syncMini() {
    const bag = document.getElementById("miniBagImage");
    const app = document.getElementById("miniAppliqueImage");
    bag.src = bagImage.src;
    app.src = appliqueImage.src;
    app.style.cssText = appliqueImage.style.cssText;
    document.getElementById("miniLabel").textContent = bagNameLabel.textContent + "／" + appliqueNameLabel.textContent;
    const pastPreview = preview.getBoundingClientRect().bottom <= 0;
    // 比較欄が近づいても、選択中のバッグを表示し続ける。
    mini.classList.toggle("hidden", window.innerWidth >= 720 || !pastPreview || mainCustom.classList.contains("hidden"));
  }
  function scheduleMini() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; syncMini(); });
  }
  const observer = new MutationObserver(scheduleMini);
  observer.observe(appliqueImage, {attributes:true, attributeFilter:["src","style"]});
  observer.observe(bagImage, {attributes:true, attributeFilter:["src"]});
  observer.observe(mainCustom, {attributes:true, attributeFilter:["class"]});
  window.addEventListener("scroll", scheduleMini, {passive:true});
  window.addEventListener("resize", scheduleMini);
  render(); syncMini();
}

// 制作に使用する、生き物ごとの指定サイズ。
function getBasicSize() {
  return basicSizes[appliqueSelect.value] ?? 130;
}
