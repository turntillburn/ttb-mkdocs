(function () {
  const originalClose = window.close;

  window.close = function () {
    try {
      originalClose.call(window);
    } catch (_) {
      // ignore
    }

    // 1) Wenn möglich: zurück im Verlauf
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    // 2) Fallback: zur übergeordneten Guide-Seite
    if (window.location.pathname.includes("/guide/")) {
      window.location.href = "/guide/";
      return;
    }

    // 3) Ultimativer Fallback: Startseite
    window.location.href = "/";
  };
})();

// ------------------------------------------------------------------
// Always hide tooltip on interaction and on (instant) navigation
// ------------------------------------------------------------------
(function () {
  const hide = () => {
    try {
      if (typeof window.hideTooltip === "function") window.hideTooltip();
    } catch (_) {}
  };

  // 1) Interactions: pointerdown catches mouse + touch early
  document.addEventListener("pointerdown", hide, true);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hide();
  }, true);

  // 2) Navigation changes (MkDocs Material Instant Navigation etc.)
  // Hide when history state changes (pushState/replaceState/popstate)
  const _pushState = history.pushState;
  history.pushState = function () {
    hide();
    return _pushState.apply(this, arguments);
  };

  const _replaceState = history.replaceState;
  history.replaceState = function () {
    hide();
    return _replaceState.apply(this, arguments);
  };

  window.addEventListener("popstate", hide);
  window.addEventListener("hashchange", hide);

  // 3) If Material exposes document$ (common), hide after each page swap
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(hide);
  }
})();
