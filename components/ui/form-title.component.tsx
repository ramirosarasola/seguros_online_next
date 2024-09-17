export const FormTitle = ({
  title = "",
  subtitle = "",
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="space-y-1 mx-auto w-fit flex items-center flex-col">
      <span className="text-primary text-[1.5rem] font-semibold leading-6 text-center">
        {title}
      </span>
      <p className="text-main_text text-[1rem] text-muted-foreground text-center">
        {subtitle}
      </p>
    </div>
  );
};
