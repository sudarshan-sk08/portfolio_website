document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".site-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
      var expanded = menu.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Project carousel controls
  document.querySelectorAll(".carousel-wrap").forEach(function (wrap) {
    var track = wrap.querySelector(".carousel-track");
    var prev = wrap.querySelector(".carousel-btn.prev");
    var next = wrap.querySelector(".carousel-btn.next");
    if (!track) return;
    function scrollAmount() {
      var card = track.querySelector(".carousel-card");
      return card ? card.offsetWidth + 22 : 300;
    }
    if (prev) prev.addEventListener("click", function () {
      track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    });
    if (next) next.addEventListener("click", function () {
      track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    });
  });

  // Simple lightbox: click any figure image with [data-lightbox] to enlarge
  var lightboxImgs = document.querySelectorAll("[data-lightbox]");
  if (lightboxImgs.length) {
    var overlay = document.createElement("div");
    overlay.setAttribute("id", "lightbox-overlay");
    overlay.style.cssText = [
      "position:fixed", "inset:0", "background:rgba(20,22,19,0.92)",
      "display:none", "align-items:center", "justify-content:center",
      "z-index:999", "padding:2rem", "cursor:zoom-out"
    ].join(";");
    var overlayImg = document.createElement("img");
    overlayImg.style.cssText = "max-width:100%;max-height:100%;border:2px solid #EEF0EA;";
    overlay.appendChild(overlayImg);
    overlay.addEventListener("click", function () { overlay.style.display = "none"; });
    document.body.appendChild(overlay);

    lightboxImgs.forEach(function (img) {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function () {
        overlayImg.src = img.src;
        overlayImg.alt = img.alt;
        overlay.style.display = "flex";
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") overlay.style.display = "none";
    });
  }
});
