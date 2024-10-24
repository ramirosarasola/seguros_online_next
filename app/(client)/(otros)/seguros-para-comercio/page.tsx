import { ComercioQuoterForm } from "../../components/quoter-form/comercio-quoter-form.component";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import { quotesData } from "../../components/quotes-info/data";
import { Metadata } from "next";
import Script from "next/script";
import { PageWrapper } from "../../../../components/ui/page-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://segurosonline.com.ar"),
  alternates: {
    canonical: "/seguros-para-comercio",
  },
  title: "Seguros Integral de Comercio | SegurosOnline | Seguros para Empresas",
  description:
    "Cotizar seguro Integral de Comercio. Especialmente pensados para las diferentes actividades. Conocé las coberturas exclusivas para proteger tu comercio.",
  openGraph: {
    title:
      "Seguros Integral de Comercio | SegurosOnline | Seguros para Empresas",
    description:
      "Cotizar seguro Integral de Comercio. Especialmente pensados para las diferentes actividades. Conocé las coberturas exclusivas para proteger tu comercio.",
    url: "https://segurosonline.com.ar/seguros-para-comercio",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://segurosonline.com.ar/contratar-seguro-comercio.jpg",
      },
    ],
  },
  twitter: {
    title:
      "Seguros Integral de Comercio | SegurosOnline | Seguros para Empresas",
    description:
      "Cotizar seguro Integral de Comercio. Especialmente pensados para las diferentes actividades. Conocé las coberturas exclusivas para proteger tu comercio.",
    images: ["https://segurosonline.com.ar/contratar-seguro-comercio.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Seguro Integral de Comercio",
  name: "Seguros Integral de Comercio | SegurosOnline",
  description:
    "Cotizar seguro Integral de Comercio. Especialmente pensados para las diferentes actividades. Conocé las coberturas exclusivas para proteger tu comercio.",
  url: "https://segurosonline.com.ar/seguros-para-comercio",
  image: "https://segurosonline.com.ar/contratar-seguro-comercio.jpg",
  provider: {
    "@type": "Organization",
    name: "SegurosOnline",
    url: "https://segurosonline.com.ar",
    logo: "https://segurosonline.com.ar/logo.png", // Ajusta esta URL según sea necesario
  },
  areaServed: "AR",
  offers: {
    "@type": "Offer",
    url: "https://segurosonline.com.ar/seguros-para-comercio",
    priceCurrency: "ARS",
    price: "Consultá para conocer el mejor precio",
    itemOffered: {
      "@type": "Product",
      name: "Seguro Integral de Comercio",
    },
  },
};

export default function ComercioPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageWrapper>
        <section className="px-4 md:px-16 flex justify-end flex-1 py-10 min-h-[calc(100vh-96px)] bg-comercio-img bg-light_primary">
          <ComercioQuoterForm />
        </section>
        <QuoteInfo
          data={quotesData.comercio_data}
          quoteTitle="Seguros para Comercio"
        />
      </PageWrapper>
    </>
  );
}
