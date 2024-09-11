import { PageWrapper } from "@/components/ui/page-wrapper";
import { getBrandData } from "@/services";
import { SectionTitleComponent } from "../../../components/ui/section-title.component";
import Image from "next/image";
import parse from "html-react-parser"; // Importar el parser

export default async function BrandPage({
  params,
}: {
  params: { slug: string };
}) {
  const brandData = await getBrandData(params.slug);
  const brand = brandData[0];

  return (
    <PageWrapper>
      <section className="px-16 w-full h-[200px] bg-[#5c5c5c] flex items-center justify-center">
        <Image
          src={brand?.image.url}
          alt={brand?.title}
          width={200}
          height={80}
          className="object-center h-auto w-auto object-cover shadow-lg rounded-t-lg md:rounded-lg"
        />
      </section>

      <section className="px-16 w-full flex flex-col items-center justify-center">
        <SectionTitleComponent title={brand?.title} />

        {/* Convertir el HTML a elementos React */}
        <div className="w-full flex flex-col gap-2">
          {parse(brand?.content.html || "")}
        </div>
      </section>
    </PageWrapper>
  );
}
