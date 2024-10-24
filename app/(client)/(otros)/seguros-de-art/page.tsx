import type { Metadata } from "next";
import { ARTQuoterForm } from "../../components/quoter-form/art-quoter-form.component";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import { quotesData } from "../../components/quotes-info/data";
import { PageWrapper } from "../../../../components/ui/page-wrapper";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://segurosonline.com.ar"),
  alternates: {
    canonical: "/seguros-de-art",
  },
  title:
    "Cotiza tu seguro de ART ahora | Mejoramos tu costo actual hasta un 40% | SegurosOnline",
  description:
    "Contratar seguro ART. Cotiza online tu seguros dfe ART enlas mejores Compañias. Mejoramos cualquier presupuesta. Cotiza Ya Mismo!",
  openGraph: {
    title:
      "Cotiza tu seguro de ART ahora | Mejoramos tu costo actual hasta un 40% | SegurosOnline",
    description:
      "Contratar seguro ART. Cotiza online tu seguros dfe ART enlas mejores Compañias. Mejoramos cualquier presupuesta. Cotiza Ya Mismo!",
    url: "https://segurosonline.com.ar/seguros-de-art",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://segurosonline.com.ar/contratar-seguro-art.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title:
      "Cotiza tu seguro de ART ahora | Mejoramos tu costo actual hasta un 40% | SegurosOnline",
    description:
      "Contratar seguro ART. Cotiza online tu seguros dfe ART enlas mejores Compañias. Mejoramos cualquier presupuesta. Cotiza Ya Mismo!",
    images: ["https://segurosonline.com.ar/contratar-seguro-art.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Seguro ART",
  name: "Cotiza tu seguro de ART ahora | SegurosOnline",
  description:
    "Contratar seguro ART. Cotiza online tu seguro de ART en las mejores Compañías. Mejoramos cualquier presupuesto. Cotiza ya mismo!",
  url: "https://segurosonline.com.ar/seguros-de-art",
  image: "https://segurosonline.com.ar/contratar-seguro-art.jpg",
  provider: {
    "@type": "Organization",
    name: "SegurosOnline",
    url: "https://segurosonline.com.ar",
    logo: "https://segurosonline.com.ar/logo.png", // Ajusta esta URL según sea necesario
  },
  areaServed: "AR",
  offers: {
    "@type": "Offer",
    url: "https://segurosonline.com.ar/seguros-de-art",
    priceCurrency: "ARS",
    price: "Consultá para conocer el mejor precio", // Considera usar un número específico
    itemOffered: {
      "@type": "Product",
      name: "Seguro ART",
    },
    availability: "https://schema.org/InStock", // Define la disponibilidad
    eligibleRegion: {
      "@type": "Place",
      name: "Argentina", // Asegúrate de que esto sea correcto
    },
  },
};

export default function ArtPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageWrapper>
        <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-art-img bg-light_primary">
          <ARTQuoterForm />
        </section>
        <QuoteInfo data={quotesData.art_data} quoteTitle="Seguros para Art" />
      </PageWrapper>
    </>
  );
}
