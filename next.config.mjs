/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sa-east-1.graphassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirecciones dinámicas para 'tag' y 'category'
      {
        source: '/blog/tag/:slug*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/category/:slug*',
        destination: '/blog',
        permanent: true,
      },
      // Redirecciones estáticas para rutas específicas
      {
        source: '/blog/seguros-baratos',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/cotizar-seguro-auto',
        destination: '/cotizar-seguro-auto',
        permanent: true,
      },
      {
        source: '/blog/buscador-de-seguros',
        destination: '/buscador-de-seguros',
        permanent: true,
      },
      {
        source: '/blog/calculador-de-seguros',
        destination: '/calculador-de-seguros',
        permanent: true,
      },
      {
        source: '/blog/comparador-de-seguros-de-coche',
        destination: '/comparador-de-seguros-de-coche',
        permanent: true,
      },
      {
        source: '/blog/seguro-de-art-con-swiss-medical',
        destination: '/seguro-de-art-swiss-medical',
        permanent: true,
      },
      {
        source: '/images/pdf_afip.pdf',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/seguro-de-auto-neuquen-proteccion-completa-en-el-camino',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/seguro-contra-terceros-toda-la-informacion-del-seguro-obligatorio-vehicular',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/rio-uruguay',
        destination: '/aseguradoras/rio-uruguay',
        permanent: true,
      },
      {
        source: '/blog/conociendo-san-cristobal-seguros-una-opcion-confiable-en-segurosonline-com-ar',
        destination: '/blog/san-cristobal-seguros',
        permanent: true,
      },
      {
        source: '/blog/seguro-coche-barato',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/atm',
        destination: '/aseguradoras/atm',
        permanent: true,
      },
      {
        source: '/sancor',
        destination: '/aseguradoras/sancor',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/smg',
        destination: '/aseguradoras/smg',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;