/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
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
      // Redirecciones dinámicas para 'tag y tag/[slug]'
      {
        source: '/blog/tag/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/tag/:slug*',
        destination: '/blog',
        permanent: true,
      },

      // Redirecciones dinámicas para 'category/noticias y category/noticias/[slug]'

      {
        source: '/blog/category/noticias',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/category/noticias/:slug*',
        destination: '/blog',
        permanent: true,
      },
      // seguros para hogar
      {
        source: '/blog/category/seguros-de-hogar',
        destination: '/seguros-para-hogar',
        permanent: true,
      },
      // seguros para bici
      {
        source: '/blog/category/seguros-de-bici',
        destination: '/seguros-para-bici',
        permanent: true,
      },
      // Redirecciones estáticas para rutas específicas
      {
        source: '/blog/seguros-baratos',
        destination: '/blog/seguro-coche-barato',
        permanent: true,
      },
      {
        source: '/blog/buscador-de-seguros',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/calculador-de-seguros',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/comparador-de-seguros-de-coche',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/images/pdf_afip.pdf',
        destination: '/',
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