type Props = {
  title: string;
  heading?: string;
};

export const SectionTitleComponent = ({ title, heading }: Props) => {
  return heading === "h1" ? (
    <h1 className="text-xl mb-10 min-w-[200px] w-fit md:text-[28px] bg-white shadow-lg text-primary font-bold mx-8 p-6 text-center">
      {title}
    </h1>
  ) : heading === "h2" ? (
    <h2 className="text-xl mb-10 min-w-[200px] w-fit md:text-[28px] bg-white shadow-lg text-primary font-bold mx-8 p-6 text-center">
      {title}
    </h2>
  ) : (
    <h2 className="text-xl mb-10 min-w-[200px] w-fit md:text-[28px] bg-white shadow-lg text-primary font-bold mx-8 p-6 text-center">
      {title}
    </h2>
  );
};
