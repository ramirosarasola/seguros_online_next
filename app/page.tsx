import type { Metadata } from "next";
import CarQuoterForm from "./(client)/components/quoter-form/car-quoter-form.component";
import { NuestrosSeguros } from "./(client)/components/nuestros-seguros/nuestros-seguros.component";
import { MarcasDeAutos } from "./(client)/components/nuestros-aliados/marcas-autos.component";
import { InformationComponent } from "./(client)/components/information/information.component";
import { PageWrapper } from "../components/ui/page-wrapper";
import Script from "next/script";
import { Companias } from "./(client)/components/nuestros-aliados/marcas-companias.component";

export const metadata: Metadata = {
  metadataBase: new URL("https://segurosonline.com.ar"),
  alternates: {
    canonical: "/",
  },
  title: "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
  description:
    "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
  openGraph: {
    title:
      "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
    description:
      "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
    url: "https://segurosonline.com.ar",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://segurosonline.com.ar/logo-op.webp", // Ruta relativa desde 'public'
        width: 1200, // Agregar ancho
        height: 630, // Agregar altura
        alt: "Logo de SegurosOnline",
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
    images: ["https://segurosonline.com.ar/logo-op.webp"], // Ruta relativa desde 'public'
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
            url: "https://segurosonline.com.ar/",
            logo: "https://segurosonline.com.ar/seguros-online-op.png",
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
        <section className="px-4 md:px-16 flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-light_primary bg-home-img">
          <CarQuoterForm />
        </section>

        <section className="px-4 md:px-16 bg-tertiary">
          <NuestrosSeguros />
        </section>

        {/* Brands */}
        <section className="px-4 md:px-16 bg-tertiary md:py-8 h-fit pt-10">
          <MarcasDeAutos />
        </section>
        {/* <section className="px-4 md:px-16 bg-tertiary h-fit py-10 flex flex-col items-center justify-between">
        <FeedbackComponent/>
      </section> */}

        <section className="px-4 md:px-16 gradient-section-bg h-fit pb-10 flex flex-col items-center justify-between">
          <InformationComponent />
        </section>

        {/* Assurances Companies */}
        <section className="px-4 md:px-16 bg-white md:py-8 h-fit pt-10">
          <Companias />
        </section>
      </PageWrapper>
    </>
  );
}
