import { AlquilerQuoterForm } from "../../components/quoter-form/alquiler-quoter-form.component";
import { quotesData } from "../../components/quotes-info/data";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";

export default function GarantiasPage() {
  return (
    <>
    <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-garantia-img bg-light_primary">
      <AlquilerQuoterForm />
      </section>
      <QuoteInfo data={quotesData.garantias_data} quoteTitle="Seguros para Garantias"/>
    </>
  )
}