import type { Metadata } from "next";
import { HouseFormQuoter } from "../components/quoter-form/house-quoter-form.component";
import { QuoteInfo } from "../components/quotes-info/quote-info.component";
import { quotesData } from "../components/quotes-info/data";

const data: any = quotesData.hogar_data;

export const metadata: Metadata = {
  title: "Seguros Para Hogar | SegurosOnline | Mejoramos cualquier Presupuesto",
  description:
    "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
};

export default function HogarPage() {
  return (
    <>
      <section className="px-4 md:px-16 flex flex-1 justify-end py-10 min-h-[calc(100vh-96px)] bg-hogar-img bg-light_primary">
        <HouseFormQuoter />
      </section>
      <QuoteInfo data={data} quoteTitle="Seguro para tu Casa" />
    </>
  );
}
