const configApi = {
  // apiUrl: 'https://segurosenlinea.com.ar:443', // -> PRODUCTION
  // sid: '48@5b05a4bfe8c69', // -> PRODUCTION

  apiUrl: "https://vps-3776803-x.dattaweb.com:8080", // -> DEVELOPMENT
  sid: "1483@65e0d911de58b", // -> DEVELOPMENT
};

export default configApi;

//! Clean wokan duplicate overlay
export const cleanupDuplicateFancyboxOverlay = () => {
  const duplicateOverlays = document.querySelectorAll(
    ".fancybox-overlay.fancybox-overlay-fixed"
  );

  if (duplicateOverlays.length > 1) {
    // Mantén el primer elemento y elimina los demás
    for (let i = 1; i < duplicateOverlays.length; i++) {
      duplicateOverlays[i]?.parentNode?.removeChild(duplicateOverlays[i]);
    }
  }
};
