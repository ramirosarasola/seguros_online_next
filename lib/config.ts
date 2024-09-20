const configApi = {
  apiUrl: process.env.NEXT_PUBLIC_BASE_URL, // Toma la URL de entorno o usa un valor por defecto
  sid: process.env.NEXT_PUBLIC_WOKAN_SID, // Puedes cambiar este también a una variable de entorno si es necesario
};

export default configApi;
