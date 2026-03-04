(function (global) {
  function normalizeRef(ref) {
    return ref.toLowerCase().replace(/\s+/g, "_");
  }

  /**
   * Captura el parámetro ?ref= de la URL y lo persiste.
   * - Guarda la versión normalizada en localStorage('cpii_ref')
   * - Guarda la versión raw en sessionStorage('cpii_ref')
   */
  function captureReferralFromUrl(options) {
    var settings = options || {};
    try {
      var params = new URLSearchParams(global.location.search);
      var ref = params.get("ref");
      if (!ref) return null;

      var normalized = normalizeRef(ref);

      try {
        global.localStorage.setItem("cpii_ref", normalized);
      } catch (e) { /* almacenamiento bloqueado */ }

      try {
        global.sessionStorage.setItem("cpii_ref", ref);
      } catch (e) { /* almacenamiento bloqueado */ }

      if (settings.log !== false && global.console && console.log) {
        console.log("[CPII] Referral captured:", ref, "→", normalized);
      }

      return { raw: ref, normalized: normalized };
    } catch (e) {
      return null;
    }
  }

  global.CPIITracking = global.CPIITracking || {};
  global.CPIITracking.captureReferralFromUrl = captureReferralFromUrl;
})(window);

