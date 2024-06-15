import { ComercioQuoterForm } from "../../components/quoter-form/comercio-quoter-form.component";
import { QuoteInfo } from '../../components/quotes-info/quote-info.component';
import { quotesData } from '../../components/quotes-info/data';


export default function ComercioPage() {
  return (
    <>
    <section className="px-4 md:px-16 flex justify-end flex-1 py-10 min-h-[calc(100vh-96px)] bg-comercio-img bg-light_primary">
      <ComercioQuoterForm />
      </section>
      <QuoteInfo data={quotesData.comercio_data} quoteTitle="Seguros para Comercio"/>
    </>
  );
}
