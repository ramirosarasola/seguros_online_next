import { PageWrapper } from "@/components/ui/page-wrapper";
import { getBrandData } from "@/services";
import { SectionTitleComponent } from "../../../components/ui/section-title.component";
import Image from "next/image";
import parse from "html-react-parser"; // Importar el parser

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
  const brand = brandData[0];

  return (
    <PageWrapper>
      <section className="px-16 w-full h-[270px] bg-[#c3c3c3] flex items-center justify-center">
        <Image
          loading="lazy"
          src={brand?.image.url}
          alt={brand?.title}
          width={200}
          height={80}
          className="object-center h-auto w-auto object-cover rounded-t-lg md:rounded-lg"
        />
      </section>

      <section className="px-16 w-full flex flex-col items-center justify-center">
        <SectionTitleComponent title={"Seguros de auto " + brand?.title} />

        {/* Convertir el HTML a elementos React */}
        <div className="w-full flex flex-col gap-2">
          {parse(brand?.content.html || "")}
        </div>
      </section>
    </PageWrapper>
  );
}
