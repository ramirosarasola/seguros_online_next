import { ComercioQuoterForm } from "../../components/quoter-form/comercio-quoter-form.component";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import { quotesData } from "../../components/quotes-info/data";
import { Metadata } from "next";
import Script from "next/script";
import { PageWrapper } from "../../../../components/ui/page-wrapper";

export const metadata: Metadata = {
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

export default function ComercioPage() {
  return (
    <>
      <Script
        id="schema-comercio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Seguros Online",
            alternateName: "Cotizador de Seguros Online",
            url: "https://segurosonline.com.ar/seguros-para-comercio",
            logo: "https://segurosonline.com.ar/cotizador-seguros-online.jpeg",
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
