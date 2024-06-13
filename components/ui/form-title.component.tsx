export const FormTitle = ({
  title = "",
  subtitle = "",
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="space-y-1 mx-auto w-fit flex items-center flex-col">
      <h3 className="text-primary text-xl font-semibold leading-6 text-center">{title}</h3>
      <p className="text-gray-500 text-sm text-muted-foreground text-center">{subtitle}</p>
    </div>
  );
}