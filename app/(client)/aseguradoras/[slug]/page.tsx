import { PageWrapper } from "@/components/ui/page-wrapper";
import { getCompanyData } from "@/services";
import parse from "html-react-parser"; // Importar el parser
import Image from "next/image";
import { SectionTitleComponent } from "@/components/ui/section-title.component";
import QuoteBrandsAside from "../../(brands)/[slug]/components/quote-brands-button.component";
import QuoteCompaniesAside from "./components/quote-companies-button.component";
import CotizarBanner from "../../(brands)/[slug]/components/cotizar-banner.component";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const company = await getCompanyData(params.slug, {
    next: { revalidate: revalidate },
  });

  return {
    metadataBase: new URL("https://segurosonline.com.ar"),
    alternates: {
      canonical: `/aseguradoras/${params.slug}`,
    },
    title: `Aseguradora ${company?.title} - SegurosOnline`,
    // description: `Cotiza tu vehiculo en ${company?.title} con 30% de descuento!`,
    description: `${
      company?.metaDescription ||
      `Cotiza tu vehiculo en ${company?.title} con 30% de descuento!`
    }`,
    robots: "index, follow",
    author: "Seguros Online",
    publisher: "Seguros Online",
    keywords: "seguros, online, cotizador, cotizacion, seguro, autos, vida",
    openGraph: {
      title: company?.title,
      description: `Cotiza tu vehiculo ${company?.title} con 30% de descuento!`,
      type: "website",
      siteName: "Seguros Online",
      url: `https://segurosonline.com.ar/aseguradoras/${params.slug}`,
      images: [
        {
          url: company?.image?.url,
        },
      ],
    },
  };
}

export const revalidate = 60; // Revalidate data every 1 second
export default async function CompanyPage({
  params,
}: {
  params: { slug: string };
}) {
  // Aquí establecemos la opción de revalidación dentro de la llamada a getBrandData
  const companyData = await getCompanyData(params.slug, {
    next: { revalidate: revalidate },
  });
  const company = companyData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: company?.title || "Seguros Online",
    url: `https://segurosonline.com.ar/aseguradoras/${params.slug}`,
    description:
      company?.metaDescription ||
      `Cotiza tu vehiculo en ${company?.title} con 30% de descuento!`,
    logo:
      company?.image?.url || "https://segurosonline.com.ar/default-logo.jpg",
    image:
      company?.image?.url || "https://segurosonline.com.ar/default-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires", // Ajusta según sea necesario
      addressCountry: "Argentina",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54 9 11 6994 5001",
      contactType: "customer service",
    },
    telephone: "+54 9 11 6994 5001",
    // sameAs: [
    //   "https://www.facebook.com/SegurosOnline",
    //   "https://twitter.com/SegurosOnline",
    // ],
  };

  return (
    <PageWrapper>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        id="aseguradoras"
        className="w-full h-[270px] bg-[#c3c3c3] flex items-center justify-center"
      >
        <Image
          loading="lazy"
          src={company?.image.url}
          alt={company?.title}
          width={200}
          height={80}
          className="object-center h-auto w-auto object-cover rounded-t-lg md:rounded-lg"
        />
      </section>

      <section className="px-4 py-8 md:py-16 md:px-0 w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <SectionTitleComponent title={company?.title} heading="h1" />

        <section className="w-full flex flex-col gap-16 md:flex-row">
          {/* Convertir el HTML a elementos React */}
          <div className="w-full flex flex-col gap-2 lg:px-0">
            {parse(company?.content.html || "")}
          </div>

          <aside className="md:w-[500px] flex flex-col items-center justify-start gap-4">
            <QuoteCompaniesAside />
          </aside>
        </section>
      </section>

      {/* Banner de cotización, se mostrará a los 3 segundos */}
      <CotizarBanner
        title="¡Cotiza tu auto con 30% de descuento!"
        buttonLabel="Cotizar Ahora!"
      />
    </PageWrapper>
  );
}
