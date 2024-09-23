import { Metadata } from "next";
import { BiciFormQuoter } from "../../components/quoter-form/bici-quoter-form.component";
import { quotesData } from "../../components/quotes-info/data";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import Script from "next/script";
import { PageWrapper } from "../../../../components/ui/page-wrapper";

export const metadata: Metadata = {
  title: "Seguros de Bicicleta | SegurosOnline | Protegé tu Bicicleta",
  description:
    "Conoce el seguros de bicicleta que tenemos para vos, podes asegurar bicicletas plegables, mountain bike, bicicletas playeras y bicicletas electricas.",
  openGraph: {
    title: "Seguros de Bicicleta | SegurosOnline | Protegé tu Bicicleta",
    description:
      "Conoce el seguros de bicicleta que tenemos para vos, podes asegurar bicicletas plegables, mountain bike, bicicletas playeras y bicicletas electricas.",
    url: "https://www.segurosonline.com.ar/seguros-para-bici",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://www.segurosonline.com.ar/seguro-bicicleta.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Seguros de Bicicleta | SegurosOnline | Protegé tu Bicicleta",
    description:
      "Conoce el seguros de bicicleta que tenemos para vos, podes asegurar bicicletas plegables, mountain bike, bicicletas playeras y bicicletas electricas.",
    images: ["https://www.segurosonline.com.ar/seguro-bicicleta.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export default function BiciPage() {
  return (
    <>
      <Script
        id="schema-bici"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Seguros Online",
            alternateName: "Cotizador de Seguros Online",
            url: "https://www.segurosonline.com.ar/seguros-para-bici",
            logo: "https://www.segurosonline.com.ar/cotizador-seguros-online.jpeg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+54 9 11 6423-5002",
              contactType: "sales",
              contactOptions: "TollFree",
              areaServed: "AR",
              avaliableLanguage: "es",
            },
          }),
        }}
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
