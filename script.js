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

const basePrices = {
  "trex-red": 8350,
  "trex-ochre": 8350,
  "spinosaurus": 8350,
  "stegosaurus": 8350,
  "diplodocus": 8350,
  "triceratops": 8350,
  "velociraptor": 6350,
  "mosasaurus": 6350,
  "dunkleosteus": 6350,
  "trex-green": 8350,
  "anomalocaris": 6350,
  "dunkleosteus-02": 6350,
  "greatwhite-shark": 6350,
  "catshark": 6350,
  "whale-shark": 6350,
  "sand-tiger-shark": 6350,
  "zebra-shark": 6350,
  "hammerhead-shark": 6350,
  "goblin-shark": 6350,
  "tai": 6350,
  "saba": 6350,
  "maguro": 6350,
  "manta": 6350,
  "anglerfish": 6350,
  "aori-ika": 6350,
  "mendako-orange": 6350,
  "blue-whale": 6350,
  "orca": 6350,
  "orca-pink": 6350,
  "bottlenose-blue": 6350,
  "manatee": 6350,
  "humpback-whale": 6350,
  "sunfish": 6350,
  "houlai-eso": 6350,
  "megalodon": 6350,
  "sailfish": 6350,
  "sea-turtle": 6350,
  "ranchu": 6350,
  "ranchu-02": 6350,
  "crocodile-gray": 8350,
  "crocodile-green": 8350,
  "hercules-beetle": 6350,
  "beetle": 6350,
  "giraffa-stagbeetle": 8350,
  "ookuwagata": 6350,
  "chameleon": 6350,
  "axolotl": 6350,
  "lobster": 6350,
  "emperor-penguin-family": 6350,
  "chick-penguin": 6350,
  "parent-penguin": 6350,
  "african-spurred-tortoise": 8350,
  "horse": 6350,
  "panda": 6350,
  "jellyfish-vinyl": 6350
};

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
let priceSetupController = null;

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
  setupPriceSimulator();
  setupResponsiveColorControl();
  setupComparison();
  setupPriceRegistration();
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
  if (priceSetupController) priceSetupController.selectionChanged();
  updatePriceUI();
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
  updatePriceUI();
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

function setupResponsiveColorControl() {
  const control = document.getElementById("bagColorControl");
  const desktopHome = document.querySelector(".form-section");
  const mobileHome = document.querySelector(".preview-controls");
  const media = window.matchMedia("(max-width: 719px)");
  function placeColorControl() {
    if (media.matches) mobileHome.after(control);
    else desktopHome.prepend(control);
  }
  media.addEventListener("change", placeColorControl);
  placeColorControl();
}

function setupComparison() {
  const key = "makinatsu-catalog-saved-v1";
  const list = document.getElementById("savedCombinations");
  const status = document.getElementById("saveStatus");
  const mini = document.getElementById("miniPreview");
  function showSaveStatus(message) {
    status.textContent = message;
    const miniStatus = document.getElementById("miniSaveStatus");
    if (miniStatus) miniStatus.textContent = message;
  }
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
    if (Array.isArray(data)) saved = data.filter(valid).slice(0, 3).map(s => ({...s, size:basicSizes[s.applique] ?? 130, options:normalizeOptions(s.options, s.applique)}));
  } catch (_) {}
  function state() {
    return {bag:bagSelect.value, applique:appliqueSelect.value,
      size:getBasicSize(), flipped:isFlipped, options:readOptions(),
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
        applyOptions(s.options);
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
      const optionText = document.createElement("p");
      optionText.className = "saved-options";
      optionText.textContent = optionDescriptions(s.options, s.applique).join("／");
      const price = document.createElement("p");
      price.className = "saved-price";
      price.textContent = "合計の目安 " + yen(calculatePrice(s.applique, s.options).total) + "〈送料無料〉";
      card.append(title, picture(s), label, optionText, price, restore, remove);
      list.append(card);
    });
  }
  function saveCurrentCombination() {
    const s = state();
    if (saved.some(x => x.bag === s.bag && x.applique === s.applique && x.flipped === s.flipped
      && x.left === s.left && x.top === s.top
      && JSON.stringify(normalizeOptions(x.options, x.applique)) === JSON.stringify(s.options))) {
      showSaveStatus("この組み合わせは保存済みです。"); return;
    }
    if (saved.length >= 3) {
      showSaveStatus("３点保存済みです。比較欄で不要な候補を削除すると追加できます。");
      document.getElementById("comparison").scrollIntoView({behavior:"smooth", block:"start"});
      return;
    }
    saved.push(s);
    const persisted = persist(); render();
    showSaveStatus(persisted ? "候補" + saved.length + "に保存しました。下の比較欄で見られます。" : "この画面では保存できました。ブラウザーの設定により、閉じると消える場合があります。");
  }
  document.getElementById("saveCombination").addEventListener("click", saveCurrentCombination);
  document.getElementById("miniSaveCombination")?.addEventListener("click", saveCurrentCombination);
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
    // 大きなバッグが上で見切れたら、カラー選択中も小さなプレビューを表示する。
    const pastPreview = document.getElementById("bagPreview").getBoundingClientRect().top < 0;
    // 比較欄が近づいても、選択中のバッグを表示し続ける。
    mini.classList.toggle("hidden", window.innerWidth >= 720 || !pastPreview || mainCustom.classList.contains("hidden"));
    const miniHeight = mini.classList.contains("hidden") ? 0 : mini.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--mini-preview-height", miniHeight + "px");
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
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(scheduleMini).observe(mini);
  render(); syncMini();
}

