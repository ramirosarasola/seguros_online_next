export const SectionTitleComponent = ({ title }: { title: string }) => {
  return (
    <h2 className="text-xl mb-10 w-fit md:text-[28px] bg-white shadow-lg text-primary font-bold mx-8 p-6 text-center">
      {title}
    </h2>
  );
};
