(function () {
  const originalClose = window.close;

  window.close = function () {
    try {
      originalClose.call(window);
    } catch (_) {
      // ignore
    }

    // Wenn es nicht geschlossen wurde (üblich), fallback:
    // 1) history back, wenn möglich
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    // 2) sonst auf Finger/Hand Startseite
    window.location.href = "/guide/finger_hand/";
  };
})();
