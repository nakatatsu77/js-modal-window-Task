// モーダル、開くボタン、閉じるボタンの要素の取得
const modal = document.getElementById("modal");
const modalOpen = document.getElementById("modalOpen");
const modalClose = document.querySelector(".modalClose");

// イベントの付与
modalOpen.addEventListener("click", () => {
  // モーダルを開く
  modal.style.display = "block";
});

modalClose.addEventListener("click", () => {
  // モーダルを閉じる
  modal.style.display = "none";
});

// 外枠クリックでモーダルを閉じる
document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
