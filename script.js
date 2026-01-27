
// ファイルパス
const BAG_PATH = "assets/bags/";
const APP_PATH = "assets/appliques/";

const bagSelect = document.getElementById("bagSelect");
const appliqueSelect = document.getElementById("appliqueSelect");

const bagPreview = document.getElementById("bagPreview");
const appliquePreview = document.getElementById("appliquePreview");

const selectedBag = document.getElementById("selectedBag");
const selectedApplique = document.getElementById("selectedApplique");


// バッグ変更
bagSelect.addEventListener("change", () => {
    const file = bagSelect.value;

    if (file === "") {
        bagPreview.style.backgroundImage = "";
        selectedBag.textContent = "未選択";
        return;
    }

    bagPreview.style.backgroundImage = `url(${BAG_PATH}bag-${file}.png)`;
    selectedBag.textContent = file;
});


// アップリケ変更
appliqueSelect.addEventListener("change", () => {
    const file = appliqueSelect.value;

    if (file === "") {
        appliquePreview.src = "";
        selectedApplique.textContent = "未選択";
        return;
    }

    appliquePreview.src = `${APP_PATH}${file}.png`;
    selectedApplique.textContent = file;
});

