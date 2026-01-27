/* -------------------------
バッグの設定
-------------------------- */
const bags = [
{ id: "egg", label: "エッグ", file: "bag-egg-yellow.png" },
{ id: "khaki", label: "カーキ", file: "bag-khaki.png" },
{ id: "navy", label: "ネイビー", file: "bag-deep-navy.png" },
{ id: "blue", label: "ブルー", file: "bag-true-blue.png" },
];
/* -------------------------
アップリケ一覧
-------------------------- */
const appliques = [
/* 恐竜 */
{ id: "trex", label: "ティラノサウルス", file: "trex.png", category: "dinosaur" },
/* 海の生き物（ここ修正したよ！） */
{ id: "tai", label: "タイ", file: "tai.png", category: "sea" },
{ id: "saba", label: "サバ", file: "saba.png", category: "sea" },
{ id: "maguro", label: "マグロ", file: "maguro.png", category: "sea" },
/* その他 */
{ id: "axolotl", label: "ウーパールーパー", file: "axolotl.png", category: "other" }
];
/* -------------------------
DOM要素
-------------------------- */
const bagPreview = document.getElementById("bagPreviewImage");
const appliPreview = document.getElementById("appliquePreviewImage");
const bagSelect = document.getElementById("bagColorSelect");
const appSelect = document.getElementById("appliqueSelect");
const bagLabel = document.getElementById("bagColorLabel");
const appLabel = document.getElementById("appliqueLabel");
const sizeSlider = document.getElementById("appliqueSizeRange");
const flipButton = document.getElementById("flipButton");
const categoryBtns = document.querySelectorAll(".category-btn");
/* -------------------------
初期ロード
-------------------------- */
function init() {
loadBagOptions();
loadAppliqueOptions("dinosaur");
applyBag();
applyApplique();
}
init();
/* -------------------------
バッグ選択
-------------------------- */
function loadBagOptions() {
bags.forEach(b => {
const op = document.createElement("option");
op.value = b.id;
op.textContent = b.label;
bagSelect.appendChild(op);
});
}
function applyBag() {
const bag = bags.find(b => b.id === bagSelect.value) || bags[0];
bagPreview.src = assets/bags/${bag.file};
bagLabel.textContent = bag.label;
}
/* -------------------------
カテゴリ切り替え
-------------------------- */
categoryBtns.forEach(btn => {
btn.addEventListener("click", () => {
categoryBtns.forEach(b => b.classList.remove("active"));
btn.classList.add("active");
const category = btn.dataset.category;
loadAppliqueOptions(category);
applyApplique();
});
});
function loadAppliqueOptions(category) {
appSelect.innerHTML = "";
appliques.filter(a => a.category === category).forEach(a => {
const op = document.createElement("option");
op.value = a.id;
op.textContent = a.label;
appSelect.appendChild(op);
});
}
/* -------------------------
アップリケ表示
-------------------------- */
function applyApplique() {
const ap = appliques.find(a => a.id === appSelect.value) || appliques[0];
appliPreview.src = assets/appliques/${ap.file};
appLabel.textContent = ap.label;
}
/* -------------------------
アップリケ拡大縮小
-------------------------- */
sizeSlider.addEventListener("input", () => {
const scale = sizeSlider.value;
appliPreview.style.width = ${scale * 45}%;
});
/* -------------------------
左右反転
-------------------------- */
flipButton.addEventListener("click", () => {
appliPreview.style.transform += " scaleX(-1)";
});
/* -------------------------
ドラッグ移動
-------------------------- */
let dragging = false;
appliPreview.addEventListener("pointerdown", e => {
dragging = true;
appliPreview.setPointerCapture(e.pointerId);
});
appliPreview.addEventListener("pointermove", e => {
if (!dragging) return;
appliPreview.style.left = ${e.offsetX}px;
appliPreview.style.top = ${e.offsetY}px;
});
appliPreview.addEventListener("pointerup", () => {
dragging = false;
});
/* -------------------------
モード切り替え
-------------------------- */
document.querySelectorAll("[data-mode]").forEach(btn => {
btn.addEventListener("click", () => {
const mode = btn.dataset.mode;
  document.querySelectorAll(".mode-tab").forEach(t => t.classList.remove("active"));
btn.classList.add("active");

document.getElementById("mode-custom").classList.toggle("hidden", mode !== "custom");
document.getElementById("mode-snapshot").classList.toggle("hidden", mode !== "snapshot");
});
});