// 制作に使用する、生き物ごとの指定サイズ。
function getBasicSize() {
  return basicSizes[appliqueSelect.value] ?? 130;
}


// 専用URLでのみ開く、作家用の価格登録。公開価格の計算とは分離する。
function setupPriceRegistration() {
  if (new URLSearchParams(window.location.search).get("prices") !== "1") return;
  const panel = document.getElementById("priceSetupPanel");
  panel.classList.remove("hidden");
  const key = "makinatsu-catalog-base-price-drafts-v1";
  const input = document.getElementById("basePriceInput");
  const status = document.getElementById("priceSetupStatus");
  const progress = document.getElementById("priceSetupProgress");
  const output = document.getElementById("basePricesExport");
  const copyStatus = document.getElementById("priceCopyStatus");
  const review = document.getElementById("priceReviewList");
  const next = document.getElementById("nextUnpriced");
  let prices = {};
  let readFailed = false;
  const validPrice = value => Number.isSafeInteger(value) && value > 0 && value <= 1000000;
  try {
    const data = JSON.parse(localStorage.getItem(key) || "{}");
    if (data && typeof data === "object" && !Array.isArray(data)) {
      appliques.forEach(a => { if (validPrice(data[a.id])) prices[a.id] = data[a.id]; });
    }
  } catch (_) { readFailed = true; }
  function parsePrice() {
    const text = input.value.normalize("NFKC").replace(/[,，\s]/g, "");
    return /^\d+$/.test(text) ? Number(text) : NaN;
  }
  function choose(a) {
    currentCategory = a.category;
    appliqueSearch.value = "";
    categoryButtons.forEach(b => b.classList.toggle("active", b.dataset.category === currentCategory));
    populateAppliques();
    appliqueSelect.value = a.id;
    resetAppliqueTransform(); updateApplique();
    panel.scrollIntoView({behavior:"smooth", block:"center"});
  }
  function render() {
    const entries = appliques.filter(a => Object.prototype.hasOwnProperty.call(prices, a.id));
    progress.textContent = entries.length + " / " + appliques.length + "種類を登録済み";
    next.disabled = entries.length === appliques.length;
    output.value = "マキナツカタログ バッグ本体価格設定\n" + JSON.stringify({
      version:1, currency:"JPY", priceBasis:"オプションなしのバッグ本体価格",
      prices:entries.map(a => ({id:a.id, name:a.label, price:prices[a.id]}))
    }, null, 2);
    review.replaceChildren();
    appliques.forEach(a => {
      const row = document.createElement("button");
      row.type = "button";
      row.textContent = a.label + "：" + (Object.prototype.hasOwnProperty.call(prices, a.id) ? prices[a.id].toLocaleString("ja-JP") + "円" : "未登録");
      row.addEventListener("click", () => {
        if (input.value.trim() && parsePrice() !== prices[appliqueSelect.value]) {
          status.textContent = "入力中の価格を登録してから、別の生き物へ進んでください。"; return;
        }
        choose(a);
      });
      review.append(row);
    });
  }
  function selectionChanged() {
    const a = appliques.find(a => a.id === appliqueSelect.value);
    if (!a) return;
    document.getElementById("priceSetupName").textContent = a.label;
    const value = prices[a.id];
    input.value = Number.isFinite(value) ? String(value) : "";
    document.getElementById("priceRegisteredValue").textContent = Number.isFinite(value)
      ? "登録済み：" + value.toLocaleString("ja-JP") + "円（変更して再登録できます）"
      : "まだ登録されていません";
    status.textContent = "";
  }
  priceSetupController = {selectionChanged};
  document.querySelectorAll("[data-price]").forEach(button => {
    button.addEventListener("click", () => {
      input.value = button.dataset.price;
      status.textContent = "金額を確認して「この価格を登録」を押してください。";
    });
  });
  document.getElementById("priceSetupForm").addEventListener("submit", e => {
    e.preventDefault();
    const a = appliques.find(a => a.id === appliqueSelect.value);
    const value = parsePrice();
    if (!a || !validPrice(value)) {
      status.textContent = "価格を１円以上の整数で入力してください（例：6350）。"; input.focus(); return;
    }
    prices[a.id] = value;
    let persisted = true;
    try { localStorage.setItem(key, JSON.stringify(prices)); } catch (_) { persisted = false; }
    render(); selectionChanged();
    copyStatus.textContent = "";
    status.textContent = a.label + "：" + value.toLocaleString("ja-JP") + "円を登録しました。"
      + (persisted ? "" : " このブラウザーでは保存できないため、閉じる前に設定をコピーしてください。");
  });
  next.addEventListener("click", () => {
    if (input.value.trim() && parsePrice() !== prices[appliqueSelect.value]) {
      status.textContent = "入力した価格を登録してから、次へ進んでください。"; return;
    }
    const i = appliques.findIndex(a => a.id === appliqueSelect.value);
    const ordered = appliques.slice(i + 1).concat(appliques.slice(0, i + 1));
    const a = ordered.find(a => !Object.prototype.hasOwnProperty.call(prices, a.id));
    if (a) choose(a);
  });
  document.getElementById("copyBasePrices").addEventListener("click", async () => {
    if (!Object.keys(prices).length) { copyStatus.textContent = "まず１種類の価格を登録してください。"; return; }
    try {
      await navigator.clipboard.writeText(output.value);
      copyStatus.textContent = "コピーしました。チャッピーとのチャットに貼り付けて送ってください。";
    } catch (_) {
      output.focus(); output.select();
      copyStatus.textContent = "自動コピーができませんでした。下の欄を長押しして全文をコピーしてください。";
    }
  });
  render(); selectionChanged();
  if (readFailed) status.textContent = "保存データを読み込めませんでした。登録後は閉じる前に設定をコピーしてください。";
}


