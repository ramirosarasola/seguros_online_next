const configApi = {
  apiUrl: process.env.NEXT_PUBLIC_BASE_URL, // Toma la URL de entorno o usa un valor por defecto
  sid: process.env.SID || "48@5b05a4bfe8c69", // Puedes cambiar este también a una variable de entorno si es necesario
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
