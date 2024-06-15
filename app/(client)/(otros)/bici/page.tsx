import { BiciFormQuoter } from "../../components/quoter-form/bici-quoter-form.component";
import { quotesData } from "../../components/quotes-info/data";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";

export const metadata = {
  title: "Bici",
  description: "Bici",
};

export default function BiciPage() {
  return (
    <>
      <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-bici-img bg-light_primary">
        <BiciFormQuoter />
      </section>
      <QuoteInfo data={quotesData.bici_data} quoteTitle="Seguros para Bicicleta" />
    </>
  );
}
