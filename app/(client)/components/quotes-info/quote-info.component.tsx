import { SectionTitleComponent } from "../../../../components/ui/section-title.component";

export type QuoteInfoProps = {
  data: {
    title: string;
    description: string;
  }[];
  quoteTitle: string;
};

export const QuoteInfo = ({ data, quoteTitle }: QuoteInfoProps) => {
  return (
    <section className="px-4 md:px-16 flex flex-1 justify-end py-10 w-full flex-col gap-4 items-center max-w-[1200px] mx-auto">
      <SectionTitleComponent title={quoteTitle} />
      {data.map((item, index) => (
        <article key={index} className="my-4 w-full">
          <h4 className="text-lg font-bold text-quaternary mb-2">
            {item.title}
          </h4>
          <p className="text-quaternary">{item.description}</p>
        </article>
      ))}
    </section>
  );
};
