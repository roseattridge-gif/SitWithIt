const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const year = document.querySelector("[data-year]");

const syncHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => header.classList.remove("menu-open"));
});

if (year) {
  year.textContent = new Date().getFullYear();
}
