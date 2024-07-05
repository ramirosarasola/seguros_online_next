import type { Metadata } from "next";
import { HouseFormQuoter } from "../components/quoter-form/house-quoter-form.component";
import { QuoteInfo } from "../components/quotes-info/quote-info.component";
import { quotesData } from "../components/quotes-info/data";
import { PageWrapper } from "../contacto/components/page-wrapper";
import Script from "next/script";

const data: any = quotesData.hogar_data;

export const metadata: Metadata = {
  title: "Seguros de Hogar | SegurosOnline | Seguros para la Casa",
  description:
    "Cotizá tu Seguro de Hogar al mejor precio. Protegé tu casa con las coberturas de incendio, robo, electrodomésticos y más. ¡Cotizá ahora!",
  openGraph: {
    title: "Seguros de Hogar | SegurosOnline | Seguros para la Casa",
    description:
      "Cotizá tu Seguro de Hogar al mejorprecio. Protegé tu casa con las coberturas de incendio, robo, electrodomésticos y más. ¡Cotizá ahora!",
    url: "https://www.segurosonline.com.ar/hogar",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://www.segurosonline.com.ar/seguros-para-el-hogar.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Seguros de Hogar | SegurosOnline | Seguros para la Casa",
    description:
      "Cotizá tu Seguro de Hogar al mejorprecio. Protegé tu casa con las coberturas de incendio, robo, electrodomésticos y más. ¡Cotizá ahora!",
    images: ["https://www.segurosonline.com.ar/seguros-para-el-hogar.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export default function HogarPage() {
  return (
    <>
      <Script
        id="schema-hogar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Seguros Online",
            alternateName: "Cotizador de Seguros Online",
            url: "https://www.segurosonline.com.ar/hogar",
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
        <section className="px-4 md:px-16 flex flex-1 justify-end py-10 min-h-[calc(100vh-96px)] bg-hogar-img bg-light_primary">
          <HouseFormQuoter />
        </section>
        <QuoteInfo data={data} quoteTitle="Seguro para tu Casa" />
      </PageWrapper>
    </>
  );
}
