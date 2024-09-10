import { PageWrapper } from "@/components/ui/page-wrapper";
import { getBrandData } from "@/services";
import { SectionTitleComponent } from "../../../components/ui/section-title.component";
import Image from "next/image";

export default async function BrandPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);

  const brandData = await getBrandData(params.slug);

  console.log(brandData[0].content);

  const brand = brandData[0];

  return (
    <PageWrapper>
      <section className="w-full h-[200px] bg-[#5c5c5c] flex items-center justify-center">
        <Image
          src={brand?.image.url}
          alt={brand?.title}
          width={200}
          height={80}
          className="object-center h-auto w-auto object-cover shadow-lg rounded-t-lg md:rounded-lg"
        />
      </section>
      <SectionTitleComponent title={brand?.title} />
      {
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: brand?.content.html }}
        />
      }
    </PageWrapper>
  );
}
