import type { Metadata } from "next";
import CarQuoterForm from "./(client)/components/quoter-form/car-quoter-form.component";
import { NuestrosSeguros } from "./(client)/components/nuestros-seguros/nuestros-seguros.component";
import { NuestrosAliados } from "./(client)/components/nuestros-aliados/nuestros-aliados.component";
import { InformationComponent } from "./(client)/components/information/information.component";
import { PageWrapper } from "./(client)/contacto/components/page-wrapper";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
  description:
    "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
  openGraph: {
    title:
      "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
    description:
      "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
    url: "https://www.segurosonline.com.ar",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://www.segurosonline.com.ar/seguros-de-auto.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title:
      "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
    description:
      "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
    images: ["https://www.segurosonline.com.ar/seguros-de-auto.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="schema-org"
        // strategy=""
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Seguros Online",
            alternateName: "Cotizador de Seguros Online",
            url: "https://www.segurosonline.com.ar",
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
        <section className="px-4 md:px-16 flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-home-img bg-light_primary">
          <CarQuoterForm />
        </section>

        <section className="px-4 md:px-16 bg-tertiary">
          <NuestrosSeguros />
        </section>

        <section className="px-4 md:px-16 bg-tertiary h-fit pt-10">
          <NuestrosAliados />
        </section>

        {/* <section className="px-4 md:px-16 bg-tertiary h-fit py-10 flex flex-col items-center justify-between">
        <FeedbackComponent/>
      </section> */}

        <section className="px-4 md:px-16 bg-tertiary h-fit pb-10 flex flex-col items-center justify-between">
          <InformationComponent />
        </section>
      </PageWrapper>
    </>
  );
}
