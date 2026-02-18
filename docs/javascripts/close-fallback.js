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

