import { Metadata } from "next";
import { AlquilerQuoterForm } from "../../components/quoter-form/alquiler-quoter-form.component";
import { quotesData } from "../../components/quotes-info/data";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import Script from "next/script";
import { PageWrapper } from "../../../../components/ui/page-wrapper";

export const metadata: Metadata = {
  title: "Tu Garantía | SegurosOnline | Seguros de Caución de Alquileres",
  description:
    "Seguro de Caución para Alquilar. El respaldo que necesitás para mudarte. Contratá el Seguro de Caución fácil, rápido y al mejor Precio.",
  openGraph: {
    title: "Tu Garantía | SegurosOnline | Seguros de Caño de Alquileres",
    description:
      "Seguro de Caño para Alquilar. El respaldo que necesitás para mudarte. Contratá el Seguro de Caño más barato, más seguro y al mejor Precio.",
    url: "https://www.segurosonline.com.ar/garantias-de-alquiler",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://www.segurosonline.com.ar/seguro-de-caucion-para-alquileres.jpg",
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
      "https://www.segurosonline.com.ar/seguro-de-caucion-para-alquileres.jpg",
    ],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export default function GarantiasPage() {
  return (
    <>
      <Script
        id="schema-garantias"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Seguros Online",
            alternateName: "Cotizador de Seguros Online",
            url: "https://www.segurosonline.com.ar/garantias-de-alquiler",
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
