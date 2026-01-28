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
  { id: "ookuwagata",                label: "オオクワガタ",            file: "ookuwagata.png",              category: "その他" },

  { id: "chameleon",                 label: "カメレオン",              file: "chameleon.png",               category: "その他" },
  { id: "axolotl",                   label: "ウーパールーパー",        file: "axolotl.png",                 category: "その他" },
  { id: "lobster",                   label: "ロブスター",              file: "lobster.png",                 category: "その他" },

  { id: "emperor-penguin-family",    label: "エンペラーペンギン親子",  file: "emperor-penguin-family.png",  category: "その他" },
  { id: "chick-penguin",             label: "ひなペンギン",            file: "chick-penguin.png",           category: "その他" },
  { id: "parent-penguin",            label: "親ペンギン",              file: "parent-penguin.png",          category: "その他" },

  { id: "african-spurred-tortoise",  label: "ケヅメリクガメ",          file: "african-spurred-tortoise.png",category: "その他" },

  { id: "horse",                     label: "ウマ",                    file: "horse.png",                   category: "その他" },
  { id: "panda",                     label: "パンダ",                  file: "panda.png",                   category: "その他" }
];

// ==== 要素取得 =====================================================

const bagSelect = document.getElementById("bagSelect");
const appliqueSelect = document.getElementById("appliqueSelect");

const bagImage = document.getElementById("bagImage");
const appliqueImage = document.getElementById("appliqueImage");

const bagNameLabel = document.getElementById("bagNameLabel");
const appliqueNameLabel = document.getElementById("appliqueNameLabel");

const bagNameIcon = document.getElementById("bagNameIcon");
const appliqueNameIcon = document.getElementById("appliqueNameIcon");

const sizeRange = document.getElementById("appliqueSize");
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

  // イベント
  bagSelect.addEventListener("change", updateBag);
  appliqueSelect.addEventListener("change", () => {
    resetAppliqueTransform();
    updateApplique();
  });
  sizeRange.addEventListener("input", updateAppliqueScale);
  flipButton.addEventListener("click", toggleFlip);

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
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

  appliqueNameIcon.src = src;
  snapshotAppliqueIcon.src = src;
}

function updateAppliqueScale() {
  const scale = sizeRange.value / 100;
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
  sizeRange.value = 100;
  isFlipped = false;
  appliqueImage.style.left = "60%";
  appliqueImage.style.top = "55%";
  updateAppliqueScale();
}

function setupDrag() {
  const target = appliqueImage;
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  const bagPreview = document.getElementById("bagPreview");

  function pointerDown(e) {
    e.preventDefault();
    dragging = true;
    target.setPointerCapture(e.pointerId);
    const rect = bagPreview.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;

    const leftPercent = parseFloat(target.style.left || "60%");
    const topPercent = parseFloat(target.style.top || "55%");
    startLeft = (leftPercent / 100) * rect.width;
    startTop = (topPercent / 100) * rect.height;
  }

  function pointerMove(e) {
    if (!dragging) return;
    const rect = bagPreview.getBoundingClientRect();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    let newLeftPx = startLeft + dx;
    let newTopPx = startTop + dy;

    let leftPercent = (newLeftPx / rect.width) * 100;
    let topPercent = (newTopPx / rect.height) * 100;

    // はみ出し防止（ざっくり）
    const clampedLeft = Math.min(90, Math.max(10, leftPercent));
    const clampedTop = Math.min(80, Math.max(20, topPercent));

    target.style.left = `${clampedLeft}%`;
    target.style.top = `${clampedTop}%`;
  }

  function pointerUp(e) {
    dragging = false;
    target.releasePointerCapture(e.pointerId);
  }

  resetAppliqueTransform();

  target.addEventListener("pointerdown", pointerDown);
  target.addEventListener("pointermove", pointerMove);
  target.addEventListener("pointerup", pointerUp);
  target.addEventListener("pointercancel", pointerUp);
}

// ==== モード切り替え & スクショ用コピー ===========================

function switchMode(mode) {
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

// ==== スタート =====================================================

document.addEventListener("DOMContentLoaded", init);