// 選択肢・計算は同じ定義を使い、価格内訳と保存候補の差異を防ぐ。
const optionRates = {
  closure: {
    none:{label:"開閉の追加なし", price:0},
    zipper:{label:"ファスナー", price:1000},
    magnet:{label:"マグネットボタン", price:600},
    flap:{label:"フラップ（ふた・約10×10cm）", price:1300}
  },
  size: {
    basic:{label:"基本：縦30×横40×マチ4cm", price:0},
    large:{label:"大きめ：縦35×横45×マチ4cm", price:800},
    custom:{label:"サイズオーダー：縦35×横45×マチ10cmまで", price:2000}
  }
};
const yen = value => value.toLocaleString("ja-JP") + "円";
function normalizeOptions(input, id) {
  const o = input && typeof input === "object" ? input : {};
  return {
    closure:Object.prototype.hasOwnProperty.call(optionRates.closure, o.closure) ? o.closure : "none",
    size:Object.prototype.hasOwnProperty.call(optionRates.size, o.size) ? o.size : "basic",
    loop:o.loop === true, name:o.name === true, shoes:o.shoes === true,
    bubbles:o.bubbles === true && (!id || basePrices[id] === 6350)
  };
}
function readOptions() {
  return normalizeOptions({
    closure:document.getElementById("optionClosure")?.value,
    size:document.getElementById("optionSize")?.value,
    loop:document.getElementById("optionLoop")?.checked,
    name:document.getElementById("optionName")?.checked,
    shoes:document.getElementById("optionShoes")?.checked,
    bubbles:document.getElementById("optionBubbles")?.checked
  }, appliqueSelect.value);
}
function applyOptions(options) {
  const o = normalizeOptions(options, appliqueSelect.value);
  document.getElementById("optionClosure").value = o.closure;
  document.getElementById("optionSize").value = o.size;
  document.getElementById("optionLoop").checked = o.loop;
  document.getElementById("optionName").checked = o.name;
  document.getElementById("optionShoes").checked = o.shoes;
  const bubbles = document.getElementById("optionBubbles");
  if (bubbles) bubbles.checked = o.bubbles;
}
function calculatePrice(id, options) {
  const base = basePrices[id];
  if (!Number.isSafeInteger(base)) throw new Error("本体価格が未登録です：" + id);
  const o = normalizeOptions(options, id);
  const lines = [{label:"バッグ本体", amount:base}];
  if (o.closure !== "none") lines.push({label:optionRates.closure[o.closure].label, amount:optionRates.closure[o.closure].price});
  if (o.size !== "basic") lines.push({label:optionRates.size[o.size].label, amount:optionRates.size[o.size].price});
  if (o.bubbles) lines.push({label:"泡の飾りオプション", amount:2000});
  if (o.loop) lines.push({label:"短い取手（机かけループ）", amount:500});
  if (o.name) lines.push({label:"レッスンバッグのお名前刺しゅう", amount:800});
  if (o.shoes) lines.push({label:"おそろいシューズバッグ", amount:6550});
  if (o.name && o.shoes) lines.push({label:"おそろいシューズバッグのお名前刺しゅう〈特典〉", amount:0});
  return {lines, total:lines.reduce((sum, line) => sum + line.amount, 0)};
}
function optionDescriptions(options, id = appliqueSelect.value) {
  const o = normalizeOptions(options, id);
  const labels = [optionRates.size[o.size].label, optionRates.closure[o.closure].label];
  if (o.bubbles) labels.push("泡の飾り");
  if (o.loop) labels.push("短い取手");
  if (o.name) labels.push("名前刺しゅう");
  if (o.shoes) labels.push("おそろいシューズバッグ");
  if (o.shoes && o.name) labels.push("シューズ側の名入れ無料");
  return labels;
}
function updatePriceUI() {
  if (!document.getElementById("priceTotal") || !basePrices[appliqueSelect.value]) return;
  const bubbles = document.getElementById("optionBubbles");
  if (bubbles) {
    bubbles.disabled = basePrices[appliqueSelect.value] !== 6350;
    if (bubbles.disabled) bubbles.checked = false;
  }
  const o = readOptions();
  const quote = calculatePrice(appliqueSelect.value, o);
  document.getElementById("priceBase").textContent = yen(basePrices[appliqueSelect.value]);
  document.getElementById("priceTotal").textContent = yen(quote.total);
  document.getElementById("optionsTotal").textContent = yen(quote.total);
  document.getElementById("miniPrice").textContent = "合計の目安 " + yen(quote.total) + "〈送料無料〉";
  document.getElementById("priceOptionSummary").textContent = optionDescriptions(o).join("／");
  document.getElementById("flapNotice").classList.toggle("hidden", o.closure !== "flap");
  document.getElementById("customSizeNotice").classList.toggle("hidden", o.size !== "custom");
  document.getElementById("shoeNameNotice").classList.toggle("hidden", !(o.name && o.shoes));
  document.getElementById("snapshotSize").textContent = optionRates.size[o.size].label;
  document.getElementById("snapshotOptions").textContent = optionDescriptions(o).slice(1).join("／");
  document.getElementById("snapshotTotal").textContent = yen(quote.total);
  document.getElementById("snapshotConditionalNote").textContent = [
    o.closure === "flap" ? "フラップと重なる部分は、デザインを調整する場合があります。" : "",
    o.size === "custom" ? "サイズオーダーは事前相談が必要です。寸法はご相談時に確認します。" : ""
  ].filter(Boolean).join(" ");
  const breakdown = document.getElementById("snapshotPriceBreakdown");
  breakdown.replaceChildren();
  quote.lines.forEach(line => {
    const row = document.createElement("div");
    const label = document.createElement("dt");
    const amount = document.createElement("dd");
    label.textContent = line.label;
    amount.textContent = yen(line.amount);
    row.append(label, amount);
    breakdown.append(row);
  });
}
function setupPriceSimulator() {
  if (!document.getElementById("priceOptions")) return;
  ["optionClosure","optionSize","optionLoop","optionName","optionShoes","optionBubbles"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", updatePriceUI);
  });
  function showOptions() {
    const panel = document.getElementById("priceOptions");
    panel.open = true;
    panel.scrollIntoView({behavior:"smooth", block:"start"});
  }
  document.getElementById("openPriceOptions").addEventListener("click", showOptions);
  document.getElementById("miniPriceOptions").addEventListener("click", showOptions);
  document.getElementById("optionsToSnapshot")?.addEventListener("click", () => toSnapshotButton.click());
  updatePriceUI();
}
