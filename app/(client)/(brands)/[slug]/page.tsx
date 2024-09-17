import { PageWrapper } from "@/components/ui/page-wrapper";
import { getBrandData } from "@/services";
import parse from "html-react-parser"; // Importar el parser
import Image from "next/image";
import { SectionTitleComponent } from "@/components/ui/section-title.component";
import QuoteBrandsAside from "./components/quote-brands-button.component";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const brand = await getBrandData(params.slug, {
    next: { revalidate: revalidate },
  });

  return {
    title: `Seguros de auto ${brand?.title}`,
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
      url: `https://seguros-online-next.vercel.app/${params.slug}`,
      images: [
        {
          url: brand?.image?.url,
        },
      ],
    },
  };
}

export const revalidate = 60; // Revalidate data every 1 second
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
        <SectionTitleComponent title={"Seguros de auto " + brand?.title} />

        <section className="w-full flex flex-col-reverse gap-16 md:flex-row">
          {/* Convertir el HTML a elementos React */}
          <div className="w-full flex flex-col gap-2 md:px-16 lg:px-0">
            {parse(brand?.content.html || "")}
          </div>

          <aside className="w-[500px] flex flex-col items-center justify-start gap-4">
            {/* <h2>Cotiza tu {brand?.title}</h2> */}
            <QuoteBrandsAside brand={brand?.title} />
          </aside>
        </section>
      </section>
    </PageWrapper>
  );
}
