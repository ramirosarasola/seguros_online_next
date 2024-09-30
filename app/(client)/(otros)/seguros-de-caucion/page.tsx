import type { Metadata } from "next";
import { CaucionQuoterForm } from "../../components/quoter-form/caucion-quoter-form.component";
import Script from "next/script";
import { PageWrapper } from "../../../../components/ui/page-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://segurosonline.com.ar"),
  alternates: {
    canonical: "/seguros-de-caucion",
  },
  title: "Seguros de Caución | SegurosOnline | Aseguradores de Cauciones",
  description:
    "Cotizar Seguros de Caución. Somos una compañía especializada en seguros de Caución con una trayectoria de más de 15 años.",
  openGraph: {
    title: "Seguros de Caño | SegurosOnline | Aseguradores de Cauciones",
    description:
      "Cotizar Seguros de Caño. Somos una práctica con una trayectoria de más de 15 años.",
    url: "https://segurosonline.com.ar/seguros-de-caucion",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://segurosonline.com.ar/contratar-seguro-caucion.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Seguros de Caño | SegurosOnline | Aseguradores de Cauciones",
    description:
      "Cotizar Seguros de Caño. Somos una práctica con una trayectoria de más de 15 años.",
    images: ["https://segurosonline.com.ar/contratar-seguro-caucion.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export default function CaucionPage() {
  return (
    <>
      <Script
        id="schema-caucion"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Seguros Online",
            alternateName: "Cotizador de Seguros Online",
            url: "https://segurosonline.com.ar/seguros-de-caucion",
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
        <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-caucion-img bg-light_primary">
          <CaucionQuoterForm />
        </section>
      </PageWrapper>
    </>
  );
}
