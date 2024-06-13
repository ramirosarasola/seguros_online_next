import { BiciFormQuoter } from "../../components/quoter-form/bici-quoter-form.component";

export const metadata = {
  title: "Bici",
  description: "Bici",
};

export default function BiciPage() {
  return (
    <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-bici-img bg-light_primary">
      <BiciFormQuoter/>
    </section>
  );
}
