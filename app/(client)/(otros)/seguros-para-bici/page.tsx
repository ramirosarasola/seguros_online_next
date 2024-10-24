import { Metadata } from "next";
import { BiciFormQuoter } from "../../components/quoter-form/bici-quoter-form.component";
import { quotesData } from "../../components/quotes-info/data";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import Script from "next/script";
import { PageWrapper } from "../../../../components/ui/page-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://segurosonline.com.ar"),
  alternates: {
    canonical: "/seguros-para-bici",
  },
  title: "Seguros de Bicicleta | SegurosOnline | Protegé tu Bicicleta",
  description:
    "Conoce el seguros de bicicleta que tenemos para vos, podes asegurar bicicletas plegables, mountain bike, bicicletas playeras y bicicletas electricas.",
  openGraph: {
    title: "Seguros de Bicicleta | SegurosOnline | Protegé tu Bicicleta",
    description:
      "Conoce el seguros de bicicleta que tenemos para vos, podes asegurar bicicletas plegables, mountain bike, bicicletas playeras y bicicletas electricas.",
    url: "https://segurosonline.com.ar/seguros-para-bici",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://segurosonline.com.ar/seguro-bicicleta.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Seguros de Bicicleta | SegurosOnline | Protegé tu Bicicleta",
    description:
      "Conoce el seguros de bicicleta que tenemos para vos, podes asegurar bicicletas plegables, mountain bike, bicicletas playeras y bicicletas electricas.",
    images: ["https://segurosonline.com.ar/seguro-bicicleta.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Seguro de Bicicleta",
  name: "Seguros de Bicicleta | SegurosOnline",
  description:
    "Conoce el seguro de bicicleta que tenemos para vos, podes asegurar bicicletas plegables, mountain bike, bicicletas playeras y bicicletas eléctricas.",
  url: "https://segurosonline.com.ar/seguros-para-bici",
  image: "https://segurosonline.com.ar/seguro-bicicleta.jpg",
  provider: {
    "@type": "Organization",
    name: "SegurosOnline",
    url: "https://segurosonline.com.ar",
    logo: "https://segurosonline.com.ar/logo.png", // Ajusta esta URL según sea necesario
  },
  areaServed: "AR",
  offers: {
    "@type": "Offer",
    url: "https://segurosonline.com.ar/seguros-para-bici",
    priceCurrency: "ARS",
    price: "Consultá para conocer el mejor precio",
    itemOffered: {
      "@type": "Product",
      name: "Seguro de Bicicleta",
    },
  },
};

export default function BiciPage() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageWrapper>
        <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-bici-img bg-light_primary">
          <BiciFormQuoter />
        </section>
        <QuoteInfo
          data={quotesData.bici_data}
          quoteTitle="Seguros para Bicicleta"
        />
      </PageWrapper>
    </>
  );
}
