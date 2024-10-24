import type { Metadata } from "next";
import { HouseFormQuoter } from "../components/quoter-form/house-quoter-form.component";
import { QuoteInfo } from "../components/quotes-info/quote-info.component";
import { quotesData } from "../components/quotes-info/data";
import { PageWrapper } from "../../../components/ui/page-wrapper";
import Script from "next/script";

const data: any = quotesData.hogar_data;

export const metadata: Metadata = {
  metadataBase: new URL("https://segurosonline.com.ar"),
  alternates: {
    canonical: "https://segurosonline.com.ar/seguros-para-hogar",
  },
  title: "Seguros de Hogar | SegurosOnline | Seguros para la Casa",
  description:
    "Cotizá tu Seguro de Hogar al mejor precio. Protegé tu casa con las coberturas de incendio, robo, electrodomésticos y más. ¡Cotizá ahora!",
  openGraph: {
    title: "Seguros de Hogar | SegurosOnline | Seguros para la Casa",
    description:
      "Cotizá tu Seguro de Hogar al mejor precio. Protegé tu casa con las coberturas de incendio, robo, electrodomésticos y más. ¡Cotizá ahora!",
    url: "https://segurosonline.com.ar/seguros-para-hogar",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://segurosonline.com.ar/seguros-para-el-hogar.jpg",
        width: 1200, // Agregar ancho
        height: 630, // Agregar altura
        alt: "Seguros para el Hogar",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Seguros de Hogar | SegurosOnline | Seguros para la Casa",
    description:
      "Cotizá tu Seguro de Hogar al mejor precio. Protegé tu casa con las coberturas de incendio, robo, electrodomésticos y más. ¡Cotizá ahora!",
    images: ["https://segurosonline.com.ar/seguros-para-el-hogar.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seguro de Hogar",
  description:
    "Cotizá seguros de hogar al mejor precio. Protege tu casa con coberturas contra incendios, robos y más.",
  provider: {
    "@type": "Organization",
    name: "Seguros Online",
    url: "https://segurosonline.com.ar/",
    logo: "https://segurosonline.com.ar/seguros-online-op.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54 9 11 6994-5001",
      contactType: "sales",
      contactOption: "TollFree",
      areaServed: "AR",
      availableLanguage: "es",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Argentina",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "ARS",
    url: "https://segurosonline.com.ar/seguros-para-hogar",
    price: "Consultá por precios",
    eligibleRegion: "AR",
  },
};

export default function HogarPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageWrapper>
        <section className="px-4 md:px-16 flex flex-1 justify-end py-10 min-h-[calc(100vh-96px)] bg-hogar-img bg-light_primary">
          <HouseFormQuoter />
        </section>
        <QuoteInfo data={data} quoteTitle="Seguro para tu Casa" />
      </PageWrapper>
    </>
  );
}
