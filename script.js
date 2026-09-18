// intLoaF — menu overlay toggle

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("menuToggle");
  var overlay = document.getElementById("menuOverlay");

  if (!toggle || !overlay) return;

  function openMenu() {
    overlay.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    overlay.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    var isOpen = overlay.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggle.addEventListener("click", toggleMenu);

  // Close the menu after a link inside it is clicked
  overlay.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      closeMenu();
    }
  });
});