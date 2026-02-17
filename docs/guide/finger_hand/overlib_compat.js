window.STICKY = 1;
window.MOUSEOFF = 1;
window.WRAP = 1;
window.CELLPAD = 1;
window.OFFSETX = 1;
window.OFFSETY = 1;

(function () {
  const tip = document.createElement("div");
  tip.className = "ttb-hand-tooltip";
  tip.style.display = "none";
  document.body.appendChild(tip);

  let hideTimer = null;
  let lastMouse = { x: 0, y: 0 };

  function clearHide() {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function positionOnce(x, y) {
    // Tooltip steht ruhig: Position nur beim Anzeigen / Resize neu setzen
    const pad = 12;

    // kurz sichtbar machen, damit getBoundingClientRect() stimmt
    const prev = tip.style.display;
    tip.style.display = "block";
    const rect = tip.getBoundingClientRect();
    tip.style.display = prev;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const px = clamp(x + pad, 8, vw - rect.width - 8);
    const py = clamp(y + pad, 8, vh - rect.height - 8);

    tip.style.left = `${px}px`;
    tip.style.top = `${py}px`;
  }

  function hideNow() {
    clearHide();
    tip.style.display = "none";
  }

  function scheduleHide() {
    clearHide();
    hideTimer = setTimeout(() => {
      tip.style.display = "none";
    }, 300); // genug Zeit, um reinzufahren
  }

  // Mausposition tracken (nur für initiale Position beim overlib())
  document.addEventListener("mousemove", (e) => {
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
  });

  // Wenn man im Tooltip ist: nicht automatisch verstecken
  tip.addEventListener("mouseenter", () => clearHide());
  tip.addEventListener("mouseleave", () => scheduleHide());

  // ✅ Close-Button „Fenster zu“ zuverlässig machen:
  // Egal ob alter HTML onclick="nd()" / cClick() / href="javascript:..." etc.
  tip.addEventListener("click", (e) => {
    const el = e.target.closest("a, button, input");
    if (!el) return;

    const txt = (el.textContent || "").trim().toLowerCase();
    const href = (el.getAttribute("href") || "").toLowerCase();
    const onclick = (el.getAttribute("onclick") || "").toLowerCase();

    const isClose =
      txt.includes("fenster zu") ||
      txt === "schliessen" ||
      txt === "schließen" ||
      el.classList.contains("ttb-close") ||
      el.getAttribute("data-ttb-close") === "1" ||
      href.includes("javascript") ||
      onclick.includes("nd(") ||
      onclick.includes("cclick(");

    if (isClose) {
      e.preventDefault();
      e.stopPropagation();
      hideNow();
    }
  });

  // ESC schliesst auch
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideNow();
  });

  // overLIB API
  window.overlib = function (content /*, ...ignored */) {
    clearHide();
    tip.innerHTML = content;
    tip.style.display = "block";
    positionOnce(lastMouse.x, lastMouse.y);
    return true;
  };

  // nd() wird von onmouseout aufgerufen: nicht sofort, sondern mit Delay
  window.nd = function () {
    scheduleHide();
    return true;
  };

  // Optional: Klick ausserhalb schliesst
  document.addEventListener("click", (e) => {
    if (tip.style.display !== "block") return;
    if (e.target.closest(".ttb-hand-tooltip")) return;
    if (e.target.closest("area")) return;
    hideNow();
  });

  // Bei Resize Tooltip ggf. im Viewport halten
  window.addEventListener("resize", () => {
    if (tip.style.display === "block") positionOnce(lastMouse.x, lastMouse.y);
  });
})();
