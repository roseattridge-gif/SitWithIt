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

const enhancementStyles = document.createElement("link");
enhancementStyles.rel = "stylesheet";
enhancementStyles.href = "enhancements.css";
document.head.appendChild(enhancementStyles);

const heroActions = document.querySelector(".hero-actions");
if (heroActions && !heroActions.querySelector('[href="sample.html"]')) {
  const sampleLink = document.createElement("a");
  sampleLink.className = "button secondary";
  sampleLink.href = "sample.html";
  sampleLink.textContent = "Read five sample pages";
  heroActions.appendChild(sampleLink);
}

const insideHeading = document.querySelector("#inside .states-heading");
if (insideHeading) {
  const samplePanel = document.createElement("aside");
  samplePanel.className = "sample-panel";
  samplePanel.innerHTML = `
    <strong>Try the journal before it is published.</strong>
    <p>Read one grounding page and one prompt from each emotional entry point. You can also print them for private use.</p>
    <a href="sample.html">Open the sample pages</a>`;
  insideHeading.appendChild(samplePanel);
}

const giftCopy = document.querySelector("#gift .gift-copy");
if (giftCopy) {
  const facts = document.createElement("div");
  facts.className = "product-facts";
  facts.innerHTML = `
    <div><strong>Format</strong><span>Warm, tactile paperback journal</span></div>
    <div><strong>Structure</strong><span>Four emotional entry points; no fixed sequence</span></div>
    <div><strong>Inside</strong><span>Grounding cues, original prompts and writing space</span></div>
    <div><strong>For gifting</strong><span>Includes a dedication page</span></div>`;
  giftCopy.appendChild(facts);
}

const launchCopy = document.querySelector("#launch-list .launch-copy");
if (launchCopy) {
  const samplePanel = document.createElement("aside");
  samplePanel.className = "sample-panel";
  samplePanel.innerHTML = `
    <strong>Start with five pages now.</strong>
    <p>The list is for the publication journey. The sample is for the moment you are already in.</p>
    <a href="sample.html">Read the sample</a>`;
  launchCopy.appendChild(samplePanel);
}
