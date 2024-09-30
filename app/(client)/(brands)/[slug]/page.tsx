import { PageWrapper } from "@/components/ui/page-wrapper";
import { getBrandData } from "@/services";
import parse from "html-react-parser"; // Importar el parser
import Image from "next/image";
import { SectionTitleComponent } from "@/components/ui/section-title.component";
import QuoteBrandsAside from "./components/quote-brands-button.component";
import dynamic from "next/dynamic"; // Importamos dinámicamente el componente de cliente
import { notFound } from "next/navigation";

// Cargar el componente de cliente solo en el lado del cliente
const CotizarBanner = dynamic(
  () => import("./components/cotizar-banner.component"),
  {
    ssr: false, // Esto asegura que el componente se cargue solo en el cliente
  }
);

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const brand = await getBrandData(params.slug, {
    next: { revalidate: revalidate },
  });

  // Si no hay datos de la marca, mostramos la página 404
  if (!brand) {
    return notFound();
  }

  return {
    metadataBase: new URL("https://segurosonline.com.ar"),
    alternates: {
      canonical: `/${params.slug}`,
    },
    title: `Seguro de auto ${brand?.title}`,
    description: `Cotiza tu vehiculo ${brand?.title} con 30% de descuento!`,
    robots: "index, follow",
    author: "Seguros Online",
    publisher: "Seguros Online",
    keywords: "seguros, online, cotizador, cotizacion, seguro, autos, vida",
    openGraph: {
      title: brand?.title,
      description: `Cotiza tu vehiculo ${brand?.title} con 30% de descuento!`,
      type: "website",
      siteName: "Seguros Online",
      url: `https://segurosonline.com.ar/${params.slug}`,
      images: [
        {
          url: brand?.image?.url,
        },
      ],
    },
  };
}

export const revalidate = 60; // Revalidate data every 60 second
export default async function BrandPage({
  params,
}: {
  params: { slug: string };
}) {
  // Aquí establecemos la opción de revalidación dentro de la llamada a getBrandData
  const brandData = await getBrandData(params.slug, {
    next: { revalidate: revalidate },
  });

  const brand = brandData;

  return (
    <PageWrapper>
      <section className="w-full h-[270px] bg-[#c3c3c3] flex items-center justify-center">
        <Image
          loading="lazy"
          src={brand?.image.url}
          alt={brand?.title}
          width={200}
          height={80}
          className="object-center h-auto w-auto object-cover rounded-t-lg md:rounded-lg"
        />
      </section>

      <section className="px-4 py-8 md:py-16 md:px-0 w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <SectionTitleComponent
          title={"Seguro de auto " + brand?.title}
          heading="h1"
        />

        <section className="w-full flex flex-col-reverse gap-16 md:flex-row md:px-16 lg:px-0">
          {/* Convertir el HTML a elementos React */}
          <div className="w-full flex flex-col gap-2 lg:px-0">
            {parse(brand?.content.html || "")}
          </div>

          <aside className="md:w-[500px] flex flex-col items-center justify-start gap-4">
            {/* <h2>Cotiza tu {brand?.title}</h2> */}
            <QuoteBrandsAside brand={brand?.title} />
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
