import { Metadata } from "next";
import { AlquilerQuoterForm } from "../../components/quoter-form/alquiler-quoter-form.component";
import { quotesData } from "../../components/quotes-info/data";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import Script from "next/script";
import { PageWrapper } from "../../../../components/ui/page-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://segurosonline.com.ar"),
  alternates: {
    canonical: "/garantia-de-alquiler",
  },
  title: "Tu Garantía | SegurosOnline | Seguros de Caución de Alquileres",
  description:
    "Seguro de Caución para Alquilar. El respaldo que necesitás para mudarte. Contratá el Seguro de Caución fácil, rápido y al mejor Precio.",
  openGraph: {
    title: "Tu Garantía | SegurosOnline | Seguros de Caño de Alquileres",
    description:
      "Seguro de Caño para Alquilar. El respaldo que necesitás para mudarte. Contratá el Seguro de Caño más barato, más seguro y al mejor Precio.",
    url: "https://segurosonline.com.ar/garantia-de-alquiler",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://segurosonline.com.ar/seguro-de-caucion-para-alquileres.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Tu Garantía | SegurosOnline | Seguros de Caño de Alquileres",
    description:
      "Seguro de Caño para Alquilar. El respaldo que necesitás para mudarte. Contratá el Seguro de Caño más barato, más seguro y al mejor Precio.",
    images: [
      "https://segurosonline.com.ar/seguro-de-caucion-para-alquileres.jpg",
    ],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Seguro de Caución para Alquilar",
  name: "Tu Garantía | SegurosOnline | Seguros de Caución de Alquileres",
  description:
    "Seguro de Caución para Alquilar. El respaldo que necesitás para mudarte. Contratá el Seguro de Caución fácil, rápido y al mejor precio.",
  url: "https://segurosonline.com.ar/garantia-de-alquiler",
  image: "https://segurosonline.com.ar/seguro-de-caucion-para-alquileres.jpg",
  provider: {
    "@type": "Organization",
    name: "SegurosOnline",
    url: "https://segurosonline.com.ar",
    logo: "https://segurosonline.com.ar/logo.png", // Ajusta esta URL según sea necesario
  },
  areaServed: "AR",
  offers: {
    "@type": "Offer",
    url: "https://segurosonline.com.ar/garantia-de-alquiler",
    priceCurrency: "ARS",
    price: "Consultá para conocer el mejor precio", // Considera usar un número específico
    itemOffered: {
      "@type": "Product",
      name: "Seguro de Caución para Alquilar",
    },
    availability: "https://schema.org/InStock", // Define la disponibilidad
    eligibleRegion: {
      "@type": "Place",
      name: "Argentina", // Asegúrate de que esto sea correcto
    },
  },
};

export default function GarantiasPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageWrapper>
        <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-garantia-img bg-light_primary">
          <AlquilerQuoterForm />
        </section>
        <QuoteInfo
          data={quotesData.garantias_data}
          quoteTitle="Seguros para Garantias"
        />
      </PageWrapper>
    </>
  );
}
