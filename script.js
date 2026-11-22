// ===== スマホのときの ☰ メニュー =====
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

// ☰ を押したら、メニューを開く（開いていたら閉じる）
navToggle.addEventListener("click", function () {
  const isOpen = siteNav.classList.toggle("open"); // toggle = 付いていなければ付ける、付いていれば外す
  navToggle.setAttribute("aria-expanded", String(isOpen)); // ☰ と × の形の切り替えにも使う
});

// メニューの中のリンクを押したら、メニューを閉じる（移動先が見えるように）
for (const link of siteNav.querySelectorAll("a")) {
  link.addEventListener("click", function () {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

// ===== 一番下の年を、今年の数字にする =====
document.getElementById("year").textContent = new Date().getFullYear();
