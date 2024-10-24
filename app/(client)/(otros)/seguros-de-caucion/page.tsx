import type { Metadata } from "next";
import { CaucionQuoterForm } from "../../components/quoter-form/caucion-quoter-form.component";
import Script from "next/script";
import { PageWrapper } from "../../../../components/ui/page-wrapper";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import { quotesData } from "../../components/quotes-info/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://segurosonline.com.ar"),
  alternates: {
    canonical: "/seguros-de-caucion",
  },
  title: "Seguros de Caución | SegurosOnline | Aseguradores de Cauciones",
  description:
    "Cotizar Seguros de Caución. Somos una compañía especializada en seguros de Caución con una trayectoria de más de 15 años.",
  openGraph: {
    title: "Seguros de Caño | SegurosOnline | Aseguradores de Cauciones",
    description:
      "Cotizar Seguros de Caño. Somos una práctica con una trayectoria de más de 15 años.",
    url: "https://segurosonline.com.ar/seguros-de-caucion",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://segurosonline.com.ar/contratar-seguro-caucion.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Seguros de Caño | SegurosOnline | Aseguradores de Cauciones",
    description:
      "Cotizar Seguros de Caño. Somos una práctica con una trayectoria de más de 15 años.",
    images: ["https://segurosonline.com.ar/contratar-seguro-caucion.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Seguro de Caución",
  name: "Seguros de Caución | SegurosOnline",
  description:
    "Cotizar Seguros de Caución. Somos una compañía especializada en seguros de Caución con una trayectoria de más de 15 años.",
  url: "https://segurosonline.com.ar/seguros-de-caucion",
  image: "https://segurosonline.com.ar/contratar-seguro-caucion.jpg",
  provider: {
    "@type": "Organization",
    name: "SegurosOnline",
    url: "https://segurosonline.com.ar",
    logo: "https://segurosonline.com.ar/logo.png", // Ajusta esta URL según sea necesario
  },
  areaServed: "AR",
  offers: {
    "@type": "Offer",
    url: "https://segurosonline.com.ar/seguros-de-caucion",
    priceCurrency: "ARS",
    price: "Consultá para conocer el mejor precio", // Considera usar un número específico
    itemOffered: {
      "@type": "Product",
      name: "Seguro de Caución",
    },
    availability: "https://schema.org/InStock", // Indica la disponibilidad del producto
    eligibleRegion: {
      "@type": "Place",
      name: "Argentina", // Asegúrate de que esto sea correcto
    },
  },
};

export default function CaucionPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageWrapper>
        <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-caucion-img bg-light_primary">
          <CaucionQuoterForm />
        </section>
        <QuoteInfo
          data={quotesData.caucion_data}
          quoteTitle="Seguros de Caucion"
        />
      </PageWrapper>
    </>
  );
}
